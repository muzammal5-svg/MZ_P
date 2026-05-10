import { NextResponse } from "next/server"

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

    // Send email using Resend API
    try {
      const resendApiKey = process.env.RESEND_API_KEY
      
      if (resendApiKey && resendApiKey !== 'your_resend_api_key_here') {
        // Parse service and budget from message if they're embedded (home page form)
        let parsedService = service
        let parsedBudget = budget
        let cleanMessage = message

        // Check if message contains "Service:" and "Budget:" (home page form format)
        if (message.includes('Service:') && message.includes('Budget:')) {
          const lines = message.split('\n')
          parsedService = lines[0]?.replace('Service:', '').trim() || service
          parsedBudget = lines[1]?.replace('Budget:', '').trim() || budget
          cleanMessage = lines.slice(3).join('\n').trim() || message
        }

        // Create email HTML
        const emailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #374151; margin-bottom: 5px; }
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
                
                ${parsedService ? `
                <div class="field">
                  <div class="label">💼 Service:</div>
                  <div class="value">${parsedService}</div>
                </div>
                ` : ''}
                
                ${parsedBudget ? `
                <div class="field">
                  <div class="label">💰 Budget:</div>
                  <div class="value">${parsedBudget}</div>
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
                  <div class="value" style="white-space: pre-wrap;">${cleanMessage}</div>
                </div>
                
                <div class="footer">
                  <p>📅 Received: ${new Date().toLocaleString('en-US', { 
                    dateStyle: 'full', 
                    timeStyle: 'short' 
                  })}</p>
                  <p style="margin-top: 10px;">
                    <a href="mailto:${email}" style="background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reply to ${name}</a>
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `

        // Send email via Resend
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['muzammalzaheer571@gmail.com'],
            subject: `🚀 New ${parsedService || 'Project'} Inquiry from ${name}`,
            html: emailHtml,
            reply_to: email,
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          console.error('Resend API Error:', data)
          // Don't fail the request, just log the error
        } else {
          console.log('✅ Email sent successfully via Resend:', data.id)
        }
      } else {
        console.log('⚠️ Resend API key not configured. Email not sent.')
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ 
      success: true,
      message: "Thank you for your message! I'll get back to you soon."
    })
    
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error)
    
    return NextResponse.json(
      { success: false, error: "Failed to submit form. Please try again later." },
      { status: 500 }
    )
  }
}