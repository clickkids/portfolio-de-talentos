// Mock DB - versão sem custo para Vercel free
// O original usava: drizzle + pg Pool com DATABASE_URL (que gastava crédito)

export const db = new Proxy({} as any, {
  get: () => () => ({
    from: () => ({
      where: () => ({
        orderBy: () => Promise.resolve([]),
        limit: () => Promise.resolve([]),
      }),
      orderBy: () => Promise.resolve([]),
      limit: () => Promise.resolve([]),
    }),
    where: () => ({
      orderBy: () => Promise.resolve([]),
    }),
    values: () => Promise.resolve(),
    set: () => ({
      where: () => Promise.resolve(),
    }),
  }),
})

export const pool = {
  end: async () => {},
} as any
