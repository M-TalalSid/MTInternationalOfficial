import { Button } from "../components/ui/button"
import { Check, ArrowRight, Star, Clock, Users, Zap, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ServiceDetailProps {
  service: {
    title: string
    description: string
    longDescription: string
    features: string[]
    benefits: string[]
    process: string[]
  }
}

// Add pricing data for each service
const servicePricing = {
  "Custom Software Development": {
    packages: [
      {
        name: "Starter",
        price: "$399",
        duration: "4-6 weeks",
        description: "Ideal for startups and small businesses needing tailored software.",
        features: [
          "Requirements gathering",
          "Basic custom software design",
          "Development & QA testing",
          "Deployment assistance",
          "30 days support",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$999",
        duration: "8-10 weeks",
        description: "Comprehensive software solutions for growing organizations.",
        features: [
          "Everything in Starter",
          "Scalable architecture setup",
          "API integration",
          "Advanced testing & optimization",
          "90 days support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "12+ weeks",
        description: "Full-scale enterprise-grade development with complete support.",
        features: [
          "Everything in Professional",
          "Custom architecture design",
          "Enterprise security compliance",
          "Cloud deployment",
          "1 year premium support",
        ],
        popular: false,
      },
    ],
  },
  "Web Development": {
    packages: [
      {
        name: "Starter",
        price: "$149",
        duration: "2-3 weeks",
        description: "Basic website setup for small businesses and personal brands.",
        features: [
          "Responsive design",
          "Up to 5 pages",
          "Basic SEO optimization",
          "Contact form integration",
          "30 days support",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$399",
        duration: "4-6 weeks",
        description: "Advanced web solutions for professional online presence.",
        features: [
          "Everything in Starter",
          "CMS integration (WordPress/Next.js)",
          "E-commerce setup",
          "Performance optimization",
          "90 days support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "8+ weeks",
        description: "High-performance and scalable web platforms for enterprises.",
        features: [
          "Everything in Professional",
          "Custom admin dashboard",
          "API & database integration",
          "Cloud hosting setup",
          "6 months premium support",
        ],
        popular: false,
      },
    ],
  },
  "Mobile App Development": {
    packages: [
      {
        name: "Starter",
        price: "$599",
        duration: "6-8 weeks",
        description: "Perfect for small mobile apps with core functionality.",
        features: [
          "UI/UX design",
          "Basic app development (iOS/Android)",
          "API integration",
          "App store deployment",
          "30 days support",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$1299",
        duration: "10-14 weeks",
        description: "End-to-end mobile app solutions for growing startups.",
        features: [
          "Everything in Starter",
          "Push notifications",
          "Payment gateway integration",
          "Performance optimization",
          "90 days support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "16+ weeks",
        description: "Enterprise-grade mobile apps with full customization and scalability.",
        features: [
          "Everything in Professional",
          "Custom backend development",
          "Advanced analytics",
          "Ongoing maintenance",
          "1 year premium support",
        ],
        popular: false,
      },
    ],
  },
  "Cloud Solutions": {
    packages: [
      {
        name: "Starter",
        price: "$299",
        duration: "3-5 weeks",
        description: "Basic cloud setup for small-scale operations.",
        features: [
          "Cloud environment setup",
          "Data migration support",
          "Basic security configuration",
          "30 days support",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$799",
        duration: "6-10 weeks",
        description: "Advanced cloud optimization for medium-sized businesses.",
        features: [
          "Everything in Starter",
          "Cloud automation & monitoring",
          "Backup & recovery systems",
          "90 days support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "12+ weeks",
        description: "Enterprise-grade cloud infrastructure and scalability solutions.",
        features: [
          "Everything in Professional",
          "Multi-cloud deployment",
          "Advanced security compliance",
          "24/7 support & monitoring",
        ],
        popular: false,
      },
    ],
  },
  "Cybersecurity": {
    packages: [
      {
        name: "Starter",
        price: "$399",
        duration: "2-4 weeks",
        description: "Essential protection for small businesses and startups.",
        features: [
          "Security assessment",
          "Firewall setup",
          "Malware protection",
          "Basic penetration testing",
          "30 days support",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$999",
        duration: "5-8 weeks",
        description: "Advanced protection and monitoring for growing organizations.",
        features: [
          "Everything in Starter",
          "Threat intelligence integration",
          "24/7 monitoring setup",
          "90 days support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "10+ weeks",
        description: "Full-scale enterprise cybersecurity infrastructure setup.",
        features: [
          "Everything in Professional",
          "Incident response automation",
          "Cloud & network hardening",
          "Compliance reporting",
        ],
        popular: false,
      },
    ],
  },
  "Data Analytics": {
    packages: [
      {
        name: "Starter",
        price: "$499",
        duration: "3-5 weeks",
        description: "Data insights for small-scale analysis and reporting.",
        features: [
          "Data cleaning & visualization",
          "Dashboard setup",
          "Basic analytics reporting",
          "30 days support",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$1099",
        duration: "6-10 weeks",
        description: "In-depth data analysis for strategic business insights.",
        features: [
          "Everything in Starter",
          "Predictive modeling",
          "Data pipeline automation",
          "90 days support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "12+ weeks",
        description: "Comprehensive enterprise-level analytics & AI integration.",
        features: [
          "Everything in Professional",
          "Machine learning models",
          "Big data integration",
          "Custom KPI dashboards",
        ],
        popular: false,
      },
    ],
  },
  "Logo Designing": {
    packages: [
      {
        name: "Starter",
        price: "$49",
        duration: "2-3 days",
        description: "Simple and elegant logo for individuals or startups.",
        features: [
          "2 initial concepts",
          "1 revision",
          "High-resolution files",
          "Delivery in PNG/JPG format",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$119",
        duration: "4-5 days",
        description: "Professional logo design with multiple revisions and options.",
        features: [
          "Everything in Starter",
          "5 initial concepts",
          "3 revisions",
          "Vector & source files",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "7+ days",
        description: "Full branding package with multiple logo variants.",
        features: [
          "Everything in Professional",
          "Brand guidelines",
          "Typography & color palette",
          "Social media kit",
        ],
        popular: false,
      },
    ],
  },
  "Script Writing": {
    packages: [
      {
        name: "Starter",
        price: "$99",
        duration: "3-5 days",
        description: "Short scripts for ads, social media, or YouTube videos.",
        features: [
          "Up to 2 pages script",
          "1 revision",
          "Delivery in Word/PDF",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$199",
        duration: "1-2 weeks",
        description: "Well-structured professional scripts for longer productions.",
        features: [
          "Everything in Starter",
          "Up to 10 pages script",
          "2 revisions",
          "Formatting & storytelling polish",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "2+ weeks",
        description: "Full scriptwriting package for films, series, or commercials.",
        features: [
          "Everything in Professional",
          "Character development",
          "Scene breakdowns",
          "Unlimited revisions",
        ],
        popular: false,
      },
    ],
  },
  "Graphic Designing": {
    packages: [
      {
        name: "Starter",
        price: "$99",
        duration: "3-5 days",
        description: "Basic design package for small projects and startups.",
        features: [
          "2 design concepts",
          "1 revision",
          "High-resolution delivery",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$249",
        duration: "1-2 weeks",
        description: "Professional design package for brands and businesses.",
        features: [
          "Everything in Starter",
          "5 design concepts",
          "3 revisions",
          "Social media kit",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "2+ weeks",
        description: "Full-scale design suite for corporate identity and marketing.",
        features: [
          "Everything in Professional",
          "Brand identity guidelines",
          "Print & digital assets",
          "Ongoing design support",
        ],
        popular: false,
      },
    ],
  },
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const pricing = servicePricing[service.title as keyof typeof servicePricing] || {};

  return (
    <div className="container mx-auto px-4 ">
      {/* Back Button */}
      <Link
        href="/services"
        className="inline-flex items-center mt-8 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2  " />
        Back to Service
      </Link>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-white ">
          {service.title}
          </h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8 ">{service.description}</p>

        <Link href="/contact">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* Overview */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-blue-200 text-lg leading-relaxed">{service.longDescription}</p>
        </div>
        <div className="bg-blue-950/30 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl">
          <h3 className="text-xl font-semibold text-white mb-6">Key Benefits</h3>
          <ul className="space-y-3">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-blue-200">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Package</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Flexible pricing options designed to meet your specific needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricing.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-blue-950/30 backdrop-blur-md rounded-3xl p-8 border transition-all duration-300 hover:scale-[1.02] ${
                pkg.popular
                  ? "border-blue-400/50 shadow-xl shadow-blue-500/25"
                  : "border-blue-500/20 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  {pkg.price}
                </div>
                <div className="flex items-center justify-center text-blue-300 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {pkg.duration}
                </div>
                <p className="text-blue-200">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-blue-200">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                    : "bg-blue-700 hover:bg-blue-600 text-white"
                }`}
              >
                {pkg.price === "Custom Quote" || pkg.price === "Contact Us" ? "Get Quote" : "Choose Plan"}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Pricing Info */}
        <div className="mt-12 bg-blue-950/30 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Team</h3>
              <p className="text-blue-200">Experienced developers assigned to your project</p>
            </div>
            <div>
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-blue-200">Agile development with regular updates</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Quality Guarantee</h3>
              <p className="text-blue-200">100% satisfaction guarantee with ongoing support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          What's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Included</span>
          </h2> 
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-950/30 backdrop-blur-md rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Process</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.process.map((step, index) => (
            <div
              key={index}
              className="bg-blue-950/30 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 text-center shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-blue-950/30 backdrop-blur-md rounded-2xl p-12 border mb-16 border-blue-500/20 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
          Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
