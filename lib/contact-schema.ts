import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address (e.g. name@domain.com)"),
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),
  service: z
    .string({ required_error: "Please select a service" })
    .min(1, "Please select the service you are interested in"),
  budget: z
    .string({ required_error: "Please select an estimated budget" })
    .min(1, "Please select an estimated budget range"),
  timeline: z
    .string({ required_error: "Please select an expected timeline" })
    .min(1, "Please select your expected project timeline"),
  description: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters describing your project goals or requirements"),
  projectLink: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please agree to receive a response regarding your project inquiry",
    }),
  honeypot: z
    .string()
    .optional(),
  turnstileToken: z
    .string()
    .optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const SERVICE_OPTIONS = [
  "WordPress Development",
  "Shopify Store Development",
  "Frontend & Next.js Development",
  "eBay Listing Templates",
  "AI Automation with Make.com",
  "AI Chatbot Integration",
  "Other / Custom Web Consultation",
]

export const BUDGET_OPTIONS = [
  "Under $250",
  "$250 - $500",
  "$500 - $1,500",
  "$1,500 - $3,000",
  "$3,000+",
  "Not sure / Let's discuss scope",
]

export const TIMELINE_OPTIONS = [
  "Urgent (< 1 week)",
  "1 - 2 weeks",
  "2 - 4 weeks",
  "1 - 2 months",
  "Flexible / Planning phase",
]
