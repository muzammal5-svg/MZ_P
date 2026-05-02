export function TechStackMarquee() {
  const technologies = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Shopify",
    "WordPress",
    "Laravel",
    "MySQL",
    "TypeScript",
    "JavaScript",
    "PHP",
    "Webflow",
    "Node.js",
  ]

  return (
    <section className="py-12 overflow-hidden bg-primary/5">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, index) => (
            <span key={index} className="mx-8 text-2xl font-bold text-muted-foreground/50">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
