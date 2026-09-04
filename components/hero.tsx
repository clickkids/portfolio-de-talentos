import Link from "next/link"

export function Hero({
  name,
  role,
  tagline,
  image,
}: {
  name: string
  role: string
  tagline: string
  image: string
}) {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-card">
      {/* Imagem de fundo simulada com gradiente luxuoso */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_20%_20%,hsl(var(--primary)/0.15),transparent),radial-gradient(60%_80%_at_80%_80%,hsl(var(--muted)),hsl(var(--background)))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-primary">{role}</p>
        <h1 className="max-w-[6ch] text-balance font-serif text-[12vw] font-medium leading-[0.85] tracking-[-0.04em] text-foreground md:text-8xl lg:text-[7.5rem]">
          {name}
        </h1>
        <p className="mt-7 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-[17px] md:leading-relaxed">
          {tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#trabalhos"
            className="rounded-sm bg-primary px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver trabalhos
          </Link>
          <Link
            href="#contato"
            className="rounded-sm border border-border px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Entrar em contato
          </Link>
        </div>
      </div>
    </section>
  )
}
