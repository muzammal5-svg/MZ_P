"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, MessageSquare, Zap, Globe, Users, Clock, TrendingUp, Bot, Sparkles } from "lucide-react"

export default function AIChatbotPage() {
  const features = [
    { icon: <MessageSquare className="w-5 h-5" />, title: "Natural Conversations", desc: "Human-like responses powered by ChatGPT" },
    { icon: <Clock className="w-5 h-5" />, title: "24/7 Availability", desc: "Never miss a customer inquiry" },
    { icon: <Globe className="w-5 h-5" />, title: "Multi-Language", desc: "Support customers in 100+ languages" },
    { icon: <Users className="w-5 h-5" />, title: "Lead Generation", desc: "Qualify and capture leads automatically" },
    { icon: <Zap className="w-5 h-5" />, title: "Instant Responses", desc: "Answer questions in milliseconds" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Analytics Dashboard", desc: "Track conversations and insights" },
  ]

  const platforms = [
    { name: "Website", desc: "Embed chatbot on your website" },
    { name: "WhatsApp", desc: "WhatsApp Business integration" },
    { name: "Facebook Messenger", desc: "Automate Facebook messages" },
    { name: "Instagram", desc: "DM automation for Instagram" },
    { name: "Slack", desc: "Internal team assistant" },
    { name: "Discord", desc: "Community support bot" },
  ]

  const useCases = [
    {
      title: "Customer Support",
      description: "Answer FAQs, troubleshoot issues, and escalate complex queries to human agents",
      benefits: ["Reduce support tickets by 60%", "Instant response time", "24/7 availability"],
    },
    {
      title: "Lead Qualification",
      description: "Ask qualifying questions, collect contact info, and schedule meetings automatically",
      benefits: ["Qualify leads while you sleep", "Auto-schedule demos", "CRM integration"],
    },
    {
      title: "E-commerce Assistant",
      description: "Help customers find products, track orders, and process returns",
      benefits: ["Increase conversions by 40%", "Reduce cart abandonment", "Order tracking"],
    },
    {
      title: "Appointment Booking",
      description: "Book appointments, send reminders, and manage calendars automatically",
      benefits: ["Automated scheduling", "SMS/Email reminders", "No-show reduction"],
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$89",
      description: "Perfect for small businesses",
      features: [
        "1 chatbot",
        "Up to 1,000 messages/month",
        "Website integration",
        "Basic customization",
        "Email support",
        "Analytics dashboard",
      ],
    },
    {
      name: "Professional",
      price: "$229",
      description: "For growing companies",
      features: [
        "3 chatbots",
        "10,000 messages/month",
        "Multi-platform (Website + 2)",
        "Advanced AI training",
        "Priority support",
        "CRM integration",
        "Custom branding",
        "A/B testing",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$449+",
      description: "Large-scale deployments",
      features: [
        "Unlimited chatbots",
        "Unlimited messages",
        "All platforms",
        "Custom AI model training",
        "24/7 support",
        "API access",
        "Dedicated account manager",
        "White-label solution",
        "SLA guarantee",
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
                background: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.3)",
              }}>
              <Bot className="w-4 h-4" style={{ color: "#8b5cf6" }} />
              <span className="text-sm font-medium" style={{ color: "#8b5cf6", fontFamily: "'Poppins', sans-serif" }}>
                AI-Powered Chatbots
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#0f172a",
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}>
              Smart AI Chatbots for{" "}
              <span style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Your Business
              </span>
            </h1>

            <p className="text-lg sm:text-xl mb-8"
              style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.8,
              }}>
              Automate customer support, generate leads, and provide 24/7 assistance with ChatGPT-powered AI chatbots. Deploy on website, WhatsApp, Facebook, and more.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                  boxShadow: "0 4px 20px rgba(139,92,246,0.4)",
                }}
              >
                Get Your Chatbot
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
                    border: "2px solid #8b5cf6",
                    color: "#8b5cf6",
                  }}
                >
                  See Demo
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
              Intelligent Features
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
                  border: "2px solid rgba(139,92,246,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(139,92,246,0.15)",
                    color: "#8b5cf6",
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

      {/* Platforms */}
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
              Deploy Anywhere
            </h2>
            <p style={{
              color: "#64748b",
              fontFamily: "'Poppins', sans-serif",
            }}>
              Integrate your AI chatbot across multiple platforms
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl text-center"
                style={{
                  background: "rgba(139,92,246,0.05)",
                  border: "2px solid rgba(139,92,246,0.15)",
                }}
              >
                <h3 className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#0f172a",
                  }}>
                  {platform.name}
                </h3>
                <p className="text-sm"
                  style={{
                    color: "#64748b",
                    fontFamily: "'Poppins', sans-serif",
                  }}>
                  {platform.desc}
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
              Use Cases
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
                  border: "2px solid rgba(139,92,246,0.15)",
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
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "#10b981" }} />
                      <span style={{
                        color: "#64748b",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                      }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
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
              Pricing Plans
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
                  background: plan.popular ? "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)" : "rgba(255,255,255,0.9)",
                  border: plan.popular ? "none" : "2px solid rgba(139,92,246,0.15)",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      color: "#8b5cf6",
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
                    background: plan.popular ? "rgba(255,255,255,0.2)" : "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
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
              background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            }}
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-white" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
              }}>
              Transform Your Customer Experience
            </h2>
            <p className="text-lg mb-8 text-white/90"
              style={{
                fontFamily: "'Poppins', sans-serif",
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}>
              Let's build an AI chatbot that understands your business and delights your customers.
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
              Start Your Project
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

          </div>
  )
}
