import type { Metadata } from "next"
import Header from "../components/header"
import HeroSection from "../components/hero-section"
import StatsSection from "../components/stats-section"
import ServicesPreview from "../components/services-preview"
import TestimonialsSection from "../components/testimonials-section"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "MT International - Premium Software Solutions | Development & Innovation",
  description:
    "Transform your business with cutting-edge custom software development, web applications, and digital solutions crafted by expert developers.",
  keywords: "software development, web development, mobile apps, custom software, digital solutions",
  openGraph: {
    title: "MT International - Premium Software Solutions",
    description: "Transform your business with cutting-edge custom software development",
    type: "website",
    url: "https://mtinternationalofficial.com/",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesPreview />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
