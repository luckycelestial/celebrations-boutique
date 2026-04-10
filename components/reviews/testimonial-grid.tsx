'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { reviews } from '@/lib/data/reviews'

export function TestimonialGrid() {
  return (
    <section className="bg-[var(--ivory-cream)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-serif text-3xl font-semibold text-[var(--deep-mahogany)] md:text-4xl"
        >
          What Our Customers Say
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm"
            >
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
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--celebration-gold)]/10 text-[var(--celebration-gold)] font-medium">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
