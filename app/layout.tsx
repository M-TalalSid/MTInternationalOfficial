import type * as React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "../components/ui/toaster"
import PageTransitions from "../components/page-transitions"
import { ThemeProvider } from "../components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

// ✅ Define once, use everywhere
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mtinternationalofficial.com"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "MT International - Premium Software Solutions | Development & Innovation",
  description:
    "Transform your business with cutting-edge custom software development, web applications, and digital solutions crafted by expert developers. Expert team delivering enterprise-grade software solutions.",
  keywords:
    "software development, web development, mobile apps, custom software, digital solutions, IT consulting, enterprise software, tech innovation, software engineering, digital transformation, MT International, MT International Official, mtinternationalofficial, mt international official, software company Pakistan",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "MT International - Premium Software Solutions | Development & Innovation",
    description:
      "Transform your business with cutting-edge custom software development, web applications, and digital solutions crafted by expert developers. Expert team delivering enterprise-grade software solutions.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/MTInternational.png`,
        width: 1200,
        height: 630,
        alt: "MT International - Custom Software Solutions",
      },
    ],
    locale: "en_US",
    siteName: "MT International",
  },
  twitter: {
    card: "summary_large_image",
    title: "MT International - Premium Software Solutions",
    description: "Transform your business with cutting-edge custom software development and digital solutions",
    images: [`${siteUrl}/MTInternational.png`],
    creator: "@mtintl_official",
    site: "@mtintl_official",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  generator: "v0.app",
  authors: [{ name: "MT International Team" }],
  category: "Technology",
  applicationName: "MT International",
  referrer: "origin-when-cross-origin",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MT International",
    alternateName: "MT International Official",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/MTInternational.png`,
      width: "1200",
      height: "630",
    },
    description:
      "Transform your business with cutting-edge custom software development, web applications, and digital solutions crafted by expert developers.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-301-021-9324",
      contactType: "customer service",
      email: "Info@mtinternationalofficial.com",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [
      "https://www.linkedin.com/company/mt-international-official/",
      "https://x.com/mtintl_official/",
      "https://www.facebook.com/profile.php?id=61578119033824",
      "https://www.instagram.com/mt_international_official/",
    ],
    serviceType: [
      "Custom Software Development",
      "Web Development",
      "Mobile App Development",
      "Cloud Solutions",
      "Cybersecurity",
    ],
    foundingDate: "2025",
    areaServed: ["Worldwide", "Pakistan", "United States", "United Kingdom", "UAE", "Canada", "Australia"],
    keywords: "software development, web development, mobile apps, custom software, digital solutions",
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MT International",
    alternateName: "MT International Official",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  const structuredData = [organizationData, websiteData]

  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          key="structured-data"
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Suspense fallback={null}>
            <PageTransitions>{children}</PageTransitions>
            <Toaster />
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
