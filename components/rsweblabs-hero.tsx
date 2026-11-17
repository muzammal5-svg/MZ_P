"use client"

import { ArrowRight, Star, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { siteConfig } from "@/lib/site-config"

// Lazy load TechScroller for optimal Core Web Vitals
const LazyTechScroller = dynamic(
  () => import("@/components/tech-scroller").then((mod) => ({ default: mod.TechScroller })),
  {
    ssr: false,
    loading: () => <div className="h-16 bg-slate-50 animate-pulse" />,
  }
)

const TECHNOLOGIES = [
  "WordPress Development",
  "AI Automation",
  "Shopify Stores",
  "React & Next.js Apps",
  "eBay Custom Templates",
  "AI Chatbot Workflows",
]

const STATIC_FALLBACK_SPECIALTIES = "WordPress · Shopify · Next.js · AI Automation"

export function MZwebSolutionsHero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/#contact"
    }
  }

  // Typewriter animation with SSR static fallback and prefers-reduced-motion safety
  const [mounted, setMounted] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [techIndex, setTechIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (!mounted || prefersReducedMotion) return

    const currentWord = TECHNOLOGIES[techIndex]

    // Pause when full word is typed out
    if (!isDeleting && subIndex === currentWord.length) {
      const timer = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timer)
    }

    // Pause briefly when deleted before next word
    if (isDeleting && subIndex === 0) {
      const timer = setTimeout(() => {
        setIsDeleting(false)
        setTechIndex((prev) => (prev + 1) % TECHNOLOGIES.length)
      }, 350)
      return () => clearTimeout(timer)
    }

    const speed = isDeleting ? 45 : 80
    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timer)
  }, [subIndex, isDeleting, techIndex, mounted, prefersReducedMotion])

  const displayedText = TECHNOLOGIES[techIndex].substring(0, subIndex)

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#f8f9fa" }}
    >
      {/* Decorative ambient gradients */}
      <div
        className="absolute top-16 left-8 w-72 h-72 rounded-full opacity-25 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-28 left-28 w-96 h-96 rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-32 pb-20 sm:pb-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-5 mt-4">

          {/* LEFT COLUMN - Outcome-Led Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 animate-in fade-in duration-700">

            {/* Eyebrow keyword badge + Availability status */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-semibold text-slate-800 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Full-Stack Web Developer
              </span>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-emerald-800 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Available for New Projects
                </span>
              </div>
            </div>

            {/* Outcome-Led Headline */}
            <div>
              {/* Option A (User Approved): */}
              <h1
                className="font-bold leading-[1.12] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#111827",
                  fontWeight: 700,
                }}
              >
                I build fast{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  WordPress, Shopify &amp; Next.js
                </span>{" "}
                websites that turn visitors into customers.
              </h1>
              {/* Alternative Headline 1: "High-Converting Websites & AI Automations Engineered for Fast-Growing Businesses." */}
              {/* Alternative Headline 2: "Web Developer & E-Commerce Specialist: Delivering Fast, Scalable WordPress & Shopify Solutions." */}

              {/* Specializing In Line with Server-Side Fallback */}
              <p
                className="text-base sm:text-lg md:text-xl mt-3.5 font-medium text-slate-700 flex flex-wrap items-center gap-1.5"
                style={{ fontFamily: "'Poppins', sans-serif", minHeight: "2rem" }}
              >
                <span className="text-slate-500">Specializing in</span>{" "}
                {!mounted || prefersReducedMotion ? (
                  <span className="font-semibold text-emerald-700">
                    {STATIC_FALLBACK_SPECIALTIES}
                  </span>
                ) : (
                  <span
                    className="font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #059669 0%, #0891b2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                    }}
                  >
                    {displayedText}
                    <span className="animate-pulse text-emerald-500 ml-0.5">|</span>
                  </span>
                )}
              </p>
            </div>

            {/* Crisp conversion copy */}
            <p
              className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            >
              Transform your digital storefront or web app with sub-second loading speeds, tailored theme development, high-converting checkout flows, and automated AI workflows built to scale your revenue.
            </p>

            {/* 3 Action-Oriented CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              {/* Primary CTA */}
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  fontWeight: 600,
                }}
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-slate-800 bg-white border border-slate-300 hover:border-emerald-500 hover:text-emerald-700 shadow-xs hover:shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                View My Work
              </Link>

              {/* Tertiary CTA - Subtle WhatsApp */}
              {siteConfig.whatsappUrl && (
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-700 hover:text-emerald-700 bg-emerald-50/60 hover:bg-emerald-100/60 border border-emerald-200/50 transition-all duration-200"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  aria-label="Chat directly on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              )}
            </div>

            {/* Compact Proof & Trust Strip Above the Fold */}
            <div className="pt-2 border-t border-slate-200/80">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                
                {/* Upwork Badge */}
                {siteConfig.upworkUrl ? (
                  <a
                    href={siteConfig.upworkUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-emerald-600 transition-colors group"
                    title="View verified client reviews on Upwork"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#14a800]" />
                    <span className="font-semibold text-slate-900 group-hover:text-emerald-700">Upwork</span>
                    <span className="text-slate-500">· {siteConfig.metrics.rating} ★</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-600" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#14a800]" />
                    <span className="font-semibold text-slate-900">Upwork</span>
                    <span className="text-slate-500">· {siteConfig.metrics.rating} ★</span>
                  </span>
                )}

                <span className="hidden sm:inline text-slate-300">|</span>

                {/* Fiverr Badge */}
                {siteConfig.fiverrUrl ? (
                  <a
                    href={siteConfig.fiverrUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-emerald-600 transition-colors group"
                    title="View verified client reviews on Fiverr"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1dbf73]" />
                    <span className="font-semibold text-slate-900 group-hover:text-emerald-700">Fiverr</span>
                    <span className="text-slate-500">· {siteConfig.metrics.rating} ★</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-600" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#1dbf73]" />
                    <span className="font-semibold text-slate-900">Fiverr</span>
                    <span className="text-slate-500">· {siteConfig.metrics.rating} ★</span>
                  </span>
                )}

                {siteConfig.metrics.projectsCount && (
                  <>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <div className="inline-flex items-center gap-1.5">
                      <span className="font-semibold text-slate-900">{siteConfig.metrics.projectsCount}</span>
                      <span className="text-slate-500">Projects</span>
                    </div>
                  </>
                )}

                {siteConfig.metrics.countriesCount && (
                  <>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <div className="inline-flex items-center gap-1.5">
                      <span className="font-semibold text-slate-900">{siteConfig.metrics.countriesCount}</span>
                      <span className="text-slate-500">Countries</span>
                    </div>
                  </>
                )}

                {siteConfig.metrics.rating && (
                  <>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <div className="inline-flex items-center gap-1 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-slate-900">{siteConfig.metrics.rating}</span>
                      <span className="text-slate-500">Rating</span>
                    </div>
                  </>
                )}

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - Digital Development Services Showcase */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-in fade-in slide-in-from-right-4 duration-800 delay-300">
            <div className="relative w-full max-w-[520px] mx-auto">
              
              {/* Decorative ambient backdrop glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none blur-3xl scale-95"
                style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(6,182,212,0.2) 60%, transparent 80%)" }}
              />

              {/* 3D Showcase Image */}
              <div className="relative w-full aspect-[3/2] transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/digital-development-services-collage.png"
                  alt="WordPress, Shopify, Next.js, and AI Automation Services Showcase"
                  fill
                  priority
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 440px, 100vw"
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Decorative subtle ambient accent */}
              <div
                className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-30 pointer-events-none blur-2xl"
                style={{ background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Tech scroller marquee — absolute bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <LazyTechScroller />
      </div>
    </section>
  )
}
