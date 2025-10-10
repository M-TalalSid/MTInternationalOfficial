import type { Metadata } from "next"
import Header from "../../components/header"
import Footer from "../../components/footer"
import ModernServicesGrid from "../../components/modern-services-grid"
import ServicesHero from "../../components/services-hero"
import ScrollAnimation from "../../components/scroll-animations"
import BackToTop from "../../components/back-to-top"

export const metadata: Metadata = {
  title: "Our Services - MT International | Software Development Solutions",
  description:
    "Explore our comprehensive range of software development services including custom development, mobile apps, cloud solutions, and more.",
  keywords: "software services, custom development, mobile apps, web development, cloud solutions, mt international official, mt international, software company Pakistan",
  openGraph: {
    title: "Our Services - MT International",
    description:
      "Explore MT International’s wide range of software development solutions for startups and enterprises.",
    url: "https://www.mtinternationalofficial.com/services",
    type: "website",
    images: [
      {
        url: "/android-chrome-1024x1024.png",
        width: 1024,
        height: 1024,
        alt: "Our Services - MT International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - MT International",
    description:
      "Explore MT International’s wide range of software development solutions for startups and enterprises.",
    images: ["/android-chrome-1024x1024.png"],
  },
  alternates: {
    canonical: "https://www.mtinternationalofficial.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">
      <Header />
      <main className="pt-20">
        <ScrollAnimation animation="fadeInUp">
          <ServicesHero />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={300}>
          <ModernServicesGrid />
        </ScrollAnimation>
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}
