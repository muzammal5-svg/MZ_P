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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
    honeypot: "", // hidden spam field
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" })
    }
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters)."
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address."
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com)."
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = "Please describe your project or inquiry (at least 5 characters)."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          service: formData.service || "General Inquiry",
          budget: formData.budget || "Not specified",
          timeline: formData.timeline || "Flexible",
          message: formData.message.trim(),
          honeypot: formData.honeypot,
          sourcePage: "Dedicated Contact Page",
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thanks, I'll get back to you within 24 hours.",
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
          honeypot: "",
        })
        setErrors({})
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong while submitting. Please try again or reach out directly.",
        })
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection or reach out via WhatsApp.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "muzammalzaheer571@gmail.com",
      description: "Send me an email anytime",
      action: "mailto:muzammalzaheer571@gmail.com",
      color: "#10b981",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+92 341 735 9571",
      description: "Mon–Fri from 9am to 6pm",
      action: "tel:+923417359571",
      color: "#06b6d4",
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      content: "+92 341 735 9571",
      description: "Fast Response (2–4 hour reply)",
      action: "https://wa.me/923417359571?text=Hi! I'm visiting your contact page and interested in your services. Let's discuss my project!",
      color: "#22c55e",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Pakistan",
      description: "Serving clients worldwide",
      action: null,
      color: "#8b5cf6",
    },
  ]

  const services = [
    "WordPress Development",
    "Shopify Development", 
    "Frontend Development",
    "AI Automation",
    "AI Chatbot Integration",
    "eBay Templates",
    "SEO Optimization",
    "Custom Web Application",
    "Other",
  ]

  const budgets = [
    "Under $1,000",
    "$1,000 – $3,000",
    "$3,000 – $7,000",
    "$7,000+",
  ]

  const timelines = [
    "ASAP",
    "1–2 weeks",
    "1 month",
    "2–3 months",
    "Flexible",
  ]

  return (
    <>
      <MZwebSolutionsNavigation />
      <div className="min-h-screen pt-20 sm:pt-24" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>
        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} />
        <div className="absolute top-80 left-10 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }} />

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
                style={{
                  background: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.3)",
                }}>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium" style={{ color: "#059669", fontFamily: "'Poppins', sans-serif" }}>
                  Let's Connect
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                style={{
                  color: "#0f172a",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "-0.02em",
                  fontWeight: 700,
                }}>
                Start Your Project{" "}
                <span style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Today</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl leading-relaxed px-4"
                style={{
                  color: "#64748b",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                }}>
                Have a project in mind or looking for a long-term development partner? Send over your details and I'll reply promptly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form and Contact Info Grid */}
        <section className="py-6 sm:py-8 md:py-12 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
              
              {/* Form Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full"
              >
                <Card className="p-6 sm:p-8 md:p-10 border-2"
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
                    }}>
                    Send Me a Message
                  </h2>

                  {/* Status message */}
                  <div aria-live="polite" role="status">
                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 sm:p-5 rounded-xl mb-6 space-y-3"
                        style={{
                          background: submitStatus.type === "success" 
                            ? "rgba(34,197,94,0.12)"
                            : "rgba(239,68,68,0.12)",
                          border: submitStatus.type === "success"
                            ? "2px solid rgba(34,197,94,0.25)"
                            : "2px solid rgba(239,68,68,0.25)",
                          color: submitStatus.type === "success" ? "#15803d" : "#b91c1c",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          {submitStatus.type === "success" ? (
                            <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                          ) : (
                            <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                          )}
                          <span className="text-sm font-semibold">{submitStatus.message}</span>
                        </div>

                        {submitStatus.type === "error" && (
                          <div className="pt-2 border-t border-red-200 flex flex-wrap gap-2 text-xs">
                            <a
                              href="https://wa.me/923417359571?text=Hi! I tried submitting the contact form on your portfolio and encountered an issue. Let's talk here!"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                            >
                              <WhatsAppIcon className="w-3.5 h-3.5" />
                              Chat on WhatsApp
                            </a>
                            <a
                              href="mailto:muzammalzaheer571@gmail.com"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5 text-blue-600" />
                              Email Directly
                            </a>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                  
                  <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Honeypot field */}
                    <input
                      type="text"
                      name="website"
                      value={formData.honeypot}
                      onChange={(e) => handleInputChange("honeypot", e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    />

                    {/* Name & Email Row */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div className="w-full">
                        <label 
                          htmlFor="contact-name"
                          className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "contact-name-error" : undefined}
                          className={`h-12 px-4 rounded-xl border-2 transition-all w-full ${
                            errors.name ? "border-red-500 bg-red-50/20" : "focus:border-emerald-500"
                          }`}
                          style={{
                            background: "#ffffff",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                          }}
                          placeholder="Your full name"
                          required
                        />
                        {errors.name && (
                          <p id="contact-name-error" className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="w-full">
                        <label 
                          htmlFor="contact-email"
                          className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          className={`h-12 px-4 rounded-xl border-2 transition-all w-full ${
                            errors.email ? "border-red-500 bg-red-50/20" : "focus:border-emerald-500"
                          }`}
                          style={{
                            background: "#ffffff",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                          }}
                          placeholder="your@email.com"
                          required
                        />
                        {errors.email && (
                          <p id="contact-email-error" className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div className="w-full">
                        <label 
                          htmlFor="contact-phone"
                          className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Phone / WhatsApp <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="h-12 px-4 rounded-xl border-2 focus:border-emerald-500 transition-all w-full"
                          style={{
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                          }}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div className="w-full">
                        <label 
                          htmlFor="contact-company"
                          className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Company / Website <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <Input
                          id="contact-company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="h-12 px-4 rounded-xl border-2 focus:border-emerald-500 transition-all w-full"
                          style={{
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                          }}
                          placeholder="Your company or site"
                        />
                      </div>
                    </div>

                    {/* Service Interested In */}
                    <div className="w-full">
                      <label 
                        htmlFor="contact-service"
                        className="block text-xs sm:text-sm font-semibold mb-2"
                        style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                      >
                        Service Interested In
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger 
                          id="contact-service"
                          className="h-12 px-4 rounded-xl border-2 focus:border-emerald-500 transition-all w-full"
                          style={{
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            color: formData.service ? "#0f172a" : "#94a3b8",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                          }}>
                          <SelectValue placeholder="Select a service (optional)" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl" style={{ background: "#ffffff", borderColor: "#e2e8f0" }}>
                          {services.map((service) => (
                            <SelectItem key={service} value={service} 
                              className="rounded-lg py-3 cursor-pointer"
                              style={{ 
                                color: "#0f172a",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "15px",
                              }}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Budget & Timeline Row */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div className="w-full">
                        <label 
                          htmlFor="contact-budget"
                          className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Budget Range
                        </label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger 
                            id="contact-budget"
                            className="h-12 px-4 rounded-xl border-2 focus:border-emerald-500 transition-all w-full"
                            style={{
                              background: "#ffffff",
                              borderColor: "#e2e8f0",
                              color: formData.budget ? "#0f172a" : "#94a3b8",
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: "15px",
                            }}>
                            <SelectValue placeholder="Select budget (optional)" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl" style={{ background: "#ffffff", borderColor: "#e2e8f0" }}>
                            {budgets.map((budget) => (
                              <SelectItem key={budget} value={budget}
                                className="rounded-lg py-3 cursor-pointer"
                                style={{ 
                                  color: "#0f172a",
                                  fontFamily: "'Poppins', sans-serif",
                                  fontSize: "15px",
                                }}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="w-full">
                        <label 
                          htmlFor="contact-timeline"
                          className="block text-xs sm:text-sm font-semibold mb-2"
                          style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Timeline
                        </label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger 
                            id="contact-timeline"
                            className="h-12 px-4 rounded-xl border-2 focus:border-emerald-500 transition-all w-full"
                            style={{
                              background: "#ffffff",
                              borderColor: "#e2e8f0",
                              color: formData.timeline ? "#0f172a" : "#94a3b8",
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: "15px",
                            }}>
                            <SelectValue placeholder="Select timeline (optional)" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl" style={{ background: "#ffffff", borderColor: "#e2e8f0" }}>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}
                                className="rounded-lg py-3 cursor-pointer"
                                style={{ 
                                  color: "#0f172a",
                                  fontFamily: "'Poppins', sans-serif",
                                  fontSize: "15px",
                                }}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Project Details Textarea */}
                    <div>
                      <label 
                        htmlFor="contact-message"
                        className="block text-xs sm:text-sm font-semibold mb-2"
                        style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                      >
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="contact-message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                        className={`min-h-[140px] p-4 rounded-xl border-2 transition-all resize-none w-full ${
                          errors.message ? "border-red-500 bg-red-50/20" : "focus:border-emerald-500"
                        }`}
                        style={{
                          background: "#ffffff",
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "15px",
                          lineHeight: "1.7",
                        }}
                        placeholder="Tell me about your project, goals, key requirements, or any references..."
                        required
                      />
                      {errors.message && (
                        <p id="contact-message-error" className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
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
                    </div>
                  </form>
                </Card>
              </motion.div>

              {/* Contact Info Column */}
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
                    }}>
                    Direct Contact Options
                  </h2>
                  <p className="leading-relaxed text-sm sm:text-base"
                    style={{
                      color: "#64748b",
                      fontFamily: "'Poppins', sans-serif",
                    }}>
                    Prefer to reach out directly? Use any of the channels below for a prompt conversation about your project.
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
                                <a 
                                  href={info.action}
                                  target={info.action.startsWith("http") ? "_blank" : undefined}
                                  rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                                  className="font-medium transition-colors text-sm sm:text-base break-words block hover:underline"
                                  style={{
                                    color: info.color,
                                    fontFamily: "'Poppins', sans-serif",
                                  }}
                                >
                                  {info.content}
                                </a>
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

                {/* Response Time Card */}
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
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#0d9488" }} />
                      <h3 className="font-semibold text-sm sm:text-base"
                        style={{
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                        }}>
                        Fast Response
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm"
                      style={{
                        color: "#64748b",
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.7",
                      }}>
                      I usually reply within 2–4 hours during business hours. For urgent matters, WhatsApp is the fastest way to reach me.
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
