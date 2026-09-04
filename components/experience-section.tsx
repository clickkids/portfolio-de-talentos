import { SectionHeading } from "@/components/section-heading"

export function ExperienceSection({
  experiences,
}: {
  experiences: { id: number; year: string; title: string; category: string; description: string }[]
}) {
  return (
    <section id="experiencia" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <SectionHeading label="Trajetória" title="Experiência & destaques" className="mb-14" />
      <div className="divide-y divide-border border-y border-border">
        {experiences.map((exp) => (
          <div key={exp.id} className="group grid gap-4 py-9 md:grid-cols-[7rem_1fr_auto] md:items-baseline md:gap-10">
            <span className="font-serif text-[28px] leading-none text-primary transition-colors group-hover:text-foreground">{exp.year}</span>
            <div>
              <h3 className="font-serif text-[22px] leading-tight text-foreground md:text-2xl">{exp.title}</h3>
              {exp.description && (
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">{exp.description}</p>
              )}
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:text-right">{exp.category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
