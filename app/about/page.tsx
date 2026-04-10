import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Clock, Star, Award, Users, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { STORE_INFO, formatStoreHours } from '@/lib/utils'
import { StoreStatus } from '@/components/ui/store-status'

export const metadata: Metadata = {
  title: 'About Us | Celebrations - Premium Ethnic Wear',
  description: 'Learn about Celebrations, Coimbatore\'s trusted destination for premium ethnic wear. Located in Gandhipuram with 1,345+ happy customers.',
}

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'We source only the finest fabrics and work with trusted manufacturers to ensure premium quality.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. Our friendly staff is dedicated to helping you find the perfect outfit.',
  },
  {
    icon: Heart,
    title: 'Passion for Fashion',
    description: 'We stay updated with the latest trends while respecting traditional craftsmanship and heritage.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--deep-mahogany)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
            About Celebrations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--soft-gold)]">
            Your trusted destination for premium ethnic wear in Coimbatore since our founding.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/hero-boutique.jpg"
                alt="Celebrations store interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[var(--deep-mahogany)] md:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-[var(--near-black)] leading-relaxed">
                <p>
                  Celebrations was born from a simple dream: to make every occasion truly special 
                  with beautiful, high-quality ethnic wear that combines tradition with contemporary elegance.
                </p>
                <p>
                  Located in the heart of Gandhipuram, Coimbatore, we have grown from a small boutique 
                  to one of the city&apos;s most trusted destinations for wedding and reception wear, 
                  grand sarees, and festive clothing for the whole family.
                </p>
                <p>
                  With over 1,345 satisfied customers and a 4.6-star rating, we take pride in 
                  providing an exceptional shopping experience with our curated collections and 
                  personalized service.
                </p>
              </div>

              {/* Rating Badge */}
              <div className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[var(--ivory-cream)] px-4 py-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(STORE_INFO.rating)
                          ? 'fill-[var(--celebration-gold)] text-[var(--celebration-gold)]'
                          : 'text-[var(--celebration-gold)]'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium text-[var(--deep-mahogany)]">
                  {STORE_INFO.rating} ({STORE_INFO.reviewCount.toLocaleString()}+ reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[var(--ivory-cream)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-semibold text-[var(--deep-mahogany)] md:text-4xl">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--celebration-gold)]/10">
                  <value.icon className="h-8 w-8 text-[var(--celebration-gold)]" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[var(--deep-mahogany)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-[var(--rich-chestnut)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Info Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Map */}
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <iframe
                src="https://maps.google.com/maps?q=Celebrations,+119/126,+Cross+Cut+Rd,+Ram+Nagar,+Gandhipuram,+Coimbatore,+Tamil+Nadu+641009,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Celebrations Store Location"
                className="absolute inset-0"
              />
            </div>

            {/* Details */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[var(--deep-mahogany)] md:text-4xl">
                Visit Our Store
              </h2>
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
                    <div className="mt-2 text-[var(--rich-chestnut)]">
                      <p className="font-medium">Monday – Sunday</p>
                      <p>{formatStoreHours()}</p>
                    </div>
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
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
