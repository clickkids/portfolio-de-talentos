"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function PhotoGallery({ photos }: { photos: { id: number; url: string; caption: string }[] }) {
  const [active, setActive] = useState<{ url: string; caption: string } | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {photos.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-muted"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-card via-muted to-card transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span className="font-serif text-lg text-foreground/20 group-hover:text-foreground/40 transition-colors">{p.caption}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Ver ampliado</span>
            </div>
            <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/10" />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-foreground transition-colors hover:text-primary"
            aria-label="Fechar"
            onClick={() => setActive(null)}
          >
            <X className="size-8" />
          </button>
          <div className="relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex h-[70svh] w-[90vw] max-w-[600px] items-center justify-center rounded-sm bg-card md:h-[80svh]">
              <p className="font-serif text-2xl text-foreground/30">{active.caption}</p>
            </div>
            {active.caption && (
              <p className="mt-6 text-center font-serif text-xl text-foreground">{active.caption}</p>
            )}
            <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">{active.url}</p>
          </div>
        </div>
      )}
    </>
  )
}
