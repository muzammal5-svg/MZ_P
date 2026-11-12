"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

/* -- Platform badges ------------------------------------------------------- */
const UpworkBadge = () => (
  <div 
    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md"
    style={{ background: "rgba(20,163,74,0.12)", border: "1px solid rgba(20,163,74,0.3)" }}
  >
    <svg viewBox="0 0 24 24" fill="#15803d" className="w-3.5 h-3.5 flex-shrink-0">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
    </svg>
    <span style={{ color: "#15803d", fontSize: "11px", fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
      Upwork
    </span>
  </div>
)

const FiverrBadge = () => (
  <div 
    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md"
    style={{ background: "rgba(29,191,115,0.12)", border: "1px solid rgba(29,191,115,0.3)" }}
  >
    <svg viewBox="0 0 24 24" fill="#15803d" className="w-3.5 h-3.5 flex-shrink-0">
      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.242c0-3.073-2.479-5.561-5.532-5.561V5.08c3.736 0 6.774 3.055 6.774 6.803zM14.721 8.333c1.678 0 3.04 1.371 3.04 3.062h-1.242c0-.999-.809-1.81-1.798-1.81V8.333zm-1.243 3.062c0-.68.549-1.234 1.243-1.234v1.234h-1.243zm-9.999 5.561h1.243V11.39H3.479v5.566zm1.243-7.44c0-.68-.549-1.234-1.243-1.234v1.234h1.243z"/>
    </svg>
    <span style={{ color: "#047857", fontSize: "11px", fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
      Fiverr
    </span>
  </div>
)

/* -- Client Testimonials ---------------------------------------------------- */
const REVIEWS = [
  // Professional Recommendations
  { 
    name: "Sahil Meo",  
    role: "Full Stack Developer",       
    avatar: null,
    initials: "SM",
    bgColor: "#0284c7",
    rating: 5, 
    platform: "upwork",  
    tag: "Laravel / React",        
    text: "I had the pleasure of working with Muzammil on multiple projects at CodeWire Solutions. He has strong hands-on expertise in Laravel and React, and consistently delivered clean, high-quality work on time. A true professional, I highly recommend him for any web development project." 
  },
  { 
    name: "Muhammad Haseeb Arshad",  
    role: "Entrepreneur",        
    avatar: null,   
    initials: "MH",
    bgColor: "#0284c7",
    rating: 5, 
    platform: "upwork",  
    tag: "React",      
    text: "I worked with Muzammil on a React project and had a great experience. He is skilled, professional, and delivers quality work on time. I highly recommend him for any web development project." 
  },
  
  // Fiverr Reviews
  { 
    name: "dan17011988",   
    role: "United Kingdom 🇬🇧",  
    avatar: null,
    initials: "DU",
    bgColor: "#059669",
    rating: 5, 
    platform: "fiverr",  
    tag: "eBay Templates",      
    text: "Great experience! The seller designed a clean and professional eBay listing template. Communication was smooth, and delivery was very fast. Highly recommended!" 
  },
  { 
    name: "rizwanramzan518",  
    role: "United Kingdom 🇬🇧",        
    avatar: null,
    initials: "RR",
    bgColor: "#059669",
    rating: 5, 
    platform: "fiverr",  
    tag: "eBay Templates",
    // Cleanly completed sentence rather than broken trailing ellipsis
    text: "I was blown away by Muhammad's professionalism! He understood my task and did a great job for my listing template for eBay. It looks so much better. Muhammad consulted me with examples and was very helpful throughout. I would highly recommend messaging him!" 
  },
  
  // Upwork Reviews (Cleaned Upwork wording: developer instead of seller)
  { 
    name: "WordPress Client",  
    role: "Upwork Client", 
    avatar: null,
    initials: "WC",
    bgColor: "#15803d",
    rating: 5, 
    platform: "upwork",  
    tag: "WordPress / Elementor", 
    text: "Great work, fast delivery, and excellent communication throughout the project. Highly recommend this developer to anyone looking for high-quality results. I'll definitely work with them again!" 
  },
  { 
    name: "Elementor Client",   
    role: "Upwork Client",     
    avatar: null,
    initials: "EC",
    bgColor: "#15803d",
    rating: 5, 
    platform: "upwork",  
    tag: "WordPress / Elementor",        
    text: "Excellent work! The website is professional, fast, and fully responsive. Muzammal is a true pro at Elementor and WordPress. Highly recommended!" 
  },
  { 
    name: "Custom WordPress Client",     
    role: "Upwork Client",          
    avatar: null, 
    initials: "CW",
    bgColor: "#15803d",
    rating: 5, 
    platform: "upwork",  
    tag: "WordPress / SEO", 
    text: "Excellent experience working together. The work was delivered on time with great attention to detail and quality. Communication was smooth throughout the project. Highly recommended." 
  },
]

const CARD_W = 360
const GAP    = 20
const STEP   = CARD_W + GAP

export function Testimonials() {
  const total      = REVIEWS.length
  const [idx, setIdx] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [leftPad, setLeftPad] = useState(32)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Touch swipe support
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  useEffect(() => {
    const measure = () => {
      const vw = window.innerWidth
      const containerW = Math.min(1140, vw)
      const pad = Math.max(16, Math.round((vw - containerW) / 2) + 32)
      setLeftPad(pad)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const translateX = leftPad - idx * STEP

  const next = useCallback(() => setIdx(i => (i + 1) % total), [total])
  const prev = useCallback(() => setIdx(i => (i - 1 + total) % total), [total])

  // Auto-scroll every 5.5 seconds, pauses on hover or touch
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 5500)
    return () => clearInterval(interval)
  }, [isAutoPlaying, next])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { next(); setIsAutoPlaying(false) }
      if (e.key === "ArrowLeft")  { prev(); setIsAutoPlaying(false) }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false)
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > 50) {
      next()
    } else if (distance < -50) {
      prev()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Decorative ambient background */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/4 w-[800px] h-[600px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.3) 0%, transparent 65%)" }} 
      />

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-8 mb-10 sm:mb-12 relative z-10">
        <div className="flex items-center justify-between gap-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
              style={{
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Client Testimonials
              </span>
            </div>

            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "#0f172a",
              }}>
              Trusted by Clients{" "}
              <span style={{
                background: "linear-gradient(120deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Worldwide
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2 font-normal">
              Real feedback from verified clients on Upwork, Fiverr, and contract projects.
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={() => { prev(); setIsAutoPlaying(false) }}
              aria-label="Previous testimonial"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              style={{
                background: "#ffffff",
                border: "2px solid rgba(226,232,240,0.9)",
                color: "#334155",
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => { next(); setIsAutoPlaying(false) }}
              aria-label="Next testimonial"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                border: "none",
                color: "#ffffff",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track with Touch Swipe */}
      <div 
        className="overflow-hidden w-full relative z-10 select-none cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex items-stretch"
          style={{ gap: `${GAP}px` }}
          animate={{ x: translateX }}
          transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.8 }}
        >
          {REVIEWS.map((r, i) => {
            const isActive = i === idx

            return (
              <div
                key={i}
                onClick={() => !isActive && setIdx(i)}
                className="flex-shrink-0 rounded-2xl flex flex-col justify-between transition-all duration-300"
                style={{
                  width: `${CARD_W}px`,
                  background: "#ffffff",
                  border: isActive
                    ? "2px solid rgba(16,185,129,0.4)"
                    : "2px solid rgba(226,232,240,0.85)",
                  boxShadow: isActive
                    ? "0 20px 40px rgba(16,185,129,0.12)"
                    : "0 4px 16px rgba(0,0,0,0.04)",
                  opacity: 1, // Full contrast for maximum readability
                }}
              >
                {/* Top accent gradient line for active card */}
                <div 
                  className="h-1 w-full rounded-t-2xl" 
                  style={{
                    background: isActive
                      ? "linear-gradient(90deg, #10b981 0%, #06b6d4 100%)"
                      : "transparent",
                  }} 
                />

                <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                  <div className="space-y-4">
                    {/* Platform Badge & Project Tag */}
                    <div className="flex items-center justify-between">
                      {r.platform === "upwork" ? <UpworkBadge /> : <FiverrBadge />}
                      <span 
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md text-emerald-800"
                        style={{
                          background: "rgba(16,185,129,0.1)",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {r.tag}
                      </span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1" aria-label="5 stars rating">
                      {Array.from({ length: r.rating }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Testimonial Quote (Readable high-contrast text) */}
                    <p 
                      className="text-sm leading-relaxed"
                      style={{
                        color: "#1e293b",
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.75",
                        fontWeight: 400,
                      }}
                    >
                      "{r.text}"
                    </p>
                  </div>

                  {/* Client Info at bottom */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3 mt-auto">
                    {r.avatar ? (
                      <Image
                        src={r.avatar}
                        alt={r.name}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        style={{ border: "2px solid rgba(16,185,129,0.2)" }}
                      />
                    ) : (
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-sm shadow-sm"
                        style={{ 
                          backgroundColor: r.bgColor,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {r.initials}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {r.name}
                      </div>
                      <div className="text-xs text-slate-500 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {r.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Progress Dots */}
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex items-center gap-2 mt-8 justify-center sm:justify-start">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIdx(i); setIsAutoPlaying(false) }}
              aria-label={`Go to review ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === idx ? "36px" : "10px",
                background: i === idx
                  ? "linear-gradient(90deg, #10b981 0%, #06b6d4 100%)"
                  : "rgba(203, 213, 225, 0.8)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
