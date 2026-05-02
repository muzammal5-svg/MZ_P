"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"
import Img from "@/public/shopify.png"

const projects = [
  {
    title: "Premium Shopify Store",
    description:
      "Conversion-optimized eCommerce store with custom theme, advanced filtering, and seamless checkout experience.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    category: "Shopify",
    image: {Img},
    liveUrl: "https://xfte0b-4w.myshopify.com/",
    githubUrl: "#",
  },
  {
    title: "WordPress Business Website",
    description:
      "SEO-optimized corporate website with custom theme, blog integration, and contact forms. Lightning-fast performance.",
    tech: ["WordPress", "PHP", "ACF", "SEO"],
    category: "WordPress",
    image: "/professional-wordpress-business-website.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "React E-Commerce Platform",
    description:
      "Modern e-commerce platform built with React, featuring shopping cart, payment integration, and user authentication.",
    tech: ["React", "Redux", "Stripe", "Firebase"],
    category: "React",
    image: "/modern-saas-dashboard-application.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "React Portfolio Website",
    description:
      "Responsive portfolio website with smooth animations, dark mode toggle, and optimized performance using React.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    category: "React",
    image: "/analytics-dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Laravel REST API",
    description:
      "Robust REST API built with Laravel featuring JWT authentication, role-based permissions, and comprehensive documentation.",
    tech: ["Laravel", "PHP", "MySQL", "JWT"],
    category: "Laravel",
    image: "/creative-agency-website.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Laravel CMS System",
    description:
      "Custom content management system with admin panel, user roles, and dynamic content creation capabilities.",
    tech: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    category: "Laravel",
    image: "/professional-wordpress-business-website.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "eBay Listing Templates",
    description:
      "Professional, responsive eBay listing templates that increase conversions and maintain brand consistency.",
    tech: ["HTML", "CSS", "Responsive Design"],
    category: "eBay Templates",
    image: "/ebay-product-listing-template.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Premium eBay Store Design",
    description:
      "Complete eBay store makeover with custom header, category pages, and mobile-optimized product listings.",
    tech: ["HTML", "CSS", "eBay Store Design", "Mobile Optimization"],
    category: "eBay Templates",
    image: "/ebay-product-listing-template.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Webflow Agency Site",
    description:
      "Modern agency website built in Webflow with custom animations, CMS integration, and lead generation forms.",
    tech: ["Webflow", "JavaScript", "Animations"],
    category: "Webflow",
    image: "/creative-agency-website.png",
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real-world solutions that drive results for businesses worldwide
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                  >
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
