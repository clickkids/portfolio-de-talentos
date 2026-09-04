export const DEFAULT_PROFILE = {
  name: "Helena Costa",
  role: "Modelo & Atriz",
  tagline: "Editoriais, campanhas, comerciais e filmes. Disponível para castings, campanhas e editoriais nacionais e internacionais.",
  bio: "Helena Costa é modelo e atriz baseada em São Paulo. Com presença marcante e versatilidade entre editorial e comercial, construiu trajetória em campanhas nacionais e internacionais, editoriais de moda e trabalhos para TV e streaming.\n\nFormada em artes cênicas, une técnica, presença e sofisticação. Seu trabalho transita entre moda, publicidade e cinema, com foco em autenticidade e elegância contemporânea.\n\nDisponível para castings, campanhas publicitárias, editoriais de moda, comerciais de TV e projetos audiovisuais.",
  heroImage: "/images/gallery-1.png",
  portraitImage: "/images/gallery-2.png",
  height: "1,78m",
  bust: "84cm",
  waist: "62cm",
  hips: "90cm",
  dressSize: "38",
  shoeSize: "39",
  hairColor: "Castanho Escuro",
  eyeColor: "Verde",
  base: "São Paulo — SP",
  availableToTravel: true,
  availableFor: "Campanhas, Editorial, Comercial, Desfile, TV, Cinema, Streaming",
  email: "contato@helenacosta.com",
  phone: "+55 11 99999-9999",
  instagram: "@helenacosta_oficial",
}

export const DEFAULT_WORKS = [
  { title: "Silk Vermelho", category: "Editorial — Vogue", image: "/images/gallery-1.png" },
  { title: "Noir — Perfume", category: "Campanha Global", image: "/images/gallery-2.png" },
  { title: "Beauty Natura", category: "Comercial TV", image: "/images/gallery-3.png" },
  { title: "Street Style SPFW", category: "Street Style", image: "/images/gallery-4.png" },
  { title: "Avant-garde", category: "Editorial Conceitual", image: "/images/gallery-5.png" },
  { title: "Retrato Natural", category: "Portrait", image: "/images/gallery-6.png" },
]

export const DEFAULT_VIDEOS = [
  { title: "Reel Comercial — Natura", type: "Comercial • 30s", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "/images/gallery-1.png" },
  { title: "Cena — Marés (Longa)", type: "Cinema • Drama", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "/images/gallery-2.png" },
  { title: "Fashion Film — Osklen SS24", type: "Fashion Film", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "/images/gallery-3.png" },
]

export const DEFAULT_PHOTOS = [
  { url: "/images/gallery-1.png", caption: "Editorial Principal — Vogue" },
  { url: "/images/gallery-2.png", caption: "Glamour Dourado — Campanha" },
  { url: "/images/gallery-3.png", caption: "Beauty — Close Natural" },
  { url: "/images/gallery-4.png", caption: "Street Style — SPFW" },
  { url: "/images/gallery-5.png", caption: "Avant-garde — Estúdio" },
  { url: "/images/gallery-6.png", caption: "Retrato Natural — Luz Natural" },
  { url: "/images/gallery-1.png", caption: "Silk Vermelho — Editorial" },
  { url: "/images/gallery-3.png", caption: "Campanha Beauty — Detalhe" },
]

export const DEFAULT_EXPERIENCES = [
  { year: "2024", title: "Campanha Global — Perfume Noir", category: "Comercial", description: "Rosto principal da campanha internacional de lançamento da fragrância Noir. Veiculação em 12 países, incluindo filme para TV aberta e mídias digitais." },
  { year: "2023", title: "Marés — Longa-metragem", category: "Cinema / Streaming", description: "Papel coadjuvante no drama distribuído em plataforma de streaming. Direção de Beatriz Seigner, seleção oficial Festival de Gramado." },
  { year: "2023", title: "São Paulo Fashion Week", category: "Desfile", description: "Desfiles para grifes nacionais nas temporadas de inverno e verão: Osklen, Água de Coco, Lolitta e Apartamento 03." },
  { year: "2022", title: "Vogue Brasil — Editorial Aniversário", category: "Editorial", description: "Editorial de moda de dez páginas na edição de aniversário de 47 anos da Vogue Brasil, fotografado por Bob Wolfenson." },
  { year: "2022", title: "Natura — Beauty Essencial", category: "Comercial", description: "Campanha nacional de linha de cosméticos para TV aberta, fechada e digital. Protagonista da campanha de Dia das Mães." },
  { year: "2021", title: "Osklen — Coleção SS22", category: "Campanha", description: "Modelo principal da campanha primavera-verão da marca, fotografada em Fernando de Noronha." },
]

export const DEFAULT_BRANDS = [
  { name: "Vogue" },
  { name: "Natura" },
  { name: "Osklen" },
  { name: "Netflix" },
  { name: "Água de Coco" },
  { name: "L'Oréal" },
  { name: "Riachuelo" },
  { name: "Havaianas" },
]

export type PortfolioProfile = typeof DEFAULT_PROFILE
