import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight, Code, Smartphone, Cloud, Shield } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built to meet your specific business requirements.",
    slug: "custom-software-development",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    slug: "mobile-app-development",
    color: "from-blue-400 to-cyan-400",

  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    slug: "cloud-solutions",
    color: "from-blue-400 to-cyan-400",

  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    slug: "cybersecurity",
    color: "from-blue-400 to-cyan-400",

  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto text-pretty">
            We offer comprehensive software development services to transform your ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group glass-card rounded-2xl p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r  p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <div className="w-full h-full rounded-full  flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300 text-balance">
                {service.title}
              </h3>
              <p className="text-purple-200 mb-6 text-pretty leading-relaxed">{service.description}</p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300 font-medium">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <Link href="/services">
            <Button size="lg" variant="glass" className="px-8 py-4 rounded-full text-lg font-semibold group">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
