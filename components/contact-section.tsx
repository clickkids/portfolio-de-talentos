import { Mail, Phone, AtSign } from "lucide-react"

export function ContactSection() {
  return (
    <section className="p-10 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Contato</h2>
      <div className="flex gap-6">
        <span className="flex items-center gap-2"><Mail size={20}/> Email</span>
        <span className="flex items-center gap-2"><Phone size={20}/> Telefone</span>
        <span className="flex items-center gap-2"><AtSign size={20}/> Instagram (temporário @)</span>
      </div>
      <p className="mt-4 text-sm text-gray-400">Troquei Instagram por AtSign porque o lucide tirou o ícone do Instagram na versão nova. Depois você troca por react-icons se quiser.</p>
    </section>
  )
}
