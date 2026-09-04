"use client"

import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { sendMessage } from "@/app/actions/contact"

const initialState = { ok: false, error: "" }

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage as any, initialState as any)

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Nome</Label>
          <Input id="name" name="name" required autoComplete="name" placeholder="Seu nome completo" className="h-12" />
        </div>
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">E-mail</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" placeholder="seu@email.com" className="h-12" />
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <Label htmlFor="subject" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Assunto</Label>
        <Input id="subject" name="subject" placeholder="Casting, campanha, editorial..." className="h-12" />
      </div>
      <div className="flex flex-col gap-2.5">
        <Label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mensagem</Label>
        <Textarea id="message" name="message" required rows={6} placeholder="Conte sobre o projeto, datas, cachê..." />
      </div>
      
      {(state as any)?.error && (
        <p className="rounded-sm border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {(state as any).error}
        </p>
      )}
      {(state as any)?.ok && (
        <p className="rounded-sm border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-300">
          Mensagem enviada com sucesso! Retornaremos em breve.
        </p>
      )}
      
      <Button type="submit" disabled={pending} className="mt-2 h-12 text-xs uppercase tracking-[0.2em]">
        {pending ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  )
}
