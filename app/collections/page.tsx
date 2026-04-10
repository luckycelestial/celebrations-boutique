import type { Metadata } from 'next'
import { CollectionGrid } from '@/components/collections/collection-grid'

export const metadata: Metadata = {
  title: 'Collections | Celebrations - Premium Ethnic Wear',
  description: 'Explore our curated collection of reception wear, grand sarees, kids party wear, and casual ethnic outfits at Celebrations, Coimbatore.',
}

export default function CollectionsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--deep-mahogany)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
            Our Collections
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--soft-gold)]">
            Discover exquisite ethnic wear for every celebration. From grand bridal sarees to elegant reception gowns.
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <CollectionGrid />
    </div>
  )
}
