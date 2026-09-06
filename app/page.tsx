import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { AboutSingra } from '@/components/about-singra'
import { AdministrativeOverview } from '@/components/administrative-overview'
import { UnionList } from '@/components/union-list'
import { WhyVisit } from '@/components/why-visit'
import { FeaturedPlaces } from '@/components/featured-places'
import { FoodShowcase } from '@/components/food-showcase'
import { GalleryPreview } from '@/components/gallery-preview'
import { EmergencyHelp } from '@/components/emergency-help'
import { BloodHighlight } from '@/components/blood-highlight'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSingra />
        <AdministrativeOverview />
        <UnionList />
        <WhyVisit />
        <FeaturedPlaces />
        <FoodShowcase />
        <GalleryPreview />
        <EmergencyHelp />
        <BloodHighlight />
      </main>
      <Footer />
    </>
  )
}
