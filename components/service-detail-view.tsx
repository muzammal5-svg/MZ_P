"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  ExternalLink, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck,
  Clock,
  Layers,
  ArrowUpRight
} from "lucide-react"
import { siteConfig, ServiceItem } from "@/lib/site-config"
import { defaultProjects, Project } from "@/lib/projects-data"

/* -- Platform badge helpers ------------------------------------------------ */
const UpworkBadge = () => (
  <div 
    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md"
    style={{ background: "rgba(20,163,74,0.12)", border: "1px solid rgba(20,163,74,0.3)" }}
  >
    <svg viewBox="0 0 24 24" fill="#15803d" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
    </svg>
    <span style={{ color: "#15803d", fontSize: "11px", fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
      Upwork Verified
    </span>
  </div>
)

const FiverrBadge = () => (
  <div 
    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md"
    style={{ background: "rgba(29,191,115,0.12)", border: "1px solid rgba(29,191,115,0.3)" }}
  >
    <svg viewBox="0 0 24 24" fill="#15803d" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.242c0-3.073-2.479-5.561-5.532-5.561V5.08c3.736 0 6.774 3.055 6.774 6.803zM14.721 8.333c1.678 0 3.04 1.371 3.04 3.062h-1.242c0-.999-.809-1.81-1.798-1.81V8.333zm-1.243 3.062c0-.68.549-1.234 1.243-1.234v1.234h-1.243zm-9.999 5.561h1.243V11.39H3.479v5.566zm1.243-7.44c0-.68-.549-1.234-1.243-1.234v1.234h1.243z"/>
    </svg>
    <span style={{ color: "#047857", fontSize: "11px", fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
      Fiverr Verified
    </span>
  </div>
)

interface ServiceDetailViewProps {
  service: ServiceItem
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Filter relevant portfolio items from defaultProjects
  const relevantProjects = defaultProjects
    .filter((p) => p.category === service.category)
    .slice(0, 4)

  // Structured Data: BreadcrumbList
  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${siteConfig.siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `${siteConfig.siteUrl}/services/${service.slug}`,
      },
    ],
  }

  // Structured Data: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900">
        
        {/* Breadcrumb Navigation */}
        <div className="pt-24 pb-4 border-b border-slate-200/80 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/services" className="hover:text-emerald-600 transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 font-semibold" aria-current="page">{service.shortTitle}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-white border-b border-slate-200/80">
          <div 
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.3) 0%, transparent 70%)" }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Category & Price Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-emerald-50 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {service.category} Service · Starting at {service.startingPrice}
                </span>
              </div>

              {/* Single H1 on the page */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 tracking-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {service.title}
              </motion.h1>

              {/* Outcome-led Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl text-slate-700 mb-4 max-w-3xl mx-auto font-medium leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {service.outcome}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-sm sm:text-base text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                {service.priceNote}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Get a Free Quote
                </Link>

                <a
                  href="#portfolio"
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  View Case Studies
                </a>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors inline-flex items-center gap-1.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Chat on WhatsApp
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-20 border-b border-slate-200/80 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Target Fit
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Who This Service Is Designed For
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Tailored solutions mapped directly to your business model and operational needs.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {service.whoItsFor.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center mb-4">
                        0{idx + 1}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included (Scope & Deliverables) */}
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Comprehensive Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  What's Included in the Deliverables
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Clean engineering standards, performance optimization, and accessible architecture on every project.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.whatsIncluded.map((inc, i) => (
                  <div 
                    key={i}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {inc.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {inc.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proven 4-Step Process */}
        <section className="py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Execution Flow
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  How We Deliver Your Project
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  A predictable, 4-step delivery pipeline from kickoff to handover.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-2xl font-black text-emerald-500 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {step.step}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Pricing Card */}
        {/* TODO: [Optional] Confirm if you'd like 3 tiered packages (Starter / Growth / Pro) with specific deliverable tables. */}
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-xl relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl bg-emerald-400" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Transparent Pricing
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {service.title} Package
                      </h3>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Starting at {service.startingPrice}
                      </div>
                      <span className="text-xs text-slate-400">Fixed-price milestone scoping</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                    {service.priceNote} All engagements include direct communication with Muzammal Zaheer, milestone previews, and post-launch support.
                  </p>

                  <div className="space-y-3 mb-8 pt-6 border-t border-slate-700/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Core Scope Highlights
                    </div>
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="px-8 py-4 rounded-xl text-sm font-semibold text-white text-center shadow-lg hover:shadow-xl transition-all"
                      style={{
                        background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Discuss Your Project Scope
                    </Link>
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-center transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Quick WhatsApp Estimate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relevant Portfolio Items */}
        <section id="portfolio" className="py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                    Proven Track Record
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Selected {service.shortTitle} Projects
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Real, verified case studies from client deliveries.
                  </p>
                </div>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {relevantProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {relevantProjects.map((project) => (
                    <div 
                      key={project.id}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div>
                        {/* Project Thumbnail with next/image */}
                        <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={`${project.title} - ${project.niche}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="p-6">
                          <div className="text-xs font-semibold text-emerald-600 mb-1">
                            {project.niche}
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {project.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed line-clamp-2">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.technologies.slice(0, 4).map((tech, tIdx) => (
                              <span 
                                key={tIdx}
                                className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                        {project.liveUrl && project.liveUrl !== "#" ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                          >
                            <span>Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400 font-medium">Concept / In-House Architecture</span>
                        )}

                        <Link
                          href="/contact"
                          className="text-xs font-semibold text-slate-700 hover:text-emerald-600"
                        >
                          Request Similar Build →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center">
                  <p className="text-sm text-slate-500">
                    Additional case studies available upon request. Reach out to review private repositories and demo instances.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Real Matching Testimonial */}
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Client Validation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Verified Client Feedback
                </h2>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  {service.testimonialMatch.platform === "upwork" ? <UpworkBadge /> : <FiverrBadge />}
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: service.testimonialMatch.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p 
                  className="text-base sm:text-lg text-slate-800 leading-relaxed italic mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  "{service.testimonialMatch.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                    style={{ backgroundColor: service.testimonialMatch.bgColor }}
                  >
                    {service.testimonialMatch.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {service.testimonialMatch.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {service.testimonialMatch.role} · {service.testimonialMatch.tag}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Common Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Answers to common questions regarding timelines, scopes, and technologies.
                </p>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, fIdx) => {
                  const isOpen = openFaq === fIdx

                  return (
                    <div 
                      key={fIdx}
                      className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-emerald-700 transition-colors"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-emerald-600" : ""}`} 
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking: Related Services */}
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Related Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Other Services You Might Need
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {service.relatedSlugs.map((relSlug) => {
                  const rel = siteConfig.serviceDetails[relSlug]
                  if (!rel) return null

                  return (
                    <Link
                      key={relSlug}
                      href={`/services/${rel.slug}`}
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="text-xs font-semibold text-emerald-700 mb-1">
                          {rel.category}
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {rel.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                          {rel.outcome}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs font-semibold text-slate-900 pt-3 border-t border-slate-200">
                        <span>Starting at {rel.startingPrice}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Ready to Start Your {service.shortTitle} Project?
              </h2>
              <p className="text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">
                Contact me directly with your requirements. I will review your project and send a detailed milestone estimate within 24 hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Request a Free Proposal
                </Link>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
