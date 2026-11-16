"use client"

import { motion, useInView } from "framer-motion"
import { 
  Code2, 
  Zap, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Compass, 
  Layout, 
  Cpu, 
  Rocket, 
  Star, 
  ExternalLink 
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { siteConfig } from "@/lib/site-config"

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  useEffect(() => {
    if (!isInView) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target)
      return
    }

    const duration = 1200
    const startTime = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const current = Math.floor(progress * target)
      setCount(current)
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }
    requestAnimationFrame(step)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const WORK_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Deep-dive into your business goals, target audience, conversion bottlenecks, and project requirements.",
    icon: Compass,
    color: "#10b981",
  },
  {
    step: "02",
    title: "UX/UI & Architecture",
    description: "Architecting high-converting layouts, responsive wireframes, and modern component hierarchies.",
    icon: Layout,
    color: "#06b6d4",
  },
  {
    step: "03",
    title: "Fast & Clean Build",
    description: "Developing with modern best practices, clean modular code, sub-second PageSpeed, and accessibility.",
    icon: Cpu,
    color: "#3b82f6",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description: "Production deployment, Core Web Vitals audit, technical SEO verification, and ongoing client support.",
    icon: Rocket,
    color: "#8b5cf6",
  },
]

export function AboutBento() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}
    >
      {/* Decorative ambient lighting */}
      <div 
        className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} 
      />
      <div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)" }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto"
        >
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-emerald-50 border border-emerald-200/60 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-800 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              About {siteConfig.name}
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Engineering Fast Digital Solutions That Drive{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Measurable Revenue
            </span>
          </h2>
        </motion.div>

        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24">
          
          {/* Left Column - Alternate Crop & Framed Developer Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame with unique rounded-3xl styling and ambient border */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200/80 p-2 sm:p-3"
              style={{
                boxShadow: "0 20px 50px -10px rgba(16,185,129,0.18)",
              }}
            >
              <div 
                className="relative w-full rounded-2xl overflow-hidden bg-slate-900" 
                style={{ aspectRatio: "4/5", maxHeight: "560px" }}
              >
                {/* Alternate crop focusing on developer presence with subtle zoom */}
                <Image
                  src="/professional-developer-portrait.png"
                  alt={`${siteConfig.name} - ${siteConfig.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  quality={90}
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Rating Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 flex items-center gap-1.5 text-xs text-white font-medium shadow-md">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>5.0 Rated Freelancer</span>
                </div>

                {/* Bottom Card Summary */}
                <div 
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-slate-900/85 border border-white/15 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {siteConfig.name}
                      </h3>
                      <p className="text-xs font-medium text-emerald-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {siteConfig.title} · {siteConfig.metrics.yearsExperience} Experience
                      </p>
                    </div>
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-gradient-to-br from-emerald-500 to-cyan-500 text-white"
                    >
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient decorative glow */}
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-30 blur-2xl -z-10"
              style={{ background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" }} 
            />
          </motion.div>

          {/* Right Column - Credible Copy, Pillars, and Live Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            {/* Story & Positioning */}
            <div className="space-y-4">
              <p 
                className="text-base sm:text-lg leading-relaxed text-slate-700"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Hi, I'm <strong className="text-slate-950 font-semibold">{siteConfig.name}</strong>. Over the past{" "}
                <strong className="text-slate-950 font-semibold">{siteConfig.metrics.yearsExperience}</strong>, I have specialized in bridging high-impact web design with bulletproof technical engineering.
              </p>
              <p 
                className="text-base sm:text-lg leading-relaxed text-slate-600"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                I have delivered <strong className="text-slate-900 font-semibold">{siteConfig.metrics.projectsCount} projects</strong> for clients across <strong className="text-slate-900 font-semibold">{siteConfig.metrics.countriesCount} countries</strong> — ranging from custom high-converting WordPress themes and custom Shopify stores to modern React/Next.js web apps and automated AI workflows.
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-1">
              {[
                { 
                  label: "WordPress",
                  niche: "Themes & WooCommerce",
                  color: "#21759b",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.6 12c0-.98.17-1.92.48-2.8l2.64 7.23A8.4 8.4 0 013.6 12zm8.4 8.4a8.4 8.4 0 01-2.38-.34l2.53-7.35 2.46 6.74a8.4 8.4 0 01-2.61.95zM13.3 8.1c.57-.03 1.08-.09 1.08-.09.51-.06.45-.81-.06-.78 0 0-1.53.12-2.52.12-.93 0-2.49-.12-2.49-.12-.51-.03-.57.75-.06.78 0 0 .48.06 1 .09l1.48 4.06-2.08 6.23-3.46-9.5c.57-.03 1.08-.09 1.08-.09.51-.06.45-.81-.06-.78 0 0-1.53.12-2.52.12-.18 0-.39 0-.6-.01A8.4 8.4 0 0112 3.6c2.2 0 4.2.84 5.7 2.22-.04 0-.07-.01-.11-.01-.93 0-1.59.81-1.59 1.68 0 .78.45 1.44.93 2.22.36.63.78 1.44.78 2.61 0 .81-.31 1.75-.72 3.06l-.94 3.15L13.3 8.1zm3.54 9.72l2.44-7.06c.46-1.14.61-2.05.61-2.86 0-.29-.02-.56-.05-.82A8.4 8.4 0 0120.4 12a8.4 8.4 0 01-3.56 6.82z"/>
                    </svg>
                  )
                },
                { 
                  label: "Shopify",
                  niche: "Liquid & E-Commerce",
                  color: "#96bf48",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M15.337 23.979l7.216-1.561s-2.597-17.566-2.617-17.693c-.019-.126-.126-.209-.232-.209s-2.133-.146-2.133-.146-.854-.854-1.561-1.561v21.17zM13.27 6.088s-.232-.063-.602-.063c-.063 0-.126 0-.189.019-.441-1.288-1.225-2.471-2.597-2.471h-.126C9.378 2.8 8.629 2.4 8 2.4c-3.892.019-5.748 4.869-6.327 7.34-.602.189-1.204.378-1.806.567-.559.17-.578.189-.643.713C-.839 11.39 0 18.5 0 18.5l13.27 2.471V6.088zm-3.2 1.204c-.756.232-1.582.484-2.408.736.232-.882.673-1.764 1.204-2.345.189.504.378 1.204.378 1.764l.826-.155zm-1.764-2.597c.189 0 .378.063.567.189-.504.567-.882 1.449-1.099 2.282-.567.17-1.099.336-1.582.504.441-1.449 1.449-2.975 2.114-2.975zm1.764 11.748l-2.975-.882.882-4.228 2.093 1.099v4.011zm1.764.441V12.5l-2.093-1.099.882-4.228 1.211-.378v10.09z"/>
                    </svg>
                  )
                },
                { 
                  label: "React & Next.js",
                  niche: "App Router & APIs",
                  color: "#0891b2",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 9.861A2.139 2.139 0 1012 14.139 2.139 2.139 0 1012 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 001.363 3.578 23.442 23.442 0 00-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zM17.992 16.255l-.133-.468a23.557 23.557 0 00-1.364-3.578 23.663 23.663 0 001.364-3.578l.133-.468.473.12c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.046a24.973 24.973 0 011.182 3.046c2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.752 24.752 0 01-1.182 3.046zM5.31 8.945l-.133-.468C4.188 5.283 4.488 3.15 6 2.276c1.512-.875 3.408.196 5.476 2.946l.284.381-.288.379a23.482 23.482 0 00-2.096 3.23 23.447 23.447 0 00-3.578-.668l-.488-.599zm1.582-.24c.963.078 1.91.22 2.826.42a24.73 24.73 0 011.477-2.545c-1.66-2.096-3.118-2.787-3.977-2.287-.858.495-1.088 2.055-.326 4.412zm9.832 9.558c-1.511.875-3.407-.196-5.476-2.946l-.284-.381.288-.379a23.493 23.493 0 002.096-3.23 23.53 23.53 0 003.578.668l.488.6.133.467c.989 3.195.689 5.328-.823 6.201zm-4.938-3.545c1.66 2.096 3.118 2.787 3.976 2.287.859-.495 1.088-2.055.327-4.412a24.973 24.973 0 01-2.826-.42 24.73 24.73 0 01-1.477 2.545z"/>
                    </svg>
                  )
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border border-slate-200/90 bg-white/90 shadow-2xs text-center flex flex-col items-center gap-1.5"
                >
                  <div style={{ color: card.color }}>
                    {card.icon}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {card.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {card.niche}
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Checklist */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
              {[
                "PageSpeed 95+ performance optimization",
                "High-converting checkout & sales funnels",
                "Clean, maintainable Next.js & PHP codebase",
                "Direct communication & reliable delivery",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-emerald-100 text-emerald-700">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Count-Up Animated Verified Stats */}
            <div 
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-5 pb-2 border-t border-slate-200"
            >
              <div className="text-left">
                <div 
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <Counter target={100} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  Projects Delivered
                </div>
              </div>

              <div className="text-left">
                <div 
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <Counter target={10} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  Countries Served
                </div>
              </div>

              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <span>5.0</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium flex flex-wrap items-center gap-1">
                  <span>on</span>
                  {siteConfig.upworkUrl ? (
                    <a 
                      href={siteConfig.upworkUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      Upwork
                    </a>
                  ) : (
                    <span className="text-slate-700 font-semibold">Upwork</span>
                  )}
                  <span>&amp;</span>
                  {siteConfig.fiverrUrl ? (
                    <a 
                      href={siteConfig.fiverrUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      Fiverr
                    </a>
                  ) : (
                    <span className="text-slate-700 font-semibold">Fiverr</span>
                  )}
                </div>
              </div>
            </div>

            {/* Direct Work Link */}
            <div className="pt-2">
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                }}
              >
                Explore Selected Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* "How I Work" Process Flow */}
        <div className="pt-12 border-t border-slate-200/80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <h3 
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              How I Work: <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">From Concept to Launch</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              A transparent, outcome-focused process ensuring on-time delivery and predictable results.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_STEPS.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                        style={{
                          background: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 tracking-wider">
                        STEP {item.step}
                      </span>
                    </div>

                    <h4 
                      className="text-base font-bold text-slate-900 mb-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Clear Milestones</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
