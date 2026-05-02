"use client"

import Link from "next/link"
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function MZwebSolutionsFooter() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "WordPress", href: "/services/wordpress" },
    { name: "Shopify", href: "/services/shopify" },
    { name: "Frontend", href: "/services/frontend" },
    { name: "eBay Listing", href: "/services/ebay-templates" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/muzammal5-sv", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/muz-the-coder/", icon: Linkedin },
    // { name: "Twitter", href: "#", icon: Twitter },
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
                <img src="/MZwebsolution.png" alt="Muzammal" className="w-10 h-10 object-contain" />
                <div>
                  <div className="text-lg font-bold" style={{ 
                    color: "#0f172a",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                  }}>Muzammal</div>
                  <div className="text-xs" style={{ 
                    color: "#64748b",
                    fontFamily: "'Poppins', sans-serif",
                  }}>Full-Stack Developer</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
              }}>
                I build high-performance websites and web applications for businesses worldwide.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-2 pt-2">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <motion.a
                    key={name}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-lg transition-all duration-300"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                    aria-label={name}
                  >
                    <Icon className="h-4 w-4" style={{ color: "#10b981" }} />
                  </motion.a>
                ))}
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
                <a href="mailto:muzammalzaheer571@gmail.com" className="flex items-center gap-2 text-sm group">
                  <div className="p-2 rounded-lg transition-colors" style={{
                    background: "rgba(16,185,129,0.1)",
                  }}>
                    <Mail className="h-3.5 w-3.5" style={{ color: "#10b981" }} />
                  </div>
                  <span className="transition-colors" style={{
                    color: "#64748b",
                    fontFamily: "'Poppins', sans-serif",
                  }}>muzammalzaheer571@gmail.com</span>
                </a>
                <a href="tel:+923417359571" className="flex items-center gap-2 text-sm group">
                  <div className="p-2 rounded-lg transition-colors" style={{
                    background: "rgba(16,185,129,0.1)",
                  }}>
                    <Phone className="h-3.5 w-3.5" style={{ color: "#10b981" }} />
                  </div>
                  <span className="transition-colors" style={{
                    color: "#64748b",
                    fontFamily: "'Poppins', sans-serif",
                  }}>+92 341 735 9571</span>
                </a>
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
            © {currentYear} Muzammal. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs">
            {/* <Link href="/privacy" className="transition-colors" style={{
              color: "#64748b",
              fontFamily: "'Poppins', sans-serif",
            }}>Privacy</Link>
            <Link href="/terms" className="transition-colors" style={{
              color: "#64748b",
              fontFamily: "'Poppins', sans-serif",
            }}>Terms</Link> */}
            <span style={{
              color: "#94a3b8",
              fontFamily: "'Poppins', sans-serif",
            }}>Built with Next.js</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
