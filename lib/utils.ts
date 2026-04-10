import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const WHATSAPP_NUMBER = '918148212664'

export function whatsappLink(message?: string): string {
  const text = message ?? "Hi, I'd like to enquire about dresses at Celebrations."
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function isStoreOpen(): boolean {
  const now = new Date()
  const ist = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now)

  const hours = parseInt(ist.find((p) => p.type === 'hour')!.value)
  const minutes = parseInt(ist.find((p) => p.type === 'minute')!.value)
  const time = hours * 60 + minutes

  // Open 9:00–12:30 and 14:00–21:00 (Mon–Sun)
  const morningOpen = 9 * 60
  const morningClose = 12 * 60 + 30
  const eveningOpen = 14 * 60
  const eveningClose = 21 * 60

  return (time >= morningOpen && time < morningClose) || (time >= eveningOpen && time < eveningClose)
}

export function formatStoreHours(): string {
  return '9:00 AM – 12:30 PM, 2:00 PM – 9:00 PM'
}

export const STORE_INFO = {
  name: 'Celebrations',
  address: '119/126, Cross Cut Rd, Ram Nagar, Gandhipuram',
  city: 'Coimbatore',
  state: 'Tamil Nadu',
  pincode: '641009',
  phone: '+91 81482 12664',
  phoneLink: 'tel:+918148212664',
  rating: 4.6,
  reviewCount: 1345,
  mapsLink: 'https://maps.google.com/?q=Celebrations,+Cross+Cut+Rd,+Gandhipuram,+Coimbatore',
  mapsEmbed: 'https://maps.google.com/maps?q=Celebrations,+119/126,+Cross+Cut+Rd,+Ram+Nagar,+Gandhipuram,+Coimbatore,+Tamil+Nadu+641009,+India&t=&z=15&ie=UTF8&iwloc=&output=embed',
}
