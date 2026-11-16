import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { Resend } from "resend"
import { siteConfig } from "@/lib/site-config"

// In-memory rate limiting: Map of IP -> array of request timestamps
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS)

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, recent)
    return true
  }

  recent.push(now)
  rateLimitMap.set(ip, recent)
  return false
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function verifyTurnstileToken(token: string, remoteIp?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    // If secret key is not configured, Turnstile is disabled
    return true
  }

  try {
    const formData = new FormData()
    formData.append("secret", secret)
    formData.append("response", token)
    if (remoteIp) formData.append("remoteip", remoteIp)

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    })
    const data = await res.json()
    return Boolean(data.success)
  } catch (err) {
    console.error("Turnstile verification error:", err)
    // Fail open or fail closed based on env; if service unreachable, allow or log
    return false
  }
}

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
               req.headers.get("x-real-ip") || 
               "127.0.0.1"

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Too many messages sent recently. Please wait a few minutes or reach out directly on WhatsApp.",
          fallback: {
            whatsappUrl: siteConfig.whatsappUrl,
            email: siteConfig.email,
          }
        },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { 
      name, 
      email, 
      phone, 
      service, 
      budget, 
      timeline, 
      description,
      message, // backwards compatibility
      projectLink,
      consent,
      sourcePage = "Portfolio Website",
      honeypot,
      turnstileToken,
    } = body

    // 2. Honeypot check (hidden spam field)
    if (honeypot && String(honeypot).trim() !== "") {
      console.warn("🛡️ Spam caught via honeypot:", { ip, honeypot, email })
      return NextResponse.json({
        success: true,
        message: "Thank you for reaching out! I'll get back to you within 24 hours.",
      })
    }

    // 3. Optional Cloudflare Turnstile Verification
    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken) {
        return NextResponse.json(
          { 
            success: false, 
            error: "Security verification failed. Please refresh the page and try again.",
          },
          { status: 400 }
        )
      }
      const isHuman = await verifyTurnstileToken(turnstileToken, ip)
      if (!isHuman) {
        return NextResponse.json(
          { 
            success: false, 
            error: "Security check failed. Please reach out to me directly on WhatsApp.",
            fallback: {
              whatsappUrl: siteConfig.whatsappUrl,
              email: siteConfig.email,
            }
          },
          { status: 403 }
        )
      }
    }

    // 4. Server-Side Validation
    const trimmedName = typeof name === "string" ? name.trim() : ""
    const trimmedEmail = typeof email === "string" ? email.trim() : ""
    const projectDescription = typeof description === "string" ? description.trim() : (typeof message === "string" ? message.trim() : "")

    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      )
    }

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    if (!projectDescription || projectDescription.length < 5) {
      return NextResponse.json(
        { success: false, error: "Please describe your project or requirements (at least 5 characters)." },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    const formattedDate = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "UTC",
    })

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER || siteConfig.email
    const isDev = process.env.NODE_ENV !== "production"
    const simulateDev = process.env.DEV_EMAIL_SIMULATE === "true" || 
                        Boolean(body.simulate) || 
                        req.headers.get("x-simulate-email") === "true"

    console.log("📨 --- New Contact Form Submission ---")
    console.log({
      name: trimmedName,
      email: trimmedEmail,
      phone: phone || "Not provided",
      service: service || "General Inquiry",
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
      projectLink: projectLink || "None",
      sourcePage,
      description: projectDescription,
      timestamp,
      ip,
    })

    // If simulation flag is explicitly enabled, return simulated success
    if (simulateDev) {
      console.log("ℹ️ [SIMULATION MODE] Submission logged to console. Returning simulated success.")
      return NextResponse.json({
        success: true,
        message: "Thank you for reaching out! I'll get back to you within 24 hours.",
      })
    }

    const hasResend = Boolean(process.env.RESEND_API_KEY)
    const cleanPass = (process.env.EMAIL_PASS || "").replace(/\s+/g, "")
    const hasGmail = Boolean(
      process.env.EMAIL_USER && 
      cleanPass && 
      !cleanPass.includes("your-app-password") &&
      !process.env.EMAIL_USER.includes("your-email")
    )

    // IMPORTANT: If no email provider is configured, do NOT show false success!
    if (!hasResend && !hasGmail) {
      console.warn("⚠️ No live email provider configured (missing RESEND_API_KEY and Gmail SMTP).")
      return NextResponse.json(
        {
          success: false,
          error: "Email notifications are currently not configured on this environment. Please message me directly on WhatsApp or email for a guaranteed instant response.",
          fallback: {
            whatsappUrl: siteConfig.whatsappUrl,
            email: siteConfig.email,
          },
        },
        { status: 503 }
      )
    }

    // Email notification subject with service name
    const emailSubject = `🚀 [${service || "Project"}] Inquiry from ${trimmedName}`

    // HTML Email template for owner notification
    const ownerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f1f5f9; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: #ffffff; padding: 28px; }
          .header h1 { margin: 0; font-size: 22px; }
          .content { padding: 28px; }
          .field { margin-bottom: 16px; }
          .label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
          .value { font-size: 14px; color: #0f172a; padding: 10px 14px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #10b981; }
          .box { white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Client Inquiry</h1>
            <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">${formattedDate} UTC &bull; ${sourcePage}</p>
          </div>
          <div class="content">
            <div class="field"><div class="label">Client Name</div><div class="value"><strong>${trimmedName}</strong></div></div>
            <div class="field"><div class="label">Email Address</div><div class="value"><a href="mailto:${trimmedEmail}">${trimmedEmail}</a></div></div>
            ${phone ? `<div class="field"><div class="label">Phone / WhatsApp</div><div class="value">${phone}</div></div>` : ""}
            <div class="field"><div class="label">Service Needed</div><div class="value"><strong>${service || "General"}</strong></div></div>
            <div class="field"><div class="label">Budget Range</div><div class="value">${budget || "Not specified"}</div></div>
            <div class="field"><div class="label">Expected Timeline</div><div class="value">${timeline || "Not specified"}</div></div>
            ${projectLink ? `<div class="field"><div class="label">Reference URL</div><div class="value"><a href="${projectLink}">${projectLink}</a></div></div>` : ""}
            <div class="field"><div class="label">Project Description</div><div class="value box">${projectDescription}</div></div>
          </div>
        </div>
      </body>
      </html>
    `

    // Auto-reply confirmation email to client
    const clientAutoReplyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 24px; }
          .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 32px; }
          .btn { display: inline-block; padding: 12px 24px; background: #10b981; color: #ffffff; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 14px; margin-top: 16px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2 style="color: #0f172a; margin-top: 0;">Thanks for reaching out, ${trimmedName}!</h2>
          <p style="color: #475569; font-size: 15px;">
            I have received your inquiry regarding <strong>${service || "your project"}</strong>. I am reviewing your requirements and will reply with a detailed estimate within 24 hours.
          </p>
          <p style="color: #475569; font-size: 14px;">
            If your project is time-sensitive or you prefer a quick voice/text chat, feel free to message me directly on WhatsApp:
          </p>
          <a href="${siteConfig.whatsappUrl}" class="btn" style="color: #ffffff;">Chat with Muzammal on WhatsApp</a>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">
            Muzammal Zaheer &bull; Full-Stack Web Developer &bull; <a href="${siteConfig.siteUrl}" style="color: #10b981;">muzammalzaheer.vercel.app</a>
          </p>
        </div>
      </body>
      </html>
    `

    let sent = false

    // Delivery Option 1: Resend
    if (hasResend) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const fromEmail = process.env.CONTACT_FROM_EMAIL || "Muzammal Zaheer <onboarding@resend.dev>"

        const { error: resendError } = await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          replyTo: trimmedEmail,
          subject: emailSubject,
          html: ownerEmailHtml,
        })

        if (resendError) {
          console.error("Resend owner notification failed:", resendError)
        } else {
          sent = true
          console.log("✅ Delivered inquiry via Resend to", toEmail)

          // Auto-reply confirmation to client
          try {
            await resend.emails.send({
              from: fromEmail,
              to: [trimmedEmail],
              subject: `Inquiry Received: ${service || "Project"} — Muzammal Zaheer`,
              html: clientAutoReplyHtml,
            })
            console.log("✅ Auto-reply sent to client", trimmedEmail)
          } catch (autoErr) {
            console.warn("Client auto-reply failed (non-critical):", autoErr)
          }
        }
      } catch (err) {
        console.error("Resend exception:", err)
      }
    }

    // Delivery Option 2: Nodemailer (Gmail SMTP fallback)
    if (!sent && hasGmail) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: cleanPass,
          },
        })

        await transporter.sendMail({
          from: `"${trimmedName}" <${process.env.EMAIL_USER}>`,
          to: toEmail,
          replyTo: trimmedEmail,
          subject: emailSubject,
          html: ownerEmailHtml,
        })

        sent = true
        console.log("✅ Delivered inquiry via Nodemailer to", toEmail)

        // Auto-reply confirmation to client
        try {
          await transporter.sendMail({
            from: `"Muzammal Zaheer" <${process.env.EMAIL_USER}>`,
            to: trimmedEmail,
            subject: `Inquiry Received: ${service || "Project"} — Muzammal Zaheer`,
            html: clientAutoReplyHtml,
          })
          console.log("✅ Auto-reply sent to client via Nodemailer", trimmedEmail)
        } catch (autoErr) {
          console.warn("Client auto-reply failed (non-critical):", autoErr)
        }
      } catch (err) {
        console.error("Nodemailer delivery failed:", err)
      }
    }

    // If both failed: do NOT show false success
    if (!sent) {
      return NextResponse.json(
        {
          success: false,
          error: "Delivery failed due to a mail server connection error. Please contact me directly via WhatsApp or email.",
          fallback: {
            whatsappUrl: siteConfig.whatsappUrl,
            email: siteConfig.email,
          },
        },
        { status: 503 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! I have received your inquiry and will get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact API fatal error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your message. Please reach out via WhatsApp.",
        fallback: {
          whatsappUrl: siteConfig.whatsappUrl,
          email: siteConfig.email,
        },
      },
      { status: 500 }
    )
  }
}
