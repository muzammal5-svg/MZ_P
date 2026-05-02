"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small businesses and personal brands getting started online.",
    features: [
      { group: "Design", items: ["Custom WordPress Theme", "Up to 5 Pages", "Mobile Responsive", "Basic SEO Setup"] },
      { group: "Performance", items: ["Speed Optimization", "SSL Certificate", "Basic Security Hardening"] },
      { group: "Support", items: ["30-Day Post-Launch Support", "1 Revision Round"] },
    ],
    cta: "Get Started",
    href: "/contact",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "The most popular choice for growing businesses that need a powerful web presence.",
    features: [
      { group: "Design", items: ["Premium Custom Theme", "Up to 15 Pages", "Advanced Animations", "Full SEO Optimization"] },
      { group: "Performance", items: ["Core Web Vitals Tuning", "CDN Integration", "Advanced Security Suite", "Daily Backups"] },
      { group: "E-Commerce", items: ["WooCommerce Setup", "Payment Gateway Integration", "Product Catalog"] },
      { group: "Support", items: ["60-Day Post-Launch Support", "3 Revision Rounds", "Priority Response"] },
    ],
    cta: "Start Project",
    href: "/contact",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions for established businesses with complex requirements.",
    features: [
      { group: "Design", items: ["Fully Bespoke Design System", "Unlimited Pages", "Custom Plugin Development", "Multi-language Support"] },
      { group: "Performance", items: ["Enterprise-Grade Hosting Setup", "Advanced Caching Stack", "Penetration Testing", "Uptime Monitoring"] },
      { group: "Integrations", items: ["CRM & ERP Integration", "Custom API Development", "Third-party Automation"] },
      { group: "Support", items: ["6-Month Retainer Support", "Dedicated Account Manager", "Unlimited Revisions"] },
    ],
    cta: "Let's Talk",
    href: "/contact",
    highlight: false,
  },
]

export function Packages() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-dark">
      <div className="particle-grid opacity-30" />
      <div className="orb w-80 h-80 bg-accent/10 top-20 left-20" />
      <div className="orb w-64 h-64 bg-primary/10 bottom-20 right-20" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/20 mb-8">
            <span className="text-sm font-medium text-white">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Investment</span>{" "}
            <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Clear, honest pricing with no hidden fees. Every package is built around delivering measurable ROI.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl border overflow-hidden ${
                plan.highlight
                  ? "border-primary/50 shadow-2xl shadow-primary/20"
                  : "border-white/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-blue" />
              )}

              <div className={`p-8 ${plan.highlight ? "bg-primary/5 backdrop-blur-xl" : "glass-card"}`}>
                {plan.highlight && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold mb-4">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-2 mb-3">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-400 mb-1">/ project</span>}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Features grouped */}
                <div className="space-y-5 mb-8">
                  {plan.features.map((group) => (
                    <div key={group.group}>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">{group.group}</div>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Link href={plan.href}>
                  <Button
                    className={`w-full font-semibold py-4 rounded-xl transition-all duration-300 ${
                      plan.highlight
                        ? "bg-gradient-blue hover:bg-gradient-purple text-white shadow-lg"
                        : "glass border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Satisfaction Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative rounded-3xl border border-primary/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
            <div className="relative p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-full bg-gradient-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">100% Satisfaction Guarantee</h3>
                <p className="text-gray-300 leading-relaxed">
                  If you're not completely satisfied with the delivered work, I'll revise it until you are — or provide a full refund. No questions asked. Your success is my commitment.
                </p>
              </div>
              <Link href="/contact" className="flex-shrink-0">
                <Button className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300">
                  Claim Your Guarantee
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
