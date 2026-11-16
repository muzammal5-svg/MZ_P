import Link from "next/link"
import { ArrowLeft, Home, Layers, Briefcase, Mail, MessageCircle } from "lucide-react"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { siteConfig } from "@/lib/site-config"

export default function NotFound() {
  return (
    <>
      <MZwebSolutionsNavigation />

      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-slate-50 focus:outline-none flex flex-col justify-between pt-28"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center my-auto max-w-2xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            Error 404 • Resource Moved or Not Found
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Page Not Found
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed">
            The page or case study you were looking for doesn't exist or has been relocated. Explore our verified services and client work below.
          </p>

          {/* Quick Action Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
            <Link
              href="/"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Homepage
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Return to portfolio overview</div>
              </div>
            </Link>

            <Link
              href="/services"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Web Services
                </div>
                <div className="text-xs text-slate-500 mt-0.5">WordPress, Shopify, Next.js & AI</div>
              </div>
            </Link>

            <Link
              href="/portfolio"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Case Studies
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Browse 35+ verified projects</div>
              </div>
            </Link>

            <Link
              href="/contact"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Contact & Quote
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Get a fixed-price proposal</div>
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <MZwebSolutionsFooter />
      </main>
    </>
  )
}
