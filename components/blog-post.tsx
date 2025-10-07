import type React from "react"
import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "../components/ui/button"

interface BlogPostProps {
  post: {
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    category: string
    image: string
    content: string
  }
}

// 🧩 Team members with accurate info and bio
const teamMembers: Record<
  string,
  { image: string; title: string; bio: string }
> = {
  "M. Talal Shoaib": {
    image: "/myprofilepic.jpg",
    title: "Co-Founder & CEO",
    bio: "A forward-thinking leader skilled in team leadership, sales, and digital marketing. As Co-Founder & CEO of MT International, Talal focuses on transforming ambitious ideas into impactful, real-world solutions that drive growth and innovation.",
  },
  "M. Minhaj Azeem": {
    image: "/minhajprofilepic.webp",
    title: "Co-Founder & COO",
    bio: "A strategic operations leader and technical innovator specializing in scalable architecture and emerging technologies. Minhaj ensures MT International runs with precision, collaboration, and excellence across every project.",
  },
  "Adnan Zakaria": {
    image: "/mamoprofilepic.JPG",
    title: "CFO – Chief Financial Officer",
    bio: "Focused on financial strategy, sustainable growth, and disciplined fiscal management, Adnan keeps MT International’s financial foundation strong and future-ready.",
  },
  "Abdul Wahid": {
    image: "/wahidprofilepic.webp",
    title: "CTO – Chief Technology Officer",
    bio: "A visionary technologist guiding MT International’s technical direction, Wahid blends creative design with cutting-edge solutions to deliver seamless, human-centered digital innovation.",
  },
  "Abdul Ahad Afridi": {
    image: "/ahadprofilepic.webp",
    title: "CPO – Chief Product Officer",
    bio: "A full-stack product leader passionate about building innovative, scalable, and efficient digital experiences. Ahad transforms ideas into elegant, practical products that delight users and businesses alike.",
  },
  "Hammad Abbasi": {
    image: "/hammadprofilepic2.jpg",
    title: "Head of Operations & Delivery",
    bio: "A results-driven operations strategist ensuring flawless project delivery, secure infrastructure, and reliable performance through precise planning and execution.",
  },
  "Saad Darbari": {
    image: "/saadprofilepic.webp",
    title: "Head of Growth",
    bio: "Specializing in business development and data-driven market expansion, Saad drives MT International’s global growth through strategic partnerships and scalable solutions.",
  },
  "Zain Ul Abdeen": {
    image: "/zainprofilepic.webp",
    title: "Head of Marketing",
    bio: "A creative storyteller and brand strategist who crafts powerful, data-backed narratives and precision-driven campaigns to elevate MT International’s global presence.",
  },
  "M. Ashir Azeem": {
    image: "/ashirprofilepic.JPG",
    title: "Head of Industrial Automation",
    bio: "An automation specialist focused on PLC systems, embedded technologies, and IoT-driven solutions. Ashir leads innovation that turns complexity into seamless productivity.",
  },
}

export default function BlogPost({ post }: BlogPostProps) {
  const authorInfo = teamMembers[post.author] || {
    image: "/placeholder.svg",
    title: "Team Member",
    bio: `${post.author} is a valued member of MT International, contributing insights in ${post.category.toLowerCase()}.`,
  }

  return (
    <article className="container mx-auto px-4 mb-16 max-w-4xl">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center mt-8 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="mb-6">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-xl text-blue-200 mb-8 leading-relaxed">{post.excerpt}</p>

        <div className="flex flex-wrap items-center gap-6 text-blue-300 mb-8">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-blue-400 text-blue-200 hover:bg-blue-900/50 bg-transparent"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-12">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-64 lg:h-96 object-contain rounded-2xl shadow-2xl"
          width="1200"
          height="630"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      <div className="bg-blue-950/30 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-blue-500/20 shadow-xl">
        <div
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={
            {
              "--tw-prose-body": "rgb(191 219 254)",
              "--tw-prose-headings": "rgb(255 255 255)",
              "--tw-prose-links": "rgb(96 165 250)",
              "--tw-prose-bold": "rgb(255 255 255)",
              "--tw-prose-counters": "rgb(191 219 254)",
              "--tw-prose-bullets": "rgb(96 165 250)",
              "--tw-prose-hr": "rgb(59 130 246)",
              "--tw-prose-quotes": "rgb(191 219 254)",
              "--tw-prose-quote-borders": "rgb(59 130 246)",
              "--tw-prose-captions": "rgb(191 219 254)",
              "--tw-prose-code": "rgb(255 255 255)",
              "--tw-prose-pre-code": "rgb(191 219 254)",
              "--tw-prose-pre-bg": "rgb(23 37 84)",
              "--tw-prose-th-borders": "rgb(59 130 246)",
              "--tw-prose-td-borders": "rgb(59 130 246)",
            } as React.CSSProperties
          }
        />
      </div>

      {/* 🧑‍💻 Author Bio */}
      <div className="mt-12 bg-blue-950/30 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl">
        <div className="flex items-start space-x-4">
          <img
            src={authorInfo.image}
            alt={post.author}
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-400/60 shadow-lg"
          />
          <div>
            <h3 className="text-xl font-bold text-white mb-1">About {post.author}</h3>
            <p className="text-blue-300 text-sm mb-2">{authorInfo.title}</p>
            <p className="text-blue-200">{authorInfo.bio}</p>
          </div>
        </div>
      </div>

      {/* Related Posts CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Want to Read More?</h3>
        <p className="text-blue-200 mb-6">
          Explore more insights and tutorials from our team of experts
        </p>
        <Link href="/blog">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            View All Posts
          </Button>
        </Link>
      </div>
    </article>
  )
}
