"use client"

import { useEffect, useState } from "react"
import { injectOneko, stopOneko } from "@/scripts/oneko"
import { enableCat, disableCat, isCatEnabled } from "@/scripts/cat-toggle"

export default function CatToggleButton() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (isCatEnabled()) injectOneko()
  }, [])

  const toggleCat = () => {
    if (active) {
      stopOneko()
      disableCat()
    } else {
      injectOneko()
      enableCat()
    }
    setActive(!active)
  }

  return (
    <button
      onClick={toggleCat}
      title="Click for Fun"
      className="rounded-full text-2xl px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
    >
      🐱
    </button>
  )
}
