"use client"
import { useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { sendMessage } from "@/app/actions/contact"

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState({ ok: false, error: "" })
  async function handleSubmit(formData) {
    startTransition(async () => {
      const result = await sendMessage({ ok: false }, formData)
      setState(result)
    })
  }
  return (
    <form action={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" required placeholder="Seu nome completo" className="h-12" />
        </div>
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" required placeholder="seu@email.com" className="h-12" />
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" name="message" required rows={6} placeholder="Conte sobre o projeto..." />
      </div>
      <Button type="submit" disabled={isPending} className="mt-2 h-12">{isPending ? "Enviando..." : "Enviar mensagem"}</Button>
    </form>
  )
}
