"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Github, Linkedin, ExternalLink, Clock, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-config"

export function MZwebSolutionsFooter() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "All Services", href: "/services" },
    { name: "Portfolio & Case Studies", href: "/portfolio" },
    { name: "Client Testimonials", href: "/#testimonials" },
    { name: "Request a Quote", href: "/contact" },
  ]

  return (
    <footer
      className="relative border-t bg-slate-50/70"
      style={{
        borderColor: "rgba(226, 232, 240, 0.9)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
            {/* Column 1: Identity & Bio */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-emerald-500/40 hover:ring-emerald-500 transition-all duration-300 flex-shrink-0">
                  <Image
                    src="/profile-pic.jpg"
                    alt={siteConfig.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div
                    className="text-lg font-bold text-slate-900 leading-tight"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {siteConfig.name}
                  </div>
                  <div
                    className="text-xs text-emerald-600 font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {siteConfig.title}
                  </div>
                </div>
              </div>

              <p
                className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Specializing in high-converting WordPress sites, custom Shopify stores, modern React/Next.js applications, and business automations.
              </p>

              {/* Verified Profiles */}
              <div className="flex flex-wrap gap-2 pt-1">
                {siteConfig.upworkUrl && (
                  <a
                    href={siteConfig.upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors"
                    aria-label="Verified Upwork Profile"
                  >
                    Upwork <ExternalLink className="w-3 h-3 text-emerald-600" />
                  </a>
                )}

                {siteConfig.fiverrUrl && (
                  <a
                    href={siteConfig.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors"
                    aria-label="Verified Fiverr Profile"
                  >
                    Fiverr <ExternalLink className="w-3 h-3 text-emerald-600" />
                  </a>
                )}

                {siteConfig.githubUrl && (
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}

                {siteConfig.linkedinUrl && (
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Column 2: Services */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Services
              </h3>
              <ul className="space-y-2.5">
                {Object.values(siteConfig.serviceDetails).map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="text-xs sm:text-sm text-slate-600 hover:text-emerald-600 transition-colors flex items-center justify-between group"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <span>{svc.title}</span>
                      <span className="text-[11px] font-medium text-slate-400 group-hover:text-emerald-600">
                        From {svc.startingPrice}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Navigation
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-600 hover:text-emerald-600 transition-colors inline-block"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Contact & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3
                className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Direct Contact
              </h3>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for New Projects
              </div>

              <div className="space-y-2.5">
                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 hover:text-emerald-600 transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span>{siteConfig.email}</span>
                  </a>
                )}

                {siteConfig.phone && (
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber || siteConfig.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 hover:text-emerald-600 transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span>{siteConfig.phone}</span>
                  </a>
                )}

                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>Avg. response time: &lt; 2 hours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3 border-t text-xs text-slate-500"
          style={{ borderColor: "rgba(226, 232, 240, 0.9)" }}
        >
          <div>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              100% Client Satisfaction Guarantee
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
