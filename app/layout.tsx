import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const geistSans = GeistSans

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Helena Costa — Modelo & Atriz",
  description:
    "Portfólio de Helena Costa, modelo e atriz. Editoriais, campanhas, comerciais e filmes. Disponível para castings, campanhas e editoriais.",
  keywords: ["modelo", "atriz", "portfólio", "campanhas", "editorial", "São Paulo"],
  authors: [{ name: "Helena Costa" }],
  creator: "Helena Costa",
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#1a1816",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${geistSans.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  )
}
