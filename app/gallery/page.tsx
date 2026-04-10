import type { Metadata } from 'next'
import { PhotoGrid } from '@/components/gallery/photo-grid'

export const metadata: Metadata = {
  title: 'Gallery | Celebrations - Premium Ethnic Wear',
  description: 'Browse our gallery of beautiful sarees, gowns, and ethnic wear at Celebrations, Coimbatore. See our collections and happy customers.',
}

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--deep-mahogany)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--soft-gold)]">
            A glimpse into our world of ethnic elegance. Explore our store, collections, and happy customers.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <PhotoGrid />
    </div>
  )
}
