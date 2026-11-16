import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  ArrowLeft, 
  ExternalLink, 
  Share2, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from "lucide-react"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { PreFooterCta } from "@/components/pre-footer-cta"
import { getAllPosts, getPostBySlug, getPostsByCategory } from "@/lib/blog-data"
import { siteConfig } from "@/lib/site-config"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    }
  }

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.excerpt,
    "image": `${siteConfig.siteUrl}${post.image}`,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": siteConfig.siteUrl,
    },
    "publisher": {
      "@type": "Person",
      "name": siteConfig.name,
      "url": siteConfig.siteUrl,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/blog/${post.slug}`,
    },
  }

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
        "name": "Blog",
        "item": `${siteConfig.siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${siteConfig.siteUrl}/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      <MZwebSolutionsNavigation />

      <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 focus:outline-none pt-24 text-slate-900">
        {/* Breadcrumb Navigation */}
        <div className="py-4 border-b border-slate-200/80 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium overflow-x-auto">
              <Link href="/" className="hover:text-emerald-600 transition-colors whitespace-nowrap">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <Link href="/blog" className="hover:text-emerald-600 transition-colors whitespace-nowrap">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="text-slate-800 font-semibold truncate max-w-xs" aria-current="page">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Category & Read Time */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Published on {post.publishedAt}
              </span>
            </div>

            {/* Exactly one H1 */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author Quick Meta */}
            <div className="flex items-center justify-between py-4 border-y border-slate-200/80 mb-10">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-emerald-500/40">
                  <Image
                    src="/profile-pic.jpg"
                    alt={post.author}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{post.author}</div>
                  <div className="text-xs text-emerald-700 font-medium">{post.authorRole}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  Hire Author
                </Link>
              </div>
            </div>

            {/* Featured Image Frame */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-md border border-slate-200/80">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>

            {/* Grid Layout: Table of Contents & Main Article Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Table of Contents Sidebar */}
              <aside className="lg:col-span-4 order-2 lg:order-1">
                <div className="sticky top-28 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    Table of Contents
                  </div>
                  <nav aria-label="Table of contents">
                    <ul className="space-y-2 text-xs">
                      {post.tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-slate-600 hover:text-emerald-700 font-medium leading-normal block transition-colors py-1 hover:translate-x-0.5"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-800 mb-2">Need Hands-On Help?</div>
                    <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
                      I build and optimize high-performance web systems with clean, verified code.
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full py-2.5 rounded-xl text-xs font-semibold text-white text-center bg-slate-900 hover:bg-emerald-600 transition-colors"
                    >
                      Request a Consultation
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Content Body */}
              <div className="lg:col-span-8 order-1 lg:order-2 space-y-6">
                <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pt-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-code:text-emerald-700 prose-code:bg-emerald-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
                  {post.content.split("\n\n").map((block, idx) => {
                    const trimmed = block.trim()

                    if (trimmed.startsWith("## ")) {
                      const match = trimmed.match(/^##\s+(.+?)(?:\s+\{#([a-z0-9-]+)\})?$/)
                      const title = match ? match[1] : trimmed.replace("## ", "")
                      const id = match && match[2] ? match[2] : undefined
                      return (
                        <h2 key={idx} id={id} className="scroll-mt-28 text-slate-900 font-bold">
                          {title}
                        </h2>
                      )
                    }

                    if (trimmed.startsWith("### ")) {
                      return (
                        <h3 key={idx} className="text-xl font-bold text-slate-800 mt-6 mb-2">
                          {trimmed.replace("### ", "")}
                        </h3>
                      )
                    }

                    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                      const items = trimmed.split("\n").filter((l) => l.trim().length > 0)
                      return (
                        <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                          {items.map((it, iIdx) => (
                            <li key={iIdx}>
                              {it.replace(/^[-*]\s+/, "")}
                            </li>
                          ))}
                        </ul>
                      )
                    }

                    if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ")) {
                      const items = trimmed.split("\n").filter((l) => l.trim().length > 0)
                      return (
                        <ol key={idx} className="list-decimal pl-5 space-y-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                          {items.map((it, iIdx) => (
                            <li key={iIdx}>
                              {it.replace(/^\d+\.\s+/, "")}
                            </li>
                          ))}
                        </ol>
                      )
                    }

                    if (trimmed.startsWith("---")) {
                      return <hr key={idx} className="border-slate-200 my-8" />
                    }

                    return (
                      <p key={idx} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {trimmed}
                      </p>
                    )
                  })}
                </div>

                {/* Article Tags */}
                <div className="pt-8 border-t border-slate-200 mt-12 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 mr-1">Tags:</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs bg-slate-100 text-slate-600 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author Full Box */}
                <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-emerald-500/20 flex-shrink-0">
                    <Image
                      src="/profile-pic.jpg"
                      alt={post.author}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Written by {post.author}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        Verified Developer
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {siteConfig.headline} Delivered {siteConfig.metrics.projectsCount} verified web and e-commerce projects for clients across {siteConfig.metrics.countriesCount} countries.
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                      {siteConfig.upworkUrl && (
                        <a
                          href={siteConfig.upworkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                        >
                          Upwork Profile <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {siteConfig.fiverrUrl && (
                        <a
                          href={siteConfig.fiverrUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                        >
                          Fiverr Profile <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-white border-t border-slate-200/80">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Related Guides
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group"
                  >
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-2 block">
                      {rel.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2 line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pre-footer CTA */}
        <PreFooterCta
          title="Have a Project in Mind?"
          description="Get high-converting architecture, clean code, and fast turnaround without agency overhead."
          buttonText="Discuss Your Project"
        />
      </main>

      <MZwebSolutionsFooter />
    </>
  )
}
