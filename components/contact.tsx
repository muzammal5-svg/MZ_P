"use client"

import { Mail, Clock, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-config"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { MultiStepContactForm } from "@/components/multi-step-contact-form"
import { track } from "@vercel/analytics"

export function Contact() {
  return (
    <section 
      id="contact" 
      aria-label="Contact and project inquiry form"
      className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200/80"
    >
      {/* Decorative ambient elements */}
      <div 
        className="pointer-events-none absolute -top-40 right-1/4 w-[700px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 bg-emerald-50 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Start Your Project
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Build Something{" "}
            <span 
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Exceptional?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Fill out your project specifications below for a guaranteed estimate within 24 hours. No sales reps, no agency markups — you communicate directly with Muzammal Zaheer.
          </p>
        </div>

        {/* Form and Side Info Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Multi-step form (7 Cols) */}
          <div className="lg:col-span-7">
            <MultiStepContactForm sourcePage="Homepage Contact Section" />
          </div>

          {/* Direct channels & Trust (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <WhatsAppIcon className="w-6 h-6 fill-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Instant WhatsApp Chat
                  </h3>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for new projects
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Need quick feedback or have immediate project requirements? Click below to chat directly with me on WhatsApp.
              </p>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  try { track("whatsapp_click", { source: "homepage_contact_card" }) } catch {}
                }}
                className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Info Box */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 text-xs sm:text-sm">
              <h4 className="text-base font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Direct Contact
              </h4>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">Email</div>
                  <a 
                    href={`mailto:${siteConfig.email}`} 
                    onClick={() => {
                      try { track("email_click", { source: "homepage_contact_card" }) } catch {}
                    }}
                    className="text-slate-900 font-bold hover:text-emerald-600 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">Response Time</div>
                  <span className="text-slate-900 font-medium">Within 24 hours guaranteed</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">Platform Verified</div>
                  <span className="text-slate-900 font-medium">5.0 Star Rating on Upwork & Fiverr</span>
                </div>
              </div>
            </div>

            {/* Response steps */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
              <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">
                The Process
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium list-disc list-inside">
                <li>Detailed requirements analysis within 24 hours</li>
                <li>Fixed-price milestone proposal with clear delivery schedule</li>
                <li>Full direct access to development sandbox and staging links</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
