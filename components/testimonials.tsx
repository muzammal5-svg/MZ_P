"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

/* -- Platform badges ------------------------------------------------------- */
const UpworkBadge = () => (
  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md"
    style={{ background: "rgba(20,163,74,0.1)", border: "1px solid rgba(20,163,74,0.2)" }}>
    <svg viewBox="0 0 24 24" fill="#14a34a" className="w-3 h-3 flex-shrink-0">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
    </svg>
    <span style={{ color: "#4ade80", fontSize: "10px", fontWeight: 600, fontFamily: "'Inter',sans-serif", letterSpacing: "0.04em" }}>
      Upwork
    </span>
  </div>
)

const FiverrBadge = () => (
  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md"
    style={{ background: "rgba(29,191,115,0.1)", border: "1px solid rgba(29,191,115,0.2)" }}>
    <svg viewBox="0 0 24 24" fill="#1dbf73" className="w-3 h-3 flex-shrink-0">
      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.242c0-3.073-2.479-5.561-5.532-5.561V5.08c3.736 0 6.774 3.055 6.774 6.803zM14.721 8.333c1.678 0 3.04 1.371 3.04 3.062h-1.242c0-.999-.809-1.81-1.798-1.81V8.333zm-1.243 3.062c0-.68.549-1.234 1.243-1.234v1.234h-1.243zm-9.999 5.561h1.243V11.39H3.479v5.566zm1.243-7.44c0-.68-.549-1.234-1.243-1.234v1.234h1.243z"/>
    </svg>
    <span style={{ color: "#1dbf73", fontSize: "10px", fontWeight: 600, fontFamily: "'Inter',sans-serif", letterSpacing: "0.04em" }}>
      Fiverr
    </span>
  </div>
)

