export type Review = {
  id: string
  author: string
  rating: number
  text: string
  date: string
  avatar?: string
}

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Priya Krishnan',
    rating: 5,
    text: 'Amazing collection of bridal sarees! The staff was incredibly helpful and patient. Found the perfect reception saree for my daughter. Highly recommend!',
    date: '2 weeks ago',
  },
  {
    id: '2',
    author: 'Meena Sundaram',
    rating: 5,
    text: 'Best place in Coimbatore for wedding shopping. Good collection, reasonable prices, and excellent customer service. The kids party wear section is fantastic.',
    date: '1 month ago',
  },
  {
    id: '3',
    author: 'Ramya S.',
    rating: 4,
    text: 'Wide variety of designs and good quality materials. Prices are fair for the quality offered. Will definitely come back for more shopping.',
    date: '3 weeks ago',
  },
  {
    id: '4',
    author: 'Lakshmi Venkat',
    rating: 5,
    text: 'Wonderful experience! The Kanchipuram silk sarees here are authentic and beautifully crafted. Staff helped me choose the perfect outfit for my reception.',
    date: '1 week ago',
  },
  {
    id: '5',
    author: 'Divya R.',
    rating: 5,
    text: 'Found gorgeous gowns for my engagement here. The fitting was perfect and alterations were done on time. Very professional service.',
    date: '2 months ago',
  },
  {
    id: '6',
    author: 'Karthika M.',
    rating: 4,
    text: 'Great collection of ethnic wear for the entire family. My kids loved their outfits! The store is well-organized and easy to navigate.',
    date: '1 month ago',
  },
  {
    id: '7',
    author: 'Saranya P.',
    rating: 5,
    text: 'Exceptional quality and the best customer service I have experienced. They really understand what brides need. Thank you team Celebrations!',
    date: '3 weeks ago',
  },
  {
    id: '8',
    author: 'Anitha Kumar',
    rating: 5,
    text: 'My go-to store for all occasions. From simple cotton sarees to grand reception wear, they have everything. Trustworthy and reliable.',
    date: '2 weeks ago',
  },
]

export const ratingBreakdown = {
  5: 892,
  4: 301,
  3: 98,
  2: 34,
  1: 20,
}

export const totalReviews = 1345
export const averageRating = 4.6
