"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ArrowRight, ChevronRight, Layers, Sparkles } from "lucide-react"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { siteConfig } from "@/lib/site-config"
import { defaultProjects, Project } from "@/lib/projects-data"

const CATEGORIES = [
  "All",
  "WordPress",
  "Shopify",
  "Next.js / React",
  "eBay Templates",
  "AI Automation",
  "AI Chatbot",
]

// Normalize display categories to database category field
function mapDisplayToDb(cat: string): string {
  if (cat === "Next.js / React") return "Custom Web"
  return cat
}

function mapDbToDisplay(cat: string): string {
  if (cat === "Custom Web") return "Next.js / React"
  return cat
}

const CATEGORY_STYLES: Record<string, { dot: string; text: string; bg: string }> = {
  WordPress: { dot: "bg-blue-500", text: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
  Shopify: { dot: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
  "Custom Web": { dot: "bg-cyan-500", text: "text-cyan-700", bg: "bg-cyan-50 border-cyan-200" },
  "Next.js / React": { dot: "bg-cyan-500", text: "text-cyan-700", bg: "bg-cyan-50 border-cyan-200" },
  "eBay Templates": { dot: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
  "AI Automation": { dot: "bg-indigo-500", text: "text-indigo-700", bg: "bg-indigo-50 border-indigo-200" },
  "AI Chatbot": { dot: "bg-purple-500", text: "text-purple-700", bg: "bg-purple-50 border-purple-200" },
}

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
      "name": "Portfolio",
      "item": `${siteConfig.siteUrl}/portfolio`,
    },
  ],
}

function PortfolioContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Read category from query or default to "All"
  const rawCat = searchParams.get("category")
  const initialCategory = rawCat && CATEGORIES.includes(rawCat) ? rawCat : "All"

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Keep state synced with URL changes
  useEffect(() => {
    if (rawCat && CATEGORIES.includes(rawCat)) {
      setActiveCategory(rawCat)
    } else if (!rawCat) {
      setActiveCategory("All")
    }
  }, [rawCat])

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    if (cat === "All") {
      router.push("/portfolio", { scroll: false })
    } else {
      router.push(`/portfolio?category=${encodeURIComponent(cat)}`, { scroll: false })
    }
  }

  // Keyboard navigation for accessible tabs (ArrowLeft, ArrowRight)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % CATEGORIES.length
      tabRefs.current[nextIndex]?.focus()
      handleCategoryChange(CATEGORIES[nextIndex])
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + CATEGORIES.length) % CATEGORIES.length
      tabRefs.current[nextIndex]?.focus()
      handleCategoryChange(CATEGORIES[nextIndex])
    }
  }

  // Filter projects
  const filteredProjects = defaultProjects.filter((project) => {
    if (activeCategory === "All") return true
    const dbCat = mapDisplayToDb(activeCategory)
    return project.category === dbCat
  })

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
            <span className="text-slate-800 font-semibold" aria-current="page">Portfolio</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-20 blur-3xl bg-emerald-200" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-emerald-50 border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
              100+ Projects Delivered Across 10+ Countries
            </span>
          </div>

          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Featured Client Work &{" "}
            <span 
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Case Studies
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Explore verified websites, e-commerce stores, custom frontend applications, and automation systems engineered for speed and conversion.
          </p>

          {/* Accessible, URL-Synced Category Filter Tabs */}
          <div 
            role="tablist"
            aria-label="Filter projects by technology category"
            className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none px-2"
          >
            {CATEGORIES.map((cat, idx) => {
              const isActive = activeCategory === cat

              return (
                <button
                  key={cat}
                  ref={(el) => { tabRefs.current[idx] = el }}
                  role="tab"
                  id={`tab-${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleCategoryChange(cat)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isActive
                      ? "text-white shadow-md shadow-emerald-500/20"
                      : "text-slate-600 bg-slate-100 hover:bg-slate-200"
                  }`}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)"
                      : undefined,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="flex items-center justify-between mb-8 text-xs sm:text-sm text-slate-500 font-medium">
            <span>Showing <strong className="text-slate-900">{filteredProjects.length}</strong> projects in <strong className="text-emerald-700">{activeCategory}</strong></span>
            {activeCategory !== "All" && (
              <button
                onClick={() => handleCategoryChange("All")}
                className="text-emerald-600 hover:underline font-semibold"
              >
                Reset Filter
              </button>
            )}
          </div>

          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const style = CATEGORY_STYLES[project.category] || {
                  dot: "bg-emerald-500",
                  text: "text-emerald-700",
                  bg: "bg-emerald-50 border-emerald-200",
                }
                const hasLive = Boolean(project.liveUrl && project.liveUrl !== "#" && project.liveUrl.trim() !== "")

                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
                      <div>
                        {/* Standardized 16:10 Thumbnail Frame */}
                        <Link 
                          href={`/portfolio/${project.slug}`}
                          className="relative aspect-[16/10] bg-slate-100 block overflow-hidden"
                          aria-label={`View case study for ${project.title}`}
                        >
                          <Image
                            src={project.image}
                            alt={`${project.title} - ${project.niche}`}
                            fill
                            priority={index < 3}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />

                          {/* Category Badge overlay */}
                          <div className="absolute top-3 left-3">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold border backdrop-blur-sm bg-white/95 ${style.text}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                              {mapDbToDisplay(project.category)}
                            </span>
                          </div>

                          {/* Live/Concept pill */}
                          <div className="absolute top-3 right-3">
                            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                              {hasLive ? "Live Site" : "Concept Demo"}
                            </span>
                          </div>
                        </Link>

                        {/* Content */}
                        <div className="p-6">
                          <div className="text-xs font-semibold text-emerald-600 mb-1">
                            {project.niche}
                          </div>

                          <h2 
                            className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-1"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            <Link href={`/portfolio/${project.slug}`}>
                              {project.title}
                            </Link>
                          </h2>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 3).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold text-slate-400">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="inline-flex items-center gap-1 text-slate-900 hover:text-emerald-600 transition-colors"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-600 transition-all" />
                        </Link>

                        {hasLive ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800"
                          >
                            <span>Live URL</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <Link
                            href={`/contact?service=${encodeURIComponent(project.category)}&project=${encodeURIComponent(project.title)}`}
                            className="text-slate-500 hover:text-emerald-600"
                          >
                            Discuss Similar →
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Have a Project in Mind?
            </h2>
            <p className="text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">
              Let's build a website or workflow automation that drives real business results for you.
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
                Get a Free Quote
              </Link>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function PortfolioPage() {
  return (
    <>
      <MZwebSolutionsNavigation />
      <main className="min-h-screen pt-24 bg-slate-50">
        <Suspense fallback={<div className="py-32 text-center text-slate-500 font-medium">Loading portfolio...</div>}>
          <PortfolioContent />
        </Suspense>
      </main>
      <MZwebSolutionsFooter />
    </>
  )
}
