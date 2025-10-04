"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 glass rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 glass rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight text-balance">
            Unlock Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient-x">
              Software Solutions
            </span>{" "}
            You Thought Was{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient-x">
              Out of Reach
            </span>{" "}
            – Now Just One Click Away!
          </h1>

          <p className="text-xl text-purple-100 leading-relaxed max-w-2xl text-pretty">
            Transform your business with cutting-edge custom software development, web applications, and digital
            solutions crafted by expert developers.
          </p>

          {/* Uncomment and add glass button effect if needed
          <Button
            size="lg"
            variant="glass"
            className="px-8 py-4 rounded-full text-lg font-semibold group"
          >
            Start Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          */}
        </div>

        {/* Right Content - Floating Circles */}
        <div className="relative flex items-center justify-center">
          <FloatingCircles />
        </div>
      </div>
    </section>
  )
}

function FloatingCircles() {
  return (
    <div className="relative w-96 h-96">
      <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 glass animate-spin-slow">
        <div className="absolute inset-4 rounded-full border border-purple-400/20 glass animate-pulse">
          <div className="absolute inset-4 rounded-full border border-purple-400/10 glass"></div>
        </div>
      </div>

      {/* Center Stats with glass background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center glass-card p-8 rounded-2xl">
          <div className="text-5xl font-bold text-white mb-2">50+</div>
          <div className="text-purple-200 font-semibold">Projects</div>
          <div className="text-purple-300 text-sm">Expert Team</div>
        </div>
      </div>

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full glass-button p-0.5 animate-float">
        <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center overflow-hidden">
          <img
            src="animatedpic1.webp"
            alt="Team member"
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 w-14 h-14 rounded-full glass-button p-0.5 animate-float-delayed">
        <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center overflow-hidden">
          <img
            src="animatedpic2.webp"
            alt="Team member"
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="absolute bottom-8 right-8 w-14 h-14 rounded-full glass-button p-0.5 animate-float-slow">
        <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center overflow-hidden">
          <img
            src="animatedpic3.webp"
            alt="Team member"
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="absolute top-1/2 right-4 w-12 h-12 rounded-full glass-button p-0.5 animate-float-reverse">
        <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center overflow-hidden">
          <img
            src="animatedpic4.webp"
            alt="Team member"
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
