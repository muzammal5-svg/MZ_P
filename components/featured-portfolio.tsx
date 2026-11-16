"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { defaultProjects, Project } from "@/lib/projects-data"

const CATEGORY_STYLES: Record<string, { dot: string; text: string; bg: string }> = {
  WordPress: { dot: "bg-blue-500", text: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
  Shopify: { dot: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
  "Custom Web": { dot: "bg-cyan-500", text: "text-cyan-700", bg: "bg-cyan-50 border-cyan-200" },
  "eBay Templates": { dot: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
  "AI Automation": { dot: "bg-indigo-500", text: "text-indigo-700", bg: "bg-indigo-50 border-indigo-200" },
  "AI Chatbot": { dot: "bg-purple-500", text: "text-purple-700", bg: "bg-purple-50 border-purple-200" },
}

export function FeaturedPortfolio() {
  const [idx, setIdx] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Curate 8 diverse projects for the homepage showcase
  const featuredProjects = defaultProjects.slice(0, 8)
  const total = featuredProjects.length

  const [cardWidth, setCardWidth] = useState(380)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const updateCardWidth = () => {
      if (typeof window !== "undefined") {
        const w = window.innerWidth
        if (w < 420) {
          setCardWidth(Math.max(280, w - 48))
        } else if (w < 768) {
          setCardWidth(340)
        } else {
          setCardWidth(380)
        }
      }
    }
    updateCardWidth()
    window.addEventListener("resize", updateCardWidth)
    return () => window.removeEventListener("resize", updateCardWidth)
  }, [])

  const minSwipeDistance = 50

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) {
      next()
    } else if (distance < -minSwipeDistance) {
      prev()
    }
  }

  const next = useCallback(() => {
    setIdx((current) => (current + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setIdx((current) => (current - 1 + total) % total)
  }, [total])

  // Auto-scroll every 5.5 seconds, pause on hover/focus
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return
    const interval = setInterval(next, 5500)
    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered, next])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      next()
      setIsAutoPlaying(false)
    } else if (e.key === "ArrowLeft") {
      prev()
      setIsAutoPlaying(false)
    }
  }

  // 3 copies for infinite-loop carousel appearance
  const ITEMS = [...featuredProjects, ...featuredProjects, ...featuredProjects]
  const OFFSET = total
  const GAP = 24

  return (
    <section 
      id="portfolio"
      aria-roledescription="carousel"
      aria-label="Featured projects showcase"
      className="py-24 relative overflow-hidden bg-white border-b border-slate-200/80"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Decorative ambient background */}
      <div 
        className="pointer-events-none absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 bg-emerald-50 border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Proven Client Work
              </span>
            </div>

            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Recent <span style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Case Studies</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              High-converting websites, e-commerce stores, and custom software delivered for global clients.
            </p>
          </div>

          {/* Navigation Controls & Progress Indicator */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Meaningful progress indicator */}
            <div className="text-xs font-semibold text-slate-500" aria-live="polite">
              Project <span className="text-slate-900 font-bold">{idx + 1}</span> of {total}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => { prev(); setIsAutoPlaying(false) }}
                aria-label="Previous project"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => { next(); setIsAutoPlaying(false) }}
                aria-label="Next project"
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

        {/* Carousel Viewport */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden select-none pb-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div 
            className="flex items-stretch"
            style={{ gap: `${GAP}px` }}
            animate={{ x: -(OFFSET + idx) * (cardWidth + GAP) }}
            transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.8 }}
          >
            {ITEMS.map((project, i) => {
              const realIdx = i % total
              const isActive = i === OFFSET + idx
              const hasLive = Boolean(project.liveUrl && project.liveUrl !== "#" && project.liveUrl.trim() !== "")
              const style = CATEGORY_STYLES[project.category] || {
                dot: "bg-emerald-500",
                text: "text-emerald-700",
                bg: "bg-emerald-50 border-emerald-200",
              }

              return (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                  onClick={() => !isActive && setIdx(realIdx)}
                >
                  <div
                    className={`h-full rounded-2xl overflow-hidden flex flex-col justify-between bg-white border transition-all duration-300 ${
                      isActive 
                        ? "border-emerald-400 shadow-xl" 
                        : "border-slate-200/90 shadow-sm hover:border-slate-300"
                    }`}
                  >
                    <div>
                      {/* Standardized 16:10 Thumbnail Frame */}
                      <Link 
                        href={`/portfolio/${project.slug}`}
                        className="relative aspect-[16/10] bg-slate-100 block overflow-hidden group"
                        aria-label={`View case study for ${project.title}`}
                      >
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.niche}`}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Category Badge overlay */}
                        <div className="absolute top-3 left-3">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold border backdrop-blur-sm bg-white/95 ${style.text}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                            {project.category}
                          </span>
                        </div>

                        {/* Status pill */}
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                            {hasLive ? "Live" : "Concept"}
                          </span>
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="p-5">
                        <div className="text-[11px] font-semibold text-emerald-600 mb-1">
                          {project.niche}
                        </div>

                        <h3 
                          className="text-base font-bold text-slate-900 mb-2 leading-snug line-clamp-1 hover:text-emerald-600 transition-colors"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          <Link href={`/portfolio/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold text-slate-400">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-1 text-slate-900 hover:text-emerald-600 transition-colors"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </Link>

                      {hasLive ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={`/contact?service=${encodeURIComponent(project.category)}&project=${encodeURIComponent(project.title)}`}
                          className="text-slate-500 hover:text-emerald-600"
                        >
                          Discuss a Similar Project →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Carousel Dots & Bottom Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {featuredProjects.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => { setIdx(dotIdx); setIsAutoPlaying(false) }}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  dotIdx === idx ? "w-6 bg-emerald-500" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <span>Explore All 37 Projects & Templates in Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
