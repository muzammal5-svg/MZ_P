"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

type PillNavProps = {
  items: string[]
  defaultActive?: number
  onChange?: (index: number, item: string) => void
}

export function PillNav({ items, defaultActive = 0, onChange }: PillNavProps) {
  const [active, setActive] = useState(defaultActive)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const el = itemRefs.current[active]
    const container = containerRef.current
    if (!el || !container) return
    const containerRect = container.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    setPillStyle({
      left: elRect.left - containerRect.left,
      width: elRect.width,
    })
  }, [active])

  const handleClick = (index: number) => {
    setActive(index)
    onChange?.(index, items[index])
  }

  return (
    <div className="w-full overflow-x-auto scrollbar-none">
      <div
        ref={containerRef}
        className="relative inline-flex items-center gap-0.5 p-1.5 rounded-full border border-gray-200 bg-white shadow-sm min-w-max"
        style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
      >
        {/* Sliding active pill */}
        <motion.div
          className="absolute top-1.5 bottom-1.5 rounded-full bg-white border border-gray-200"
          style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}
          animate={{ left: pillStyle.left, width: pillStyle.width }}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />

        {items.map((item, index) => {
          const isActive = index === active
          return (
            <button
              key={item}
              ref={(el) => { itemRefs.current[index] = el }}
              onClick={() => handleClick(index)}
              className={`
                relative z-10 px-5 py-2.5 rounded-full text-sm font-medium
                transition-colors duration-200 whitespace-nowrap select-none
                ${isActive
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-800"
                }
              `}
              style={{ fontFamily: "'Inter', 'Geist', sans-serif" }}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}
