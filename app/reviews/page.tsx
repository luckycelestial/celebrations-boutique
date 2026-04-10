import type { Metadata } from 'next'
import { RatingOverview } from '@/components/reviews/rating-overview'
import { TestimonialGrid } from '@/components/reviews/testimonial-grid'

export const metadata: Metadata = {
  title: 'Reviews | Celebrations - Premium Ethnic Wear',
  description: 'Read what our customers say about Celebrations. 4.6★ rating from 1,345+ reviews. Discover why we are Coimbatore\'s trusted ethnic wear destination.',
}

export default function ReviewsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--deep-mahogany)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
            Customer Reviews
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--soft-gold)]">
            See what our happy customers have to say about their experience at Celebrations.
          </p>
        </div>
      </section>

      {/* Rating Overview */}
      <RatingOverview />

      {/* Testimonials */}
      <TestimonialGrid />
    </div>
  )
}
