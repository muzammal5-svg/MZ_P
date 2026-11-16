"use client"

import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  Edit3, 
  Loader2, 
  ExternalLink,
  ShieldCheck,
  Sparkles
} from "lucide-react"
import { track } from "@vercel/analytics"
import { 
  contactFormSchema, 
  ContactFormData, 
  SERVICE_OPTIONS, 
  BUDGET_OPTIONS, 
  TIMELINE_OPTIONS 
} from "@/lib/contact-schema"
import { siteConfig, getWhatsAppUrl } from "@/lib/site-config"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

const STEPS = ["Contact Info", "Project Scope", "Review & Send"]

interface MultiStepContactFormProps {
  initialService?: string
  initialProject?: string
  sourcePage?: string
}

export function MultiStepContactForm({
  initialService,
  initialProject,
  sourcePage = "Contact Form",
}: MultiStepContactFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
    fallbackUrl?: string
  }>({ type: null, message: "" })

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: initialService || SERVICE_OPTIONS[0],
      budget: BUDGET_OPTIONS[1],
      timeline: TIMELINE_OPTIONS[1],
      description: initialProject ? `Interested in discussing a build similar to ${initialProject}. ` : "",
      projectLink: "",
      consent: true,
      honeypot: "",
      turnstileToken: "",
    },
  })

  const selectedService = watch("service")
  const selectedBudget = watch("budget")

  // Auto-focus first input on step change
  const stepOneRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    if (currentStep === 0 && stepOneRef.current) {
      stepOneRef.current.focus()
    }
  }, [currentStep])

  // Step 1 Validation
  const handleNextFromStep0 = async () => {
    const valid = await trigger(["name", "email", "phone"])
    if (valid) {
      setCurrentStep(1)
      window.scrollTo({ top: 300, behavior: "smooth" })
    }
  }

  // Step 2 Validation
  const handleNextFromStep1 = async () => {
    const valid = await trigger(["service", "budget", "timeline", "description", "projectLink"])
    if (valid) {
      setCurrentStep(2)
      window.scrollTo({ top: 300, behavior: "smooth" })
    }
  }

  const handlePrev = () => {
    setCurrentStep((s) => Math.max(0, s - 1))
  }

  // Form Submission
  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus({ type: null, message: "" })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          sourcePage,
        }),
      })

      const result = await res.json()

      if (res.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Thank you! Your message was delivered successfully. I'll get back to you within 24 hours.",
        })
        try {
          track("contact_form_submit", { service: data.service, budget: data.budget })
        } catch {
          // Analytics non-blocking
        }
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Unable to send message right now. Please reach out to me directly on WhatsApp or email.",
          fallbackUrl: result.fallback?.whatsappUrl || siteConfig.whatsappUrl,
        })
      }
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message: "Network error occurred while delivering your message. Please click below to send your requirements directly on WhatsApp.",
        fallbackUrl: siteConfig.whatsappUrl,
      })
    }
  }

  const values = getValues()

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10">
      
      {/* Step Indicator */}
      <div className="mb-8" aria-label="Form progress">
        <div className="flex items-center justify-between mb-3">
          {STEPS.map((stepLabel, idx) => {
            const isCompleted = currentStep > idx
            const isCurrent = currentStep === idx

            return (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isCompleted
                      ? "bg-emerald-600 text-white"
                      : isCurrent
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                </div>
                <span className={`hidden sm:inline text-xs font-semibold ${isCurrent ? "text-slate-900" : "text-slate-400"}`}>
                  {stepLabel}
                </span>
              </div>
            )
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Submission Success State */}
      {submitStatus.type === "success" ? (
        <div 
          role="status" 
          aria-live="polite"
          className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Inquiry Received!
          </h3>

          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
            {submitStatus.message}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(selectedService)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                try { track("whatsapp_click", { source: "form_success" }) } catch {}
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp for Instant Reply</span>
            </a>

            <button
              onClick={() => {
                setSubmitStatus({ type: null, message: "" })
                setCurrentStep(0)
              }}
              className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-600 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Honeypot hidden input for anti-spam */}
          <div style={{ display: "none" }} aria-hidden="true">
            <label htmlFor="hp_field">Do not fill this</label>
            <input 
              id="hp_field" 
              type="text" 
              tabIndex={-1} 
              autoComplete="off" 
              {...register("honeypot")} 
            />
          </div>

          {/* Error Banner with Direct WhatsApp/Email Fallback */}
          {submitStatus.type === "error" && (
            <div 
              role="alert" 
              aria-live="assertive"
              className="p-5 rounded-2xl bg-rose-50 border border-rose-200 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-rose-900">Delivery Notice</div>
                  <div className="text-xs text-rose-700 leading-relaxed mt-0.5">
                    {submitStatus.message}
                  </div>
                </div>
              </div>

              <a
                href={submitStatus.fallbackUrl || getWhatsAppUrl(selectedService)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  try { track("whatsapp_click", { source: "form_error_fallback" }) } catch {}
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex-shrink-0 shadow-sm transition-colors"
              >
                Open WhatsApp
              </a>
            </div>
          )}

          {/* STEP 1: Personal Info */}
          {currentStep === 0 && (
            <div className="space-y-5" aria-labelledby="step-1-title">
              <div className="mb-4">
                <h3 id="step-1-title" className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Your Contact Information
                </h3>
                <p className="text-xs text-slate-500">
                  Where should I send your milestone quote and project estimate?
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Alex Johnson"
                  {...register("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.name 
                      ? "border-rose-400 focus:ring-rose-200" 
                      : "border-slate-300 focus:border-emerald-500 focus:ring-emerald-100"
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-rose-600 mt-1 font-medium">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. alex@company.com"
                  {...register("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.email 
                      ? "border-rose-400 focus:ring-rose-200" 
                      : "border-slate-300 focus:border-emerald-500 focus:ring-emerald-100"
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-rose-600 mt-1 font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional for faster chat)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. +1 (555) 000-0000"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextFromStep0}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <span>Continue to Project Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Project Scope & Budget */}
          {currentStep === 1 && (
            <div className="space-y-5" aria-labelledby="step-2-title">
              <div className="mb-4">
                <h3 id="step-2-title" className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Project Scope & Requirements
                </h3>
                <p className="text-xs text-slate-500">
                  Select your required service, budget parameters, and key requirements.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Service Selector */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Needed <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  >
                    {SERVICE_OPTIONS.map((srv) => (
                      <option key={srv} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="budget" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Estimated Budget <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="budget"
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  >
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Expected Timeline <span className="text-rose-500">*</span>
                </label>
                <select
                  id="timeline"
                  {...register("timeline")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  {TIMELINE_OPTIONS.map((tl) => (
                    <option key={tl} value={tl}>{tl}</option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Description & Goals <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Describe your goals, features needed, design preferences, or target launch date..."
                  {...register("description")}
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={errors.description ? "desc-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.description 
                      ? "border-rose-400 focus:ring-rose-200" 
                      : "border-slate-300 focus:border-emerald-500 focus:ring-emerald-100"
                  }`}
                />
                {errors.description && (
                  <p id="desc-error" className="text-xs text-rose-600 mt-1 font-medium">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Optional Reference Link */}
              <div>
                <label htmlFor="projectLink" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Reference Website or Figma URL <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="projectLink"
                  type="url"
                  placeholder="https://example.com or Figma share link"
                  {...register("projectLink")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextFromStep1}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <span>Review Summary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Summary, Consent & Submit */}
          {currentStep === 2 && (
            <div className="space-y-6" aria-labelledby="step-3-title">
              <div className="mb-2">
                <h3 id="step-3-title" className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Review & Submit Proposal Request
                </h3>
                <p className="text-xs text-slate-500">
                  Please confirm your inquiry details before sending.
                </p>
              </div>

              {/* Structured Summary Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Contact:</span>
                  <span className="font-bold text-slate-900">{values.name} ({values.email})</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Service:</span>
                  <span className="font-bold text-emerald-700">{values.service}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Budget:</span>
                  <span className="font-bold text-slate-900">{values.budget}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Timeline:</span>
                  <span className="font-bold text-slate-900">{values.timeline}</span>
                </div>

                <div>
                  <span className="text-slate-500 font-medium block mb-1">Details:</span>
                  <p className="text-slate-700 italic bg-white p-3 rounded-lg border border-slate-200 text-xs">
                    "{values.description}"
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentStep(0)}
                  className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 font-semibold pt-1"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Details</span>
                </button>
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("consent")}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs text-slate-600 leading-snug">
                    I agree to be contacted by Muzammal Zaheer regarding this project scope and pricing estimate. Zero spam, ever.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-rose-600 mt-1 font-medium">
                    {errors.consent.message}
                  </p>
                )}
              </div>

              {/* Action Buttons with double submit protection */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors disabled:opacity-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Your Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Proposal Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
