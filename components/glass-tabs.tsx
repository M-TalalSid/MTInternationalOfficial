"use client"

import type React from "react"

import { useState } from "react"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface GlassTabsProps {
  tabs: Tab[]
  defaultTab?: string
}

export default function GlassTabs({ tabs, defaultTab }: GlassTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex gap-2 p-1 bg-blue-500/5 backdrop-blur-xl border border-blue-500/10 rounded-2xl mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-blue-500/20 text-blue-300 border border-blue-400/30 shadow-lg shadow-blue-500/10"
                : "text-gray-400 hover:text-blue-300 hover:bg-blue-500/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-blue-500/5 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-all duration-300 ${activeTab === tab.id ? "block animate-fadeIn" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
