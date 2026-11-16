"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Mail, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  ExternalLink,
  MessageSquare,
  ArrowUpRight
} from "lucide-react"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { MultiStepContactForm } from "@/components/multi-step-contact-form"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { siteConfig, getWhatsAppUrl } from "@/lib/site-config"
import { track } from "@vercel/analytics"

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
      "name": "Contact",
      "item": `${siteConfig.siteUrl}/contact`,
    },
  ],
}

function ContactContent() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get("service") || undefined
  const initialProject = searchParams.get("project") || undefined

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* Breadcrumb Bar */}
      <div className="py-4 border-b border-slate-200/80 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold" aria-current="page">Contact & Proposal</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-20 blur-3xl bg-emerald-200" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-emerald-50 border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Fast Estimate within 24 Hours
            </span>
          </div>

          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Start Your Project with a{" "}
            <span 
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Free Proposal
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Fill in your project details below or message me directly on WhatsApp for an immediate consultation. Fixed milestone pricing with zero hidden fees.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Information */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7 Columns: Form */}
            <div className="lg:col-span-7">
              <MultiStepContactForm 
                initialService={initialService}
                initialProject={initialProject}
                sourcePage="Contact Page (/contact)"
              />
            </div>

            {/* Right 5 Columns: Direct Channels & Trust */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Fast Channel Card */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6 fill-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Direct WhatsApp Chat
                    </h2>
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Usually replies within 1 hour
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Prefer a quick voice or text chat before filling out specifications? Message me directly on WhatsApp with your project ideas.
                </p>

                <a
                  href={getWhatsAppUrl(initialService, initialProject)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    try { track("whatsapp_click", { source: "contact_page_card" }) } catch {}
                  }}
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Direct Info Card */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 text-xs sm:text-sm">
                <h3 className="text-base font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Direct Contact Information
                </h3>

                <div className="flex items-center gap-3 pt-2">
                  <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase">Email</div>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      onClick={() => {
                        try { track("email_click", { source: "contact_page_card" }) } catch {}
                      }}
                      className="text-slate-900 font-bold hover:text-emerald-600 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase">Response Commitment</div>
                    <span className="text-slate-900 font-medium">Within 24 hours guaranteed</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase">Freelance Profiles</div>
                    <div className="flex items-center gap-3 mt-1">
                      {siteConfig.upworkUrl && (
                        <a 
                          href={siteConfig.upworkUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          Upwork (5.0 ★)
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {siteConfig.fiverrUrl && (
                        <a 
                          href={siteConfig.fiverrUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          Fiverr (5.0 ★)
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Strip */}
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">
                  What Happens Next?
                </div>
                <ol className="space-y-2 text-xs text-slate-700 list-decimal list-inside font-medium">
                  <li>I review your project requirements and target features.</li>
                  <li>You receive a fixed-price proposal and timeline breakdown.</li>
                  <li>We align on milestones and begin execution with zero friction.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ContactPage() {
  return (
    <>
      <MZwebSolutionsNavigation />
      <main id="main-content" tabIndex={-1} className="min-h-screen pt-24 bg-slate-50 focus:outline-none">
        <Suspense fallback={<div className="py-32 text-center text-slate-500 font-medium">Loading contact form...</div>}>
          <ContactContent />
        </Suspense>
      </main>
      <MZwebSolutionsFooter />
    </>
  )
}
