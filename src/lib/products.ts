import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'single-sided-display',
    name: 'Single-Sided Display',
    description: 'Our single-sided displays offer a sleek design perfect for indoor environments, ensuring your content is always the centre of attention.',
    price: 1499.99,
    image: '/images/single-sided-display.jpg',
    category: 'Indoor Display',
    inStock: true,
    inventory: 15,
    features: [
      'Portrait or Landscape orientation',
      'Ultra high brightness',
      'Commercial grade 24/7 operation',
      'Slim wall-mounted design'
    ]
  },
  {
    id: 'double-sided-display',
    name: 'Double-Sided Display',
    description: 'Double-sided displays maximise visibility by presenting dynamic content both inside and outside your business, even in bright sunlight.',
    price: 2599.99,
    image: '/images/double-sided-display.jpg',
    category: 'Window Display',
    inStock: true,
    inventory: 8,
    features: [
      'Hanging or Freestanding options',
      'Dual Content Display capability',
      'Sun-readable brightness (2500+ nits)',
      'Integrated airflow cooling system'
    ]
  },
  {
    id: 'slim-wall-mounted-display',
    name: 'Slim Wall Mounted Display',
    description: 'Ultra-thin profile display perfect for modern interiors, delivering stunning visuals without taking up valuable space.',
    price: 1299.99,
    image: '/images/slim-wall-mounted-display.jpg',
    category: 'Indoor Display',
    inStock: true,
    inventory: 20,
    features: [
      'Portrait or Landscape mounting',
      'Ultra-slim 2-inch profile',
      'Easy installation system',
      'Remote content management'
    ]
  },
  {
    id: 'interactive-touch-display',
    name: 'Interactive Touch Display',
    description: 'Engage customers with responsive touch technology, perfect for wayfinding, product browsing, and interactive experiences.',
    price: 3399.99,
    image: '/images/interactive-touch-display.jpg',
    category: 'Interactive Display',
    inStock: true,
    inventory: 12,
    features: [
      'Multi-touch capability',
      '10-point touch recognition',
      'Tempered glass protection',
      'Custom software integration'
    ]
  },
  {
    id: 'external-mounted-display',
    name: 'External Mounted Display',
    description: 'Weather-resistant outdoor displays built to withstand the elements whilst delivering crystal-clear messaging 24/7.',
    price: 4399.99,
    image: '/images/external-mounted-display.jpg',
    category: 'Outdoor Display',
    inStock: true,
    inventory: 6,
    features: [
      'IP65 weatherproof rating',
      'Anti-glare coating',
      'Temperature controlled (-20°C to 50°C)',
      'Vandal-resistant design'
    ]
  },
  {
    id: 'premium-interactive-kiosk',
    name: 'Premium Interactive Kiosk',
    description: 'Full-featured interactive kiosk solution with integrated payment processing, perfect for self-service applications.',
    price: 5599.99,
    image: '/images/premium-interactive-kiosk.jpg',
    category: 'Interactive Display',
    inStock: true,
    inventory: 5,
    features: [
      'Built-in payment terminal',
      'Printer integration ready',
      'ADA compliant design',
      'Custom branding options'
    ]
  },
  {
    id: 'textura-home-canvas',
    name: 'Textura Home Digital Canvas',
    description: 'Transform your home with gallery-grade digital art. The perfect blend of technology and artistry for art enthusiasts and homeowners.',
    price: 899.99,
    image: '/images/textura-home-canvas.jpg',
    category: 'Digital Canvas',
    inStock: true,
    inventory: 25,
    features: [
      '1 Year Warranty',
      'Advanced Texture-Accurate Display Technology',
      'Control One Device',
      'Compatible with Control4 / Crestron / Rako',
      'Access to Vizage Solutions Image Library',
      'Magnetic Handmade Wooden Frames (4 finishes)',
      'Easy Installation with Mounting Template',
      'Portrait or Landscape Orientation'
    ]
  },
  {
    id: 'textura-pro-canvas',
    name: 'Textura Pro Digital Canvas',
    description: 'Professional-grade digital canvas for businesses. Control multiple devices, extended warranty, and premium curation services.',
    price: 1499.99,
    image: '/images/textura-pro-canvas.jpg',
    category: 'Digital Canvas',
    inStock: true,
    inventory: 15,
    features: [
      '3 Year Warranty',
      'Advanced Texture-Accurate Display Technology',
      'Control Multiple Devices at Once',
      'Compatible with Control4 / Crestron / Rako',
      'Access to Vizage Solutions Image Library',
      'Vieunite Art Curation Subscription Compatible',
      'Magnetic Handmade Wooden Frames (4 finishes)',
      'Easy Installation with Mounting Template',
      'Portrait or Landscape Orientation'
    ]
  }
];
