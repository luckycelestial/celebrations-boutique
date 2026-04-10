'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { STORE_INFO, formatStoreHours, isStoreOpen } from '@/lib/utils'
import { StoreStatus } from '@/components/ui/store-status'

export function MapSection() {
  return (
    <section className="bg-[var(--ivory-cream)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Map Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.285431927!2d76.9557!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sGandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Celebrations Store Location"
              className="absolute inset-0"
            />
            
            {/* Overlay Gradient */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-[var(--deep-mahogany)]/10" />
          </motion.div>

          {/* Store Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl font-semibold text-[var(--deep-mahogany)] md:text-4xl">
              Visit Our Store
            </h2>
            <p className="mt-4 text-[var(--rich-chestnut)]">
              Experience our collections in person. Our friendly staff is ready to help you find the perfect outfit.
            </p>

            {/* Store Details */}
            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--celebration-gold)]/10">
                  <MapPin className="h-6 w-6 text-[var(--celebration-gold)]" />
                </div>
                <div>
                  <h3 className="font-medium text-[var(--deep-mahogany)]">Address</h3>
                  <p className="mt-1 text-[var(--rich-chestnut)]">
                    {STORE_INFO.address}<br />
                    {STORE_INFO.city}, {STORE_INFO.state} - {STORE_INFO.pincode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--celebration-gold)]/10">
                  <Phone className="h-6 w-6 text-[var(--celebration-gold)]" />
                </div>
                <div>
                  <h3 className="font-medium text-[var(--deep-mahogany)]">Phone</h3>
                  <a
                    href={STORE_INFO.phoneLink}
                    className="mt-1 block text-[var(--rich-chestnut)] transition-colors hover:text-[var(--celebration-gold)]"
                  >
                    {STORE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--celebration-gold)]/10">
                  <Clock className="h-6 w-6 text-[var(--celebration-gold)]" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-[var(--deep-mahogany)]">Store Hours</h3>
                    <StoreStatus />
                  </div>
                  <p className="mt-1 text-[var(--rich-chestnut)]">
                    Monday – Sunday<br />
                    {formatStoreHours()}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[var(--celebration-gold)] text-white hover:bg-[var(--rich-chestnut)]"
              >
                <a
                  href={STORE_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MapPin className="h-5 w-5" />
                  Get Directions
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
