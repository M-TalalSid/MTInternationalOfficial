import type { Metadata } from "next"
import Header from "../../components/header"
import Footer from "../../components/footer"
import ModernContactForm from "../../components/modern-contact-form"
import ContactInfo from "../../components/contact-info"
import ContactHero from "../../components/contact-hero"
import BackToTop from "../../components/back-to-top"

export const metadata: Metadata = {
  title: "Contact Us - MT International | Get In Touch",
  description:
    "Contact MT International for your software development needs. Get a free consultation and quote for your project.",
  keywords: "contact mt international, software development consultation, get quote, contact form, mt international official, mt international",
  openGraph: {
    title: "Contact Us - MT International",
    description:
      "Get in touch with MT International for custom software development, consultations, and project quotes.",
    url: "https://www.mtinternationalofficial.com/contact",
    type: "website",
    images: [
      {
        url: "/android-chrome-1024x1024.png",
        width: 1024,
        height: 1024,
        alt: "Contact MT International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - MT International",
    description:
      "Get in touch with MT International for custom software development, consultations, and project quotes.",
    images: ["/android-chrome-1024x1024.png"],
  },
  alternates: {
    canonical: "https://www.mtinternationalofficial.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">
      <Header />
      <main className="pt-20">
        <ContactHero />
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <ModernContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}
