"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { track } from "@vercel/analytics"

interface PreFooterCtaProps {
  title?: string
  description?: string
  buttonText?: string
}

export function PreFooterCta({
  title = "Ready to Turn Your Visitors into Paying Clients?",
  description = "Get a fixed-price proposal and delivery schedule within 24 hours. No hidden fees, no agency bloat.",
  buttonText = "Get a Free Proposal",
}: PreFooterCtaProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
      {/* Decorative gradient blur */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.5) 0%, rgba(6,182,212,0.3) 100%)" }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full mb-6 bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Available for New Projects</span>
        </div>

        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight text-white"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            onClick={() => {
              try { track("cta_click", { label: "pre_footer_proposal" }) } catch {}
            }}
            className="px-8 py-4 rounded-xl text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 ml-1.5 inline" />
          </Link>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              try { track("whatsapp_click", { source: "pre_footer_cta" }) } catch {}
            }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shadow-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
