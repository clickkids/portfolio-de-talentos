import { getPortfolioData } from "@/lib/data"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { PhotoGallery } from "@/components/photo-gallery"
import { SectionHeading } from "@/components/section-heading"

export const metadata = {
  title: "Fotos — Helena Costa",
  description: "Galeria completa de fotos do portfólio de Helena Costa.",
}

export default async function FotosPage() {
  const data = await getPortfolioData()

  return (
    <main className="min-h-svh">
      <SiteNav name={data.profile.name} />
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-10 md:pt-40">
        <SectionHeading label="Galeria" title="Fotos" className="mb-14" />
        <PhotoGallery photos={data.photos} />
      </section>
      <SiteFooter name={data.profile.name} />
    </main>
  )
}
