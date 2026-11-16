"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-config"

export function MZwebSolutionsFooter() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "WordPress", href: "/services/wordpress" },
    { name: "Shopify", href: "/services/shopify" },
    { name: "Frontend", href: "/services/frontend" },
    { name: "AI Automation", href: "/services/ai-automation" },
    { name: "AI Chatbot", href: "/services/ai-chatbot" },
    { name: "eBay Listing", href: "/services/ebay-templates" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="relative border-t" style={{ 
      background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
      borderColor: "rgba(226,232,240,0.8)",
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                {/* Profile Picture as Logo */}
                <div 
                  className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/30 hover:ring-emerald-500/60 transition-all duration-300 hover:scale-105"
                >
                  <Image 
                    src="/profile-pic.jpg" 
                    alt={siteConfig.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold" style={{ 
                    color: "#0f172a",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                  }}>{siteConfig.name}</div>
                  <div className="text-xs text-emerald-600 font-medium" style={{ 
                    fontFamily: "'Poppins', sans-serif",
                  }}>{siteConfig.title}</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
              }}>
                {siteConfig.headline}
              </p>
              
              {/* Social & Marketplace Links */}
              <div className="flex flex-wrap gap-2 pt-2">
                {siteConfig.githubUrl && (
                  <motion.a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-lg transition-all duration-300"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4" style={{ color: "#10b981" }} />
                  </motion.a>
                )}

                {siteConfig.linkedinUrl && (
                  <motion.a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-lg transition-all duration-300"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" style={{ color: "#10b981" }} />
                  </motion.a>
                )}

                {siteConfig.upworkUrl && (
                  <motion.a
                    href={siteConfig.upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-300"
                    style={{
                      background: "rgba(20,168,0,0.1)",
                      border: "1px solid rgba(20,168,0,0.25)",
                      color: "#14a800",
                    }}
                    aria-label="Upwork Profile"
                  >
                    Upwork <ExternalLink className="w-3 h-3" />
                  </motion.a>
                )}

                {siteConfig.fiverrUrl && (
                  <motion.a
                    href={siteConfig.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-300"
                    style={{
                      background: "rgba(29,191,115,0.1)",
                      border: "1px solid rgba(29,191,115,0.25)",
                      color: "#1dbf73",
                    }}
                    aria-label="Fiverr Profile"
                  >
                    Fiverr <ExternalLink className="w-3 h-3" />
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold mb-4" style={{
                color: "#0f172a",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}>Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:translate-x-1 inline-block duration-200"
                      style={{
                        color: "#64748b",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold mb-4" style={{
                color: "#0f172a",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}>Get In Touch</h3>
              <div className="space-y-3">
                {siteConfig.email && (
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm group">
                    <div className="p-2 rounded-lg transition-colors" style={{
                      background: "rgba(16,185,129,0.1)",
                    }}>
                      <Mail className="h-3.5 w-3.5" style={{ color: "#10b981" }} />
                    </div>
                    <span className="transition-colors group-hover:text-emerald-600" style={{
                      color: "#64748b",
                      fontFamily: "'Poppins', sans-serif",
                    }}>{siteConfig.email}</span>
                  </a>
                )}
                {siteConfig.phone && (
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-sm group">
                    <div className="p-2 rounded-lg transition-colors" style={{
                      background: "rgba(16,185,129,0.1)",
                    }}>
                      <Phone className="h-3.5 w-3.5" style={{ color: "#10b981" }} />
                    </div>
                    <span className="transition-colors group-hover:text-emerald-600" style={{
                      color: "#64748b",
                      fontFamily: "'Poppins', sans-serif",
                    }}>{siteConfig.phone}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(226,232,240,0.8)" }}
        >
          <div className="text-sm" style={{
            color: "#64748b",
            fontFamily: "'Poppins', sans-serif",
          }}>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs">
            <span style={{
              color: "#94a3b8",
              fontFamily: "'Poppins', sans-serif",
            }}>Built with Next.js &amp; Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
