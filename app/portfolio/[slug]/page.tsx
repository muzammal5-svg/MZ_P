import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Code2, 
  ArrowUpRight,
  Globe,
  Sparkles
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { defaultProjects, getProjectBySlug, Project } from "@/lib/projects-data"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return defaultProjects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found | Muzammal Zaheer",
      description: "Case study could not be found.",
    }
  }

  return {
    title: `${project.title} — ${project.niche} | Muzammal Zaheer`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const hasLiveLink = Boolean(
    project.liveUrl && 
    project.liveUrl !== "#" && 
    project.liveUrl.trim() !== ""
  )

  // Find 2-3 related projects from the same category
  const relatedProjects = defaultProjects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3)

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": `${siteConfig.siteUrl}/portfolio`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `${siteConfig.siteUrl}/portfolio/${project.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      <MZwebSolutionsNavigation />

      <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 text-slate-900 pt-24 focus:outline-none">
        {/* Breadcrumb Navigation */}
        <div className="py-4 border-b border-slate-200/80 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/portfolio" className="hover:text-emerald-600 transition-colors">Portfolio</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 font-semibold truncate max-w-xs" aria-current="page">
                {project.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Case Study Hero */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Category & Status Pill */}
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {project.category}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {project.niche}
                </span>
              </div>

              {/* Single H1 on the page */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Quick Meta Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Role
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Full-Stack Developer
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Category
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {project.category}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Status
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600">
                    {hasLiveLink ? "Live Production" : "Concept Demo"}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Delivery
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Completed
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {hasLiveLink ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    href={`/contact?service=${encodeURIComponent(project.category)}&project=${encodeURIComponent(project.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Muzammal,%20I%20saw%20your%20${encodeURIComponent(project.title)}%20project%20and%20would%20like%20to%20discuss%20a%20similar%20build!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Standardized Device Showcase Frame */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              
              {/* Browser Shell Mockup Frame */}
              <div className="rounded-2xl sm:rounded-3xl border border-slate-300 bg-white shadow-2xl overflow-hidden">
                {/* Browser top bar */}
                <div className="px-4 py-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs font-mono text-slate-500 bg-white px-4 py-1 rounded-md border border-slate-200 truncate max-w-xs">
                    {hasLiveLink ? project.liveUrl : `demo.muzammalzaheer.vercel.app/${project.slug}`}
                  </div>
                  <div className="w-10" />
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.niche}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details: Technologies & Architecture */}
        <section className="py-16 bg-white border-t border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Tech Stack */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Technologies & Frameworks
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Implementation Scope */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Implementation Scope
                </h2>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      Engineered for high performance, cross-browser compatibility, and mobile responsiveness across smartphones, tablets, and desktop devices.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      Structured cleanly using {project.technologies.slice(0, 3).join(", ")} following production coding and security best practices.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      Optimized asset delivery, SEO-friendly layout structure, and intuitive user experience focused on conversions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 bg-slate-50 border-t border-slate-200/80">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      More {project.category} Projects
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Explore similar case studies and delivery architectures.
                    </p>
                  </div>

                  <Link 
                    href="/portfolio" 
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/portfolio/${rel.slug}`}
                      className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                          <Image
                            src={rel.image}
                            alt={rel.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <div className="text-[11px] font-semibold text-emerald-600 mb-1">
                            {rel.niche}
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                            {rel.title}
                          </h3>
                        </div>
                      </div>

                      <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA Banner */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Need a Similar Solution for Your Business?
              </h2>
              <p className="text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">
                Whether you need a custom WordPress site, high-converting Shopify store, React web app, or AI workflow, let's discuss your project scope and timeline.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Get a Free Proposal
                </Link>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MZwebSolutionsFooter />
    </>
  )
}
