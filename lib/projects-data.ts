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
]

// Get projects from localStorage or return defaults
export function getProjects(): Project[] {
  if (typeof window === "undefined") return defaultProjects
  
  const saved = localStorage.getItem("portfolioProjects")
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      // If saved data has fewer than default projects, use defaults (stale data)
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
