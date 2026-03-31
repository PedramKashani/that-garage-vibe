import type { MerchItem } from '../types';

export const merch: MerchItem[] = [
  {
    id: 'tgv-tee-001',
    name: 'TGV Logo Tee',
    description: 'Heavyweight black tee with embroidered chest logo. Garment dyed, preshrunk.',
    price: 4500,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    category: 'apparel',
  },
  {
    id: 'tgv-hoodie-001',
    name: 'Underground Hoodie',
    description: 'Oversized French terry hoodie. Screen printed back graphic.',
    price: 8500,
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'apparel',
  },
  {
    id: 'tgv-cap-001',
    name: 'Six-Panel Cap',
    description: 'Unstructured six-panel cap with embroidered wordmark.',
    price: 3500,
    inStock: true,
    category: 'accessories',
  },
  {
    id: 'tgv-tape-001',
    name: 'Vol. 1 Cassette Mixtape',
    description: 'Curated 60-minute mix from the collective. Limited run of 100.',
    price: 1200,
    inStock: false,
    category: 'music',
  },
];
