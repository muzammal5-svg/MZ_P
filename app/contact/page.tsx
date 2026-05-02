"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Send, ArrowRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || "Something went wrong. Please try again."
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: "Network error. Please check your connection and try again."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Me",
      content: "muzammalzaheer571@gmail.com",
      description: "Send me an email anytime",
      action: "mailto:muzammalzaheer571@gmail.com",
      color: "#10b981"
    },
    {
      icon: Phone,
      title: "Call Me",
      content: "+92 341 735 9571",
      description: "Mon-Fri from 9am to 6pm",
      action: "tel:+923417359571",
      color: "#06b6d4"
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      content: "+92 341 735 9571",
      description: "Quick response guaranteed",
      action: "https://wa.me/923417359571?text=Hi! I'm visiting your contact page and interested in your services. Let's discuss my project!",
      color: "#22c55e"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Pakistan",
      description: "Serving clients worldwide",
      action: null,
      color: "#8b5cf6"
    }
  ]

  const services = [
    "WordPress Development",
    "Shopify Development", 
    "Frontend Development",
    "eBay Templates",
    "SEO Optimization",
    "Custom Web Application",
    "Other"
  ]

  const budgets = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+"
  ]

  const timelines = [
    "ASAP",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3+ months"
  ]

  return (
    <>
      <MZwebSolutionsNavigation />
      <div className="min-h-screen pt-20 sm:pt-24" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>
        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} />
        <div className="absolute bottom-40 left-10 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)" }} />

        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative z-10 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mb-6 sm:mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "2px solid rgba(16,185,129,0.3)",
                  }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#10b981" }} />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide" style={{ 
                    color: "#10b981",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}>
                    LET'S CONNECT
                  </span>
                </div>
              </motion.div> */}

              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center mb-5 sm:mb-6 md:mb-8"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "-0.03em",
                    lineHeight: "1.1",
                  }}>
                  <span style={{ 
                    color: "#0f172a",
                    display: "block",
                    marginBottom: "0.2em",
                  }}>
                    Ready to Build
                  </span>
                  <span style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "block",
                  }}>
                    Your Next Project?
                  </span>
                </div>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
                style={{
                  color: "#64748b",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.7",
                }}>
                I'm here to transform your vision into a high-performance digital solution. 
                <span style={{ color: "#0f172a", fontWeight: 500 }}> Let's discuss your project</span> and create something exceptional together.
              </motion.p>

              {/* Stats Row */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10"
              >
                {[
                  { value: "2-4 hrs", label: "Response Time" },
                  { value: "100+", label: "Projects Delivered" },
                  { value: "5.0", label: "Client Rating" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
                      style={{
                        background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                      }}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium"
                      style={{ 
                        color: "#64748b",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                      }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div> */}

              {/* CTA Buttons */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-200 w-full sm:w-auto justify-center"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#63b3ed",
                    background: "transparent",
                    border: "2px solid #63b3ed",
                    fontWeight: 600,
                  }}
                >
                  Let's Build Together
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="https://wa.me/923417359571?text=Hi! I'm interested in discussing a project."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-200 w-full sm:w-auto justify-center"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#22c55e",
                    background: "transparent",
                    border: "2px solid #22c55e",
                    fontWeight: 600,
                  }}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Quick Chat
                </motion.a>
              </motion.div> */}
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)" }} />
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)" }} />
        </section>

        {/* Contact Section */}
        <section className="pb-12 sm:pb-16 md:pb-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full"
                id="contact-form"
              >
                <Card className="p-4 sm:p-6 md:p-8 lg:p-10 border-2 w-full"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(20px)",
                    borderColor: "rgba(16,185,129,0.15)",
                    boxShadow: "0 25px 70px rgba(16,185,129,0.08)",
                    borderRadius: "1.5rem",
                  }}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8"
                    style={{
                      color: "#0f172a",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                    }}>Send me a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-7">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div className="w-full">
                        <label className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            fontSize: "14px",
                          }}>
                          Name *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="h-11 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 rounded-xl border-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                          style={{
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            fontSize: "14px",
                          }}>
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="h-11 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 rounded-xl border-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                          style={{
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div className="w-full">
                        <label className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            fontSize: "14px",
                          }}>
                          Phone
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="h-11 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 rounded-xl border-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                          style={{
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div className="w-full">
                        <label className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            fontSize: "14px",
                          }}>
                          Company
                        </label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="h-11 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 rounded-xl border-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                          style={{
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <label className="block text-xs sm:text-sm font-semibold mb-2"
                        style={{
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}>
                        Service Interested In
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="h-11 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 rounded-xl border-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                          style={{
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            color: formData.service ? "#0f172a" : "#94a3b8",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl" style={{ background: "#ffffff", borderColor: "#e2e8f0" }}>
                          {services.map((service) => (
                            <SelectItem key={service} value={service} 
                              className="rounded-lg py-3"
                              style={{ 
                                color: "#0f172a",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "15px",
                                fontWeight: 500,
                              }}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div className="w-full">
                        <label className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            fontSize: "14px",
                          }}>
                          Budget Range
                        </label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="h-11 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 rounded-xl border-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                            style={{
                              background: "#ffffff",
                              borderColor: "#e2e8f0",
                              color: formData.budget ? "#0f172a" : "#94a3b8",
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: "15px",
                              fontWeight: 500,
                            }}>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl" style={{ background: "#ffffff", borderColor: "#e2e8f0" }}>
                            {budgets.map((budget) => (
                              <SelectItem key={budget} value={budget}
                                className="rounded-lg py-3"
                                style={{ 
                                  color: "#0f172a",
                                  fontFamily: "'Poppins', sans-serif",
                                  fontSize: "15px",
                                  fontWeight: 500,
                                }}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="w-full">
                        <label className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            fontSize: "14px",
                          }}>
                          Timeline
                        </label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger className="h-11 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 rounded-xl border-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                            style={{
                              background: "#ffffff",
                              borderColor: "#e2e8f0",
                              color: formData.timeline ? "#0f172a" : "#94a3b8",
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: "15px",
                              fontWeight: 500,
                            }}>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl" style={{ background: "#ffffff", borderColor: "#e2e8f0" }}>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}
                                className="rounded-lg py-3"
                                style={{ 
                                  color: "#0f172a",
                                  fontFamily: "'Poppins', sans-serif",
                                  fontSize: "15px",
                                  fontWeight: 500,
                                }}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3"
                        style={{
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}>
                        Project Details *
                      </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="min-h-[140px] sm:min-h-[160px] p-4 sm:p-5 rounded-xl border-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                        style={{
                          background: "#ffffff",
                          borderColor: "#e2e8f0",
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "15px",
                          fontWeight: 500,
                          lineHeight: "1.7",
                        }}
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                        required
                      />
                    </div>

                    {/* Status Message */}
                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-5 rounded-xl"
                        style={{
                          background: submitStatus.type === 'success' 
                            ? "rgba(34,197,94,0.1)"
                            : "rgba(239,68,68,0.1)",
                          border: submitStatus.type === 'success'
                            ? "2px solid rgba(34,197,94,0.25)"
                            : "2px solid rgba(239,68,68,0.25)",
                          color: submitStatus.type === 'success' ? "#16a34a" : "#dc2626",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {submitStatus.type === 'success' ? (
                          <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        )}
                        <span className="text-sm font-medium">{submitStatus.message}</span>
                      </motion.div>
                    )}

                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-white font-semibold py-5 sm:py-6 md:py-7 rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 transition-all duration-300"
                        style={{
                          background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                          fontSize: "16px",
                        }}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4 sm:space-y-5 md:space-y-6 w-full"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                    style={{
                      color: "#0f172a",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                    }}>Get in touch</h2>
                  <p className="leading-relaxed text-sm sm:text-base"
                    style={{
                      color: "#64748b",
                      fontFamily: "'Poppins', sans-serif",
                    }}>
                    I'm here to help bring your digital vision to life. Whether you have a specific project in mind 
                    or just want to explore possibilities, I'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="w-full"
                      >
                        <Card className="p-4 sm:p-5 border-2 transition-all duration-300 w-full"
                          style={{
                            background: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(20px)",
                            borderColor: "rgba(226,232,240,0.8)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            borderRadius: "1rem",
                          }}>
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0"
                              style={{
                                background: `${info.color}15`,
                              }}>
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: info.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold mb-1 text-sm sm:text-base"
                                style={{
                                  color: "#0f172a",
                                  fontFamily: "'Poppins', sans-serif",
                                  fontWeight: 600,
                                }}>
                                {info.title}
                              </h3>
                              {info.action ? (
                                <Link 
                                  href={info.action}
                                  className="font-medium transition-colors text-sm sm:text-base break-words block"
                                  style={{
                                    color: info.color,
                                    fontFamily: "'Poppins', sans-serif",
                                  }}
                                >
                                  {info.content}
                                </Link>
                              ) : (
                                <div className="font-medium text-sm sm:text-base break-words"
                                  style={{
                                    color: info.color,
                                    fontFamily: "'Poppins', sans-serif",
                                  }}>
                                  {info.content}
                                </div>
                              )}
                              <p className="text-xs sm:text-sm mt-1"
                                style={{
                                  color: "#64748b",
                                  fontFamily: "'Poppins', sans-serif",
                                }}>
                                {info.description}
                              </p>
                            </div>
                            {info.action && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: "#94a3b8" }} />}
                          </div>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Response Time */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="w-full"
                >
                  <Card className="p-4 sm:p-5 md:p-6 border-2 w-full"
                    style={{
                      background: "rgba(16,185,129,0.05)",
                      backdropFilter: "blur(20px)",
                      borderColor: "rgba(16,185,129,0.2)",
                      borderRadius: "1rem",
                    }}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#10b981" }} />
                      <h3 className="font-semibold text-sm sm:text-base"
                        style={{
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                        }}>Quick Response</h3>
                    </div>
                    <p className="text-xs sm:text-sm"
                      style={{
                        color: "#64748b",
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.7",
                      }}>
                      I typically respond to all inquiries within 2-4 hours during business hours. 
                      For urgent matters, WhatsApp is the fastest way to reach me.
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <MZwebSolutionsFooter />
    </>
  )
}
