export interface ServiceProcessStep {
  step: string
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceTestimonial {
  name: string
  role: string
  platform: "upwork" | "fiverr"
  rating: number
  tag: string
  text: string
  initials: string
  bgColor: string
}

export interface ServiceItem {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  outcome: string
  startingPrice: string
  priceNote: string
  category: "WordPress" | "Shopify" | "Custom Web" | "AI Automation" | "AI Chatbot" | "eBay Templates"
  deliverables: [string, string, string] // exactly 3 punchy deliverables
  whoItsFor: { title: string; description: string }[]
  whatsIncluded: { title: string; description: string }[]
  process: ServiceProcessStep[]
  faqs: ServiceFAQ[]
  relatedSlugs: string[]
  testimonialMatch?: ServiceTestimonial
}

export interface SiteConfig {
  name: string
  title: string
  headline: string
  email: string
  phone: string
  whatsappNumber: string
  whatsappUrl: string
  upworkUrl?: string
  fiverrUrl?: string
  githubUrl?: string
  linkedinUrl?: string
  siteUrl: string
  metrics: {
    projectsCount: string
    countriesCount: string
    yearsExperience: string
    rating: string
    ratingSource: string
  }
  services: string[]
  serviceDetails: Record<string, ServiceItem>
}

export const siteConfig: SiteConfig = {
  name: "Muzammal Zaheer",
  title: "Full-Stack Web Developer",
  headline: "I build fast WordPress, Shopify & Next.js websites that turn visitors into customers.",
  email: "muzammalzaheer571@gmail.com",
  phone: "+92 341 735 9571",
  whatsappNumber: "923417359571",
  whatsappUrl: "https://wa.me/923417359571?text=Hi%20Muzammal,%20I'm%20interested%20in%20discussing%20a%20project!",
  upworkUrl: "https://www.upwork.com/freelancers/~01ac865dda7d22aaa9",
  fiverrUrl: "https://fiverr.com/users/m_muzammalrath/",
  githubUrl: "https://github.com/muzammal5-svg",
  linkedinUrl: "https://www.linkedin.com/in/muz-the-coder/",
  siteUrl: "https://muzammalzaheer.vercel.app",
  metrics: {
    projectsCount: "100+",
    countriesCount: "10+",
    yearsExperience: "4+ years",
    rating: "5.0",
    ratingSource: "Upwork & Fiverr",
  },
  services: [
    "WordPress Development",
    "Shopify Stores",
    "Frontend & Next.js Development",
    "eBay Custom Templates",
    "AI Automation",
    "AI Chatbots Integration",
  ],
  serviceDetails: {
    wordpress: {
      slug: "wordpress",
      title: "WordPress Development",
      shortTitle: "WordPress",
      tagline: "Custom Themes, Elementor Pro & Core Web Vitals Optimization",
      outcome: "High-performance, SEO-friendly custom WordPress websites built to convert visitors into paying clients.",
      startingPrice: "$99",
      priceNote: "Starting at $99 for landing pages and theme setups. Custom plugins and full builds quoted per scope.",
      category: "WordPress",
      deliverables: [
        "Custom theme development & Elementor Pro architecture tailored to your brand",
        "Speed optimization targeting green Core Web Vitals & mobile-first responsiveness",
        "Essential plugin configuration, on-page SEO setup & security hardening",
      ],
      whoItsFor: [
        {
          title: "Growing Businesses & Brands",
          description: "Companies needing a polished, professional digital presence that they can easily update and expand without technical friction.",
        },
        {
          title: "Bloggers & Content Publishers",
          description: "Publishers needing custom post layouts, high-traffic speed optimization, and clean SEO architecture for top Google rankings.",
        },
        {
          title: "Brands Outgrowing Slow Templates",
          description: "Businesses struggling with bloated off-the-shelf themes who need lean, custom-coded WordPress solutions that load in under 2 seconds.",
        },
      ],
      whatsIncluded: [
        {
          title: "Custom Theme / Elementor Architecture",
          description: "Bespoke styling, intuitive typography, and lean layouts built without unnecessary code bloat.",
        },
        {
          title: "Core Web Vitals Speed Optimization",
          description: "Advanced asset minification, WebP image compression, and caching configuration targeting 90+ PageSpeed scores.",
        },
        {
          title: "On-Page SEO & Schema Foundation",
          description: "Semantic HTML5 heading structure, meta tags, XML sitemap generation, and search engine readiness.",
        },
        {
          title: "Security Hardening & Protection",
          description: "Protection against brute-force attacks, spam prevention, SSL integration, and automated backup schedules.",
        },
        {
          title: "WooCommerce & E-Commerce Ready",
          description: "Optional product catalog setup, cart and checkout flows, and payment gateway connections.",
        },
        {
          title: "Client Training & Video Walkthrough",
          description: "Recorded video demonstration showing you how to edit content, add pages, and manage inquiries effortlessly.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Discovery & Requirements",
          description: "We define your business goals, target audience, brand assets, and required functionality before writing any code.",
        },
        {
          step: "02",
          title: "Structure & UX Wireframing",
          description: "Mapping out user journeys, conversion paths, and visual layouts aligned with your brand aesthetic.",
        },
        {
          step: "03",
          title: "Development & Speed Tuning",
          description: "Clean PHP/CSS development, responsive testing across all device sizes, and Core Web Vitals tuning.",
        },
        {
          step: "04",
          title: "QA, Launch & Handover",
          description: "Domain DNS setup, SSL configuration, analytics connection, final mobile checks, and handover walkthrough.",
        },
      ],
      faqs: [
        {
          question: "Can I easily edit content on the website myself?",
          answer: "Yes, absolutely. I build intuitive editor experiences using Elementor Pro or Gutenberg blocks so you can update text, images, and blog posts with zero coding skills.",
        },
        {
          question: "Will my WordPress website be fast on mobile?",
          answer: "Speed is a core priority. Every site is optimized for Google Core Web Vitals with compressed WebP images, clean CSS, and efficient caching to ensure sub-2-second load times.",
        },
        {
          question: "Do you build custom plugins or modify existing ones?",
          answer: "Both. I customize existing trusted plugins (WooCommerce, ACF, Yoast) and write custom PHP functions when specific business logic or third-party API integration is required.",
        },
        {
          question: "How does pricing and project scoping work?",
          answer: "Projects start at $99 for simple setups and landing pages. Multi-page sites, custom membership portals, or complex WooCommerce stores receive a clear, fixed-price proposal with no surprise fees.",
        },
      ],
      relatedSlugs: ["shopify", "frontend", "ai-chatbot"],
      testimonialMatch: {
        name: "Elementor Client",
        role: "Upwork Client",
        platform: "upwork",
        rating: 5,
        tag: "WordPress / Elementor",
        text: "Excellent work! The website is professional, fast, and fully responsive. Muzammal is a true pro at Elementor and WordPress. Highly recommended!",
        initials: "EC",
        bgColor: "#15803d",
      },
    },

    shopify: {
      slug: "shopify",
      title: "Shopify Store Development",
      shortTitle: "Shopify",
      tagline: "High-Converting Custom Liquid Themes & Seamless E-Commerce UX",
      outcome: "High-converting, mobile-first Shopify stores with custom themes and frictionless checkout.",
      startingPrice: "$149",
      priceNote: "Starting at $149 for theme customization and store setup. Custom Liquid builds and app integrations quoted per scope.",
      category: "Shopify",
      deliverables: [
        "Custom Shopify Liquid theme development & responsive store design",
        "Conversion-rate focused product pages, cart drawer & checkout UX",
        "Product catalog configuration, payment gateways & essential app integrations",
      ],
      whoItsFor: [
        {
          title: "DTC Brands & E-Commerce Founders",
          description: "Merchants wanting a distinctive brand experience that stands out from generic drop-shipping templates.",
        },
        {
          title: "Entrepreneurs Launching New Products",
          description: "Founders seeking a reliable, conversion-optimized Shopify foundation set up right from day one.",
        },
        {
          title: "Stores Migrating to Shopify",
          description: "Businesses moving from WooCommerce, Magento, or Etsy to Shopify for superior stability and checkout speed.",
        },
      ],
      whatsIncluded: [
        {
          title: "Custom Liquid Theme Styling",
          description: "Tailored layout and color schemes that match your brand identity and avoid generic template looks.",
        },
        {
          title: "Mobile Shopping Optimization",
          description: "Sticky add-to-cart, fast slide-out cart drawers, and frictionless mobile checkout experiences.",
        },
        {
          title: "Payment & Shipping Gateways",
          description: "Setup of Shopify Payments, PayPal, Stripe, and regional shipping zones with tax calculations.",
        },
        {
          title: "Product Catalog Setup",
          description: "Organized collections, product variant options, custom tags, and high-res media galleries.",
        },
        {
          title: "App Integrations & Reviews",
          description: "Setup of essential apps (Klaviyo, Loox/Judge.me, upsell tools) without slowing down the store.",
        },
        {
          title: "Speed & SEO Audit",
          description: "Asset minification, lazy loading, and schema markup for rich Google search snippets.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Brand & Catalog Strategy",
          description: "Reviewing your products, target market, pricing structure, and key competitor differentiators.",
        },
        {
          step: "02",
          title: "Store Architecture & UX",
          description: "Designing intuitive navigation menus, category filters, and high-converting product pages.",
        },
        {
          step: "03",
          title: "Liquid Coding & Setup",
          description: "Customizing Liquid code, setting up apps, connecting payment providers, and testing test orders.",
        },
        {
          step: "04",
          title: "Testing, Launch & Training",
          description: "End-to-end checkout verification on iOS/Android, domain routing, and merchant walkthrough.",
        },
      ],
      faqs: [
        {
          question: "Can you customize existing Shopify themes like Dawn?",
          answer: "Yes, I frequently customize Shopify Online Store 2.0 themes (Dawn, Impulse, Prestige, Sense) with custom Liquid sections, metaobjects, and tailored CSS.",
        },
        {
          question: "Will my store be optimized for mobile conversions?",
          answer: "Over 75% of e-commerce traffic is mobile. Every page is designed mobile-first with thumb-friendly buttons, instant drawer carts, and fast load times.",
        },
        {
          question: "Can you help migrate my products from another platform?",
          answer: "Yes, I can migrate products, customer lists, and blog content from WooCommerce, Etsy, or CSV exports into Shopify cleanly.",
        },
        {
          question: "What does the starting price include?",
          answer: "Starting at $149 covers foundational theme setup, branding customization, and core page configuration. Custom app development or full migrations receive custom milestone quotes.",
        },
      ],
      relatedSlugs: ["wordpress", "frontend", "ai-automation"],
      // Note: No dedicated Shopify-specific client review currently in verified set
      // TODO: Add client review specific to Shopify store development once provided
    },

    frontend: {
      slug: "frontend",
      title: "Frontend & Next.js Development",
      shortTitle: "Frontend & Next.js",
      tagline: "Modern React, Next.js App Router, TypeScript & Peak Core Web Vitals",
      outcome: "Blazing-fast Next.js and React web applications engineered for scalability and peak Core Web Vitals.",
      startingPrice: "$129",
      priceNote: "Starting at $129 for single page/component setups. Full-stack apps and complex dashboards quoted per scope.",
      category: "Custom Web",
      deliverables: [
        "Next.js 14/15/16 App Router & React development with TypeScript",
        "Tailwind CSS styling with responsive, accessible (WCAG AA) component architecture",
        "REST/GraphQL API integrations, server-side rendering & speed optimization",
      ],
      whoItsFor: [
        {
          title: "Startups & SaaS Founders",
          description: "Teams needing a modern, production-grade frontend with fast time-to-market and rock-solid code quality.",
        },
        {
          title: "Agencies & Design Studios",
          description: "Creative agencies needing a reliable frontend specialist to convert Figma designs into pixel-perfect code.",
        },
        {
          title: "Businesses Modernizing Legacy Apps",
          description: "Companies upgrading legacy PHP or monolithic frontends to modern, responsive React/Next.js stacks.",
        },
      ],
      whatsIncluded: [
        {
          title: "Next.js App Router Architecture",
          description: "Server Components, dynamic routing, streaming SSR, and optimized route handlers.",
        },
        {
          title: "Pixel-Perfect Figma to Code",
          description: "100% faithful conversion of design systems with responsive breakpoints and micro-interactions.",
        },
        {
          title: "Type-Safe TypeScript",
          description: "Strict typing across interfaces, props, and API responses to eliminate runtime errors.",
        },
        {
          title: "Tailwind CSS & Component Architecture",
          description: "Clean utility-first CSS, dark/light theme support, and accessible UI component primitives.",
        },
        {
          title: "State Management & API Connections",
          description: "TanStack Query, Zustand, or native server actions for smooth, reactive data fetching.",
        },
        {
          title: "Top Core Web Vitals",
          description: "LCP, FID/INP, and CLS tuning ensuring green scores on Google PageSpeed Insights.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Architecture & Spec Review",
          description: "Reviewing design files, API contracts, tech requirements, and performance targets.",
        },
        {
          step: "02",
          title: "Component System Setup",
          description: "Setting up design tokens, typography, shared UI components, and TypeScript schemas.",
        },
        {
          step: "03",
          title: "Feature Development",
          description: "Building pages, integrating endpoints, implementing client state, and handling edge cases.",
        },
        {
          step: "04",
          title: "QA, Performance & Deployment",
          description: "Cross-browser testing, accessibility audit, CI/CD setup, and Vercel/Netlify deployment.",
        },
      ],
      faqs: [
        {
          question: "What technologies do you specialize in?",
          answer: "My core frontend stack includes Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui or Radix UI.",
        },
        {
          question: "Can you convert my Figma or Adobe XD designs into code?",
          answer: "Yes, I turn complex Figma designs into responsive, production-ready React code with meticulous attention to spacing, typography, and hover states.",
        },
        {
          question: "Do you write clean, maintainable code?",
          answer: "Yes, all code is strictly typed with TypeScript, structured in modular components, passes ESLint without errors, and is easy for your team to maintain.",
        },
        {
          question: "Can you connect the frontend to our existing backend/API?",
          answer: "Yes, I integrate REST APIs, GraphQL endpoints, Supabase, Firebase, or headless CMS platforms with robust error handling.",
        },
      ],
      relatedSlugs: ["wordpress", "shopify", "ai-chatbot"],
      testimonialMatch: {
        name: "Sahil Meo",
        role: "Full Stack Developer",
        platform: "upwork",
        rating: 5,
        tag: "Laravel / React",
        text: "I had the pleasure of working with Muzammil on multiple projects at CodeWire Solutions. He has strong hands-on expertise in Laravel and React, and consistently delivered clean, high-quality work on time. A true professional, I highly recommend him for any web development project.",
        initials: "SM",
        bgColor: "#0284c7",
      },
    },

    "ai-automation": {
      slug: "ai-automation",
      title: "AI Automation with Make.com",
      shortTitle: "AI Automation",
      tagline: "Hands-Free Workflows Connecting 1000+ Apps via Make.com & APIs",
      outcome: "Hands-free workflow automations with Make.com & APIs that eliminate repetitive manual tasks.",
      startingPrice: "$79",
      priceNote: "Starting at $79 for single workflow scenario setup. Multi-branch enterprise automation pipelines quoted per scope.",
      category: "AI Automation",
      deliverables: [
        "Custom Make.com (Integromat) scenarios connecting CRM, e-commerce, and sheets",
        "Multi-app webhook, JSON parser & REST API integrations without code bloat",
        "Automated lead routing, order fulfillment & error-notification workflows",
      ],
      whoItsFor: [
        {
          title: "Busy Business Owners",
          description: "Founders spending hours each week manually copying data between spreadsheets, email, and CRMs.",
        },
        {
          title: "E-Commerce Operators",
          description: "Store managers wanting automated inventory alerts, order syncs, and customer notification triggers.",
        },
        {
          title: "Marketing & Sales Teams",
          description: "Teams needing instant lead capture, automatic CRM enrichment, and Slack/WhatsApp alerts.",
        },
      ],
      whatsIncluded: [
        {
          title: "Custom Make.com Scenarios",
          description: "Multi-step automated workflows with conditional routers, filters, and error-handling paths.",
        },
        {
          title: "CRM & E-Commerce Integration",
          description: "Connecting Shopify, WooCommerce, HubSpot, Airtable, Notion, and Google Sheets.",
        },
        {
          title: "Webhooks & REST APIs",
          description: "Custom payload parsing, secure authentication, and webhook listeners for instant triggers.",
        },
        {
          title: "Automated Email & SMS Alerts",
          description: "Instant notifications sent to your team or clients via Gmail, Outlook, Twilio, or Slack.",
        },
        {
          title: "Data Formatting & Cleansing",
          description: "Formula transformations, date parsing, and duplicate prevention before storage.",
        },
        {
          title: "Monitoring & Error Handlers",
          description: "Fail-safe error routing so a single failed row never halts your entire automation pipeline.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Workflow Audit",
          description: "Mapping out your current manual steps, identifying bottlenecks, and selecting the optimal tools.",
        },
        {
          step: "02",
          title: "Scenario Architecture",
          description: "Designing data structures, security tokens, trigger events, and conditional logic.",
        },
        {
          step: "03",
          title: "Build & Live Testing",
          description: "Connecting API accounts, running test payloads, verifying filters, and stress-testing edge cases.",
        },
        {
          step: "04",
          title: "Activation & Documentation",
          description: "Enabling production schedules, setting up error notifications, and providing a video walkthrough.",
        },
      ],
      faqs: [
        {
          question: "What is Make.com and why is it better than Zapier?",
          answer: "Make.com (formerly Integromat) offers visual workflow design, advanced data manipulation, multi-step branching, and is typically 5x to 10x more cost-effective than Zapier for heavy usage.",
        },
        {
          question: "Do I need a paid Make.com account?",
          answer: "Make.com has a generous free tier (1,000 operations/month). For high-volume pipelines, a modest $9/month plan usually covers extensive business automation.",
        },
        {
          question: "What happens if an API call fails or goes down?",
          answer: "I build robust error-handling directives into every scenario. Failed operations are logged, alerts are sent, and rollback or retry queues prevent data loss.",
        },
        {
          question: "Can you connect custom or private APIs?",
          answer: "Yes, I regularly connect custom REST APIs, proprietary database webhooks, and third-party SaaS endpoints with header authentication.",
        },
      ],
      relatedSlugs: ["ai-chatbot", "shopify", "wordpress"],
      // Note: No dedicated Make.com / AI Automation review currently in verified set
      // TODO: Add client review specific to Make.com / AI Automation once provided
    },

    "ai-chatbot": {
      slug: "ai-chatbot",
      title: "AI Chatbot Integration",
      shortTitle: "AI Chatbot",
      tagline: "Intelligent 24/7 ChatGPT-Powered Support & Lead Generation Bots",
      outcome: "24/7 intelligent AI chatbots powered by ChatGPT & custom APIs to capture leads and answer support inquiries.",
      startingPrice: "$89",
      priceNote: "Starting at $89 for base website chatbot widget integration. Custom knowledge-base fine-tuning quoted per scope.",
      category: "AI Chatbot",
      deliverables: [
        "Custom ChatGPT / OpenAI chatbot tailored to your business knowledge base",
        "Multi-channel integration (Website popup widget, WhatsApp, or Facebook Messenger)",
        "Automated lead qualification, FAQ resolution & human handover flow",
      ],
      whoItsFor: [
        {
          title: "Service Businesses & Agencies",
          description: "Companies wanting to engage website visitors instantly, answer common questions, and book sales calls 24/7.",
        },
        {
          title: "E-Commerce Stores",
          description: "Brands needing automated answers for order tracking, return policies, and product recommendations.",
        },
        {
          title: "Healthcare & Appointment Clinics",
          description: "Practices looking to streamline initial patient inquiries and appointment scheduling.",
        },
      ],
      whatsIncluded: [
        {
          title: "Knowledge Base Ingestion",
          description: "Training the bot on your company FAQs, product specs, pricing guidelines, and brand voice.",
        },
        {
          title: "Lead Capture & Booking",
          description: "Collecting visitor names, emails, and phone numbers, with direct integration to Calendly or HubSpot.",
        },
        {
          title: "Prompt Engineering & Guardrails",
          description: "Strict prompt constraints to prevent hallucinations and keep responses accurate and professional.",
        },
        {
          title: "Custom UI Chat Widget",
          description: "Modern, responsive chat bubble styled to match your website's colors and branding perfectly.",
        },
        {
          title: "Human Escalation Flow",
          description: "Smooth fallback allowing visitors to request a real human agent when queries are complex.",
        },
        {
          title: "Multi-Language Support",
          description: "Instant automated translation so international visitors can chat in their native language.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Knowledge Extraction",
          description: "Gathering your business documentation, service menus, FAQs, and customer support history.",
        },
        {
          step: "02",
          title: "Prompt Design & Guardrails",
          description: "Configuring system prompts, tone of voice, forbidden topics, and lead qualification logic.",
        },
        {
          step: "03",
          title: "Widget & API Integration",
          description: "Connecting the AI model to your website widget, webhooks, CRM, or messaging platforms.",
        },
        {
          step: "04",
          title: "Testing, Tuning & Launch",
          description: "Simulating diverse customer conversations, refining answers, and deploying the live widget.",
        },
      ],
      faqs: [
        {
          question: "Will the AI chatbot give false information or hallucinate?",
          answer: "No. I implement strict temperature controls, context guardrails, and knowledge-base constraints that instruct the bot to answer only from verified business data and gracefully escalate when unsure.",
        },
        {
          question: "Can the chatbot collect leads and send them to my email or CRM?",
          answer: "Yes, the bot can collect visitor contact info and project requirements, then instantly send the lead to your email, Google Sheets, Slack, or CRM via webhooks.",
        },
        {
          question: "Where can the chatbot be deployed?",
          answer: "It can be embedded as a floating widget on your WordPress, Shopify, or Next.js website, or integrated with WhatsApp Business and Messenger.",
        },
        {
          question: "What are the ongoing AI costs?",
          answer: "OpenAI API usage is extremely affordable—most small to mid-sized businesses spend less than $5 to $15 per month for thousands of customer interactions.",
        },
      ],
      relatedSlugs: ["ai-automation", "frontend", "wordpress"],
      // Note: No dedicated AI Chatbot review currently in verified set
      // TODO: Add client review specific to AI Chatbots once provided
    },

    "ebay-templates": {
      slug: "ebay-templates",
      title: "eBay Listing Templates",
      shortTitle: "eBay Templates",
      tagline: "100% Mobile-Responsive & Active-Content Compliant eBay Templates",
      outcome: "100% mobile-responsive, active-content compliant eBay listing templates that boost seller trust and conversions.",
      startingPrice: "$25",
      priceNote: "Starting at $25 for base single template design with responsive HTML/CSS. Store banner packages quoted per scope.",
      category: "eBay Templates",
      deliverables: [
        "Mobile-responsive, modern HTML5/CSS3 eBay listing template",
        "100% eBay policy & active-content compliant (HTTPS, zero disallowed JS)",
        "Modular layout with high-res gallery, spec tables, shipping tabs & seller guarantees",
      ],
      whoItsFor: [
        {
          title: "Top-Rated eBay Sellers",
          description: "Power sellers looking to stand out from generic competitors and justify premium price points.",
        },
        {
          title: "Brand Manufacturers & Stores",
          description: "Companies wanting to maintain consistent corporate branding across all their marketplace listings.",
        },
        {
          title: "Sellers with High Mobile Traffic",
          description: "Merchants losing sales due to outdated, unreadable desktop-only eBay descriptions.",
        },
      ],
      whatsIncluded: [
        {
          title: "Mobile-First Responsive Layout",
          description: "Fluid CSS grid that adapts seamlessly to smartphones, tablets, and desktop displays.",
        },
        {
          title: "100% Active-Content Compliant",
          description: "Pure HTML5 and modern CSS with zero active content, complying strictly with eBay policies.",
        },
        {
          title: "Interactive Tabbed Sections",
          description: "CSS-only tabs for Item Description, Specifications, Shipping, Payment, and Return Policies.",
        },
        {
          title: "High-Resolution Image Gallery",
          description: "Mobile-friendly image viewer showcasing product angles without third-party external scripts.",
        },
        {
          title: "Easy-to-Edit HTML Template",
          description: "Cleanly commented code and an easy-fill structure you can reuse for hundreds of listings.",
        },
        {
          title: "Listing Software Compatible",
          description: "Works with manual eBay listing forms as well as tools like Inkfrog, Linnworks, or ChannelEngine.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Niche & Brand Discovery",
          description: "Analyzing your product category (electronics, fashion, automotive, etc.) and visual preferences.",
        },
        {
          step: "02",
          title: "Template Layout & Wireframing",
          description: "Structuring key selling points, trust badges, policy guarantees, and photo presentation.",
        },
        {
          step: "03",
          title: "Compliant HTML/CSS Coding",
          description: "Developing pure CSS responsive styling, testing cross-device rendering, and checking eBay compliance.",
        },
        {
          step: "04",
          title: "Delivery & Listing Guide",
          description: "Delivering the ready-to-paste template file along with a step-by-step guide on applying it to listings.",
        },
      ],
      faqs: [
        {
          question: "Does this template comply with eBay's active content ban?",
          answer: "Yes, 100%. The template uses pure HTML5 and modern CSS without JavaScript, Flash, or active content, ensuring full compliance with current eBay seller policies.",
        },
        {
          question: "Is the template easy to reuse for new product listings?",
          answer: "Yes, the HTML code is neatly organized and commented with placeholders like <!-- ITEM TITLE --> and <!-- DESCRIPTION -->, making updates simple.",
        },
        {
          question: "Will this template work on mobile phones?",
          answer: "Yes, it is designed mobile-first. The layout, fonts, and images automatically resize for smartphone screens, eliminating horizontal scrolling.",
        },
        {
          question: "Can I use this template with third-party listing tools?",
          answer: "Yes, it is compatible with standard eBay Seller Hub, Inkfrog, Sellbrite, Linnworks, and any tool that accepts HTML listing descriptions.",
        },
      ],
      relatedSlugs: ["shopify", "wordpress", "frontend"],
      testimonialMatch: {
        name: "dan17011988",
        role: "United Kingdom 🇬🇧",
        platform: "fiverr",
        rating: 5,
        tag: "eBay Templates",
        text: "Great experience! The seller designed a clean and professional eBay listing template. Communication was smooth, and delivery was very fast. Highly recommended!",
        initials: "DU",
        bgColor: "#059669",
      },
    },
  },
}
