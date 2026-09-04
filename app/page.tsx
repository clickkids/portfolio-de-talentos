import { getPortfolioData } from "@/lib/data"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { FeaturedWorks } from "@/components/featured-works"
import { VideoSection } from "@/components/video-section"
import { MeasurementsSection } from "@/components/measurements-section"
import { ExperienceSection } from "@/components/experience-section"
import { BrandsSection } from "@/components/brands-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default async function HomePage() {
  const data = await getPortfolioData()
  const { profile } = data

  return (
    <main className="min-h-svh">
      <SiteNav name={profile.name} />
      <Hero name={profile.name} role={profile.role} tagline={profile.tagline} image={profile.heroImage} />
      <AboutSection name={profile.name} bio={profile.bio} portrait={profile.portraitImage} />
      <FeaturedWorks works={data.works} />
      <VideoSection videos={data.videos} />
      <MeasurementsSection profile={profile} />
      <ExperienceSection experiences={data.experiences} />
      <BrandsSection brands={data.brands} />
      <ContactSection profile={profile} />
      <SiteFooter name={profile.name} />
    </main>
  )
}
