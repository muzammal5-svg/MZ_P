"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Star, Award, CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { getProjects, initializeProjects } from "@/lib/projects-data"

type Project = {
  id: number
  title: string
  niche: string
  description: string
  category: string
  technologies: string[]
  image: string
  liveUrl: string
  isEbayTemplate: boolean
  trustScore: number
  achievements: { icon: React.ReactNode; label: string; value: string }[]
  testimonial: { quote: string; author: string }
}
const categoryColors: Record<string, string> = {
  WordPress: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Custom Web": "bg-green-500/20 text-green-400 border-green-500/30",
  Shopify: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "eBay Templates": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
}

export function FeaturedPortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [idx, setIdx] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])

  // Load projects from localStorage on mount
  useEffect(() => {
    initializeProjects()
    const projects = getProjects()
    
    // Add default achievements and testimonials if missing
    const projectsWithExtras = projects.map(project => ({
      ...project,
      achievements: project.achievements || [
        { icon: <Star className="w-5 h-5" />, label: "Quality", value: "100%" },
        { icon: <Award className="w-5 h-5" />, label: "Rating", value: "5.0" },
        { icon: <CheckCircle className="w-5 h-5" />, label: "Success", value: "100%" }
      ],
      testimonial: project.testimonial || {
        quote: "Excellent work! Professional, timely, and exceeded expectations.",
        author: "Satisfied Client"
      }
    }))
    
    setFeaturedProjects(projectsWithExtras)
  }, [])

  const total = featuredProjects.length

  const next = useCallback(() => {
    setIdx((prev) => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setIdx((prev) => (prev - 1 + total) % total)
  }, [total])

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, next])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null)
      if (e.key === "ArrowRight") { next(); setIsAutoPlaying(false) }
      if (e.key === "ArrowLeft") { prev(); setIsAutoPlaying(false) }
    }
    document.addEventListener("keydown", handleKeyDown)
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedProject, next, prev])

  // 3 copies for infinite loop
  const ITEMS = [...featuredProjects, ...featuredProjects, ...featuredProjects]
  const OFFSET = total // middle copy starts here
  const CARD_W = 380
  const GAP = 24

  return (
    <>
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>
        {/* Premium background effects */}
        <div className="pointer-events-none absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex items-end justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.3)",
                }}>
                <Award className="w-4 h-4" style={{ color: "#3b82f6" }} />
                <span className="text-sm font-medium" style={{ color: "#2563eb", fontFamily: "'Poppins', sans-serif" }}>Featured Work</span>
              </div>
              <h2 className="font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "#0f172a",
                  fontWeight: 700,
                }}>
                Recent <span style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100% 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Success Stories</span>
              </h2>
              <p className="text-base max-w-2xl"
                style={{
                  color: "#64748b",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1.7,
                }}>
                Each project is a case study in performance, design, and measurable results.
              </p>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 flex-shrink-0 pb-1">
              <motion.button
                onClick={() => { prev(); setIsAutoPlaying(false) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous project"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "2px solid rgba(226,232,240,0.8)",
                  color: "#64748b",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={() => { next(); setIsAutoPlaying(false) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next project"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  border: "none",
                  color: "#ffffff",
                  boxShadow: "0 8px 24px rgba(16,185,129,0.4)",
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex"
                style={{ gap: `${GAP}px` }}
                animate={{ x: -(OFFSET + idx) * (CARD_W + GAP) }}
                transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.8 }}
              >
                {ITEMS.map((project, i) => {
                  const realIdx = i % total
                  const isActive = i === OFFSET + idx

                  return (
                    <div
                      key={i}
                      className="flex-shrink-0"
                      style={{ width: `${CARD_W}px` }}
                      onClick={() => !isActive && setIdx(realIdx)}
                      onMouseEnter={() => setIsAutoPlaying(false)}
                      onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                  <motion.div
                    className="group flex flex-col rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-400 h-full"
                    style={{
                      background: isActive 
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.7)",
                      border: `2px solid ${isActive ? "rgba(16,185,129,0.3)" : "rgba(226,232,240,0.8)"}`,
                      boxShadow: isActive 
                        ? "0 20px 60px rgba(16,185,129,0.2)"
                        : "0 10px 30px rgba(0,0,0,0.05)",
                      opacity: isActive ? 1 : 0.6,
                      cursor: isActive ? "default" : "pointer",
                      transform: isActive ? "scale(1)" : "scale(0.95)",
                      transition: "all 0.4s ease",
                    }}
                  >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                    onError={(e) => {
                      const t = e.currentTarget
                      t.style.display = "none"
                      const fb = t.nextElementSibling as HTMLElement
                      if (fb) fb.style.display = "flex"
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center hidden absolute inset-0">
                    <span className="text-gray-500 text-sm">Preview</span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${categoryColors[project.category] ?? "bg-primary/20 text-primary border-primary/30"}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Stars overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        borderColor: "rgba(226,232,240,0.8)",
                      }}
                    >
                      <div className="flex items-center gap-0.5">
                        {[1,2,3,4,5].map(s => (
                          <Star key={s} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-medium" style={{ color: "#0f172a" }}>{project.trustScore}% Trust Score</span>
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 ml-auto" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  {/* Title */}
                  <div>
                    <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "#94a3b8" }}>{project.niche}</div>
                    <h3 className="text-base font-bold transition-colors duration-200 leading-snug"
                      style={{
                        color: "#0f172a",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs leading-relaxed mt-1.5 line-clamp-2"
                      style={{
                        color: "#64748b",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Achievement stats */}
                  {/* <div className="grid grid-cols-3 gap-2">
                    {project.achievements.map((a, i) => (
                      <div key={i} className="rounded-xl p-2.5 border text-center"
                        style={{
                          borderColor: "rgba(226,232,240,0.8)",
                          background: "rgba(248,250,252,0.8)",
                        }}
                      >
                        <div className="flex justify-center mb-1 scale-75" style={{ color: "#3b82f6" }}>{a.icon}</div>
                        <div className="text-sm font-bold leading-none" style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}>{a.value}</div>
                        <div className="text-[10px] mt-0.5 leading-tight" style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>{a.label}</div>
                      </div>
                    ))}
                  </div> */}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-[10px] rounded-full border"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          color: "#64748b",
                          borderColor: "rgba(226,232,240,0.8)",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-[10px] rounded-full border"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          color: "#94a3b8",
                          borderColor: "rgba(226,232,240,0.8)",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Testimonial */}
                  {/* <div className="rounded-xl p-3 border mt-auto"
                    style={{
                      borderColor: "rgba(16,185,129,0.2)",
                      background: "rgba(16,185,129,0.05)",
                    }}
                  >
                    <p className="text-xs italic leading-relaxed line-clamp-2"
                      style={{
                        color: "#64748b",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >"{project.testimonial.quote}"</p>
                    <div className="text-[10px] mt-1.5 font-medium"
                      style={{
                        color: "#3b82f6",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >— {project.testimonial.author}</div>
                  </div> */}

                  {/* Actions */}
                  <div className="flex gap-2 pt-1">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      size="sm"
                      className="flex-1 text-white text-xs font-semibold rounded-xl transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100% 100%)",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Case Study
                      <ArrowRight className="ml-1.5 h-3 w-3" />
                    </Button>
                    {!project.isEbayTemplate && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl px-3 transition-all duration-300"
                        style={{
                          borderColor: "rgba(16,185,129,0.3)",
                          color: "#3b82f6",
                        }}
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )
        })}
        </motion.div>
      </div>

            {/* Progress Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIdx(i); setIsAutoPlaying(false) }}
                  aria-label={`Go to project ${i + 1}`}
                  className="relative h-1 rounded-full transition-all duration-300"
                  style={{
                    width: i === idx ? "48px" : "24px",
                    background: i === idx
                      ? "linear-gradient(90deg, #10b981 0%, #06b6d4 100%)"
                      : "rgba(226,232,240,0.8)",
                  }}
                />
              ))}
            </div>
          </div>
< div className="flex justify-center p-12 w-full mx-auto">

 <Link href="/portfolio">
                <Button 
                  size="lg" 
                  className="text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  View Complete Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
                  </div>
          {/* View All CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div 
              className="rounded-3xl p-12 max-w-3xl mx-auto"
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(16,185,129,0.2)",
                boxShadow: "0 20px 60px rgba(16,185,129,0.15)",
              }}
            >
              <h3 
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#0f172a",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                }}
              >
                Want to See More Projects?
              </h3>
              <p 
                className="mb-8 leading-relaxed"
                style={{
                  color: "#64748b",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Explore 100+ successful projects across WordPress, Shopify, React, and more.
              </p>
              <div className="flex justify-center">
                <Link href="/portfolio">
                  <Button 
                    size="lg" 
                    className="text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    View Complete Portfolio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div 
                className="grid grid-cols-3 gap-8 pt-8 mt-8"
                style={{ borderTop: "2px solid rgba(226,232,240,0.5)" }}
              >
                {[["100+", "Projects Completed"], ["15+", "Industries Served"], ["98%", "Client Satisfaction"]].map(([val, label]) => (
                  <div key={label} className="text-center">
                    <div 
                      className="text-2xl font-bold"
                      style={{
                        background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {val}
                    </div>
                    <div 
                      className="text-sm"
                      style={{
                        color: "#64748b",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.7)" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: "#ffffff",
                border: "2px solid rgba(226,232,240,0.8)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between p-6"
                style={{ borderBottom: "2px solid rgba(226,232,240,0.5)" }}
              >
                <div>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "#94a3b8", fontFamily: "'Poppins', sans-serif" }}>{selectedProject.niche}</div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100% 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >{selectedProject.title}</h3>
                  <p className="text-sm mt-1" style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>{selectedProject.description}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full transition-colors ml-4 flex-shrink-0"
                  style={{
                    background: "rgba(226,232,240,0.5)",
                    color: "#64748b",
                  }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

                  <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="p-6 space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    loading="lazy"
                    className="w-full h-auto max-h-[50vh] object-contain rounded-2xl"
                    style={{ background: "rgba(248,250,252,0.5)" }}
                    onError={(e) => { e.currentTarget.src = "/placeholder.svg" }}
                  />

                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.achievements.map((a, i) => (
                      <div key={i} className="rounded-xl p-4 border text-center"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          borderColor: "rgba(226,232,240,0.8)",
                        }}
                      >
                        <div className="flex justify-center mb-2" style={{ color: "#3b82f6" }}>{a.icon}</div>
                        <div className="text-xl font-bold" style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}>{a.value}</div>
                        <div className="text-xs" style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>{a.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl p-5 border"
                    style={{
                      borderColor: "rgba(16,185,129,0.2)",
                      background: "rgba(16,185,129,0.05)",
                    }}
                  >
                    <p className="italic" style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>"{selectedProject.testimonial.quote}"</p>
                    <div className="text-sm mt-2 font-medium" style={{ color: "#3b82f6", fontFamily: "'Poppins', sans-serif" }}>— {selectedProject.testimonial.author}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-full border"
                        style={{
                          background: "rgba(16,185,129,0.1)",
                          color: "#3b82f6",
                          borderColor: "rgba(16,185,129,0.3)",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 justify-center pb-2">
                    {!selectedProject.isEbayTemplate ? (
                      <Button
                        className="text-white font-semibold px-8 py-3 rounded-xl"
                        style={{
                          background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100% 100%)",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Live Site
                      </Button>
                    ) : (
                      <Link href="/contact">
                        <Button 
                          className="text-white font-semibold px-8 py-3 rounded-xl"
                          style={{
                            background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100% 100%)",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          Get This Template
                        </Button>
                      </Link>
                    )}
                    <Link href="/contact">
                      <Button 
                        variant="outline" 
                        className="px-8 py-3 rounded-xl"
                        style={{
                          borderColor: "rgba(16,185,129,0.3)",
                          color: "#3b82f6",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Start Similar Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
