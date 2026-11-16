"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, RefreshCw, Home, MessageCircle, Mail } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected runtime errors for debugging
    console.error("Application error boundary triggered:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl text-center">
        {/* Warning Icon */}
        <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mx-auto mb-6">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <h1
          className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Something Went Wrong
        </h1>

        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          An unexpected error occurred while rendering this view. You can reload this component or navigate back to the home page.
        </p>

        {error.digest && (
          <div className="mb-6 p-2.5 rounded-xl bg-slate-100 font-mono text-[11px] text-slate-500 truncate">
            Error ID: {error.digest}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all"
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
        </div>

        {/* Direct Contact Fallbacks */}
        <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
          <div className="font-semibold text-slate-700 mb-2">Need immediate assistance?</div>
          <div className="flex items-center justify-center gap-4">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Support
            </a>
            <span>•</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              Direct Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
