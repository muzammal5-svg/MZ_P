"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Award, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutBento() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(99,179,237,0.3) 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(99,179,237,0.15)",
              border: "1px solid rgba(99,179,237,0.3)",
            }}>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium" style={{ color: "#2563eb", fontFamily: "'Poppins', sans-serif" }}>
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#0f172a",
              letterSpacing: "-0.01em",
              fontWeight: 700,
            }}>
            Building Digital Solutions
          </h2>
          <p className="text-lg sm:text-xl" style={{ 
            color: "#64748b", 
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
          }}>
            That Drive <span style={{ 
              background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100% 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}>Real Results</span>
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(16,185,129,0.2)",
                border: "3px solid rgba(16,185,129,0.2)",
              }}>
              <img
                src="/professional-developer-portrait.png"
                alt="Muhammad Muzammal"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "600px" }}
              />
              
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 px-6 py-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                      Muhammad Muzammal
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>
                      Full-Stack Web Developer
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" }}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-40 blur-2xl -z-10"
              style={{ background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" }} />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            {/* Description */}
            <div>
              <p className="text-lg leading-relaxed mb-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#475569",
                  fontWeight: 400,
                }}>
                I'm <strong style={{ color: "#0f172a" }}>Muzammal</strong>, a full-stack web developer with <strong style={{ color: "#0f172a" }}>5+ years</strong> of experience 
                specializing in high-performance websites that rank, convert, and scale.
              </p>
              <p className="text-lg leading-relaxed"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#475569",
                  fontWeight: 400,
                }}>
                I'm a full-stack developer who has delivered <strong style={{ color: "#0f172a" }}>100+ projects</strong> for 
                clients across <strong style={{ color: "#0f172a" }}>10+ countries</strong> — from custom WordPress themes and Shopify stores to React/Next.js applications.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { 
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.6 12c0-.98.17-1.92.48-2.8l2.64 7.23A8.4 8.4 0 013.6 12zm8.4 8.4a8.4 8.4 0 01-2.38-.34l2.53-7.35 2.46 6.74a8.4 8.4 0 01-2.61.95zM13.3 8.1c.57-.03 1.08-.09 1.08-.09.51-.06.45-.81-.06-.78 0 0-1.53.12-2.52.12-.93 0-2.49-.12-2.49-.12-.51-.03-.57.75-.06.78 0 0 .48.06 1 .09l1.48 4.06-2.08 6.23-3.46-9.5c.57-.03 1.08-.09 1.08-.09.51-.06.45-.81-.06-.78 0 0-1.53.12-2.52.12-.18 0-.39 0-.6-.01A8.4 8.4 0 0112 3.6c2.2 0 4.2.84 5.7 2.22-.04 0-.07-.01-.11-.01-.93 0-1.59.81-1.59 1.68 0 .78.45 1.44.93 2.22.36.63.78 1.44.78 2.61 0 .81-.31 1.75-.72 3.06l-.94 3.15L13.3 8.1zm3.54 9.72l2.44-7.06c.46-1.14.61-2.05.61-2.86 0-.29-.02-.56-.05-.82A8.4 8.4 0 0120.4 12a8.4 8.4 0 01-3.56 6.82z"/>
                    </svg>
                  ), 
                  label: "WordPress", 
                  color: "#21759b" 
                },
                { 
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M15.337 23.979l7.216-1.561s-2.597-17.566-2.617-17.693c-.019-.126-.126-.209-.232-.209s-2.133-.146-2.133-.146-.854-.854-1.561-1.561v21.17zM13.27 6.088s-.232-.063-.602-.063c-.063 0-.126 0-.189.019-.441-1.288-1.225-2.471-2.597-2.471h-.126C9.378 2.8 8.629 2.4 8 2.4c-3.892.019-5.748 4.869-6.327 7.34-.602.189-1.204.378-1.806.567-.559.17-.578.189-.643.713C-.839 11.39 0 18.5 0 18.5l13.27 2.471V6.088zm-3.2 1.204c-.756.232-1.582.484-2.408.736.232-.882.673-1.764 1.204-2.345.189.504.378 1.204.378 1.764l.826-.155zm-1.764-2.597c.189 0 .378.063.567.189-.504.567-.882 1.449-1.099 2.282-.567.17-1.099.336-1.582.504.441-1.449 1.449-2.975 2.114-2.975zm1.764 11.748l-2.975-.882.882-4.228 2.093 1.099v4.011zm1.764.441V12.5l-2.093-1.099.882-4.228 1.211-.378v10.09z"/>
                    </svg>
                  ), 
                  label: "Shopify", 
                  color: "#96bf48" 
                },
                { 
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 9.861A2.139 2.139 0 1012 14.139 2.139 2.139 0 1012 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 001.363 3.578 23.442 23.442 0 00-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zM17.992 16.255l-.133-.468a23.557 23.557 0 00-1.364-3.578 23.663 23.663 0 001.364-3.578l.133-.468.473.12c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.046a24.973 24.973 0 011.182 3.046c2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.752 24.752 0 01-1.182 3.046zM5.31 8.945l-.133-.468C4.188 5.283 4.488 3.15 6 2.276c1.512-.875 3.408.196 5.476 2.946l.284.381-.288.379a23.482 23.482 0 00-2.096 3.23 23.447 23.447 0 00-3.578-.668l-.488-.599zm1.582-.24c.963.078 1.91.22 2.826.42a24.73 24.73 0 011.477-2.545c-1.66-2.096-3.118-2.787-3.977-2.287-.858.495-1.088 2.055-.326 4.412zm9.832 9.558c-1.511.875-3.407-.196-5.476-2.946l-.284-.381.288-.379a23.493 23.493 0 002.096-3.23 23.53 23.53 0 003.578.668l.488.6.133.467c.989 3.195.689 5.328-.823 6.201zm-4.938-3.545c1.66 2.096 3.118 2.787 3.976 2.287.859-.495 1.088-2.055.327-4.412a24.973 24.973 0 01-2.826-.42 24.73 24.73 0 01-1.477 2.545z"/>
                    </svg>
                  ), 
                  label: "React/Next.js", 
                  color: "#61dafb" 
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(16,185,129,0.2)" }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "2px solid rgba(16,185,129,0.15)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              {[
                "PageSpeed 100 optimization expert",
                "Technical SEO & conversion-focused UX",
                "Custom theme & plugin development",
                "E-commerce solutions specialist",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" }}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base font-medium" style={{ color: "#334155", fontFamily: "'Poppins', sans-serif" }}>
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6"
              style={{ borderTop: "2px solid rgba(16,185,129,0.1)" }}>
              {[
                { value: "100+", label: "Projects" },
                { value: "5.0", label: "Rating" },
                { value: "10+", label: "Countries" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-1"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                    }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(16,185,129,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100% 100%)",
                  boxShadow: "0 4px 20px rgba(16,185,129,0.25)",
                  fontWeight: 600,
                }}
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
