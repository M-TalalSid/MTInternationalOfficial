import type { Metadata } from "next"
import Header from "../../components/header"
import Footer from "../../components/footer"
import AboutHero from "../../components/about-hero"
import TeamSection from "../../components/team-section"
import CompanyValues from "../../components/company-values"
import { InteractiveStatsGrid } from "../../components/interactive-charts"
import ScrollAnimation from "../../components/scroll-animations"
import BackToTop from "../../components/back-to-top"

export const metadata: Metadata = {
  title: "About Us - MT International | Our Story & Team",
  description:
    "Learn about MT International, our mission, values, and the expert team behind our innovative software solutions.",
  keywords: "about mt international, software company, development team, company values, mission, mt international official, mt international, software company Pakistan",
  openGraph: {
    title: "About Us - MT International",
    description: "Discover MT International’s story, mission, and the expert team driving our success.",
    url: "https://www.mtinternationalofficial.com/about",
    type: "website",
    images: [
      {
        url: "/favicon.webp",
        width: 1200,
        height: 630,
        alt: "About MT International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - MT International",
    description: "Discover MT International’s story, mission, and the expert team driving our success.",
    images: ["/favicon.webp"],
  },
  alternates: {
    canonical: "https://www.mtinternationalofficial.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">
      <Header />
      <main className="">
        <ScrollAnimation animation="fadeInUp">
          <AboutHero />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInLeft" delay={200}>
          <div className="container mx-auto px-4 py-16">
            <InteractiveStatsGrid />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInRight" delay={400}>
          <CompanyValues />
        </ScrollAnimation>
        <ScrollAnimation animation="scaleIn" delay={600}>
          <div className="container mx-auto px-4 py-16"></div>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={800}>
          <TeamSection />
        </ScrollAnimation>
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}
