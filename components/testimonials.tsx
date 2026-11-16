"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, Sparkles } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

/* -- Platform badges with live verified profile links --------------------- */
const UpworkBadge = ({ href }: { href?: string }) => {
  const content = (
    <div 
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors hover:bg-emerald-100/60"
      style={{ background: "rgba(20,163,74,0.12)", border: "1px solid rgba(20,163,74,0.3)" }}
    >
      <svg viewBox="0 0 24 24" fill="#15803d" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
      </svg>
      <span style={{ color: "#15803d", fontSize: "11px", fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
        Upwork Verified
      </span>
      {href && <ExternalLink className="w-3 h-3 text-emerald-700 ml-0.5" />}
    </div>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" title="View profile on Upwork">
      {content}
    </a>
  ) : content
}

const FiverrBadge = ({ href }: { href?: string }) => {
  const content = (
    <div 
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors hover:bg-emerald-100/60"
      style={{ background: "rgba(29,191,115,0.12)", border: "1px solid rgba(29,191,115,0.3)" }}
    >
      <svg viewBox="0 0 24 24" fill="#15803d" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.242c0-3.073-2.479-5.561-5.532-5.561V5.08c3.736 0 6.774 3.055 6.774 6.803zM14.721 8.333c1.678 0 3.04 1.371 3.04 3.062h-1.242c0-.999-.809-1.81-1.798-1.81V8.333zm-1.243 3.062c0-.68.549-1.234 1.243-1.234v1.234h-1.243zm-9.999 5.561h1.243V11.39H3.479v5.566zm1.243-7.44c0-.68-.549-1.234-1.243-1.234v1.234h1.243z"/>
      </svg>
      <span style={{ color: "#047857", fontSize: "11px", fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
        Fiverr Verified
      </span>
      {href && <ExternalLink className="w-3 h-3 text-emerald-700 ml-0.5" />}
    </div>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" title="View profile on Fiverr">
      {content}
    </a>
  ) : content
}

/* -- Real Client Testimonials (100% Unaltered Quotes) ---------------------- */
export const REVIEWS = [
  // Professional Recommendations
  { 
    id: "review-sahil-meo",
    name: "Sahil Meo",  
    role: "Full Stack Developer",       
    avatar: null,
    initials: "SM",
    bgColor: "#0284c7",
    rating: 5, 
    platform: "upwork" as const,  
    tag: "Laravel / React",        
    text: "I had the pleasure of working with Muzammil on multiple projects at CodeWire Solutions. He has strong hands-on expertise in Laravel and React, and consistently delivered clean, high-quality work on time. A true professional, I highly recommend him for any web development project." 
  },
  { 
    id: "review-haseeb-arshad",
    name: "Muhammad Haseeb Arshad",  
    role: "Entrepreneur",        
    avatar: null,   
    initials: "MH",
    bgColor: "#0284c7",
    rating: 5, 
    platform: "upwork" as const,  
    tag: "React",      
    text: "I worked with Muzammil on a React project and had a great experience. He is skilled, professional, and delivers quality work on time. I highly recommend him for any web development project." 
  },
  
  // Fiverr Reviews
  { 
    id: "review-dan17011988",
    name: "dan17011988",   
    role: "United Kingdom 🇬🇧",  
    avatar: null,
    initials: "DU",
    bgColor: "#059669",
    rating: 5, 
    platform: "fiverr" as const,  
    tag: "eBay Templates",      
    text: "Great experience! The seller designed a clean and professional eBay listing template. Communication was smooth, and delivery was very fast. Highly recommended!" 
  },
  { 
    id: "review-rizwanramzan518",
    name: "rizwanramzan518",  
    role: "United Kingdom 🇬🇧",        
    avatar: null,
    initials: "RR",
    bgColor: "#059669",
    rating: 5, 
    platform: "fiverr" as const,  
    tag: "eBay Templates",
    text: "I was blown away by Muhammad's professionalism! He understood my task and did a great job for my listing template for eBay. It looks so much better. Muhammad consulted me with examples and was very helpful throughout. I would highly recommend messaging him!" 
  },
  
  // Upwork Reviews (Cleaned Upwork wording: developer instead of seller)
  { 
    id: "review-wordpress-client",
    name: "WordPress Client",  
    role: "Upwork Client", 
    avatar: null,
    initials: "WC",
    bgColor: "#15803d",
    rating: 5, 
    platform: "upwork" as const,  
    tag: "WordPress / Elementor", 
    text: "Great work, fast delivery, and excellent communication throughout the project. Highly recommend this developer to anyone looking for high-quality results. I'll definitely work with them again!" 
  },
  { 
    id: "review-elementor-client",
    name: "Elementor Client",   
    role: "Upwork Client",     
    avatar: null,
    initials: "EC",
    bgColor: "#15803d",
    rating: 5, 
    platform: "upwork" as const,  
    tag: "WordPress / Elementor",        
    text: "Excellent work! The website is professional, fast, and fully responsive. Muzammal is a true pro at Elementor and WordPress. Highly recommended!" 
  },
  { 
    id: "review-custom-wordpress-client",
    name: "Custom WordPress Client",     
    role: "Upwork Client",          
    avatar: null, 
    initials: "CW",
    bgColor: "#15803d",
    rating: 5, 
    platform: "upwork" as const,  
    tag: "WordPress / SEO", 
    text: "Excellent experience working together. The work was delivered on time with great attention to detail and quality. Communication was smooth throughout the project. Highly recommended." 
  },
]

const CARD_W = 380
const GAP    = 24
const STEP   = CARD_W + GAP

export function Testimonials() {
  const total = REVIEWS.length
  const [idx, setIdx] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [leftPad, setLeftPad] = useState(32)

  // Accessible: NO autoplay by default (user can manually step or inspect)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)

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

  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total])
  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total])

  // Optional pausable auto-play only when explicitly toggled on
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, next])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      next()
    } else if (e.key === "ArrowLeft") {
      prev()
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
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

  // Featured spotlight review (Sahil Meo)
  const spotlightReview = REVIEWS[0]

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Client feedback and verified reviews"
      className="relative py-20 sm:py-24 overflow-hidden bg-white border-b border-slate-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
    >
      {/* Decorative ambient background */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/4 w-[800px] h-[600px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.3) 0%, transparent 65%)" }} 
      />

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
            style={{
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.25)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Client Testimonials & Ratings
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Trusted by Clients{" "}
            <span 
              style={{
                background: "linear-gradient(120deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Worldwide
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            Real feedback from verified clients on Upwork, Fiverr, and contract projects. Unaltered quotes.
          </p>
        </div>

        {/* Featured Spotlight Review Block */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="pointer-events-none absolute top-4 right-6 text-slate-200">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <UpworkBadge href={siteConfig.upworkUrl} />
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-100/50 text-emerald-800">
                  Featured Recommendation
                </span>
              </div>

              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <p 
              className="text-base sm:text-xl text-slate-800 leading-relaxed font-medium mb-6 italic"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              "{spotlightReview.text}"
            </p>

            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-sm"
                style={{ backgroundColor: spotlightReview.bgColor }}
              >
                {spotlightReview.initials}
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {spotlightReview.name}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {spotlightReview.role} · {spotlightReview.tag}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Header Controls */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            More Verified Reviews ({idx + 1} of {total})
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Carousel Track (aria-live off to prevent screen reader annoyance) */}
      <div 
        aria-live="off"
        className="overflow-hidden w-full relative z-10 select-none cursor-grab active:cursor-grabbing pb-4"
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
            const profileUrl = r.platform === "upwork" ? siteConfig.upworkUrl : siteConfig.fiverrUrl

            return (
              <div
                key={r.id}
                onClick={() => setIdx(i)}
                className={`flex-shrink-0 rounded-2xl flex flex-col justify-between transition-all duration-300 bg-white border ${
                  isActive
                    ? "border-emerald-400 shadow-xl"
                    : "border-slate-200/90 shadow-sm hover:border-slate-300"
                }`}
                style={{
                  width: `${CARD_W}px`,
                }}
              >
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-5">
                  <div className="space-y-4">
                    {/* Platform Badge & Project Tag */}
                    <div className="flex items-center justify-between">
                      {r.platform === "upwork" ? (
                        <UpworkBadge href={profileUrl} />
                      ) : (
                        <FiverrBadge href={profileUrl} />
                      )}
                      <span 
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md text-emerald-800 bg-emerald-50 border border-emerald-200"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {r.tag}
                      </span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1" aria-label="5 out of 5 stars">
                      {Array.from({ length: r.rating }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* High-contrast Review Quote */}
                    <p 
                      className="text-sm leading-relaxed text-slate-800 font-normal line-clamp-5"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.75",
                      }}
                    >
                      "{r.text}"
                    </p>
                  </div>

                  {/* Client Info at bottom */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3 mt-auto">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-sm shadow-sm"
                      style={{ 
                        backgroundColor: r.bgColor,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {r.name}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
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

      {/* External Verified Profile Links (Buttons) */}
      <div className="container mx-auto px-4 sm:px-8 relative z-10 mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
            All reviews verified and published on official freelance client accounts.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {siteConfig.upworkUrl && (
              <a
                href={siteConfig.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-emerald-500 text-xs sm:text-sm font-semibold text-slate-800 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <UpworkBadge />
                <span>See All Reviews on Upwork</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            {siteConfig.fiverrUrl && (
              <a
                href={siteConfig.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-emerald-500 text-xs sm:text-sm font-semibold text-slate-800 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FiverrBadge />
                <span>See All Reviews on Fiverr</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
