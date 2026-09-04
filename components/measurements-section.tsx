import { SectionHeading } from "@/components/section-heading"

export function MeasurementsSection({ profile }: { profile: any }) {
  const measures = [
    { label: "Altura", value: profile.height },
    { label: "Busto", value: profile.bust },
    { label: "Cintura", value: profile.waist },
    { label: "Quadril", value: profile.hips },
    { label: "Manequim", value: profile.dressSize },
    { label: "Calçado", value: profile.shoeSize },
    { label: "Cabelo", value: profile.hairColor },
    { label: "Olhos", value: profile.eyeColor },
  ].filter((m) => m.value)

  const availableFor = profile.availableFor
    .split(",")
    .map((s: string) => s.trim())
    .filter(Boolean)

  return (
    <section id="perfil" className="border-t border-border bg-card/30 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <SectionHeading label="Ficha técnica" title="Perfil & medidas" />
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-4">
              {measures.map((m) => (
                <div key={m.label} className="bg-card p-6">
                  <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{m.label}</dt>
                  <dd className="mt-3 font-serif text-[22px] leading-none text-foreground">{m.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-2">
              {availableFor.map((item: string) => (
                <span key={item} className="rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-sm border border-border bg-card p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Base</p>
              <p className="mt-3 font-serif text-3xl text-foreground">{profile.base}</p>
              
              <div className="mt-8 h-px w-full bg-border" />
              
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">Disponível para</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">{profile.availableFor}</p>
              
              <div className="mt-8 flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500/80" />
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {profile.availableToTravel ? "Disponível para viagens" : "Base fixa"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
