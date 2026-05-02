"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, X, ArrowUpRight, ArrowRight } from "lucide-react"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { getProjects, initializeProjects } from "@/lib/projects-data"

// ─── Types ────────────────────────────────────────────────────────────────────
type Project = {
  id: number
  title: string
  niche?: string
  description: string
  category: string
  technologies: string[]
  image: string
  liveUrl: string
  featured?: boolean
  isEbayTemplate: boolean
}

// ─── Category accent map ──────────────────────────────────────────────────────
const CATEGORY_META: Record<string, { color: string; dot: string; bg: string }> = {
  WordPress:      { color: "#21759b", dot: "bg-[#21759b]", bg: "rgba(33,117,155,0.1)" },
  Shopify:        { color: "#96bf48", dot: "bg-[#96bf48]", bg: "rgba(150,191,72,0.1)" },
  "Custom Web":   { color: "#61dafb", dot: "bg-[#61dafb]", bg: "rgba(97,218,251,0.1)" },
  "eBay Templates":{ color: "#f59e0b", dot: "bg-[#f59e0b]", bg: "rgba(245,158,11,0.1)" },
}

// ─── Pill Filter Bar ──────────────────────────────────────────────────────────
function FilterBar({
  categories, active, onChange,
}: { categories: string[]; active: string; onChange: (c: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs    = useRef<(HTMLButtonElement | null)[]>([])
  const [pill, setPill] = useState({ left: 0, width: 0 })
  const activeIdx = categories.indexOf(active)

  useEffect(() => {
    const el = itemRefs.current[activeIdx]
    const ct = containerRef.current
    if (!el || !ct) return
    const cr = ct.getBoundingClientRect()
    const er = el.getBoundingClientRect()
    setPill({ left: er.left - cr.left, width: er.width })
  }, [activeIdx])

  return (
    <div className="overflow-x-auto scrollbar-none flex justify-center">
      <div
        ref={containerRef}
        className="relative inline-flex items-center gap-0.5 p-1.5 rounded-full border-2"
        style={{ 
          background: "rgba(255,255,255,0.95)",
          borderColor: "rgba(16,185,129,0.15)",
          boxShadow: "0 4px 20px rgba(16,185,129,0.08)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <motion.div
          className="absolute top-1.5 bottom-1.5 rounded-full"
          style={{
            background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
          }}
          animate={{ left: pill.left, width: pill.width }}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
        {categories.map((cat, i) => (
          <button
            key={cat}
            ref={el => { itemRefs.current[i] = el }}
            onClick={() => onChange(cat)}
            className={`relative z-10 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200 select-none ${
              i === activeIdx ? "text-white" : "text-slate-600 hover:text-slate-900"
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const meta = CATEGORY_META[project.category] ?? { color: "#10b981", dot: "bg-emerald-500", bg: "rgba(16,185,129,0.1)" }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(226,232,240,0.8)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)"
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(16,185,129,0.15)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(226,232,240,0.8)"
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"
        }}
      >

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={e => {
              const t = e.currentTarget
              t.style.display = "none"
              const fb = t.nextElementSibling as HTMLElement
              if (fb) fb.style.display = "flex"
            }}
          />
          {/* Fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center hidden">
            <span className="text-5xl font-black text-slate-300">{project.title.charAt(0)}</span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                fontFamily: "'Poppins', sans-serif",
              }}>
              <ArrowUpRight className="w-4 h-4" />
              View Details
            </div>
          </div>

          {/* Category pill */}
          <div className="absolute top-3 left-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                borderColor: "rgba(226,232,240,0.8)",
              }}>
              <div className={`w-2 h-2 rounded-full ${meta.dot}`} />
              <span className="text-xs font-semibold"
                style={{ 
                  color: meta.color,
                  fontFamily: "'Poppins', sans-serif",
                }}>{project.category}</span>
            </div>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <div className="px-3 py-1.5 rounded-full border text-xs font-semibold"
                style={{
                  background: "rgba(16,185,129,0.15)",
                  backdropFilter: "blur(10px)",
                  borderColor: "rgba(16,185,129,0.3)",
                  color: "#10b981",
                  fontFamily: "'Poppins', sans-serif",
                }}>
                Featured
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2 leading-snug line-clamp-1 transition-colors duration-200"
            style={{
              color: "#0f172a",
              fontFamily: "'Poppins', sans-serif",
            }}>
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed line-clamp-2 mb-4"
            style={{
              color: "#64748b",
              fontFamily: "'Poppins', sans-serif",
            }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="px-3 py-1 text-xs rounded-full border font-medium"
                style={{
                  background: "rgba(241,245,249,1)",
                  color: "#475569",
                  borderColor: "rgba(226,232,240,1)",
                  fontFamily: "'Poppins', sans-serif",
                }}>
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-xs rounded-full border font-medium"
                style={{
                  background: "rgba(241,245,249,1)",
                  color: "#64748b",
                  borderColor: "rgba(226,232,240,1)",
                  fontFamily: "'Poppins', sans-serif",
                }}>
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const meta = CATEGORY_META[project.category] ?? { color: "#10b981", dot: "bg-emerald-500", bg: "rgba(16,185,129,0.1)" }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl border-2"
        style={{
          background: "rgba(255,255,255,0.98)",
          borderColor: "rgba(16,185,129,0.2)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.3)",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full transition-all duration-200"
          style={{
            background: "rgba(241,245,249,0.95)",
            color: "#64748b",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(226,232,240,1)"
            e.currentTarget.style.color = "#0f172a"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(241,245,249,0.95)"
            e.currentTarget.style.color = "#64748b"
          }}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Image */}
          <div className="relative w-full bg-slate-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain"
              style={{ maxHeight: "70vh" }}
              onError={e => { e.currentTarget.src = "/placeholder.svg" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Info */}
          <div className="p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full ${meta.dot}`} />
                  <span className="text-xs font-bold uppercase tracking-widest"
                    style={{
                      color: meta.color,
                      fontFamily: "'Poppins', sans-serif",
                    }}>
                    {project.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold leading-tight"
                  style={{
                    color: "#0f172a",
                    fontFamily: "'Poppins', sans-serif",
                  }}>{project.title}</h2>
              </div>
            </div>

            <p className="leading-relaxed text-base"
              style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
              }}>{project.description}</p>

            {/* Tech */}
            <div>
              <div className="text-xs uppercase tracking-widest mb-3 font-bold"
                style={{
                  color: "#94a3b8",
                  fontFamily: "'Poppins', sans-serif",
                }}>Technologies</div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-4 py-2 text-sm rounded-xl border font-medium"
                    style={{
                      background: "rgba(241,245,249,1)",
                      color: "#475569",
                      borderColor: "rgba(226,232,240,1)",
                      fontFamily: "'Poppins', sans-serif",
                    }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              {!project.isEbayTemplate ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full text-white font-semibold rounded-xl py-6 transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                    }}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Site
                  </Button>
                </a>
              ) : (
                <Link href="/contact" className="flex-1">
                  <Button className="w-full text-white font-semibold rounded-xl py-6 transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                    }}>
                    Get This Template
                  </Button>
                </Link>
              )}
              <Link href="/contact">
                <Button variant="outline" className="rounded-xl px-6 py-6 transition-all duration-300 border-2 font-semibold"
                  style={{
                    background: "rgba(255,255,255,1)",
                    borderColor: "rgba(226,232,240,1)",
                    color: "#0f172a",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(241,245,249,1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,1)"
                  }}
                >
                  Start Similar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [active, setActive] = useState("All")
  const [selected, setSelected] = useState<Project | null>(null)
  const [projects, setProjects] = useState<Project[]>([])

  // Load projects from localStorage on mount
  useEffect(() => {
    initializeProjects()
    const loadedProjects = getProjects()
    setProjects(loadedProjects)
  }, [])

  // Get unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))]

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null) }
    if (selected) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = "unset"
    }
  }, [selected])

  return (
    <>
      <MZwebSolutionsNavigation />

      <div className="min-h-screen pt-24" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>

        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} />
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)" }} />

        {/* ── Hero ── */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "-0.02em",
                }}>
                <span style={{ color: "#0f172a" }}>Work that</span>
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>speaks for itself</span>
              </h1>

              <p className="text-xl leading-relaxed max-w-3xl mx-auto"
                style={{
                  color: "#64748b",
                  fontFamily: "'Poppins', sans-serif",
                }}>
                A curated collection of projects across WordPress, Shopify, custom web applications, and eBay templates — each built to perform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Filter ── */}
        <section className="pb-12 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FilterBar categories={categories} active={active} onChange={cat => setActive(cat)} />
            </motion.div>
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="pb-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, i) => (
                  <ProjectCard
                    key={`${project.id}-${project.title}`}
                    project={project}
                    index={i}
                    onClick={() => setSelected(project)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-24 text-sm"
                style={{
                  color: "#94a3b8",
                  fontFamily: "'Poppins', sans-serif",
                }}>No projects in this category.</div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pb-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden p-12 text-center border-2"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(16,185,129,0.15)",
                boxShadow: "0 25px 60px rgba(16,185,129,0.1)",
              }}
            >
              {/* Decorative glow */}
              <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)" }} />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)" }} />

              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-5"
                  style={{
                    color: "#0f172a",
                    fontFamily: "'Poppins', sans-serif",
                  }}>
                  Ready to start your project?
                </h2>
                <p className="text-lg mb-8 leading-relaxed"
                  style={{
                    color: "#64748b",
                    fontFamily: "'Poppins', sans-serif",
                  }}>
                  Let's build something that performs as well as it looks. Get in touch and I'll scope it out with you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                      }}>
                      Start a Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="px-8 py-6 rounded-xl transition-all duration-300 border-2 font-semibold"
                      style={{
                        background: "rgba(255,255,255,1)",
                        borderColor: "rgba(226,232,240,1)",
                        color: "#0f172a",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(241,245,249,1)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,1)"
                      }}
                    >
                      View Services
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <MZwebSolutionsFooter />
    </>
  )
}
