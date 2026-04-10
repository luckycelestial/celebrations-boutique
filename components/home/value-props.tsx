'use client'

import { motion } from 'framer-motion'
import { Sparkles, BadgeIndianRupee, Heart } from 'lucide-react'

const valueProps = [
  {
    icon: Sparkles,
    title: 'Good Collection',
    description: 'Curated selection of premium ethnic wear from trusted manufacturers.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Affordable Pricing',
    description: 'Quality outfits at prices that fit every budget and occasion.',
  },
  {
    icon: Heart,
    title: 'Friendly Staff',
    description: 'Warm, helpful assistance to find your perfect outfit.',
  },
]

export function ValueProps() {
  return (
    <section className="bg-[var(--ivory-cream)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--celebration-gold)]/10">
                <prop.icon className="h-8 w-8 text-[var(--celebration-gold)]" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[var(--deep-mahogany)]">
                {prop.title}
              </h3>
              <p className="mt-2 max-w-xs text-[var(--rich-chestnut)]">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
