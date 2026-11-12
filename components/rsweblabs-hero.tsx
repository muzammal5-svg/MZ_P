"use client"

import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"

// Lazy load TechScroller for better initial page load
const LazyTechScroller = dynamic(
  () => import("@/components/tech-scroller").then((mod) => ({ default: mod.TechScroller })),
  {
    ssr: false,
    loading: () => <div className="h-24 bg-gradient-to-r from-gray-50 to-gray-100 animate-pulse" />,
  }
)

const TECHNOLOGIES = [
  "WordPress Development",
  "AI Automation",
  "AI Chatbot Integration",
  "Shopify Development",
  "Frontend Development",
  "Laravel",
  "React.js",
  "Next.js",
]

export function MZwebSolutionsHero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/#contact"
    }
  }

  // Robust, race-condition-free typewriter animation
  const [techIndex, setTechIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = TECHNOLOGIES[techIndex]

    // When full word has been typed out, pause for 2.2 seconds before deleting
    if (!isDeleting && subIndex === currentWord.length) {
      const timer = setTimeout(() => setIsDeleting(true), 2200)
      return () => clearTimeout(timer)
    }

    // When word has been completely deleted, brief pause, then advance to next word
    if (isDeleting && subIndex === 0) {
      const timer = setTimeout(() => {
        setIsDeleting(false)
        setTechIndex((prev) => (prev + 1) % TECHNOLOGIES.length)
      }, 400)
      return () => clearTimeout(timer)
    }

    // Typing speed: 85ms forward, 45ms deleting
    const speed = isDeleting ? 45 : 85
    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timer)
  }, [subIndex, isDeleting, techIndex])

  const displayedText = TECHNOLOGIES[techIndex].substring(0, subIndex)

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#f8f9fa" }}
    >
      {/* Decorative circles background */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,179,237,0.3) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-32 left-32 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,179,237,0.25) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-5 mt-5">

          {/* LEFT COLUMN - Content */}
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-700">
            {/* Headline */}
            <div>
              <h1
                className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em",
                  fontWeight: 700,
                }}
              >
                Full-Stack Web Developer
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl mt-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
                style={{ 
                  color: "#4a5568", 
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  minHeight: "2.5rem",
                }}
              >
                Specializing in{" "}
                <span
                  style={{ 
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700,
                    display: "inline-block",
                    minWidth: "min(260px, 100%)",
                  }}
                >
                  {displayedText}
                  <span
                    className="animate-pulse"
                    style={{ 
                      color: "#10b981",
                      WebkitTextFillColor: "#10b981",
                    }}
                  >
                    |
                  </span>
                </span>
              </p>
            </div>

            {/* Description */}
            <p
              className="text-sm sm:text-base md:text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
              style={{
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.8",
                color: "#4a5568",
                maxWidth: "580px",
                fontWeight: 400,
              }}
            >
              I build high-performance WordPress websites, custom Shopify stores, and modern React &amp; Next.js applications. 
              Specializing in custom themes, e-commerce solutions, eBay listing templates, and reliable AI automations.
            </p>

            {/* CTA Button */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#ffffff",
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  fontWeight: 600,
                }}
              >
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Developer Portrait with Diagonal Frame */}
          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-4 duration-800 delay-300">
            {/* Visual container with diagonal shape and teal/blue border */}
            <div className="relative w-full" style={{ height: "500px" }}>
              {/* Gradient border wrapper */}
              <div 
                className="absolute inset-0 shadow-2xl"
                style={{ 
                  clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  padding: "4px",
                }}
              >
                {/* Image container inside frame */}
                <div 
                  className="w-full h-full relative overflow-hidden bg-slate-900"
                  style={{ 
                    clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src="/professional-developer-portrait.png"
                    alt="Muhammad Muzammal - Full-Stack Web Developer"
                    fill
                    sizes="(min-width: 1024px) 500px, 100vw"
                    priority
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle dark gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Clean bottom badge */}
                  <div 
                    className="absolute bottom-6 left-8 right-8 px-4 py-3 rounded-xl backdrop-blur-md"
                    style={{
                      background: "rgba(15, 23, 42, 0.75)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    <div className="text-white text-xs font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Muhammad Muzammal
                    </div>
                    <div className="text-emerald-400 text-[11px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Full-Stack Web Developer &bull; 100+ Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative ambient accent */}
            <div 
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30 pointer-events-none blur-2xl"
              style={{ background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" }} 
            />
          </div>

        </div>
      </div>

      {/* Tech scroller — absolute bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <LazyTechScroller />
      </div>
    </section>
  )
}
