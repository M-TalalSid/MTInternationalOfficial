"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "MT International transformed our vision into a powerful software solution. Their expertise and dedication exceeded our expectations.",
    rating: 5,
    image: "/professional-woman-ceo.png",
  },
  {
    name: "Michael Chen",
    company: "Digital Dynamics",
    role: "CTO",
    content:
      "Outstanding development team with exceptional technical skills. They delivered our project on time and within budget.",
    rating: 5,
    image: "/professional-man-cto.jpg",
  },
  {
    name: "Emily Rodriguez",
    company: "InnovateCorp",
    role: "Product Manager",
    content:
      "The mobile app they developed for us has significantly improved our customer engagement. Highly recommended!",
    rating: 5,
    image: "/professional-woman-manager.png",
  },
  {
    name: "David Thompson",
    company: "CloudTech Solutions",
    role: "Founder",
    content: "Professional, reliable, and innovative. MT International helped us scale our infrastructure seamlessly.",
    rating: 5,
    image: "/professional-man-founder.png",
  },
  {
    name: "Sarah Malik",
    company: "EcoNest Interiors",
    role: "Creative Director",
    content: "MT International delivered beyond expectations. Their solutions are both scalable and elegant.",
    rating: 5,
    image: "/professional-woman-director.png",
  },
  {
    name: "James Carter",
    company: "Finwise Analytics",
    role: "CTO",
    content:
      "Efficient and technically sound. Our team productivity has soared since collaborating with MT International.",
    rating: 4,
    image: "/professional-executive-man.png",
  },
  {
    name: "Aisha Rehman",
    company: "BrightEdTech",
    role: "Founder & CEO",
    content: "They truly understand startup challenges. MT International was a game changer for our product launch.",
    rating: 5,
    image: "/professional-woman-entrepreneur.png",
  },
  {
    name: "Liam Nguyen",
    company: "SecureNet Solutions",
    role: "Head of Engineering",
    content: "Solid performance under pressure. Their cloud migration strategy saved us weeks of work.",
    rating: 4,
    image: "/professional-engineer.png",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto text-pretty">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 lg:p-12 animate-scale-in">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current animate-bounce-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                />
              ))}
            </div>

            <blockquote className="text-xl lg:text-2xl text-white text-center mb-8 leading-relaxed text-balance">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full glass-button p-0.5">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-purple-300">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="glass"
            size="icon"
            className="absolute left-0 lg:-left-16 top-1/2 transform -translate-y-1/2"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="glass"
            size="icon"
            className="absolute right-0 lg:-right-16 top-1/2 transform -translate-y-1/2"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 glass-button" : "w-3 bg-purple-700/50 hover:bg-purple-600/50"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
