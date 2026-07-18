"use client"

import { ArrowRight } from "lucide-react"
import { TechScroller } from "@/components/tech-scroller"
import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"

// Lazy load TechScroller for better initial page load
const LazyTechScroller = dynamic(() => import("@/components/tech-scroller").then(mod => ({ default: mod.TechScroller })), {
  ssr: false,
  loading: () => <div className="h-24 bg-gradient-to-r from-gray-50 to-gray-100 animate-pulse" />
})

export function MZwebSolutionsHero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })

  // Typing animation state
  const technologies = [
    "WordPress Development",
    "AI Automation",
    "AI Chatbot Integration",
    "Shopify Development",
    "Frontend Development",
    "Laravel",
    "React.js",
    "Next.js"
  ]
  
  const [currentTechIndex, setCurrentTechIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentTech = technologies[currentTechIndex]
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentTech.length) {
          setDisplayedText(currentTech.substring(0, displayedText.length + 1))
          setTypingSpeed(150)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentTech.substring(0, displayedText.length - 1))
          setTypingSpeed(100)
        } else {
          // Finished deleting, move to next tech
          setIsDeleting(false)
          setCurrentTechIndex((prev) => (prev + 1) % technologies.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentTechIndex, typingSpeed, technologies])

  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  // Lazy load video using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#f8f9fa" }}
    >
      {/* Decorative circles background */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(99,179,237,0.3) 0%, transparent 70%)" }} />
      <div className="absolute bottom-32 left-32 w-96 h-96 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, rgba(99,179,237,0.25) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-5 mt-5">

          {/* LEFT COLUMN - Content */}
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-800">
            {/* Headline */}
            <div>
              <h1
                className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-800"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em",
                  fontWeight: 700,
                }}
              >
                Full-Stack Web Developer
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mt-3 animate-in fade-in slide-in-from-bottom-4 duration-800 delay-200" style={{ 
                color: "#4a5568", 
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                minHeight: "2.5rem",
              }}>
                Specializing in{" "}
                <span style={{ 
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  display: "inline-block",
                  minWidth: "280px",
                }}>
                  {displayedText}
                  <span className="animate-pulse" style={{ 
                    color: "#10b981",
                    WebkitTextFillColor: "#10b981",
                  }}>|</span>
                </span>
              </p>
            </div>

            {/* Description */}
            <p
              className="text-sm sm:text-base md:text-lg animate-in fade-in slide-in-from-bottom-4 duration-800 delay-300"
              style={{
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.8",
                color: "#4a5568",
                maxWidth: "580px",
                fontWeight: 400,
              }}
            >
              I create high-performance WordPress websites, custom Shopify stores, and modern web applications. 
              Expert in theme customization, e-commerce solutions, eBay listing templates, and frontend development with React & Next.js.
            </p>

            {/* CTA Button */}
            <div
              className="animate-in fade-in slide-in-from-bottom-4 duration-800 delay-400"
            >
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#63b3ed",
                  background: "transparent",
                  border: "2px solid #63b3ed",
                  fontWeight: 600,
                }}
              >
                Let's Talk Business
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Video with Diagonal Frame (shows on desktop) */}
          <div
            ref={videoRef}
            className="relative hidden lg:block animate-in fade-in slide-in-from-right-4 duration-800 delay-300"
          >
            {isVideoVisible && (
              <>
                {/* Video container with diagonal shape and blue border */}
                <div className="relative w-full" style={{ height: "500px" }}>
                  {/* Blue border wrapper */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                      background: "linear-gradient(135deg, #63b3ed 0%, #4299e1 100%)",
                      padding: "3px",
                    }}
                  >
                    {/* Video container */}
                    <div 
                      className="w-full h-full relative overflow-hidden bg-gray-900"
                      style={{ 
                        clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                      }}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        className="w-full h-full object-cover"
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3C/svg%3E"
                      >
                        <source src="/visa.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Decorative blue accent on top-right */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-40 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, #63b3ed 0%, #4299e1 100%)" }} />
              </>
            )}
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
