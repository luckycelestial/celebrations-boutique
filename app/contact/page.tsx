import type { Metadata } from 'next'
import { ContactOptions } from '@/components/contact/contact-options'

export const metadata: Metadata = {
  title: 'Contact Us | Celebrations - Premium Ethnic Wear',
  description: 'Get in touch with Celebrations. WhatsApp us, call, or visit our store in Gandhipuram, Coimbatore for all your ethnic wear needs.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--deep-mahogany)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--soft-gold)]">
            We&apos;d love to hear from you. Reach out via WhatsApp, call us, or visit our store.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <ContactOptions />
    </div>
  )
}
