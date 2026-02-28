import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Digital Canvas Display',
    description: 'Transform your environment with our digital canvases, offering dynamic and interactive displays that engage and inspire.',
    price: 2499.99,
    image: '/images/digital-canvas.jpg',
    category: 'Digital Canvas',
    inStock: true,
    inventory: 15,
    features: [
      'Commercial grade 24/7 operation',
      '70,000+ hours lifespan',
      'High brightness (2500 nits)',
      'Integrated airflow system'
    ]
  },
  {
    id: '2',
    name: 'Interactive Display Solution',
    description: 'Engage your audience with our interactive display solutions, designed to create immersive experiences and foster customer interaction.',
    price: 3299.99,
    image: '/images/interactive-display.jpg',
    category: 'Interactive Display',
    inStock: true,
    inventory: 8,
    features: [
      'Touch-enabled interface',
      'Multi-user support',
      '4K resolution',
      'Tamper-proof design'
    ]
  },
  {
    id: '3',
    name: 'Window Display Signage',
    description: 'Maximize your storefront impact with our high-visibility window displays, perfect for attracting attention in any lighting condition.',
    price: 1899.99,
    image: '/images/window-display.jpg',
    category: 'Window Display',
    inStock: true,
    inventory: 20,
    features: [
      'Ultra-high brightness',
      'Dual-screen capability',
      'Weather resistant',
      'Remote content management'
    ]
  },
  {
    id: '4',
    name: 'Dynamic Signage System',
    description: 'Our dynamic signage solutions provide versatile and eye-catching displays that adapt to your business needs.',
    price: 1599.99,
    image: '/images/dynamic-signage.jpg',
    category: 'Dynamic Signage',
    inStock: true,
    inventory: 12,
    features: [
      'Flexible mounting options',
      'Cloud-based CMS',
      'Energy efficient',
      'Easy content scheduling'
    ]
  }
];
