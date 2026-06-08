import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, company, service, budget, timeline, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Log the submission
    console.log("📧 New Contact Form Submission:")
    console.log({
      name,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      message,
      timestamp: new Date().toISOString()
    })

    // Send email using Gmail
    try {
      const emailUser = process.env.EMAIL_USER
      const emailPass = process.env.EMAIL_PASS
      
      if (emailUser && emailPass) {
        // Create transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        })

        // Create email HTML
        const emailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Poppins', Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #374151; margin-bottom: 5px; font-size: 14px; }
              .value { color: #1f2937; padding: 10px; background: white; border-radius: 5px; border-left: 3px solid #10b981; }
              .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🚀 New Project Inquiry</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">From Your Portfolio Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></div>
                </div>
                
                ${phone ? `
                <div class="field">
                  <div class="label">📱 Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                ` : ''}
                
                ${company ? `
                <div class="field">
                  <div class="label">🏢 Company:</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                
                ${service ? `
                <div class="field">
                  <div class="label">💼 Service:</div>
                  <div class="value">${service}</div>
                </div>
                ` : ''}
                
                ${budget ? `
                <div class="field">
                  <div class="label">💰 Budget:</div>
                  <div class="value">${budget}</div>
                </div>
                ` : ''}
                
                ${timeline ? `
                <div class="field">
                  <div class="label">⏰ Timeline:</div>
                  <div class="value">${timeline}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
                
                <div class="footer">
                  <p>📅 Received: ${new Date().toLocaleString('en-US', { 
                    dateStyle: 'full', 
                    timeStyle: 'short' 
                  })}</p>
                  <p style="margin-top: 10px;">
                    <strong>Client Email:</strong> ${email}
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `

        // Send email
        await transporter.sendMail({
          from: emailUser,
          to: emailUser,
          subject: `🚀 New ${service || 'Project'} Inquiry from ${name}`,
          html: emailHtml,
          replyTo: email,
        })

        console.log('✅ Email sent successfully to', emailUser)

        // Optionally send confirmation to user
        try {
          await transporter.sendMail({
            from: emailUser,
            to: email,
            subject: '✅ We Received Your Inquiry',
            html: `
              <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #10b981;">Thank you, ${name}!</h2>
                <p style="color: #64748b; line-height: 1.6;">
                  I've received your inquiry and will review it shortly. I typically respond to all inquiries within 2-4 hours during business hours.
                </p>
                <p style="color: #64748b; line-height: 1.6;">
                  If you need an urgent response, feel free to reach out via WhatsApp at <strong>+92 341 735 9571</strong>
                </p>
                <p style="color: #64748b;">Best regards,<br><strong>Muzammal</strong></p>
              </div>
            `,
          })
          console.log('✅ Confirmation email sent to', email)
        } catch (confirmError) {
          console.log('⚠️ Could not send confirmation email, but main email was sent')
        }
      } else {
        console.log('⚠️ Email credentials not configured')
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ 
      success: true,
      message: "Thank you for your message! I'll get back to you within 24 hours."
    })
    
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error)
    
    return NextResponse.json(
      { success: false, error: "Failed to submit form. Please try again later." },
      { status: 500 }
    )
  }
}