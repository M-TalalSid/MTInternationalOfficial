"use client"

import { useEffect, useState } from "react"
import { Sparkles, Code, Zap } from "lucide-react"

export default function ServicesHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`mb-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-xl rounded-full px-6 py-3 border border-blue-500/20 mb-6">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200 font-medium">Premium Software Solutions</span>
            </div>
          </div>

          <h1
            className={`text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Transform Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient-x">
              Cutting-Edge Services
            </span>
          </h1>

          <p
            className={`text-xl lg:text-2xl text-blue-200 mb-12 leading-relaxed ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            From custom software development to AI-powered solutions, we deliver comprehensive services that drive
            innovation and growth for businesses of all sizes.
          </p>

          {/* Service Categories Preview */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "600ms" }}
          >
            <div className="bg-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-200 hover:scale-105 group">
              <Code className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-bold text-white mb-2">Development</h3>
              <p className="text-blue-200 text-sm">Custom software, web, and mobile solutions</p>
            </div>
            <div className="bg-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-200 hover:scale-105 group">
              <Zap className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-blue-200 text-sm">AI, machine learning, and emerging tech</p>
            </div>
            <div className="bg-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-200 hover:scale-105 group">
              <Sparkles className="w-12 h-12 text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-bold text-white mb-2">Optimization</h3>
              <p className="text-blue-200 text-sm">Cloud, DevOps, and performance solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
