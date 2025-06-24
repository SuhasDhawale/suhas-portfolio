import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables.")
  return NextResponse.json({ error: "Email service not configured." }, { status: 500 })
}

    const body = await request.json()
    const { name, email, phone, projectType, budget, timeline, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({ // ✅ fixed
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const emailContent = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Project Type: ${projectType || "Not specified"}
      Budget: ${budget || "Not specified"}
      Timeline: ${timeline || "Not specified"}
      
      Message:
      ${message}
      
      ---
      Sent from your portfolio website
    `

    // Send email to YOU
    await transporter.sendMail({
      from: `"Suhas Dhawale" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
            <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #64748b; font-size: 14px;">
            Sent from your portfolio website on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    })

    // Confirmation to USER
    await transporter.sendMail({
      from: `"Suhas Dhawale" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you within 24 hours.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out my <a href="https://github.com/SuhasDhawale" style="color: #2563eb;">GitHub</a></li>
            <li>Connect with me on <a href="https://www.linkedin.com/in/suhasdhawale" style="color: #2563eb;">LinkedIn</a></li>
            <li>Read my <a href="https://yourwebsite.com/blog" style="color: #2563eb;">blog posts</a></li>
          </ul>
          
          <p>Best regards,<br>Suhas Dhawale</p>
          
          <p style="color: #64748b; font-size: 14px;">
            This is an automated response. Please don't reply to this email.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 })
  }
}
