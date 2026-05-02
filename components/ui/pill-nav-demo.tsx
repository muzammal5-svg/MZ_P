"use client"

import { useState } from "react"
import { PillNav } from "@/components/ui/pill-nav"

const NAV_ITEMS = ["Auth", "AI SDK", "ORM", "Migrations", "Validation", "Storage", "Queues", "Testing"]

export function PillNavDemo() {
  const [active, setActive] = useState("Testing")

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-3xl">
      {/* Label */}
      <p
        className="text-xs font-medium tracking-widest uppercase text-gray-400"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Pill Navigation
      </p>

      {/* The nav */}
      <PillNav
        items={NAV_ITEMS}
        defaultActive={NAV_ITEMS.indexOf("Testing")}
        onChange={(_, item) => setActive(item)}
      />

      {/* Active indicator */}
      <p
        className="text-sm text-gray-400"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Active: <span className="text-gray-700 font-medium">{active}</span>
      </p>
    </div>
  )
}
