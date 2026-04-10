import Link from 'next/link'
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'
import { STORE_INFO, formatStoreHours } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--deep-mahogany)] text-[var(--ivory-cream)]">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-white">
              Celebrations
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--soft-gold)]">
              Premium reception wear and grand occasion dresses in Coimbatore. 
              Your destination for exquisite ethnic wear.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--rich-chestnut)] transition-colors hover:bg-[var(--celebration-gold)]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--rich-chestnut)] transition-colors hover:bg-[var(--celebration-gold)]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--soft-gold)]">
              Quick Links
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--ivory-cream)]/80 transition-colors hover:text-[var(--celebration-gold)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--soft-gold)]">
              Contact Us
            </h4>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href={STORE_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-[var(--ivory-cream)]/80 transition-colors hover:text-[var(--celebration-gold)]"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--celebration-gold)]" />
                <span>
                  {STORE_INFO.address}, {STORE_INFO.city}, {STORE_INFO.state} - {STORE_INFO.pincode}
                </span>
              </a>
              <a
                href={STORE_INFO.phoneLink}
                className="flex items-center gap-3 text-sm text-[var(--ivory-cream)]/80 transition-colors hover:text-[var(--celebration-gold)]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[var(--celebration-gold)]" />
                {STORE_INFO.phone}
              </a>
            </div>
          </div>

          {/* Store Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--soft-gold)]">
              Store Hours
            </h4>
            <div className="mt-4 flex items-start gap-3 text-sm text-[var(--ivory-cream)]/80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--celebration-gold)]" />
              <div>
                <p className="font-medium text-white">Monday – Sunday</p>
                <p className="mt-1">{formatStoreHours()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[var(--rich-chestnut)] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-[var(--ivory-cream)]/60">
              © {new Date().getFullYear()} Celebrations. All rights reserved.
            </p>
            <a
              href={STORE_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--celebration-gold)] transition-colors hover:text-[var(--soft-gold)]"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
