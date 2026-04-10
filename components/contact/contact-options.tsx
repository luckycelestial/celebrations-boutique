'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, MapPin, Clock, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { STORE_INFO, whatsappLink, formatStoreHours } from '@/lib/utils'
import { StoreStatus } from '@/components/ui/store-status'

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Us',
    description: 'Quick responses to all your inquiries',
    action: 'Start Chat',
    href: whatsappLink(),
    color: 'bg-[#25D366]',
    hoverColor: 'hover:bg-[#128C7E]',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team',
    action: 'Call Now',
    href: STORE_INFO.phoneLink,
    color: 'bg-[var(--celebration-gold)]',
    hoverColor: 'hover:bg-[var(--rich-chestnut)]',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Experience our collections in person',
    action: 'Get Directions',
    href: STORE_INFO.mapsLink,
    color: 'bg-[var(--deep-mahogany)]',
    hoverColor: 'hover:bg-[var(--near-black)]',
  },
]

export function ContactOptions() {
  return (
    <section className="bg-[var(--ivory-cream)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-full ${method.color}`}>
                <method.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[var(--deep-mahogany)]">
                {method.title}
              </h3>
              <p className="mt-2 text-[var(--rich-chestnut)]">
                {method.description}
              </p>
              <Button
                asChild
                className={`mt-6 ${method.color} text-white ${method.hoverColor}`}
              >
                <a
                  href={method.href}
                  target={method.title === 'Call Us' ? undefined : '_blank'}
                  rel={method.title === 'Call Us' ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-2"
                >
                  {method.action}
                  {method.title !== 'Call Us' && <ExternalLink className="h-4 w-4" />}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Store Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid gap-8 rounded-xl bg-white p-8 shadow-sm lg:grid-cols-2"
        >
          {/* Map */}
          <div className="relative aspect-video overflow-hidden rounded-lg lg:aspect-auto lg:h-full lg:min-h-[300px]">
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
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-semibold text-[var(--deep-mahogany)]">
              {STORE_INFO.name}
            </h3>

            <div className="mt-6 space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--celebration-gold)]" />
                <div>
                  <p className="text-[var(--near-black)]">
                    {STORE_INFO.address}
                  </p>
                  <p className="text-[var(--near-black)]">
                    {STORE_INFO.city}, {STORE_INFO.state} - {STORE_INFO.pincode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[var(--celebration-gold)]" />
                <a
                  href={STORE_INFO.phoneLink}
                  className="text-[var(--near-black)] transition-colors hover:text-[var(--celebration-gold)]"
                >
                  {STORE_INFO.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--celebration-gold)]" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--near-black)]">Store Hours</span>
                    <StoreStatus />
                  </div>
                  <p className="mt-1 text-[var(--rich-chestnut)]">
                    Monday – Sunday<br />
                    {formatStoreHours()}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#25D366] text-white hover:bg-[#128C7E]"
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[var(--celebration-gold)] text-[var(--celebration-gold)] hover:bg-[var(--celebration-gold)] hover:text-white"
              >
                <a
                  href={STORE_INFO.phoneLink}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
