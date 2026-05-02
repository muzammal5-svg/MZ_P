import { Card } from "@/components/ui/card"
import { Code, Database, ShoppingCart, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "TypeScript"],
  },
  {
    title: "Backend / Full Stack",
    icon: Database,
    skills: ["PHP", "Laravel", "MySQL", "REST APIs"],
  },
  {
    title: "CMS & eCommerce",
    icon: ShoppingCart,
    skills: ["WordPress", "Shopify", "Webflow", "eBay Listing Templates"],
  },
  {
    title: "Other",
    icon: Zap,
    skills: ["C++", "Performance Optimization", "SEO Friendly Development", "Responsive Design"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Skills & Expertise</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and high-performing web solutions
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
