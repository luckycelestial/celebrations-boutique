'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { collections } from '@/lib/data/collections'

export function CollectionStrip() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-semibold text-[var(--deep-mahogany)] md:text-4xl">
            Our Collections
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--rich-chestnut)]">
            Explore our curated selection of ethnic wear for every celebration
          </p>
        </motion.div>

        {/* Collection Cards - Horizontal Scroll on Mobile */}
        <div className="mt-12 -mx-4 overflow-x-auto px-4 pb-4 scrollbar-hide md:mx-0 md:overflow-visible md:px-0">
          <div className="flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex-shrink-0 w-[280px] md:w-auto"
              >
                <Link href={`/collections?category=${collection.category}`}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-mahogany)]/80 via-transparent to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-serif text-xl font-semibold text-white">
                        {collection.title}
                      </h3>
                      {collection.priceRange && (
                        <p className="mt-1 text-sm text-[var(--soft-gold)]">
                          {collection.priceRange}
                        </p>
                      )}
                      <div className="mt-3 flex items-center gap-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span>Explore</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
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
            href="/collections"
            className="inline-flex items-center gap-2 text-[var(--celebration-gold)] transition-colors hover:text-[var(--rich-chestnut)]"
          >
            <span className="font-medium">View All Collections</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
