"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Mail, Clock, CheckCircle, AlertCircle, Send, ArrowRight, ArrowLeft, Edit3, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const STEPS = ["Your Info", "Project Details", "Review & Send"]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    honeypot: "", // hidden spam field
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  })

  // Refs for auto-focusing the first input on step change
  const nameInputRef = useRef<HTMLInputElement>(null)
  const serviceSelectRef = useRef<HTMLSelectElement>(null)
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (step === 0) {
      nameInputRef.current?.focus()
    } else if (step === 1) {
      serviceSelectRef.current?.focus()
    } else if (step === 2) {
      submitButtonRef.current?.focus()
    }
  }, [step])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" })
    }
    // Clear error on type
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  // Validate step 0
  const validateStep0 = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters)."
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address."
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com)."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Validate step 1
  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = "Please describe your project or inquiry (at least 5 characters)."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 0) {
      if (validateStep0()) setStep(1)
    } else if (step === 1) {
      if (validateStep1()) setStep(2)
    }
  }

  const handleBack = () => {
    if (step > 0) setStep((s) => s - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate before submitting
    const step0Valid = validateStep0()
    const step1Valid = validateStep1()

    if (!step0Valid) {
      setStep(0)
      return
    }
    if (!step1Valid) {
      setStep(1)
      return
    }

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
          service: formData.service || "General Inquiry",
          budget: formData.budget || "Not specified",
          message: formData.message.trim(),
          honeypot: formData.honeypot,
          sourcePage: "Home Page Multi-Step Form",
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
          service: "",
          budget: "",
          message: "",
          honeypot: "",
        })
        setErrors({})
        setStep(0)
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong while submitting. Please try again or reach out directly.",
        })
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection or contact me directly via WhatsApp.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: "muzammalzaheer571@gmail.com",
      sub: "I usually reply within 2–4 hours during business hours",
      href: "mailto:muzammalzaheer571@gmail.com",
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      value: "+92 341 735 9571",
      sub: "Fastest way to reach me",
      href: "https://wa.me/923417359571?text=Hi! I'm interested in your services. Let's discuss my project!",
    },
  ]

  return (
    <section 
      id="contact" 
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-10 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6"
            style={{
              background: "rgba(16,185,129,0.15)",
              border: "1px solid rgba(16,185,129,0.3)",
            }}>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium" style={{ color: "#059669", fontFamily: "'Poppins', sans-serif" }}>
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#0f172a",
              letterSpacing: "-0.01em",
              fontWeight: 700,
            }}>
            Let's Build Something Great{" "}
            <span style={{ 
              background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}>Together</span>
          </h2>
          <p className="text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-4" style={{ 
            color: "#64748b", 
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            lineHeight: "1.8",
          }}>
            Ready to turn your vision into reality? Tell me about your project and let's make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* Multi-step Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card 
              className="p-6 sm:p-8"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(16,185,129,0.2)",
                borderRadius: "1.5rem",
                boxShadow: "0 20px 60px rgba(16,185,129,0.12)",
              }}
            >
              {/* Status Alert (Success / Error with Fallbacks) */}
              <div aria-live="polite" role="status">
                <AnimatePresence>
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="mb-6 overflow-hidden"
                    >
                      <div
                        className="p-4 rounded-xl space-y-3"
                        style={{
                          background: submitStatus.type === "success"
                            ? "rgba(34,197,94,0.12)"
                            : "rgba(239,68,68,0.12)",
                          border: submitStatus.type === "success"
                            ? "2px solid rgba(34,197,94,0.3)"
                            : "2px solid rgba(239,68,68,0.3)",
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

                        {/* Error Fallback CTAs */}
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Progress Stepper Indicator */}
              <div className="flex items-center gap-2 mb-8" aria-label="Form progress">
                {STEPS.map((label, i) => (
                  <div key={label} className="flex items-center gap-2 flex-1">
                    <div 
                      className="flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 flex-shrink-0"
                      style={{
                        background: i <= step 
                          ? "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" 
                          : "rgba(226,232,240,0.8)",
                        color: i <= step ? "#ffffff" : "#94a3b8",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                    </div>
                    <span 
                      className="text-xs font-medium transition-colors hidden sm:inline"
                      style={{ 
                        color: i === step ? "#0f172a" : "#94a3b8",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {label}
                    </span>
                    {i < STEPS.length - 1 && (
                      <div 
                        className="flex-1 h-0.5 transition-colors"
                        style={{ 
                          background: i < step 
                            ? "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" 
                            : "rgba(226,232,240,0.8)",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Form Body */}
              <form 
                onSubmit={handleSubmit} 
                noValidate
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.target as HTMLElement).tagName !== "TEXTAREA" && step < 2) {
                    e.preventDefault()
                    handleNext()
                  }
                }}
              >
                {/* Honeypot field for bot protection */}
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

                <AnimatePresence mode="wait">
                  {/* STEP 0: Your Info */}
                  {step === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4 sm:space-y-5 w-full"
                    >
                      <div className="border-b pb-3 mb-2">
                        <h3 
                          className="text-lg sm:text-xl font-bold"
                          style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Step 1 of 3: Your Information
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Let me know who you are and where I can reply.
                        </p>
                      </div>

                      {/* Full Name */}
                      <div className="w-full">
                        <label 
                          htmlFor="home-form-name"
                          className="block text-xs sm:text-sm font-semibold mb-1.5"
                          style={{ color: "#334155", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          ref={nameInputRef}
                          id="home-form-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={`h-12 px-4 w-full rounded-xl border-2 transition-all ${
                            errors.name ? "border-red-500 bg-red-50/20" : "focus:border-emerald-500"
                          }`}
                          style={{
                            background: "rgba(248,250,252,0.9)",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          placeholder="e.g. John Doe"
                          required
                        />
                        {errors.name && (
                          <p id="name-error" className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div className="w-full">
                        <label 
                          htmlFor="home-form-email"
                          className="block text-xs sm:text-sm font-semibold mb-1.5"
                          style={{ color: "#334155", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="home-form-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={`h-12 px-4 w-full rounded-xl border-2 transition-all ${
                            errors.email ? "border-red-500 bg-red-50/20" : "focus:border-emerald-500"
                          }`}
                          style={{
                            background: "rgba(248,250,252,0.9)",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          placeholder="name@example.com"
                          required
                        />
                        {errors.email && (
                          <p id="email-error" className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone / WhatsApp (Optional) */}
                      <div className="w-full">
                        <label 
                          htmlFor="home-form-phone"
                          className="block text-xs sm:text-sm font-semibold mb-1.5"
                          style={{ color: "#334155", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Phone / WhatsApp <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <Input
                          id="home-form-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="h-12 px-4 w-full rounded-xl border-2 focus:border-emerald-500"
                          style={{
                            background: "rgba(248,250,252,0.9)",
                            borderColor: "rgba(226,232,240,0.8)",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      {/* Continue Button (Always active, validates on click) */}
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="w-full text-white font-semibold py-6 rounded-xl transition-all duration-200 hover:opacity-95 active:scale-[0.99] cursor-pointer shadow-md"
                        style={{
                          background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Continue to Project Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}

                  {/* STEP 1: Project Details */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4 sm:space-y-5 w-full"
                    >
                      <div className="border-b pb-3 mb-2">
                        <h3 
                          className="text-lg sm:text-xl font-bold"
                          style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Step 2 of 3: Project Details
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Tell me about the work and requirements.
                        </p>
                      </div>

                      {/* Service Needed */}
                      <div className="w-full">
                        <label 
                          htmlFor="home-form-service"
                          className="block text-xs sm:text-sm font-semibold mb-1.5"
                          style={{ color: "#334155", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Service Needed
                        </label>
                        <select
                          ref={serviceSelectRef}
                          id="home-form-service"
                          value={formData.service}
                          onChange={(e) => handleInputChange("service", e.target.value)}
                          className="w-full px-4 py-3.5 border-2 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                          style={{
                            background: "rgba(248,250,252,0.9)",
                            borderColor: "rgba(226,232,240,0.8)",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          <option value="">Select a service (optional)...</option>
                          <option value="WordPress Development">WordPress Development</option>
                          <option value="Shopify Development">Shopify Development</option>
                          <option value="Frontend Development">Frontend Development (React / Next.js)</option>
                          <option value="AI Automation">AI Automation (Make.com / Webhooks)</option>
                          <option value="AI Chatbot Integration">AI Chatbot Integration</option>
                          <option value="eBay Templates">eBay Listing Templates</option>
                          <option value="Other">Other / Custom Request</option>
                        </select>
                      </div>

                      {/* Budget Range */}
                      <div className="w-full">
                        <label 
                          htmlFor="home-form-budget"
                          className="block text-xs sm:text-sm font-semibold mb-1.5"
                          style={{ color: "#334155", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Budget Range
                        </label>
                        <select
                          id="home-form-budget"
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          className="w-full px-4 py-3.5 border-2 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                          style={{
                            background: "rgba(248,250,252,0.9)",
                            borderColor: "rgba(226,232,240,0.8)",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          <option value="">Select budget range (optional)...</option>
                          <option value="Under $1,000">Under $1,000</option>
                          <option value="$1,000 – $3,000">$1,000 – $3,000</option>
                          <option value="$3,000 – $7,000">$3,000 – $7,000</option>
                          <option value="$7,000+">$7,000+</option>
                        </select>
                      </div>

                      {/* Message / Description */}
                      <div className="w-full">
                        <label 
                          htmlFor="home-form-message"
                          className="block text-xs sm:text-sm font-semibold mb-1.5"
                          style={{ color: "#334155", fontFamily: "'Poppins', sans-serif" }}
                        >
                          Project Description <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="home-form-message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          className={`min-h-[110px] p-4 w-full rounded-xl border-2 transition-all ${
                            errors.message ? "border-red-500 bg-red-50/20" : "focus:border-emerald-500"
                          }`}
                          style={{
                            background: "rgba(248,250,252,0.9)",
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          placeholder="Briefly describe your goals, timeline, or any reference websites..."
                          required
                        />
                        {errors.message && (
                          <p id="message-error" className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button 
                          type="button" 
                          onClick={handleBack} 
                          variant="outline" 
                          className="flex-1 py-6 rounded-xl font-medium transition-all duration-200 cursor-pointer"
                          style={{
                            borderColor: "rgba(16,185,129,0.3)",
                            color: "#0d9488",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={handleNext} 
                          className="flex-1 text-white font-semibold py-6 rounded-xl transition-all duration-200 hover:opacity-95 active:scale-[0.99] cursor-pointer shadow-md"
                          style={{
                            background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          Review &amp; Send
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Review & Send */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4 sm:space-y-5 w-full"
                    >
                      <div className="border-b pb-3 mb-2 flex items-center justify-between">
                        <div>
                          <h3 
                            className="text-lg sm:text-xl font-bold"
                            style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}
                          >
                            Step 3 of 3: Review &amp; Send
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            Double check your details before sending.
                          </p>
                        </div>
                      </div>

                      {/* Review Card */}
                      <div 
                        className="rounded-xl p-4 space-y-3 text-xs sm:text-sm"
                        style={{
                          background: "rgba(248,250,252,0.9)",
                          border: "1px solid rgba(226,232,240,0.9)",
                        }}
                      >
                        <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                          <div>
                            <span className="text-gray-500 block text-[11px] uppercase tracking-wide">Client</span>
                            <span className="font-semibold text-gray-900">{formData.name}</span>
                            <span className="text-gray-500 block text-xs">{formData.email}</span>
                            {formData.phone && <span className="text-gray-500 block text-xs">{formData.phone}</span>}
                          </div>
                          <button
                            type="button"
                            onClick={() => setStep(0)}
                            className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-1 text-xs"
                          >
                            <Edit3 className="w-3 h-3" /> Edit
                          </button>
                        </div>

                        <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                          <div>
                            <span className="text-gray-500 block text-[11px] uppercase tracking-wide">Project Details</span>
                            <span className="font-medium text-gray-800">
                              {formData.service || "General Inquiry"} &bull; Budget: {formData.budget || "Flexible"}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-1 text-xs"
                          >
                            <Edit3 className="w-3 h-3" /> Edit
                          </button>
                        </div>

                        <div>
                          <span className="text-gray-500 block text-[11px] uppercase tracking-wide">Message</span>
                          <p className="text-gray-800 italic whitespace-pre-wrap mt-1 text-xs line-clamp-3">
                            "{formData.message}"
                          </p>
                        </div>
                      </div>

                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        🔒 Your info is private and used solely to respond to your project request.
                      </p>

                      <div className="flex gap-3 pt-2">
                        <Button 
                          type="button" 
                          onClick={handleBack} 
                          variant="outline" 
                          disabled={isSubmitting}
                          className="flex-1 py-6 rounded-xl font-medium transition-all duration-200 cursor-pointer"
                          style={{
                            borderColor: "rgba(16,185,129,0.3)",
                            color: "#0d9488",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <Button
                          ref={submitButtonRef}
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 text-white font-semibold py-6 rounded-xl transition-all duration-200 hover:opacity-95 active:scale-[0.99] cursor-pointer shadow-md disabled:cursor-not-allowed"
                          style={{
                            background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Send className="w-4 h-4" />
                              Send Message
                            </div>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              <div 
                className="mt-6 pt-5 text-center"
                style={{ borderTop: "2px solid rgba(226,232,240,0.5)" }}
              >
                <Button asChild variant="outline" 
                    className="text-xs sm:text-sm transition-all duration-200 w-full sm:w-auto"
                    style={{
                      borderColor: "rgba(16,185,129,0.3)",
                      color: "#0d9488",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                  <Link href="/contact">
                    Visit Full Contact Page
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6 w-full"
          >
            <div>
              <h3 
                className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3"
                style={{ 
                  color: "#0f172a", 
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                }}
              >
                Ready to Build Something Great?
              </h3>
              <p 
                className="leading-relaxed text-sm sm:text-base"
                style={{ 
                  color: "#64748b", 
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                }}
              >
                Whether you have a clear vision or just an initial idea, I'm here to help you turn it into a high-performing digital product.
              </p>
            </div>

            {contactCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(16,185,129,0.2)" }}
                  className="block p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 w-full"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(16,185,129,0.2)",
                    boxShadow: "0 10px 30px rgba(16,185,129,0.08)",
                  }}
                  aria-label={`Contact via ${card.title}`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div 
                      className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0"
                      style={{
                        background: card.title === "Email"
                          ? "rgba(16,185,129,0.15)"
                          : "rgba(34,197,94,0.15)",
                      }}
                    >
                      <Icon 
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        style={{
                          color: card.title === "Email" ? "#0d9488" : "#22c55e",
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div 
                        className="text-[10px] sm:text-xs uppercase tracking-widest mb-1 font-semibold"
                        style={{ 
                          color: "#94a3b8", 
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {card.title}
                      </div>
                      <div 
                        className="font-semibold text-base sm:text-lg break-words"
                        style={{ 
                          color: "#0f172a", 
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {card.value}
                      </div>
                      <div 
                        className="text-xs sm:text-sm mt-1"
                        style={{ 
                          color: "#64748b", 
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {card.sub}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: "#94a3b8" }} />
                  </div>
                </motion.a>
              )
            })}

            {/* Response time card (Softer accurate wording) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
              className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl w-full"
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(16,185,129,0.2)",
                boxShadow: "0 10px 30px rgba(16,185,129,0.08)",
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#0d9488" }} />
                <h4 
                  className="font-semibold text-sm sm:text-base"
                  style={{ 
                    color: "#0f172a", 
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Fast Response
                </h4>
              </div>
              <p 
                className="text-xs sm:text-sm leading-relaxed"
                style={{ 
                  color: "#64748b", 
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                I usually reply within 2–4 hours during business hours. For urgent inquiries, WhatsApp is the fastest channel.
              </p>
              <div className="flex items-center gap-2 mt-3 sm:mt-4">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
                <span 
                  className="text-xs sm:text-sm font-medium"
                  style={{ 
                    color: "#16a34a", 
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Currently Available for New Projects
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
