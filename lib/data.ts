import { DEFAULT_PROFILE, DEFAULT_WORKS, DEFAULT_VIDEOS, DEFAULT_PHOTOS, DEFAULT_EXPERIENCES, DEFAULT_BRANDS } from "./default-content"

// Versão SEM BANCO - usa os dados padrão direto
// O original fazia db.select()... que gastava crédito do Neon

export async function getPortfolioData() {
  // Simula delay de rede
  // await new Promise(r => setTimeout(r, 100))

  return {
    profile: DEFAULT_PROFILE,
    works: DEFAULT_WORKS.map((w, i) => ({ id: i + 1, ...w })),
    videos: DEFAULT_VIDEOS.map((v, i) => ({ id: i + 1, ...v })),
    photos: DEFAULT_PHOTOS.map((p, i) => ({ id: i + 1, ...p })),
    experiences: DEFAULT_EXPERIENCES.map((e, i) => ({ id: i + 1, ...e })),
    brands: DEFAULT_BRANDS.map((b, i) => ({ id: i + 1, ...b, logo: null })),
  }
}
