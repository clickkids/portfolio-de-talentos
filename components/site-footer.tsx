import Link from "next/link"

export function SiteFooter({ name }: { name: string }) {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-10">
        <p className="font-serif text-[22px] tracking-tight text-foreground">{name}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} — Todos os direitos reservados
        </p>
        <Link
          href="/fotos"
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
        >
          Ver galeria completa
        </Link>
      </div>
    </footer>
  )
}
