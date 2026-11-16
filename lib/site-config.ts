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
}
