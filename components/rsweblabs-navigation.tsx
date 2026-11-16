"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/lib/site-config"

interface NavLink {
  label: string
  href: string
  hasDropdown?: boolean
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
]

const servicesList = [
  { name: "WordPress Development", href: "/services/wordpress", desc: "Custom themes & plugins" },
  { name: "Shopify Development", href: "/services/shopify", desc: "High-converting e-commerce stores" },
  { name: "Frontend Development", href: "/services/frontend", desc: "React & Next.js applications" },
  { name: "AI Automation", href: "/services/ai-automation", desc: "Make.com & API workflows" },
  { name: "AI Chatbot Integration", href: "/services/ai-chatbot", desc: "Support & lead capture bots" },
  { name: "eBay Templates", href: "/services/ebay-templates", desc: "Mobile-responsive listings" },
]

export function MZwebSolutionsNavigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* Sliding pill */
  const navRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  const [pill, setPill] = useState({ left: 0, width: 0 })
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const activeIdx = navLinks.findIndex((l) =>
    l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Update sliding pill position
  useEffect(() => {
    const el = itemRefs.current[activeIdx]
    const ct = navRef.current
    if (!el || !ct) {
      setPill({ left: 0, width: 0 })
      return
    }
    const cr = ct.getBoundingClientRect()
    const er = el.getBoundingClientRect()
    setPill({ left: er.left - cr.left, width: er.width })
  }, [activeIdx, pathname])

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [mobileOpen])

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false)
        setServicesOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Focus trap for mobile menu
  const handleMobileKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !mobileMenuRef.current) return
    const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey && document.activeElement === first) {
      last.focus()
      e.preventDefault()
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus()
      e.preventDefault()
    }
  }, [])

  const scrollToContact = () => {
    setMobileOpen(false)
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/contact"
    }
  }

  return (
    <>
      {/* ── Accessible Skip to Content Link ── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-emerald-600 focus:text-white focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-300 text-sm font-semibold transition-all"
      >
        Skip to main content
      </a>

      {/* ── Outer Header Container ── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
          scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-4"
        }`}
      >
        {/* Floating Navbar Pill */}
        <nav
          aria-label="Main Navigation"
          className={`w-full max-w-7xl flex items-center justify-between gap-4 px-4 sm:px-6 rounded-full transition-all duration-300 ${
            scrolled ? "py-2 sm:py-2.5 shadow-md" : "py-3 sm:py-3.5 shadow-sm"
          }`}
          style={{
            background: scrolled
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0.88)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: scrolled
              ? "1px solid rgba(226, 232, 240, 0.9)"
              : "1px solid rgba(226, 232, 240, 0.7)",
          }}
        >
          {/* Logo / Personal Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-full"
            aria-label={`${siteConfig.name} - Home`}
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/40 group-hover:ring-emerald-500 transition-all duration-300 group-hover:scale-105 flex-shrink-0">
              <Image
                src="/profile-pic.jpg"
                alt={siteConfig.name}
                width={40}
                height={40}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden sm:flex flex-col leading-none">
              <span
                className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.02em" }}
              >
                {siteConfig.name}
              </span>
              <span
                className="text-[11px] font-medium text-slate-500 mt-0.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {siteConfig.title}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div
              ref={navRef}
              className="relative flex items-center gap-1 p-1 rounded-full bg-slate-100/70 border border-slate-200/50"
            >
              {/* Sliding Active Pill */}
              {activeIdx !== -1 && (
                <motion.div
                  className="absolute top-1 bottom-1 rounded-full pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.35)",
                  }}
                  animate={{ left: pill.left, width: pill.width }}
                  transition={{ type: "spring", stiffness: 480, damping: 38 }}
                />
              )}

              {navLinks.map((link, i) => {
                const isActive = i === activeIdx

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      onFocus={() => setServicesOpen(true)}
                    >
                      <button
                        ref={(el) => {
                          itemRefs.current[i] = el
                        }}
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        aria-controls="services-dropdown-desktop"
                        onClick={() => setServicesOpen((v) => !v)}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowDown") {
                            setServicesOpen(true)
                          }
                        }}
                        className={`relative z-10 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                          isActive
                            ? "text-white"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            id="services-dropdown-desktop"
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.16 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl p-2.5 shadow-2xl bg-white/98 backdrop-blur-xl border border-slate-200/90"
                            style={{ boxShadow: "0 14px 40px rgba(0,0,0,0.12)" }}
                          >
                            <div className="px-3 py-1.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                              Offered Services
                            </div>
                            <div className="space-y-0.5">
                              {servicesList.map((s) => (
                                <Link
                                  key={s.name}
                                  href={s.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="flex flex-col px-3 py-2 rounded-xl transition-colors duration-150 hover:bg-emerald-50/80 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                >
                                  <span
                                    className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                  >
                                    {s.name}
                                  </span>
                                  <span className="text-[11px] text-slate-500 mt-0.5">
                                    {s.desc}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1">
                              <Link
                                href="/services"
                                onClick={() => setServicesOpen(false)}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                              >
                                View all service details &rarr;
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    ref={(el) => {
                      itemRefs.current[i] = el
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {siteConfig.upworkUrl && (
              <a
                href={siteConfig.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-emerald-600 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-emerald-300 transition-colors"
                aria-label="View verified Upwork profile"
              >
                Upwork Top Rated
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}

            <button
              onClick={scrollToContact}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-95 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                boxShadow: "0 2px 14px rgba(16, 185, 129, 0.35)",
              }}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-nav-panel"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav-panel"
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              onKeyDown={handleMobileKeyDown}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 mt-2 lg:hidden rounded-2xl p-4 shadow-2xl bg-white/98 backdrop-blur-xl border border-slate-200/90 max-h-[85vh] overflow-y-auto space-y-2"
              style={{ boxShadow: "0 18px 45px rgba(0,0,0,0.15)" }}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-emerald-500/40">
                    <Image
                      src="/profile-pic.jpg"
                      alt={siteConfig.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{siteConfig.name}</div>
                    <div className="text-[10px] text-slate-500">{siteConfig.title}</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {navLinks.map((link) => {
                const isLinkActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)

                return (
                  <div key={link.label} className="space-y-1">
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={isLinkActive ? "page" : undefined}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isLinkActive
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {link.label}
                    </Link>

                    {link.hasDropdown && (
                      <div className="ml-3 pl-3 border-l-2 border-emerald-100 space-y-1 py-1">
                        {servicesList.map((s) => (
                          <Link
                            key={s.name}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <button
                  onClick={scrollToContact}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white text-center transition-all shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Get a Free Quote
                </button>

                <div className="flex items-center justify-center gap-3 pt-1 text-xs text-slate-500">
                  {siteConfig.upworkUrl && (
                    <a
                      href={siteConfig.upworkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 underline"
                    >
                      Upwork Profile
                    </a>
                  )}
                  {siteConfig.fiverrUrl && (
                    <a
                      href={siteConfig.fiverrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 underline"
                    >
                      Fiverr Profile
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
