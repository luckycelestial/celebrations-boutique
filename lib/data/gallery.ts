export type GalleryImage = {
  id: string
  src: string
  alt: string
  category: 'sarees' | 'gowns' | 'kids' | 'store'
  aspectRatio: 'portrait' | 'landscape' | 'square'
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery-1.jpg',
    alt: 'Bride trying on a beautiful red and gold bridal saree',
    category: 'sarees',
    aspectRatio: 'portrait',
  },
  {
    id: '2',
    src: '/images/gallery-2.jpg',
    alt: 'Designer bridal lehenga display',
    category: 'gowns',
    aspectRatio: 'landscape',
  },
  {
    id: '3',
    src: '/images/gallery-3.jpg',
    alt: 'Kanchipuram silk saree border detail',
    category: 'sarees',
    aspectRatio: 'square',
  },
  {
    id: '4',
    src: '/images/gallery-4.jpg',
    alt: 'Child in traditional pattu pavadai',
    category: 'kids',
    aspectRatio: 'portrait',
  },
  {
    id: '5',
    src: '/images/gallery-5.jpg',
    alt: 'Store interior with saree display',
    category: 'store',
    aspectRatio: 'landscape',
  },
  {
    id: '6',
    src: '/images/gallery-6.jpg',
    alt: 'Designer reception gown in royal blue',
    category: 'gowns',
    aspectRatio: 'portrait',
  },
  {
    id: '7',
    src: '/images/collection-reception.jpg',
    alt: 'Reception wear collection display',
    category: 'gowns',
    aspectRatio: 'landscape',
  },
  {
    id: '8',
    src: '/images/collection-sarees.jpg',
    alt: 'Grand sarees collection',
    category: 'sarees',
    aspectRatio: 'landscape',
  },
  {
    id: '9',
    src: '/images/collection-kids.jpg',
    alt: 'Kids party wear collection',
    category: 'kids',
    aspectRatio: 'landscape',
  },
  {
    id: '10',
    src: '/images/hero-boutique.jpg',
    alt: 'Celebrations store interior',
    category: 'store',
    aspectRatio: 'landscape',
  },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'sarees', label: 'Sarees' },
  { id: 'gowns', label: 'Gowns' },
  { id: 'kids', label: 'Kids' },
] as const
