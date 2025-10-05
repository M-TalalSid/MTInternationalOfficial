"use client"

import { useEffect, useState } from "react"
import { RotateCcw, Star, Users, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: RotateCcw,
    number: "50+",
    label: "Projects Completed",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Star,
    number: "98%",
    label: "Client Satisfaction",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Users,
    number: "20+",
    label: "Team Members",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: TrendingUp,
    number: "2+",
    label: "Years Experience",
    color: "from-blue-400 to-cyan-400",
  },
]

export default function StatsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 text-center hover:scale-105 ${
                mounted ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-purple-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
