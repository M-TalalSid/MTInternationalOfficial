"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

export default function ContactHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="">
      {/* Animated Background */}
      <div className="">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`mb-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex mt-6 items-center space-x-2 bg-blue-500/10 backdrop-blur-xl rounded-full px-6 py-3 border border-blue-500/20 mb-6">
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200 font-medium">Let's Start a Conversation</span>
            </div>
          </div>

          <h1
            className={`text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Touch</span>
          </h1>

          <p
            className={`text-xl lg:text-2xl text-blue-200 mb-12 leading-relaxed ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            Ready to transform your business with cutting-edge software solutions? Let's discuss your project and bring
            your vision to life.
          </p>
        </div>
      </div>
    </section>
  )
}
