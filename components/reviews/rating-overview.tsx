'use client'

import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { averageRating, totalReviews, ratingBreakdown } from '@/lib/data/reviews'
import { STORE_INFO } from '@/lib/utils'

export function RatingOverview() {
  const maxCount = Math.max(...Object.values(ratingBreakdown))

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12"
          >
            {/* Overall Rating */}
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl font-bold text-[var(--deep-mahogany)]">
                {averageRating}
              </div>
              <div className="mt-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < Math.floor(averageRating)
                        ? 'fill-[var(--celebration-gold)] text-[var(--celebration-gold)]'
                        : 'text-[var(--celebration-gold)]'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-2 text-[var(--rich-chestnut)]">
                Based on {totalReviews.toLocaleString()}+ reviews
              </p>
            </div>

            {/* Rating Breakdown */}
            <div className="flex-1 w-full max-w-md">
              {[5, 4, 3, 2, 1].map((rating, index) => {
                const count = ratingBreakdown[rating as keyof typeof ratingBreakdown]
                const percentage = (count / maxCount) * 100

                return (
                  <motion.div
                    key={rating}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 mb-3"
                  >
                    <div className="flex w-12 items-center gap-1 text-sm text-[var(--deep-mahogany)]">
                      {rating}
                      <Star className="h-3.5 w-3.5 fill-[var(--celebration-gold)] text-[var(--celebration-gold)]" />
                    </div>
                    <div className="flex-1 h-3 rounded-full bg-[var(--ivory-cream)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="h-full rounded-full bg-[var(--celebration-gold)]"
                      />
                    </div>
                    <div className="w-12 text-right text-sm text-[var(--rich-chestnut)]">
                      {count}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Write Review CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-[var(--rich-chestnut)]">
              Had a great experience? Share it with others!
            </p>
            <Button
              asChild
              className="mt-4 bg-[var(--celebration-gold)] text-white hover:bg-[var(--rich-chestnut)]"
            >
              <a
                href={STORE_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Write a Review
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
