'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { reviews, averageRating, totalReviews } from '@/lib/data/reviews'
import Link from 'next/link'

export function ReviewCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const displayedReviews = reviews.slice(0, 6)

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[var(--deep-mahogany)] md:text-4xl">
              What Our Customers Say
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(averageRating)
                        ? 'fill-[var(--celebration-gold)] text-[var(--celebration-gold)]'
                        : 'text-[var(--celebration-gold)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[var(--rich-chestnut)]">
                {averageRating} from {totalReviews.toLocaleString()}+ reviews
              </span>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden gap-2 md:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="border-[var(--rich-chestnut)]/20 hover:bg-[var(--ivory-cream)]"
            >
              <ChevronLeft className="h-5 w-5 text-[var(--deep-mahogany)]" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="border-[var(--rich-chestnut)]/20 hover:bg-[var(--ivory-cream)]"
            >
              <ChevronRight className="h-5 w-5 text-[var(--deep-mahogany)]" />
            </Button>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div
          ref={scrollRef}
          className="mt-10 -mx-4 flex gap-6 overflow-x-auto px-4 pb-4 scrollbar-hide snap-x snap-mandatory md:mx-0 md:px-0"
        >
          {displayedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex-shrink-0 w-[320px] snap-start"
            >
              <div className="flex h-full flex-col rounded-xl border border-[var(--soft-gold)]/30 bg-[var(--ivory-cream)] p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-[var(--celebration-gold)]/30" />
                
                {/* Rating */}
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'fill-[var(--celebration-gold)] text-[var(--celebration-gold)]'
                          : 'text-[var(--soft-gold)]'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mt-4 flex-1 text-[var(--near-black)] leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-[var(--soft-gold)]/30 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--celebration-gold)]/10 text-[var(--celebration-gold)]">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-[var(--deep-mahogany)]">
                      {review.author}
                    </p>
                    <p className="text-sm text-[var(--rich-chestnut)]">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-[var(--celebration-gold)] transition-colors hover:text-[var(--rich-chestnut)]"
          >
            <span className="font-medium">Read All Reviews</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
