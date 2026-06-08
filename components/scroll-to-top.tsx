"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    // Check initial scroll position
    toggleVisibility()
    
    // Add scroll listener with passive flag for better performance
    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          onClick={scrollToTop}
          className="fixed bottom-30 right-8 z-40 p-3 rounded-full group"
          style={{
            background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
            boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 15px 40px rgba(16, 185, 129, 0.4)"
            e.currentTarget.style.transform = "translateY(-4px)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(16, 185, 129, 0.3)"
            e.currentTarget.style.transform = "translateY(0)"
          }}
          aria-label="Scroll to top"
        >
          {/* Animated background glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
            }}
          />

          {/* Icon */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <ChevronUp className="w-6 h-6 text-white" strokeWidth={2.5} />
          </motion.div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
