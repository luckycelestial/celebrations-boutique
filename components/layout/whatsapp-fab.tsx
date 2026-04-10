'use client'

import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/utils'

export function WhatsAppFAB() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="whatsapp-pulse absolute inset-0 rounded-full bg-[#25D366]" />
      
      {/* Icon */}
      <MessageCircle className="relative h-7 w-7" />
    </a>
  )
}
