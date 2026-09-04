"use server"

type ContactState = { ok: boolean; error?: string }

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function sendMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const senderName = String(formData.get("name") ?? "").trim()
  const senderEmail = String(formData.get("email") ?? "").trim()
  const subject = String(formData.get("subject") ?? "").trim()
  const body = String(formData.get("message") ?? "").trim()

  if (!senderName || !senderEmail || !body) {
    return { ok: false, error: "Preencha nome, e-mail e mensagem." }
  }
  if (!isValidEmail(senderEmail)) {
    return { ok: false, error: "Informe um e-mail válido." }
  }
  if (body.length > 5000) {
    return { ok: false, error: "Mensagem muito longa. Máximo 5000 caracteres." }
  }

  try {
    // Aqui antes tinha db.insert(message) - agora só loga para não gastar crédito
    // Quando quiser voltar com banco, é só descomentar o db.insert
    console.log("[Contato Helena] Nova mensagem:", {
      senderName: senderName.slice(0, 100),
      senderEmail: senderEmail.slice(0, 100),
      subject: subject.slice(0, 100),
      bodyLength: body.length,
    })

    // Simula envio
    await new Promise((r) => setTimeout(r, 600))

    return { ok: true }
  } catch (err) {
    console.log("[sendMessage] failed:", err)
    return { ok: false, error: "Não foi possível enviar. Tente novamente." }
  }
}
