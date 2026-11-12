"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, Zap, GitBranch, Database, Mail, Calendar, ShoppingCart, Users, FileText, Clock } from "lucide-react"

export default function AIAutomationPage() {
  const features = [
    { icon: <Zap className="w-5 h-5" />, title: "Workflow Automation", desc: "Automate repetitive tasks and save hours every day" },
    { icon: <GitBranch className="w-5 h-5" />, title: "Multi-App Integration", desc: "Connect 1000+ apps without coding" },
    { icon: <Database className="w-5 h-5" />, title: "Data Synchronization", desc: "Keep your data in sync across platforms" },
    { icon: <Mail className="w-5 h-5" />, title: "Email Automation", desc: "Smart email workflows and follow-ups" },
    { icon: <Calendar className="w-5 h-5" />, title: "Scheduling", desc: "Automated scheduling and reminders" },
    { icon: <FileText className="w-5 h-5" />, title: "Document Processing", desc: "Auto-generate and process documents" },
  ]

  const useCases = [
    {
      title: "E-commerce Automation",
      description: "Sync orders from Shopify to Google Sheets, send customer notifications, update inventory across platforms",
      apps: ["Shopify", "Google Sheets", "Gmail", "Slack"],
    },
    {
      title: "Marketing Automation",
      description: "Capture leads from forms, add to CRM, send welcome emails, notify sales team",
      apps: ["Typeform", "HubSpot", "Mailchimp", "Slack"],
    },
    {
      title: "Social Media Management",
      description: "Schedule posts, cross-post content, monitor mentions, generate reports",
      apps: ["Instagram", "Twitter", "Facebook", "Buffer"],
    },
    {
      title: "Customer Support",
      description: "Create tickets from emails, assign to team, track resolution, send surveys",
      apps: ["Gmail", "Zendesk", "Trello", "SurveyMonkey"],
    },
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "$79",
      description: "Perfect for simple automation",
      features: [
        "Up to 3 app integrations",
        "5 automation workflows",
        "1,000 operations/month",
        "Email support",
        "Basic templates",
      ],
    },
    {
      name: "Professional",
      price: "$199",
      description: "For growing businesses",
      features: [
        "Up to 10 app integrations",
        "20 automation workflows",
        "10,000 operations/month",
        "Priority support",
        "Advanced templates",
        "Custom webhooks",
        "Data transformations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$399+",
      description: "Complex automation needs",
      features: [
        "Unlimited integrations",
        "Unlimited workflows",
        "100,000+ operations/month",
        "24/7 support",
        "Custom development",
        "API access",
        "Dedicated account manager",
        "Training sessions",
      ],
    },
  ]

  const scrollToContact = () => {
    window.location.href = "/contact"
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
              }}>
              <Zap className="w-4 h-4" style={{ color: "#6366f1" }} />
              <span className="text-sm font-medium" style={{ color: "#6366f1", fontFamily: "'Poppins', sans-serif" }}>
                AI-Powered Automation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#0f172a",
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}>
              Automate Your Business with{" "}
              <span style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Make.com
              </span>
            </h1>

            <p className="text-lg sm:text-xl mb-8"
              style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.8,
              }}>
              Connect 1000+ apps, automate workflows, and save hours every day with intelligent automation solutions. No coding required.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
                }}
              >
                Start Automating
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
              
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    background: "transparent",
                    border: "2px solid #6366f1",
                    color: "#6366f1",
                  }}
                >
                  View Examples
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#0f172a",
                fontWeight: 700,
              }}>
              Powerful Automation Features
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "2px solid rgba(99,102,241,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(99,102,241,0.15)",
                    color: "#6366f1",
                  }}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#0f172a",
                  }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: "#64748b",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.9rem",
                }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#0f172a",
                fontWeight: 700,
              }}>
              Real-World Use Cases
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "2px solid rgba(99,102,241,0.15)",
                }}
              >
                <h3 className="text-xl font-bold mb-3"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#0f172a",
                  }}>
                  {useCase.title}
                </h3>
                <p className="mb-4"
                  style={{
                    color: "#64748b",
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.7,
                  }}>
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.apps.map((app, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(99,102,241,0.1)",
                        color: "#6366f1",
                        fontFamily: "'Poppins', sans-serif",
                      }}>
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#0f172a",
                fontWeight: 700,
              }}>
              Flexible Pricing Plans
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl relative"
                style={{
                  background: plan.popular ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" : "rgba(255,255,255,0.9)",
                  border: plan.popular ? "none" : "2px solid rgba(99,102,241,0.15)",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      color: "#6366f1",
                    }}>
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: plan.popular ? "#ffffff" : "#0f172a",
                  }}>
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: plan.popular ? "#ffffff" : "#0f172a",
                    }}>
                    {plan.price}
                  </span>
                  <span style={{
                    color: plan.popular ? "rgba(255,255,255,0.8)" : "#64748b",
                    fontFamily: "'Poppins', sans-serif",
                  }}>
                    {plan.price.includes('+') ? '' : '/month'}
                  </span>
                </div>
                
                <p className="mb-6"
                  style={{
                    color: plan.popular ? "rgba(255,255,255,0.9)" : "#64748b",
                    fontFamily: "'Poppins', sans-serif",
                  }}>
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: plan.popular ? "#ffffff" : "#10b981" }} />
                      <span style={{
                        color: plan.popular ? "rgba(255,255,255,0.9)" : "#64748b",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                      }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={scrollToContact}
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-200"
                  style={{
                    background: plan.popular ? "rgba(255,255,255,0.2)" : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                    border: plan.popular ? "2px solid rgba(255,255,255,0.3)" : "none",
                  }}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
              }}>
              Ready to Automate Your Workflow?
            </h2>
            <p className="text-lg mb-8 text-white/90"
              style={{
                fontFamily: "'Poppins', sans-serif",
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}>
              Let's discuss your automation needs and create a custom solution for your business.
            </p>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "rgba(255,255,255,0.2)",
                color: "#ffffff",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              Contact Me Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

          </div>
  )
}
