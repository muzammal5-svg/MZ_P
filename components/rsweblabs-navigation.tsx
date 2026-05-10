"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "Services",  href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact",   href: "/contact" },
]

const services = [
  { name: "WordPress Development", href: "/services/wordpress",     desc: "Custom themes & plugins" },
  { name: "Shopify Development",   href: "/services/shopify",       desc: "E-commerce solutions" },
  { name: "Frontend Development",  href: "/services/frontend",      desc: "React & Next.js apps" },
  { name: "eBay Templates",        href: "/services/ebay-templates", desc: "Listing optimization" },
]

export function MZwebSolutionsNavigation() {
  const pathname            = usePathname()
  const [mobileOpen,       setMobileOpen]       = useState(false)
  const [servicesOpen,     setServicesOpen]     = useState(false)
  const [scrolled,         setScrolled]         = useState(false)

  /* sliding pill */
  const navRef   = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  const [pill, setPill] = useState({ left: 0, width: 0 })

  const activeIdx = navLinks.findIndex(l =>
    l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const el = itemRefs.current[activeIdx]
    const ct = navRef.current
    if (!el || !ct) return
    const cr = ct.getBoundingClientRect()
    const er = el.getBoundingClientRect()
    setPill({ left: er.left - cr.left, width: er.width })
  }, [activeIdx])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    /* ── outer wrapper — full width, flex row, top padding ── */
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      {/*
        ── The floating pill ──
        On desktop: logo | nav links | right actions — all inside one pill
        On mobile:  logo | hamburger
      */}
      <div
        className="w-full max-w-7xl flex items-center justify-between gap-4 px-6 py-3 rounded-full transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0.85)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: scrolled
            ? "1px solid rgba(226,232,240,0.8)"
            : "1px solid rgba(226,232,240,0.6)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)"
            : "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          {/* Profile Picture as Logo */}
          <div 
            className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/30 group-hover:ring-emerald-500/60 transition-all duration-300 group-hover:scale-105"
          >
            <img 
              src="/profile-pic.jpg" 
              alt="Muzammal" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Brand Name */}
          <div className="hidden sm:flex flex-col leading-none">
            <span
              className="text-base font-bold transition-colors"
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                letterSpacing: "-0.02em",
                color: "#0f172a",
                fontWeight: 700,
              }}
            >
              Muzammal
            </span>
            <span
              className="text-[10px] font-medium mt-0.5"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                color: "#64748b",
                letterSpacing: "0.02em",
                fontWeight: 500,
              }}
            >
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* ── Desktop nav links (center pill) ── */}
        <div className="hidden lg:flex items-center flex-1 justify-center">
          <div
            ref={navRef}
            className="relative flex items-center gap-0.5 p-1 rounded-full"
            style={{ background: "rgba(248,250,252,0.6)" }}
          >
            {/* sliding active indicator */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full"
              style={{ 
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100% 100%)", 
                boxShadow: "0 2px 8px rgba(16,185,129,0.3)",
              }}
              animate={{ left: pill.left, width: pill.width }}
              transition={{ type: "spring", stiffness: 480, damping: 38 }}
            />

            {navLinks.map((link, i) => {
              const isActive = i === activeIdx

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      ref={el => { itemRefs.current[i] = el }}
                      className="relative z-10 flex items-center gap-1 px-4 py-2 rounded-full text-sm transition-colors duration-200"
                      style={{ 
                        fontFamily: "'Poppins', sans-serif",
                        color: isActive ? "#ffffff" : "#64748b",
                        fontWeight: 600,
                      }}
                    >
                      {link.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.16 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-68 rounded-2xl p-3 shadow-2xl"
                          style={{
                            background: "rgba(255,255,255,0.98)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(226,232,240,0.8)",
                            width: "272px",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                          }}
                        >
                          {services.map((s, si) => (
                            <motion.div
                              key={s.name}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: si * 0.05 }}
                            >
                              <Link
                                href={s.href}
                                className="flex items-start gap-3 p-3 rounded-xl transition-colors duration-150 group"
                                style={{
                                  background: "transparent",
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(16,185,129,0.08)"}
                                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                              >
                                <div>
                                  <div
                                    className="text-sm font-medium transition-colors"
                                    style={{ 
                                      fontFamily: "'Poppins', sans-serif",
                                      color: "#0f172a",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {s.name}
                                  </div>
                                  <div className="text-xs mt-0.5" style={{ 
                                    color: "#64748b",
                                    fontFamily: "'Poppins', sans-serif",
                                  }}>{s.desc}</div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                          {/* <div className="mt-2 pt-2" style={{ borderTop: "1px solid rgba(226,232,240,0.8)" }}>
                            <Link
                              href="/services"
                              className="block text-center text-xs font-medium py-1.5 transition-colors"
                              style={{
                                color: "#3b82f6",
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 600,
                              }}
                            >
                              View all services
                            </Link>
                          </div> */}
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
                  ref={el => { itemRefs.current[i] = el }}
                  className="relative z-10 px-4 py-2 rounded-full text-sm transition-colors duration-200"
                  style={{ 
                    fontFamily: "'Poppins', sans-serif",
                    color: isActive ? "#ffffff" : "#64748b",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* ── Right: CTA ── */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <button
            onClick={scrollToContact}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100% 100%)",
              boxShadow: "0 0 20px rgba(16,185,129,0.35)",
              fontWeight: 600,
            }}
          >
            Let's Talk
          </button>
        </div>

        {/* ── Mobile controls ── */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="p-2 rounded-full transition-colors"
            style={{ 
              background: "rgba(248,250,252,0.8)",
              color: "#64748b",
            }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 lg:hidden rounded-2xl p-4 shadow-2xl space-y-1"
            style={{
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(226,232,240,0.8)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            }}
          >
            {navLinks.map(link => {
              const isLinkActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                    style={{ 
                      fontFamily: "'Poppins', sans-serif",
                      background: isLinkActive ? "rgba(16,185,129,0.1)" : "transparent",
                      color: isLinkActive ? "#3b82f6" : "#64748b",
                      fontWeight: 600,
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {services.map(s => (
                        <Link
                          key={s.name}
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 rounded-lg text-xs transition-colors"
                          style={{
                            color: "#64748b",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <div className="pt-3" style={{ borderTop: "1px solid rgba(226,232,240,0.8)" }}>
            <button
              onClick={scrollToContact}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ 
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100% 100%)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            >
              Let's Talk
            </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