/* -- Data ------------------------------------------------------------------ */
const REVIEWS = [
  // LinkedIn Recommendations
  { 
    name: "Sahil Meo",  
    role: "Full Stack Developer | JavaScript Expert",       
    avatar: null,
    initials: "SM",
    bgColor: "#0077b5",
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
    bgColor: "#0077b5",
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
    bgColor: "#1dbf73",
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
    bgColor: "#1dbf73",
    rating: 5, 
    platform: "fiverr",  
    tag: "eBay Templates",
    text: "I was blown away by Muhammad's professionalism!! He understood my task and did great job for my listing template for eBay. It look so much better. Muhammad, consult me with some examples and was very happy how profession he is. I would highly recommending messaging him and he will cater for your..." 
  },
  
  // Upwork Reviews
  { 
    name: "WordPress Client",  
    role: "Upwork Client", 
    avatar: null,
    initials: "WC",
    bgColor: "#14a34a",
    rating: 5, 
    platform: "upwork",  
    tag: "WordPress / Elementor", 
    text: "Great work, fast delivery, and excellent communication throughout the project. Highly recommend this seller to anyone looking for high-quality results. I'll definitely work with them again!" 
  },
  { 
    name: "Elementor Client",   
    role: "Upwork Client",     
    avatar: null,
    initials: "EC",
    bgColor: "#14a34a",
    rating: 5, 
    platform: "upwork",  
    tag: "WordPress / Elementor",        
    text: "Excellent work! The website is professional, fast, and fully responsive. The seller is a pro at Elementor. Highly recommended!" 
  },
  { 
    name: "Custom WordPress Client",     
    role: "Upwork Client",          
    avatar: null, 
    initials: "CW",
    bgColor: "#14a34a",
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

  /*
    leftPad = the container's left edge offset from viewport left.
    At idx=0 - first card starts at leftPad (aligned with heading).
    As idx increases - track shifts left; when shift > leftPad the track is flush.
  */
  const [leftPad, setLeftPad] = useState(32)

  useEffect(() => {
    const measure = () => {
      const vw = window.innerWidth
      // container max-width 1140px centered, with 32px inner padding
      const containerW = Math.min(1140, vw)
      const pad = Math.max(16, Math.round((vw - containerW) / 2) + 32)
      setLeftPad(pad)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  // Single copy of reviews with modulo arithmetic for infinite loop
  const ITEMS  = REVIEWS
  const OFFSET = 0

  /*
    translateX:
    - starts at +leftPad (first card aligned with container left)
    - each step subtracts STEP
    - once idx * STEP > leftPad the track is flush left (negative x)
  */
  const translateX = leftPad - (OFFSET + idx) * STEP

  const next = useCallback(() => setIdx(i => (i + 1) % total), [total])
  const prev = useCallback(() => setIdx(i => (i - 1 + total) % total), [total])

  // Auto-scroll every 5 seconds
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 5000)
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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
    >
      {/* Gradient background pattern instead of video - removed duplicate visa.mp4 for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[800px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 65%)" }} />

      {/* -- Header � uses container padding -- */}
      <div className="container mx-auto px-4 sm:px-8 mb-12 relative z-10">
        <div className="flex items-center justify-between gap-6 align">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.18)",
                color: "#a5b4fc",
                fontFamily: "'Inter',sans-serif",
                letterSpacing: "0.06em",
              }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#6366f1" }} />
              Client Reviews
            </div> */}

            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "#0f172a",
              }}>
              Trusted by clients
              <br />
              <span style={{
                background: "linear-gradient(120deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                on Upwork &amp; Fiverr
              </span>
            </h2>

            {/* <div className="flex items-center gap-1.5 mt-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              <span className="text-sm ml-2" style={{ color: "#9CA3AF", fontFamily: "'Inter',sans-serif" }}>
                5.0 average � 100+ reviews
              </span>
            </div> */}
          </motion.div>

          {/* Arrows */}
          <div className="flex items-center gap-3 flex-shrink-0 pb-1">
            <motion.button
              onClick={() => { prev(); setIsAutoPlaying(false) }}
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
              aria-label="Previous"
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "2px solid rgba(16,185,129,0.2)",
                color: "#3b82f6",
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => { next(); setIsAutoPlaying(false) }}
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
              aria-label="Next"
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                border: "none",
                color: "#fff",
                boxShadow: "0 0 24px rgba(16,185,129,0.4)",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* -- Carousel track � full viewport width, no padding -- */}
      <div className="overflow-hidden w-full relative z-10">
        <motion.div
          className="flex"
          style={{ gap: `${GAP}px` }}
          animate={{ x: translateX }}
          transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.8 }}
        >
          {ITEMS.map((r, i) => {
            const realIdx  = i % total
            // active = the card in the middle copy matching current idx
            const isActive = i === OFFSET + idx

            return (
              <div
                key={i}
                onClick={() => !isActive && setIdx(realIdx)}
                className="flex-shrink-0 rounded-2xl overflow-hidden"
                style={{
                  width:      `${CARD_W}px`,
                  background: isActive
                    ? "linear-gradient(145deg,#ffffff 0%,#f8fafc 100%)"
                    : "#ffffff",
                  border: `1px solid ${isActive
                    ? "rgba(16,185,129,0.3)"
                    : "rgba(148,163,184,0.2)"}`,
                  boxShadow: isActive
                    ? "0 0 0 1px rgba(16,185,129,0.15), 0 20px 60px rgba(16,185,129,0.15)"
                    : "0 4px 12px rgba(0,0,0,0.05)",
                  opacity:   isActive ? 1 : 0.6,
                  cursor:    isActive ? "default" : "pointer",
                  transform: isActive ? "translateY(0px)" : "translateY(6px)",
                  transition: "opacity 0.35s ease, border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease",
                }}
              >
                {/* top accent line */}
                <div className="h-px w-full" style={{
                  background: isActive
                    ? "linear-gradient(90deg, transparent, #10b981 30%, #06b6d4 70%, transparent)"
                    : "rgba(16,185,129,0.1)",
                }} />

                <div className="p-6 flex flex-col gap-4">
                  {/* platform + tag */}
                  <div className="flex items-center justify-between">
                    {r.platform === "upwork" ? <UpworkBadge /> : <FiverrBadge />}
                    <span className="text-[10px] font-medium px-2.5 py-1 rounded-md"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.15)",
                        color: "#3b82f6",
                        fontFamily: "'Poppins',sans-serif",
                      }}>
                      {r.tag}
                    </span>
                  </div>

                  {/* stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* text */}
                  <p style={{
                    color: isActive ? "#334155" : "#64748b",
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.8,
                    transition: "color 0.35s ease",
                  }}>
                    "{r.text}"
                  </p>

                  {/* divider */}
                  <div style={{ height: "1px", background: "rgba(148,163,184,0.2)" }} />

                  {/* author */}
                  <div className="flex items-center gap-3">
                    {r.avatar ? (
                      // Show image avatar using Next.js Image for optimization
                      <Image
                        src={r.avatar}
                        alt={r.name}
                        width={36}
                        height={36}
                        loading="lazy"
                        className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                        style={{ border: "2px solid rgba(16,185,129,0.15)" }}
                      />
                    ) : (
                      // Show initials avatar
                      <div 
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-white text-sm"
                        style={{ 
                          backgroundColor: r.bgColor,
                          border: "2px solid rgba(255,255,255,0.2)",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {r.initials}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "#0f172a", fontFamily: "'Poppins',sans-serif", fontWeight: 700 }}>
                        {r.name}
                      </div>
                      <div className="text-xs mt-0.5 font-medium" style={{ color: "#64748b", fontFamily: "'Poppins',sans-serif" }}>
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

      {/* -- Dots � aligned with container -- */}
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex items-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIdx(i); setIsAutoPlaying(false) }}
              aria-label={`Review ${i + 1}`}
              style={{
                height: "4px",
                width: i === idx ? "32px" : "4px",
                borderRadius: "9999px",
                background: i === idx
                  ? "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)"
                  : "rgba(148,163,184,0.3)",
                border: "none",
                cursor: "pointer",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

    </section>
  )
}
