import { SectionHeading } from "@/components/section-heading"

export function BrandsSection({ brands }: { brands: { id: number; name: string; logo: string | null }[] }) {
  return (
    <section className="border-t border-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading label="Confiança" title="Marcas & trabalhos realizados" className="mb-12" />
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 md:grid-cols-4">
          {brands.map((brand) => (
            <li
              key={brand.id}
              className="group flex h-24 items-center justify-center bg-card px-6 transition-colors hover:bg-secondary md:h-28"
            >
              <span className="font-serif text-[18px] tracking-wide text-foreground/70 transition-colors group-hover:text-foreground">
                {brand.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
