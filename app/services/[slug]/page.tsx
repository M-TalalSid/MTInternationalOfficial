import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import ServiceDetail from "../../../components/service-detail"

const services = {
  "custom-software-development": {
    title: "Custom Software Development",
    description: "Transform your unique business requirements into powerful, scalable software solutions.",
    longDescription:
      "Our custom software development services are designed to address your specific business challenges and opportunities. We work closely with you to understand your requirements, design the perfect solution, and deliver software that drives your business forward.",
    features: [
      "Requirements Analysis & Planning",
      "Custom Application Development",
      "Legacy System Modernization",
      "API Development & Integration",
      "Database Design & Optimization",
      "Quality Assurance & Testing",
      "Deployment & Maintenance",
      "Ongoing Support & Updates",
    ],
    benefits: [
      "Tailored to your exact needs",
      "Scalable and future-proof",
      "Competitive advantage",
      "Improved efficiency",
      "Cost-effective long-term solution",
    ],
    process: [
      "Discovery & Requirements Gathering",
      "System Architecture & Design",
      "Development & Implementation",
      "Testing & Quality Assurance",
      "Deployment & Go-Live",
      "Training & Support",
    ],
  },
  "web-development": {
    title: "Web Development",
    description: "Create stunning, responsive websites and web applications that engage your audience.",
    longDescription:
      "Our web development services combine cutting-edge technology with creative design to deliver exceptional digital experiences. From simple websites to complex web applications, we build solutions that perform beautifully across all devices.",
    features: [
      "Responsive Web Design",
      "Frontend Development",
      "Backend Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps",
      "SEO Optimization",
      "Performance Optimization",
    ],
    benefits: [
      "Mobile-first approach",
      "Fast loading times",
      "SEO-friendly structure",
      "User-friendly interface",
      "Scalable architecture",
    ],
    process: [
      "Project Planning & Strategy",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Testing & Optimization",
      "Launch & Maintenance",
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Build powerful mobile applications that connect with your users on their favorite devices.",
    longDescription:
      "Our mobile app development expertise spans native iOS and Android development as well as cross-platform solutions. We create apps that not only look great but also provide seamless user experiences and robust functionality.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "App Analytics",
    ],
    benefits: [
      "Native performance",
      "Platform-specific features",
      "Intuitive user experience",
      "App store ready",
      "Ongoing maintenance",
    ],
    process: [
      "Concept & Strategy",
      "Design & Prototyping",
      "Development",
      "Testing",
      "App Store Submission",
      "Launch & Support",
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing to scale your business and reduce costs.",
    longDescription:
      "Our cloud solutions help businesses modernize their infrastructure, improve scalability, and reduce operational costs. We provide comprehensive cloud services from migration to ongoing management.",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Serverless Architecture",
      "Container Orchestration",
      "Cloud Security",
      "Backup & Disaster Recovery",
      "Monitoring & Optimization",
      "Multi-cloud Strategy",
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better disaster recovery",
      "Increased flexibility",
    ],
    process: [
      "Cloud Assessment",
      "Migration Planning",
      "Implementation",
      "Testing & Validation",
      "Go-Live",
      "Optimization & Support",
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    description: "Protect your business from cyber threats with comprehensive security solutions.",
    longDescription:
      "Our cybersecurity services provide comprehensive protection for your digital assets, ensuring your business stays secure against evolving threats while maintaining compliance with industry standards.",
    features: [
      "Security Assessments",
      "Penetration Testing",
      "Vulnerability Management",
      "Security Monitoring",
      "Incident Response",
      "Compliance Management",
      "Security Training",
      "Risk Assessment",
    ],
    benefits: [
      "Enhanced security posture",
      "Regulatory compliance",
      "Reduced risk",
      "Business continuity",
      "Customer trust",
    ],
    process: [
      "Security Assessment",
      "Risk Analysis",
      "Solution Design",
      "Implementation",
      "Testing & Validation",
      "Ongoing Monitoring",
    ],
  },
  "data-analytics": {
    title: "Data Analytics",
    description: "Transform your data into actionable insights that drive business growth.",
    longDescription:
      "Our data analytics services help organizations unlock the value of their data through advanced analytics, visualization, and business intelligence solutions that enable data-driven decision making.",
    features: [
      "Data Visualization",
      "Business Intelligence",
      "Data Warehousing",
      "Real-time Analytics",
      "Predictive Modeling",
      "Statistical Analysis",
      "Dashboard Development",
      "Data Integration",
    ],
    benefits: [
      "Data-driven decisions",
      "Improved insights",
      "Better performance",
      "Competitive advantage",
      "Increased ROI",
    ],
    process: [
      "Data Assessment",
      "Architecture Design",
      "Implementation",
      "Visualization",
      "Testing & Validation",
      "Training & Support",
    ],
  },
  "logo-designing": {
    title: "Logo Designing",
    description: "Create memorable and impactful logos that define your brand identity.",
    longDescription:
      "Our logo designing services craft unique, visually stunning logos that capture your brand’s essence and leave a lasting impression on your audience, tailored to your business vision.",
    features: [
      "Custom Logo Creation",
      "Brand Identity Development",
      "Multiple Design Concepts",
      "Color Palette Selection",
      "Typography Design",
      "Vector File Formats",
      "Brand Guidelines",
      "Revisions & Feedback",
    ],
    benefits: [
      "Strong brand recognition",
      "Professional visual identity",
      "Versatile for all media",
      "Enhanced customer trust",
      "Memorable design",
    ],
    process: [
      "Brand Discovery",
      "Concept Sketching",
      "Design Development",
      "Client Feedback",
      "Finalization",
      "Delivery & Support",
    ],
  },
  "script-writing": {
    title: "Script Writing",
    description: "Craft compelling scripts for videos, advertisements, and digital content.",
    longDescription:
      "Our script writing services deliver engaging and targeted scripts for commercials, explainer videos, social media content, and more, designed to connect with your audience and convey your message effectively.",
    features: [
      "Script Conceptualization",
      "Storyboarding",
      "Dialogue Writing",
      "Tone & Voice Customization",
      "Script Editing",
      "Audience Targeting",
      "Call-to-Action Integration",
      "Format Optimization",
    ],
    benefits: [
      "Engaging storytelling",
      "Clear brand messaging",
      "Audience connection",
      "Increased conversions",
      "Professional tone",
    ],
    process: [
      "Project Briefing",
      "Audience Analysis",
      "Script Drafting",
      "Client Review",
      "Revisions",
      "Final Delivery",
    ],
  },
  "graphic-designing": {
    title: "Graphic Designing",
    description: "Elevate your brand with stunning visuals and creative graphic designs.",
    longDescription:
      "Our graphic designing services provide high-quality visuals for marketing materials, social media, websites, and more, ensuring your brand stands out with professional and creative designs.",
    features: [
      "Marketing Collateral Design",
      "Social Media Graphics",
      "Infographic Creation",
      "Branding Materials",
      "Print & Digital Designs",
      "UI/UX Graphics",
      "Custom Illustrations",
      "Design Revisions",
    ],
    benefits: [
      "Enhanced brand appeal",
      "Consistent visual identity",
      "Engaging marketing materials",
      "Improved user engagement",
      "Professional aesthetics",
    ],
    process: [
      "Design Consultation",
      "Concept Development",
      "Design Creation",
      "Client Feedback",
      "Revisions",
      "Final Delivery",
    ],
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services[slug as keyof typeof services]

  if (!service) {
    return {
      title: "Service Not Found - MT International",
    }
  }

  return {
    title: `${service.title} - MT International`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, software development, technology solutions, design services`,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services[slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header />
      <main className="pt-20">
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}
