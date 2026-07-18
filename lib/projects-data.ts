export type Project = {
  id: number
  title: string
  niche: string
  description: string
  category: string
  technologies: string[]
  image: string
  liveUrl: string
  isEbayTemplate: boolean
  trustScore: number
  featured?: boolean
  achievements?: { icon: React.ReactNode; label: string; value: string }[]
  testimonial?: { quote: string; author: string }
}

// Default projects (fallback if localStorage is empty)
export const defaultProjects: Project[] = [
  // WordPress Projects
  {
    id: 1,
    title: "Daily Mom Journey",
    niche: "Parenting & Lifestyle Blog",
    description: "Custom WordPress blog with advanced SEO, performance optimization, and a bespoke theme tailored to the parenting niche.",
    category: "WordPress",
    technologies: ["WordPress", "Custom PHP", "Elementor Pro", "Yoast SEO", "WP Rocket"],
    image: "/wordpress/dailymomjourney.png",
    liveUrl: "https://dailymomjourney.com/",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 2,
    title: "MeLearni — E-Learning Platform",
    niche: "Online Education Platform",
    description: "Full-featured WordPress LMS with course management, user registration, and interactive learning modules.",
    category: "WordPress",
    technologies: ["WordPress", "LearnDash", "Custom PHP", "User Management"],
    image: "/wordpress/Melearni.png",
    liveUrl: "https://melearni.com/",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 3,
    title: "ATL Best Vending",
    niche: "Vending Machine Business",
    description: "Lead-generation WordPress business site for a vending machine company with custom design and contact flows.",
    category: "WordPress",
    technologies: ["WordPress", "Elementor Pro", "Contact Form 7", "SEO"],
    image: "/wordpress/Atlbestvending.png",
    liveUrl: "http://atlbestvending.com/",
    isEbayTemplate: false,
    trustScore: 98,
  },
  {
    id: 4,
    title: "Daily Mom — Craft Activities",
    niche: "Parenting & Crafts Blog",
    description: "Specialized WordPress section with custom post types, media gallery, and organized category structure for craft content.",
    category: "WordPress",
    technologies: ["WordPress", "Custom Post Types", "Media Gallery", "PHP"],
    image: "/wordpress/dailymomblog.png",
    liveUrl: "https://dailymomjourney.com/craft-activity-category/",
    isEbayTemplate: false,
    trustScore: 95,
  },
  
  // Shopify Projects
  {
    id: 5,
    title: "HZ Dynamics Fashion Store",
    niche: "Fashion E-Commerce",
    description: "High-converting Shopify store with custom Liquid theme, advanced product filtering, and seamless checkout.",
    category: "Shopify",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS3"],
    image: "/modern-shopify-ecommerce-store.jpg",
    liveUrl: "https://hzdynamics.co.uk/",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 6,
    title: "Modern E-Commerce Store",
    niche: "Shopify E-Commerce",
    description: "Shopify Plus store with advanced product catalog, multi-gateway payments, and mobile-first responsive design.",
    category: "Shopify",
    technologies: ["Shopify Plus", "Liquid", "Custom Apps", "Payment Gateways", "Analytics"],
    image: "/shopify/modern-shopify-ecommerce-store1.png",
    liveUrl: "https://xfte0b-4w.myshopify.com/",
    isEbayTemplate: false,
    trustScore: 98,
  },
  {
    id: 7,
    title: "Sustainable Footwear Brand",
    niche: "Eco-Friendly E-Commerce",
    description: "Premium Shopify store with eco-friendly design, product customization, and a seamless sustainable checkout experience.",
    category: "Shopify",
    technologies: ["Shopify Plus", "Liquid", "Custom Checkout", "Analytics"],
    image: "/shopify/shopify landing page.png",
    liveUrl: "https://www.allbirds.com/",
    isEbayTemplate: false,
    trustScore: 100,
  },
  
  // Custom Web Projects
  {
    id: 8,
    title: "Nurse AI Hub",
    niche: "Healthcare Technology Platform",
    description: "Modern React.js healthcare platform with AI integration, user dashboard, and responsive design for medical professionals.",
    category: "Custom Web",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "AI Integration", "Node.js"],
    image: "/frontend/Nurse-ai-hub.png",
    liveUrl: "https://nurseaihub.com/",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 9,
    title: "CodeWire Solutions",
    niche: "Software Agency Portfolio",
    description: "Professional Next.js portfolio site for a software agency with smooth animations and optimized Core Web Vitals.",
    category: "Custom Web",
    technologies: ["React.js", "Next.js", "TypeScript", "Framer Motion"],
    image: "/frontend/Portfolio_website.png",
    liveUrl: "https://www.codewiresolutions.com/",
    isEbayTemplate: false,
    trustScore: 98,
  },
  
  // eBay Templates
  {
    id: 10,
    title: "eBay Template — Electronics",
    niche: "Electronics Listing Template",
    description: "Clean, conversion-focused eBay listing template for electronics with mobile-responsive layout.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible", "Cross-browser"],
    image: "/ebay/template 1.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 11,
    title: "eBay Template — Fashion",
    niche: "Fashion Listing Template",
    description: "Stylish listing template for fashion and clothing with modern typography and brand-forward layout.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 2.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 12,
    title: "eBay Template — Home & Garden",
    niche: "Home & Garden Template",
    description: "Clean professional template for home and garden products with organized sections and trust signals.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 3.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 13,
    title: "eBay Template — Automotive",
    niche: "Automotive Parts Template",
    description: "Bold, professional template tailored for automotive parts with spec tables and compatibility sections.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 4.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 14,
    title: "eBay Template — Sports",
    niche: "Sports Equipment Template",
    description: "Dynamic template for sports and fitness equipment with engaging visuals and performance-focused copy.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 5.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 15,
    title: "eBay Template — Beauty",
    niche: "Beauty Products Template",
    description: "Elegant template for beauty and health products with premium styling and lifestyle imagery support.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 6.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 16,
    title: "eBay Template — Toys & Games",
    niche: "Toys & Games Template",
    description: "Colorful, engaging template for toys and games with playful layout and safety-focused trust elements.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 7.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 17,
    title: "eBay Template — Books & Media",
    niche: "Books & Media Template",
    description: "Clean, organized template for books and media with structured content hierarchy and review sections.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 8.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 18,
    title: "eBay Template — Jewelry",
    niche: "Jewelry & Accessories Template",
    description: "Luxurious template for jewelry and accessories with elegant presentation and high-end visual treatment.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 9.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 19,
    title: "eBay Template — Industrial",
    niche: "Industrial Products Template",
    description: "Corporate-grade template for business and industrial products with spec-heavy layout and trust signals.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 10.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 20,
    title: "eBay Template — Pet Supplies",
    niche: "Pet Supplies Template",
    description: "Friendly, appealing template for pet supplies with warm visuals and product-safety focused copy.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/templae 11.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 21,
    title: "eBay Template — Collectibles",
    niche: "Collectibles Template",
    description: "Sophisticated template for collectibles and vintage items with provenance and condition sections.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 12.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 22,
    title: "eBay Template — Kitchen",
    niche: "Kitchen & Dining Template",
    description: "Appetizing template for kitchen and dining products with lifestyle imagery and feature highlights.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 18.png",
    liveUrl: "#",
    isEbayTemplate: true,
    trustScore: 100,
  },
  {
    id: 23,
    title: "Heroic Home Comfort",
    niche: "HVAC Service Company",
    description: "Professional HVAC services website with CRM integration, online booking system, emergency support, and maintenance plans for heating, cooling, and ventilation solutions.",
    category: "Custom Web",
    technologies: ["Laravel", "Tailwind CSS", "HouseCall Pro CRM", "Online Booking", "Contact Forms"],
    image: "/frontend/housecallpro-crm.png",
    liveUrl: "https://heroiccomfort.com",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 24,
    title: "CoolBuffs — IT Job Portal",
    niche: "Job Portal Platform",
    description: "IT-focused job portal connecting 13,000+ IT professionals with 521+ employers. Features advanced job search filters, featured companies slider, admin dashboard with job/company/blog management, and AI chatbot assistant.",
    category: "Custom Web",
    technologies: ["Laravel", "Blade Templating", "Tailwind CSS", "MySQL", "AI Chatbot Integration", "Job Search Filters"],
    image: "/frontend/coolfbuffs-jobportal.png",
    liveUrl: "https://coolbuffs.com",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 25,
    title: "Seyma Robb — Interior Design Studio",
    niche: "Luxury Interior Design",
    description: "High-end interior design studio specializing in residential and commercial projects. Features portfolio gallery with featured projects (Manhattan Penthouse, Hamptons Hospitality, Upper East Side), luxury service offerings, design philosophy, and Robb Corporation network partnerships.",
    category: "WordPress",
    technologies: ["WordPress", "Elementor", "Custom Popups", "Gallery", "Contact Forms", "Responsive Design", "SEO Optimized"],
    image: "/frontend/Syam-Interior Design.png",
    liveUrl: "https://seymarobb.com",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 26,
    title: "Luxury Interior Design — Landing Page",
    niche: "Interior Design Landing Page",
    description: "Elegant frontend landing page featuring full-screen hero, portfolio gallery with smooth animations, 3-pillar design philosophy section, services showcase, and contact form. Built with responsive design, serif typography, earthy color palette, and smooth scroll interactions.",
    category: "Custom Web",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Smooth Scroll", "Animations", "CSS Variables"],
    image: "/frontend/Interior Design.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
  
  // AI Automation Projects
  {
    id: 27,
    title: "E-Commerce Order Automation",
    niche: "E-Commerce Workflow Automation",
    description: "Automated workflow connecting Shopify orders to Google Sheets, sending customer notifications via Gmail, updating inventory across multiple platforms, and notifying team on Slack. Processes 500+ orders daily without manual intervention.",
    category: "AI Automation",
    technologies: ["Make.com", "Shopify API", "Google Sheets", "Gmail", "Slack", "Webhooks", "JSON"],
    image: "/ai-automation/ecommerce-automation.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 28,
    title: "Marketing Lead Automation",
    niche: "Lead Generation & CRM Integration",
    description: "Intelligent lead capture system that automatically collects leads from Typeform, enriches data, adds to HubSpot CRM, sends personalized welcome emails via Mailchimp, and notifies sales team. Increased lead response time by 85%.",
    category: "AI Automation",
    technologies: ["Make.com", "Typeform", "HubSpot", "Mailchimp", "Airtable", "Zapier", "API Integration"],
    image: "/ai-automation/lead-automation.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 29,
    title: "Social Media Management Automation",
    niche: "Social Media Scheduling & Analytics",
    description: "Multi-platform social media automation that schedules posts across Instagram, Twitter, Facebook, and LinkedIn. Auto-generates reports, monitors mentions, responds to comments, and tracks engagement metrics. Saves 15+ hours per week.",
    category: "AI Automation",
    technologies: ["Make.com", "Instagram API", "Twitter API", "Facebook Graph", "Buffer", "Google Analytics"],
    image: "/ai-automation/social-automation.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 30,
    title: "Customer Support Ticket System",
    niche: "Support Automation & Ticketing",
    description: "Automated customer support system that creates tickets from emails, assigns to team members based on expertise, tracks resolution time, sends satisfaction surveys, and generates performance reports. Reduced response time by 60%.",
    category: "AI Automation",
    technologies: ["Make.com", "Gmail", "Zendesk", "Trello", "SurveyMonkey", "Slack", "Google Sheets"],
    image: "/ai-automation/support-automation.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 31,
    title: "Invoice & Payment Automation",
    niche: "Accounting & Finance Automation",
    description: "Complete invoicing automation that generates invoices from CRM data, sends to clients via email, tracks payments, updates accounting software, sends payment reminders, and reconciles accounts. Eliminates manual data entry completely.",
    category: "AI Automation",
    technologies: ["Make.com", "QuickBooks", "Stripe", "PayPal", "Gmail", "Google Sheets", "PDF Generation"],
    image: "/ai-automation/invoice-automation.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },

  // AI Chatbot Projects  
  {
    id: 32,
    title: "E-Commerce Shopping Assistant",
    niche: "AI Shopping Assistant Chatbot",
    description: "ChatGPT-powered shopping assistant that helps customers find products, answers product questions, provides recommendations, tracks orders, processes returns, and handles checkout support. Increased conversion rate by 35% and reduced cart abandonment by 40%.",
    category: "AI Chatbot",
    technologies: ["ChatGPT API", "OpenAI", "React", "Node.js", "MongoDB", "Stripe Integration", "WebSockets"],
    image: "/ai-chatbot/shopping-assistant.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 33,
    title: "Customer Support AI Bot",
    niche: "24/7 Customer Support Chatbot",
    description: "Intelligent support chatbot trained on company knowledge base, handles FAQs, troubleshoots issues, escalates complex queries to humans, supports 50+ languages, and learns from interactions. Handles 80% of support queries autonomously, available on website, WhatsApp, and Facebook Messenger.",
    category: "AI Chatbot",
    technologies: ["ChatGPT", "GPT-4", "Python", "Flask", "PostgreSQL", "WhatsApp Business API", "Facebook Messenger"],
    image: "/ai-chatbot/support-bot.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 34,
    title: "Lead Qualification Chatbot",
    niche: "Sales Lead Qualification Bot",
    description: "AI-powered lead qualification bot that asks qualifying questions, collects contact information, schedules meetings automatically, integrates with CRM, and sends follow-up emails. Qualified 500+ leads monthly with 92% accuracy, integrated with Calendly for auto-scheduling.",
    category: "AI Chatbot",
    technologies: ["ChatGPT", "OpenAI API", "Calendly Integration", "HubSpot CRM", "TypeScript", "Next.js", "Prisma"],
    image: "/ai-chatbot/lead-bot.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 35,
    title: "Healthcare Appointment Bot",
    niche: "Medical Appointment Scheduling",
    description: "HIPAA-compliant healthcare chatbot that helps patients book appointments, get test results, receive medication reminders, and access health information. Features symptom checker, doctor availability lookup, and automated SMS reminders. Reduced no-shows by 45%.",
    category: "AI Chatbot",
    technologies: ["ChatGPT", "HIPAA Compliance", "Twilio SMS", "Calendar Integration", "Healthcare APIs", "Encryption"],
    image: "/ai-chatbot/healthcare-bot.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 36,
    title: "Real Estate Property Advisor",
    niche: "Real Estate AI Assistant",
    description: "Intelligent property assistant that answers questions about listings, schedules viewings, provides neighborhood information, calculates mortgage estimates, and sends property recommendations based on preferences. Integrated with MLS data and virtual tour systems.",
    category: "AI Chatbot",
    technologies: ["ChatGPT", "OpenAI", "MLS Integration", "Google Maps API", "Mortgage Calculator", "Virtual Tours"],
    image: "/ai-chatbot/realestate-bot.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
  {
    id: 37,
    title: "Restaurant Ordering & Reservation Bot",
    niche: "Restaurant AI Chatbot",
    description: "Multi-lingual restaurant chatbot that handles table reservations, takes food orders, answers menu questions, processes payments, and sends order confirmations. Available on WhatsApp, website, and Facebook. Supports voice ordering and dietary preference detection.",
    category: "AI Chatbot",
    technologies: ["ChatGPT", "WhatsApp Business", "Payment Gateway", "POS Integration", "Voice Recognition", "Multi-language"],
    image: "/ai-chatbot/restaurant-bot.png",
    liveUrl: "#",
    isEbayTemplate: false,
    trustScore: 100,
  },
]

// =============================================================================
// LOCALSTORAGE FUNCTIONS
// =============================================================================

// Get projects from localStorage or return defaults
export function getProjects(): Project[] {
  if (typeof window === "undefined") return defaultProjects
  
  const saved = localStorage.getItem("portfolioProjects")
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      if (parsed.length < defaultProjects.length) {
        localStorage.setItem("portfolioProjects", JSON.stringify(defaultProjects))
        return defaultProjects
      }
      return parsed
    } catch {
      return defaultProjects
    }
  }
  return defaultProjects
}

// Save projects to localStorage
export function saveProjects(projects: Project[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem("portfolioProjects", JSON.stringify(projects))
}

// Initialize localStorage with default projects if empty
export function initializeProjects(): void {
  if (typeof window === "undefined") return
  
  const saved = localStorage.getItem("portfolioProjects")
  if (!saved) {
    localStorage.setItem("portfolioProjects", JSON.stringify(defaultProjects))
  }
}

// Force reset to default projects (overwrites existing data)
export function resetToDefaultProjects(): void {
  if (typeof window === "undefined") return
  localStorage.setItem("portfolioProjects", JSON.stringify(defaultProjects))
}
