"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-muted-foreground mb-8">Quer contratar um de nossos talentos? Fale com a gente!</p>
        
        <form className="space-y-4 text-left bg-card p-8 rounded-2xl shadow-sm border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Seu nome" />
            <Input placeholder="Seu e-mail" />
          </div>
          <Input placeholder="Assunto" />
          <Textarea placeholder="Sua mensagem" rows={4} />
          <Button className="w-full">Enviar mensagem</Button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
