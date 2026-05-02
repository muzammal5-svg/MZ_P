import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, service, budget, timeline, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("EMAIL CONFIGURATION ERROR: EMAIL_USER or EMAIL_PASS not set")
      return NextResponse.json(
        { 
          success: false, 
          error: "Email service not configured. Please contact the administrator." 
        },
        { status: 500 }
      )
    }

    // Check if using placeholder password
    if (process.env.EMAIL_PASS === "your_gmail_app_password_here") {
      console.error("EMAIL CONFIGURATION ERROR: Please set a valid Gmail app password")
      return NextResponse.json(
        { 
          success: false, 
          error: "Email service not properly configured. Please set up Gmail app password." 
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify transporter configuration
    await transporter.verify()

    // Create detailed email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #1e293b; margin-bottom: 20px; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
            🚀 New Project Inquiry from Portfolio
          </h2>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">${phone}</td>
              </tr>
              ` : ''}
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Company:</td>
                <td style="padding: 8px 0; color: #1f2937;">${company}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          ${service || budget || timeline ? `
          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Project Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${service ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 120px;">Service:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                    ${service}
                  </span>
                </td>
              </tr>
              ` : ''}
              ${budget ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Budget:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <span style="background-color: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                    ${budget}
                  </span>
                </td>
              </tr>
              ` : ''}
              ${timeline ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Timeline:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <span style="background-color: #fef3c7; color: #92400e; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                    ${timeline}
                  </span>
                </td>
              </tr>
              ` : ''}
            </table>
          </div>
          ` : ''}

          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Project Description</h3>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              📧 Sent from Muzammal's Portfolio Contact Form<br>
              🕒 ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "muzammalzaheer571@gmail.com",
      subject: `🚀 New ${service || 'Project'} Inquiry from ${name}`,
      html: emailContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("EMAIL ERROR 👉", error)
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        return NextResponse.json(
          { 
            success: false, 
            error: "Email authentication failed. Please check your Gmail app password." 
          },
          { status: 500 }
        )
      }
    }
    
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}