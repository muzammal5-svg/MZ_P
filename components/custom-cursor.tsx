"use client"

import { useEffect, useRef, useState } from "react"

/**
 * CustomCursor
 * ─────────────────────────────────────────────────────────────────────────────
 * • Dot  : 8px white circle — snaps to mouse instantly (transform only)
 * • Ring : 36px semi-transparent ring — lags behind with lerp via rAF
 * • On hover of [data-cursor="pointer"] elements:
 *     ring expands to 56px, mix-blend-mode: difference
 * • On hover of [data-cursor="text"] elements:
 *     ring collapses to a thin 2px-tall bar (text cursor shape)
 * • Global background glow follows mouse with heavy lerp (very organic lag)
 * ─────────────────────────────────────────────────────────────────────────────
 * Performance: only transform + opacity are animated — no layout/paint.
 * rAF loop runs once; all state is in refs to avoid React re-renders.
 */

export function CustomCursor() {
  const dotRef    = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)
  const glowRef   = useRef<HTMLDivElement>(null)

  // live mouse position
  const mouse  = useRef({ x: -200, y: -200 })
  // lerped positions
  const ring   = useRef({ x: -200, y: -200 })
  const glow   = useRef({ x: -200, y: -200 })

  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true)
      return
    }

    setVisible(true)

    // ── helpers ──────────────────────────────────────────────────────────────
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    // ── mouse move ───────────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }

      // dot snaps instantly
      const dot = dotRef.current
      if (dot) {
        dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    // ── hover detection ──────────────────────────────────────────────────────
    const INTERACTIVE = [
      "a", "button", "[role='button']", "[data-cursor='pointer']",
      "input", "select", "textarea", "label",
    ].join(",")

    const TEXT_LINKS = "a:not([data-cursor]), p, h1, h2, h3, h4, h5, h6, span, li"

    let hoverType: "default" | "pointer" | "text" = "default"

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest(INTERACTIVE)) {
        hoverType = "pointer"
      } else if (target.closest(TEXT_LINKS)) {
        hoverType = "text"
      } else {
        hoverType = "default"
      }
    }

    // ── rAF loop ─────────────────────────────────────────────────────────────
    let rafId: number

    const tick = () => {
      // ring lerp — moderate lag (t = 0.12)
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12)

      // glow lerp — heavy lag (t = 0.05) for organic feel
      glow.current.x = lerp(glow.current.x, mouse.current.x, 0.05)
      glow.current.y = lerp(glow.current.y, mouse.current.y, 0.05)

      const ringEl = ringRef.current
      const glowEl = glowRef.current

      if (ringEl) {
        // size & style based on hover type
        if (hoverType === "pointer") {
          ringEl.style.width  = "52px"
          ringEl.style.height = "52px"
          ringEl.style.borderRadius = "50%"
          ringEl.style.opacity = "0.6"
          ringEl.style.mixBlendMode = "difference"
          ringEl.style.background = "rgba(255,255,255,0.15)"
          ringEl.style.border = "1.5px solid rgba(255,255,255,0.8)"
          ringEl.style.transform = `translate(${ring.current.x - 26}px, ${ring.current.y - 26}px)`
        } else if (hoverType === "text") {
          ringEl.style.width  = "2px"
          ringEl.style.height = "20px"
          ringEl.style.borderRadius = "2px"
          ringEl.style.opacity = "0.7"
          ringEl.style.mixBlendMode = "difference"
          ringEl.style.background = "rgba(255,255,255,0.9)"
          ringEl.style.border = "none"
          ringEl.style.transform = `translate(${ring.current.x - 1}px, ${ring.current.y - 10}px)`
        } else {
          ringEl.style.width  = "36px"
          ringEl.style.height = "36px"
          ringEl.style.borderRadius = "50%"
          ringEl.style.opacity = "0.5"
          ringEl.style.mixBlendMode = "normal"
          ringEl.style.background = "transparent"
          ringEl.style.border = "1.5px solid rgba(255,255,255,0.45)"
          ringEl.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`
        }
      }

      if (glowEl) {
        glowEl.style.transform =
          `translate(${glow.current.x - 300}px, ${glow.current.y - 300}px)`
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    // ── hide/show on leave/enter window ──────────────────────────────────────
    const onLeave = () => {
      dotRef.current  && (dotRef.current.style.opacity  = "0")
      ringRef.current && (ringRef.current.style.opacity = "0")
    }
    const onEnter = () => {
      dotRef.current  && (dotRef.current.style.opacity  = "1")
      ringRef.current && (ringRef.current.style.opacity = "0.5")
    }

    document.addEventListener("mousemove",  onMove,  { passive: true })
    document.addEventListener("mouseover",  onOver,  { passive: true })
    document.addEventListener("mouseleave", onLeave, { passive: true })
    document.addEventListener("mouseenter", onEnter, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("mousemove",  onMove)
      document.removeEventListener("mouseover",  onOver)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [])

  // Don't render on touch devices
  if (isMobile) return null

  return (
    <>
      {/* ── Global mouse-follow background glow ── */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,70,229,0.15) 0%, rgba(79,70,229,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
          willChange: "transform",
          // start off-screen
          transform: "translate(-600px, -600px)",
        }}
      />

      {visible && (
        <>
          {/* ── Dot ── */}
          <div
            ref={dotRef}
            aria-hidden="true"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#ffffff",
              pointerEvents: "none",
              zIndex: 9999,
              willChange: "transform",
              transform: "translate(-200px, -200px)",
              transition: "opacity 0.2s ease",
            }}
          />

          {/* ── Ring / follower ── */}
          <div
            ref={ringRef}
            aria-hidden="true"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.45)",
              background: "transparent",
              pointerEvents: "none",
              zIndex: 9998,
              willChange: "transform, width, height, opacity",
              transform: "translate(-200px, -200px)",
              transition:
                "width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), border-radius 0.25s ease, opacity 0.2s ease, background 0.2s ease, border 0.2s ease",
            }}
          />
        </>
      )}
    </>
  )
}
