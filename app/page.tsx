import { HeroSection } from '@/components/home/hero-section'
import { CollectionStrip } from '@/components/home/collection-strip'
import { ValueProps } from '@/components/home/value-props'
import { ReviewCarousel } from '@/components/home/review-carousel'
import { MapSection } from '@/components/home/map-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CollectionStrip />
      <ValueProps />
      <ReviewCarousel />
      <MapSection />
    </>
  )
}
