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

    // Log the submission (you can see this in Vercel logs)
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

    // For now, just return success
    // The form data is logged in Vercel and you can check it there
    // Later you can set up email or integrate with a service like Formspree
    
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