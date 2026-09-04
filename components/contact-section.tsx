import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, Instagram } from "lucide-react"

export function ContactSection({ profile }: { profile: any }) {
  const contacts = [
    { label: "E-mail", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "Telefone", value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
    { label: "Instagram", value: profile.instagram, href: `https://instagram.com/${profile.instagram.replace("@","")}`, icon: Instagram },
  ]

  return (
    <section id="contato" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">Contato</p>
          <h2 className="mt-4 max-w-[12ch] text-balance font-serif text-4xl font-medium leading-[0.95] tracking-tight md:text-5xl">
            Vamos trabalhar juntos?
          </h2>
          <p className="mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground">
            Para castings, campanhas, editoriais e comerciais, envie uma mensagem ou fale diretamente pelos canais abaixo.
          </p>

          <ul className="mt-12 space-y-5">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.label === "Instagram" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex size-11 items-center justify-center rounded-sm border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{c.label}</p>
                    <p className="mt-1 text-sm text-foreground transition-colors group-hover:text-primary">{c.value}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-sm border border-border bg-card p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
