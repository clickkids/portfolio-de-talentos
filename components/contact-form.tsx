"use client"

import { useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { sendMessage } from "@/app/actions/contact"

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<{ ok: boolean; error?: string }>({ ok: false })

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await sendMessage({ ok: false }, formData)
      setState(result)
    })
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-6">
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
      
      {state?.error && (
        <p className="rounded-sm border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {state.error}
        </p>
      )}
      {state?.ok && (
        <p className="rounded-sm border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-300">
          Mensagem enviada com sucesso! Retornaremos em breve.
        </p>
      )}
      
      <Button type="submit" disabled={isPending} className="mt-2 h-12 text-xs uppercase tracking-[0.2em]">
        {isPending ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  )
}
