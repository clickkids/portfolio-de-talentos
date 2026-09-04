import { SectionHeading } from "@/components/section-heading"
import { Play } from "lucide-react"

export function VideoSection({
  videos,
}: {
  videos: { id: number; title: string; type: string; url: string; thumbnail: string }[]
}) {
  return (
    <section id="videos" className="border-t border-border bg-card/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading label="Showreel" title="Vídeos & comerciais" className="mb-14" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {videos.map((v) => (
            <a key={v.id} href={v.url} target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative aspect-video overflow-hidden rounded-sm bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-card to-muted transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-background/30 transition-colors group-hover:bg-background/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full border border-primary/70 bg-background/60 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Play className="size-5 translate-x-0.5 fill-primary text-primary" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{v.type}</p>
                <h3 className="mt-2 font-serif text-xl leading-tight text-foreground transition-colors group-hover:text-primary">
                  {v.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
