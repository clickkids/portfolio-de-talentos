import { SectionHeading } from "@/components/section-heading"

export function FeaturedWorks({
  works,
}: {
  works: { id: number; title: string; category: string; image: string }[]
}) {
  return (
    <section id="trabalhos" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <SectionHeading label="Portfólio" title="Trabalhos em destaque" className="mb-14" />
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <article key={work.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-card via-muted to-card transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-xl text-foreground/30">{work.title}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{work.category}</p>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{work.category}</p>
              <h3 className="mt-2 font-serif text-[22px] leading-tight text-foreground transition-colors group-hover:text-primary">
                {work.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
