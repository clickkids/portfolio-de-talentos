"use client"
// Auth client mock
export const authClient = {
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  useSession: () => ({ data: null, isPending: false }),
} as any

export const signIn = async () => {}
export const signUp = async () => {}
export const signOut = async () => {}
export const useSession = () => ({ data: null, isPending: false })
