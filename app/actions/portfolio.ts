"use server"

// Stubs para manter compatibilidade com o projeto original
// Antes essas funções usavam db.delete, revalidatePath, etc.

export async function deleteMessage(id: number) {
  console.log("deleteMessage", id)
}

export async function seedDefaultContent() {
  console.log("seedDefaultContent - mock")
}
