"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

// Consistent brand icon wrappers
const SERVICE_ICONS: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  wordpress: {
    color: "#21759b",
    bg: "rgba(33, 117, 155, 0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.6 12c0-.98.17-1.92.48-2.8l2.64 7.23A8.4 8.4 0 013.6 12zm8.4 8.4a8.4 8.4 0 01-2.38-.34l2.53-7.35 2.46 6.74a8.4 8.4 0 01-2.61.95zM13.3 8.1c.57-.03 1.08-.09 1.08-.09.51-.06.45-.81-.06-.78 0 0-1.53.12-2.52.12-.93 0-2.49-.12-2.49-.12-.51-.03-.57.75-.06.78 0 0 .48.06 1 .09l1.48 4.06-2.08 6.23-3.46-9.5c.57-.03 1.08-.09 1.08-.09.51-.06.45-.81-.06-.78 0 0-1.53.12-2.52.12-.18 0-.39 0-.6-.01A8.4 8.4 0 0112 3.6c2.2 0 4.2.84 5.7 2.22-.04 0-.07-.01-.11-.01-.93 0-1.59.81-1.59 1.68 0 .78.45 1.44.93 2.22.36.63.78 1.44.78 2.61 0 .81-.31 1.75-.72 3.06l-.94 3.15L13.3 8.1zm3.54 9.72l2.44-7.06c.46-1.14.61-2.05.61-2.86 0-.29-.02-.56-.05-.82A8.4 8.4 0 0120.4 12a8.4 8.4 0 01-3.56 6.82z"/>
      </svg>
    ),
  },
  shopify: {
    color: "#22c55e",
    bg: "rgba(34, 197, 94, 0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M15.337 23.979l7.216-1.561s-2.597-17.566-2.617-17.693c-.019-.126-.126-.209-.232-.209s-2.133-.146-2.133-.146-.854-.854-1.561-1.561v21.17zM13.27 6.088s-.232-.063-.602-.063c-.063 0-.126 0-.189.019-.441-1.288-1.225-2.471-2.597-2.471h-.126C9.378 2.8 8.629 2.4 8 2.4c-3.892.019-5.748 4.869-6.327 7.34-.602.189-1.204.378-1.806.567-.559.17-.578.189-.643.713C-.839 11.39 0 18.5 0 18.5l13.27 2.471V6.088zm-3.2 1.204c-.756.232-1.582.484-2.408.736.232-.882.673-1.764 1.204-2.345.189.504.378 1.204.378 1.764l.826-.155zm-1.764-2.597c.189 0 .378.063.567.189-.504.567-.882 1.449-1.099 2.282-.567.17-1.099.336-1.582.504.441-1.449 1.449-2.975 2.114-2.975zm1.764 11.748l-2.975-.882.882-4.228 2.093 1.099v4.011zm1.764.441V12.5l-2.093-1.099.882-4.228 1.211-.378v10.09z"/>
      </svg>
    ),
  },
  frontend: {
    color: "#0284c7",
    bg: "rgba(2, 132, 199, 0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M12 9.861A2.139 2.139 0 1012 14.139 2.139 2.139 0 1012 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 001.363 3.578 23.442 23.442 0 00-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zM17.992 16.255l-.133-.468a23.557 23.557 0 00-1.364-3.578 23.663 23.663 0 001.364-3.578l.133-.468.473.12c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.046a24.973 24.973 0 011.182 3.046c2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.752 24.752 0 01-1.182 3.046zM5.31 8.945l-.133-.468C4.188 5.283 4.488 3.15 6 2.276c1.512-.875 3.408.196 5.476 2.946l.284.381-.288.379a23.482 23.482 0 00-2.096 3.23 23.447 23.447 0 00-3.578-.668l-.488-.599zm1.582-.24c.963.078 1.91.22 2.826.42a24.73 24.73 0 011.477-2.545c-1.66-2.096-3.118-2.787-3.977-2.287-.858.495-1.088 2.055-.326 4.412zm9.832 9.558c-1.511.875-3.407-.196-5.476-2.946l-.284-.381.288-.379a23.493 23.493 0 002.096-3.23 23.53 23.53 0 003.578.668l.488.6.133.467c.989 3.195.689 5.328-.823 6.201zm-4.938-3.545c1.66 2.096 3.118 2.787 3.976 2.287.859-.495 1.088-2.055.327-4.412a24.973 24.973 0 01-2.826-.42 24.73 24.73 0 01-1.477 2.545z"/>
      </svg>
    ),
  },
  "ai-automation": {
    color: "#6366f1",
    bg: "rgba(99, 102, 241, 0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
      </svg>
    ),
  },
  "ai-chatbot": {
    color: "#8b5cf6",
    bg: "rgba(139, 92, 246, 0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="9" cy="10" r="1"/>
        <circle cx="15" cy="10" r="1"/>
        <path d="M9 14s1 1 3 1 3-1 3-1"/>
      </svg>
    ),
  },
  "ebay-templates": {
    color: "#ef4444",
    bg: "rgba(239, 68, 68, 0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
}

export function MZwebSolutionsServices() {
  const serviceList = Object.values(siteConfig.serviceDetails)

  return (
    <section 
      id="services"
      aria-label="Services offered"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
    >
      {/* Decorative ambient elements */}
      <div 
        className="pointer-events-none absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)" }} 
      />
      <div 
        className="pointer-events-none absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)" }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.25)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Tailored Solutions
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900"
            style={{
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Services Built for{" "}
            <span 
              style={{ 
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Real Business Results
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Every project is engineered for speed, clean code, and maximum conversion. Transparent pricing with zero hidden fees.
          </p>
        </motion.div>

        {/* Services Grid (6 Core Services) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {serviceList.map((service, index) => {
            const visual = SERVICE_ICONS[service.slug] || {
              color: "#10b981",
              bg: "rgba(16,185,129,0.1)",
              icon: <div className="w-8 h-8 rounded-full bg-emerald-500" />,
            }

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div
                  className="h-full p-7 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(226, 232, 240, 0.9)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                  }}
                >
                  <div>
                    {/* Icon and Starting Price Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div 
                        className="p-3.5 rounded-xl inline-flex items-center justify-center"
                        style={{
                          background: visual.bg,
                          color: visual.color,
                        }}
                      >
                        {visual.icon}
                      </div>

                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: visual.bg,
                          color: visual.color,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Starting at {service.startingPrice}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl font-bold text-slate-900 mb-2.5"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    
                    {/* One-line Outcome */}
                    <p 
                      className="text-sm text-slate-600 leading-relaxed mb-5"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {service.outcome}
                    </p>

                    {/* 3 Deliverable Bullets */}
                    <div className="pt-4 border-t border-slate-100 mb-6 space-y-2.5">
                      {service.deliverables.map((item, dIndex) => (
                        <div key={dIndex} className="flex items-start gap-2.5">
                          <CheckCircle2 
                            className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" 
                            aria-hidden="true" 
                          />
                          <span 
                            className="text-xs text-slate-700 leading-snug font-medium"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clear CTA to dedicated service subpage */}
                  <div className="pt-2">
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-all group"
                      style={{
                        background: "rgba(241, 245, 249, 0.8)",
                        color: "#0f172a",
                        border: "1px solid rgba(226, 232, 240, 0.9)",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      <span className="group-hover:text-emerald-600 transition-colors">
                        View Service & Pricing
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
            }}
          >
            <span>Explore All 6 Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
