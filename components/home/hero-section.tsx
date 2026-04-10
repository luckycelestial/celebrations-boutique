'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappLink, STORE_INFO } from '@/lib/utils'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-boutique.jpg"
          alt="Celebrations store interior"
          fill
          className="ken-burns object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-mahogany)]/80 via-[var(--deep-mahogany)]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(STORE_INFO.rating)
                      ? 'fill-[var(--celebration-gold)] text-[var(--celebration-gold)]'
                      : 'text-[var(--celebration-gold)]'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-white">
              {STORE_INFO.rating} ({STORE_INFO.reviewCount.toLocaleString()}+ reviews)
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            <span className="text-balance">
              Where Every Celebration Begins
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/90"
          >
            Discover exquisite reception wear, grand sarees, and occasion dresses 
            at Coimbatore&apos;s most trusted ethnic wear destination.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="bg-[var(--celebration-gold)] text-white hover:bg-[var(--soft-gold)] hover:text-[var(--deep-mahogany)]"
            >
              <a
                href={STORE_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="h-5 w-5" />
                Visit Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--deep-mahogany)]"
            >
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </motion.div>

          {/* Location Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex items-center gap-2 text-sm text-white/70"
          >
            <MapPin className="h-4 w-4" />
            Gandhipuram, Coimbatore
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
