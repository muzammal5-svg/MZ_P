import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { Resend } from "resend"

// Simple in-memory rate limiting: Map of IP -> array of timestamps
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

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
          error: "Too many messages sent recently. Please wait a few minutes or reach out directly via WhatsApp." 
        },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { 
      name, 
      email, 
      phone, 
      company, 
      service, 
      budget, 
      timeline, 
      message,
      sourcePage = "Portfolio Website",
      honeypot // spam trap
    } = body

    // 2. Honeypot check (hidden field that bots fill in)
    if (honeypot && String(honeypot).trim() !== "") {
      console.warn("🛡️ Spam caught via honeypot:", { ip, honeypot, email })
      // Return simulated success so bots don't adapt
      return NextResponse.json({
        success: true,
        message: "Thanks, I'll get back to you within 24 hours."
      })
    }

    // 3. Server-side validation
    const trimmedName = typeof name === "string" ? name.trim() : ""
    const trimmedEmail = typeof email === "string" ? email.trim() : ""
    const trimmedMessage = typeof message === "string" ? message.trim() : ""

    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid full name (at least 2 characters)." },
        { status: 400 }
      )
    }

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    if (!trimmedMessage || trimmedMessage.length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a message or project description (at least 5 characters)." },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    const formattedDate = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "UTC"
    })

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER || "muzammalzaheer571@gmail.com"
    const isDev = process.env.NODE_ENV !== "production"
    const simulateDev = process.env.DEV_EMAIL_SIMULATE === "true" || 
                        Boolean(body.simulate) || 
                        req.headers.get("x-simulate-email") === "true"

    // 4. Log payload to console
    console.log("📨 --- New Contact Form Submission ---")
    console.log({
      name: trimmedName,
      email: trimmedEmail,
      phone: phone || "Not provided",
      company: company || "Not provided",
      service: service || "Not specified",
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
      sourcePage,
      message: trimmedMessage,
      timestamp,
      ip
    })

    // 5. If simulation flag is on, or no credentials exist in dev, return early
    const hasResend = Boolean(process.env.RESEND_API_KEY)
    const cleanPass = (process.env.EMAIL_PASS || "").replace(/\s+/g, "")
    const hasGmail = Boolean(
      process.env.EMAIL_USER && 
      cleanPass && 
      !cleanPass.includes("your-app-password") &&
      !process.env.EMAIL_USER.includes("your-email")
    )

    if (simulateDev || (isDev && !hasResend && !hasGmail)) {
      console.log("ℹ️ [DEV SIMULATION] Form submission logged to terminal. No live email sent.")
      return NextResponse.json({
        success: true,
        message: "Thank you for reaching out! I'll get back to you within 24 hours."
      })
    }

    // HTML Email template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f1f5f9; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
          .header { background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: #ffffff; padding: 32px 28px; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
          .header p { margin: 6px 0 0; opacity: 0.92; font-size: 14px; }
          .content { padding: 28px; }
          .field { margin-bottom: 18px; }
          .label { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
          .value { font-size: 15px; color: #0f172a; padding: 12px 14px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #10b981; }
          .message-box { white-space: pre-wrap; font-family: inherit; line-height: 1.7; }
          .meta { font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; margin-top: 24px; padding-top: 16px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Inquiry from ${trimmedName}</h1>
            <p>Source: ${sourcePage} &bull; ${formattedDate} UTC</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Client Name</div>
              <div class="value"><strong>${trimmedName}</strong></div>
            </div>
            <div class="field">
              <div class="label">📧 Client Email</div>
              <div class="value"><a href="mailto:${trimmedEmail}" style="color: #0d9488; text-decoration: none; font-weight: 600;">${trimmedEmail}</a></div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="label">📱 Phone / WhatsApp</div>
              <div class="value"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a></div>
            </div>
            ` : ""}
            ${company ? `
            <div class="field">
              <div class="label">🏢 Company / Brand</div>
              <div class="value">${company}</div>
            </div>
            ` : ""}
            <div class="field">
              <div class="label">💼 Service Needed</div>
              <div class="value">${service || "General Inquiry"}</div>
            </div>
            <div class="field">
              <div class="label">💰 Budget Range</div>
              <div class="value">${budget || "Not specified"}</div>
            </div>
            ${timeline ? `
            <div class="field">
              <div class="label">⏰ Timeline</div>
              <div class="value">${timeline}</div>
            </div>
            ` : ""}
            <div class="field">
              <div class="label">💬 Project Details / Message</div>
              <div class="value message-box">${trimmedMessage}</div>
            </div>
            <div class="meta">
              Sent via ${sourcePage} &bull; Timestamp: ${timestamp}
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    let sent = false

    // Method 1: Try Resend if configured
    if (hasResend) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>"
        
        const { error: resendError } = await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          replyTo: trimmedEmail,
          subject: `🚀 New ${service || "Project"} Inquiry: ${trimmedName}`,
          html: emailHtml,
        })

        if (resendError) {
          console.error("Resend delivery failed:", resendError)
        } else {
          sent = true
          console.log("✅ Message delivered via Resend to", toEmail)
        }
      } catch (err) {
        console.error("Resend exception:", err)
      }
    }

    // Method 2: Fall back to Nodemailer (Gmail SMTP) if Resend wasn't configured or failed
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
          subject: `🚀 New ${service || "Project"} Inquiry: ${trimmedName}`,
          html: emailHtml,
        })

        sent = true
        console.log("✅ Message delivered via Nodemailer to", toEmail)
      } catch (err) {
        console.error("Nodemailer SMTP delivery attempt failed:", err)
      }
    }

    if (!sent) {
      console.warn("⚠️ Live email delivery was not possible (missing/invalid credentials or SMTP block), but inquiry was successfully captured and logged.")
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! I'll get back to you within 24 hours."
    })
  } catch (error) {
    console.error("CONTACT API ERROR:", error)
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to process form submission. Please reach out via WhatsApp at +92 341 735 9571." 
      },
      { status: 500 }
    )
  }
}
