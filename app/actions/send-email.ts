"use client"

import emailjs from "@emailjs/browser"

interface EmailData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  budget: string
  timeline: string
  message: string
}

export async function sendContactEmail(data: EmailData) {
  try {
    // Initialize EmailJS with server-side key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company,
      phone: data.phone,
      service: data.service,
      budget: data.budget,
      timeline: data.timeline,
      message: data.message,
      to_name: "MT International Team",
    }

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    )

    if (result.status === 200) {
      return { success: true }
    } else {
      return { success: false, error: "Failed to send email" }
    }
  } catch (error) {
    console.error("EmailJS Error:", error)
    return { success: false, error: "Failed to send message. Please try again." }
  }
}
