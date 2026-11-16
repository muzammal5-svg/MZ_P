"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Clock, 
  MessageSquare,
  ChevronRight
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"

// Structured Data for Services Hub
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
  ],
}

export default function ServicesPage() {
  const serviceList = Object.values(siteConfig.serviceDetails)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900">
        
        {/* Breadcrumb Bar */}
        <div className="pt-24 pb-4 border-b border-slate-200/80 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 font-semibold" aria-current="page">Services</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-white border-b border-slate-200/80">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-25 blur-3xl bg-gradient-to-r from-emerald-200 to-cyan-200" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-emerald-50 border border-emerald-200"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-emerald-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Engineering for Growth
                </span>
              </motion.div>

              {/* Exactly one H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 tracking-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Web Development & Automation Services Built to{" "}
                <span 
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Convert
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                From custom WordPress and Shopify stores to modern Next.js web applications and hands-free Make.com automations. Transparent starting prices, verifiable delivery, and zero fluff.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6 Services Grid Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 
                className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Explore Specialized Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
                Select a service to view deliverables, processes, relevant case studies, and transparent pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {serviceList.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Badge & Price Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {service.category}
                        </span>
                        <span className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Starting at {service.startingPrice}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 
                        className="text-xl font-bold text-slate-900 mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {service.title}
                      </h3>

                      {/* Tagline / Outcome */}
                      <p className="text-xs font-medium text-emerald-600 mb-3">
                        {service.tagline}
                      </p>

                      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        {service.outcome}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                        {service.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-emerald-50 text-slate-900 hover:text-emerald-700 transition-colors"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        <span>View Details & Portfolio</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Muzammal Zaheer Strip */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Why Clients Trust My Work
                </h2>
                <p className="text-sm text-slate-500">
                  Direct communication with the engineer building your product — no agency middlemen.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-900 text-lg mb-1">{siteConfig.metrics.rating} Rated</div>
                  <div className="text-xs text-slate-500 font-medium">Verified 5.0 across Upwork & Fiverr clients worldwide</div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-900 text-lg mb-1">Fast Delivery</div>
                  <div className="text-xs text-slate-500 font-medium">Clear milestones and rapid turnaround on every scope</div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-900 text-lg mb-1">{siteConfig.metrics.yearsExperience} Experience</div>
                  <div className="text-xs text-slate-500 font-medium">{siteConfig.metrics.projectsCount} delivered in {siteConfig.metrics.countriesCount} countries</div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-900 text-lg mb-1">Transparent Pricing</div>
                  <div className="text-xs text-slate-500 font-medium">Fixed quotes with zero hidden charges or surprise invoices</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Ready to Upgrade Your Website or Automate Your Workflow?
              </h2>
              <p className="text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">
                Send me your project requirements or reach out on WhatsApp for a fast, no-obligation estimate within 24 hours.
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
                  Start Your Project
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
