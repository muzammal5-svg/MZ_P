"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { siteConfig } from "@/lib/site-config"
import { track } from "@vercel/analytics"

export function StickyMobileCta() {
  const [visible, setVisible] = useState(true)

  // Hide sticky bar when near the actual contact form so it doesn't obstruct inputs
  useEffect(() => {
    const handleScroll = () => {
      const contactEl = document.getElementById("contact")
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect()
        // If contact section is in viewport, hide sticky bar
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setVisible(false)
          return
        }
      }
      setVisible(true)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div 
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-3 shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <Link
          href="/contact"
          onClick={() => {
            try { track("cta_click", { label: "sticky_mobile_quote" }) } catch {}
          }}
          className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white text-center shadow-sm flex items-center justify-center gap-1.5 transition-all"
          style={{
            background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <span>Get a Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            try { track("whatsapp_click", { source: "sticky_mobile_bar" }) } catch {}
          }}
          className="py-3 px-4 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
