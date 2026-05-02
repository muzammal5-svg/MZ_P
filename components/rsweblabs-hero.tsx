"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { TechScroller } from "@/components/tech-scroller"
import { useState, useEffect } from "react"

export function MZwebSolutionsHero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })

  // Typing animation state
  const technologies = [
    "WordPress Development",
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

          {/* ════════════════════════════════
              LEFT COLUMN - Content
          ════════════════════════════════ */}
          <div className="space-y-6 sm:space-y-8">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em",
                  fontWeight: 700,
                }}
              >
                Full-Stack Web Developer
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mt-3" style={{ 
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
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg"
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
            </motion.p>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 py-4"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ 
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                }}>
                  100+
                </div>
                <div className="text-xs sm:text-sm font-medium" style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>
                  Projects
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ 
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                }}>
                  5.0
                </div>
                <div className="text-xs sm:text-sm font-medium" style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>
                  Rating on Upwork
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ 
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                }}>
                  5+
                </div>
                <div className="text-xs sm:text-sm font-medium" style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>
                  Years Experience
                </div>
              </div>
            </motion.div> */}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-200"
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
              </motion.button>
            </motion.div>
          </div>

          {/* ════════════════════════════════
              RIGHT COLUMN - Video with Diagonal Frame
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
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
                    preload="metadata"
                    className="w-full h-full object-cover"
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
          </motion.div>

        </div>
      </div>

      {/* ── Tech scroller — absolute bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <TechScroller />
      </div>
    </section>
  )
}
