export type Collection = {
  id: string
  title: string
  description: string
  image: string
  priceRange?: string
  category: 'reception' | 'sarees' | 'kids' | 'casual'
}

export const collections: Collection[] = [
  {
    id: 'reception-wear',
    title: 'Reception Wear',
    description: 'Elegant gowns and designer lehengas for your special reception.',
    image: '/images/collection-reception.jpg',
    priceRange: '₹8,000 – ₹40,000',
    category: 'reception',
  },
  {
    id: 'grand-sarees',
    title: 'Grand Sarees',
    description: 'Exquisite Kanchipuram silk and designer sarees for grand occasions.',
    image: '/images/collection-sarees.jpg',
    priceRange: '₹5,000 – ₹35,000',
    category: 'sarees',
  },
  {
    id: 'kids-party',
    title: 'Kids Party Wear',
    description: 'Adorable ethnic wear for your little ones on festive occasions.',
    image: '/images/collection-kids.jpg',
    priceRange: '₹2,000 – ₹8,000',
    category: 'kids',
  },
  {
    id: 'casual-ethnic',
    title: 'Casual Ethnic',
    description: 'Comfortable yet stylish everyday ethnic wear for all occasions.',
    image: '/images/collection-casual.jpg',
    priceRange: '₹1,500 – ₹6,000',
    category: 'casual',
  },
]

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'reception', label: 'Reception Wear' },
  { id: 'sarees', label: 'Grand Sarees' },
  { id: 'kids', label: 'Kids Party' },
  { id: 'casual', label: 'Casual Ethnic' },
] as const
