import { SectionHeading } from "@/components/section-heading"

export function AboutSection({
  name,
  bio,
  portrait,
}: {
  name: string
  bio: string
  portrait: string | null
}) {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gradient-to-br from-card to-muted">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-serif text-3xl text-primary/20">{name.split(" ")[0]}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Retrato Editorial</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SectionHeading label="Sobre" title="A presença por trás da imagem" />
          <div className="mt-10 space-y-6 text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
            {bio.split("\n").map((paragraph, i) => (
              <p key={i} className="leading-[1.8]">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
