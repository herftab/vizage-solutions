'use client';

import { useParams } from 'next/navigation';
import { useProductAdminStore } from '@/lib/product-admin-store';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';
import { useState } from 'react';
import { formatPrice } from '@/lib/currency';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const { getProduct } = useProductAdminStore();
  const product = getProduct(productId);
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            Back to Digital Signage
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  // Product-specific content based on ID
  const getProductContent = () => {
    if (productId === 'double-sided-display') {
      // Double-Sided Display content
      return {
        heroTitle: 'Illuminate Your Brand with Unmatched Clarity',
        heroSubtitle: 'Double-Sided Ultra High Brightness Window Display',
        heroDescription: 'Experience the power of ultra high brightness and dual-sided visibility to captivate audiences from every angle, day or night.',
        transformTitle: 'Transform Your Business Promotion',
        transformSubtitle: 'Boost Engagement and Drive Sales',
        transformContent: [
          'Our double-sided displays offer a dynamic advertising solution that enhances customer engagement, leading to increased foot traffic and sales. By showcasing vivid, eye-catching content, businesses can effectively communicate their brand message and promotions.',
          'Ideal for retail environments, these displays provide a versatile platform for advertising, ensuring your message reaches a wider audience. With the ability to update content remotely, businesses can quickly adapt to market trends and customer needs, maintaining a competitive edge.'
        ],
        features: [
          {
            title: 'Ultra High Brightness',
            description: 'Capture attention day or night with 3,500cd/m² brightness on the outward-facing screen, perfect for direct sunlight.'
          },
          {
            title: 'Dual-Sided Display',
            description: 'Maximise visibility with simultaneous content facing both inside and outside your storefront.'
          },
          {
            title: 'Slim Design',
            description: 'Sleek 80mm depth and aluminium build make installation effortless and stylish.'
          },
          {
            title: '24/7 Operation',
            description: 'Engineered for constant use with smart temperature control and blackening resistance up to 110°C.'
          }
        ],
        useCases: [
          { title: 'Fashion Retail', description: 'Promote new arrivals outside whilst inspiring outfit ideas and trends inside the store.' },
          { title: 'Restaurants & Cafés', description: 'Display opening hours or offers outward, with product info or services shown inward.' },
          { title: 'Estate Agents', description: 'Attract attention with prime listings outdoors and showcase virtual tours or details inside.' },
          { title: 'Electronics Stores', description: 'Highlight must-have gadgets in the window and demonstrate features or promotions within.' },
          { title: 'Car Dealerships', description: 'Promote featured vehicles and finance offers outside, whilst showcasing specs or videos inside the showroom.' },
          { title: 'Airports & Transport', description: 'Display flight info or ads to passers-by, with internal wayfinding or promotions for travellers.' },
          { title: 'Hotels & Hospitality', description: 'Welcome guests with branded messaging outside and share amenities, offers, or events inside the lobby.' },
          { title: 'Gyms & Fitness', description: 'Advertise memberships or classes in the window, with schedules or motivational content inside.' }
        ],
        keyFeatures: [
          'Ultra High Brightness: 3,500cd/m² outward screen ensures visibility even in direct sunlight',
          'Dual-Sided Display: Show different content inside and outside simultaneously for maximum impact',
          'Slim, Lightweight Design: Just 80mm deep with a sleek aluminium enclosure for easy installation',
          'Blackening Defect Resistant: Operates flawlessly up to 110°C without panel degradation',
          'Smart Temperature Control: Built-in airflow system maintains ideal operating temperature for 24/7 use',
          'Integrated Android Media Player: Update content via USB or upgrade for network/cloud control',
          'Freestanding Option Available: Flexibility for hanging or freestanding placement with optional floor stand',
          'Accessible but Protected Ports: Recessed AV ports allow easy updates whilst preventing tampering',
          'Commercial Grade Build: Engineered for 24/7 continuous operation over 70,000 hours',
          'Customisation Options: Tailor colours, branding, and configurations to suit your environment'
        ]
      };
    }
    
    // Default content for other products
    return {
      heroTitle: `Transform Your Space with ${product.name}`,
      heroSubtitle: product.category,
      heroDescription: product.description,
      transformTitle: 'Elevate Your Business',
      transformSubtitle: 'Professional Digital Signage Solution',
      transformContent: [
        'Our digital signage solutions are designed to enhance customer engagement and drive business growth. With cutting-edge technology and professional-grade components, you can deliver stunning visual content that captures attention and communicates your message effectively.',
        'Perfect for businesses of all sizes, our displays offer reliability, flexibility, and performance. Update content remotely, schedule campaigns, and monitor performance from anywhere, giving you complete control over your digital presence.'
      ],
      features: product.features?.map(f => ({
        title: f.split(':')[0] || f,
        description: f.split(':')[1]?.trim() || f
      })) || [],
      useCases: [
        { title: 'Retail Stores', description: 'Showcase products, promotions, and brand messaging to increase sales.' },
        { title: 'Corporate Offices', description: 'Display company news, metrics, and internal communications.' },
        { title: 'Hospitality', description: 'Welcome guests and provide information about services and amenities.' },
        { title: 'Healthcare', description: 'Share important information and reduce perceived wait times.' }
      ],
      keyFeatures: product.features || []
    };
  };

  const content = getProductContent();

  // Get all images (main + gallery)
  const allImages = product ? [product.image, ...(product.gallery || [])] : [];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <div className="inline-block mb-4 md:mb-6 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-sm md:text-base font-medium">
            {content.heroSubtitle}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            {content.heroTitle}
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            {content.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/products/${productId}/shop`}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Configure & Purchase - From {formatPrice(product.price)}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Transform Business Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              {content.transformTitle}
            </h2>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold">
              {content.transformSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column - Description */}
            <div className="lg:col-span-1 space-y-6">
              {content.transformContent.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Middle Column - Gallery */}
            <div className="lg:col-span-1 space-y-4">
              {/* Main Image Display */}
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                <img 
                  src={allImages[selectedImage]} 
                  alt={`${product.name} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              
              {/* Gallery Thumbnails */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index 
                          ? 'border-blue-600 shadow-lg scale-105' 
                          : 'border-transparent hover:border-blue-300'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Purchase Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white shadow-2xl sticky top-4">
                <div className="text-center mb-6">
                  <p className="text-sm text-blue-100 mb-2">Starting from</p>
                  <div className="text-4xl md:text-5xl font-bold mb-4">
                    {formatPrice(product.price)}
                  </div>
                  <p className="text-sm text-blue-100">
                    {product.inventory} units available
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <Link
                    href={`/products/${productId}/shop`}
                    className="block w-full px-6 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105 text-center"
                  >
                    Configure & Purchase
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-center"
                  >
                    Contact Our Team
                  </Link>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Professional Installation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Lifetime Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Content Management System</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>24/7 Technical Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Unparalleled Display Features
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Designed to deliver exceptional performance and visibility in any environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {content.features.map((feature, index) => (
              <div key={index} className="p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0ea5e9" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke={`url(#grad-${index})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Dynamic Business Applications
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Perfect for a wide range of industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {content.useCases.map((useCase, index) => (
              <div key={index} className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-900">{useCase.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features List */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Key Features at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {content.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id={`key-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <path d="M5 13l4 4L19 7" stroke={`url(#key-grad-${index})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-sm md:text-base text-blue-100 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add to Cart CTA */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl mb-4 text-blue-100">
              {product.name}
            </p>
            <div className="text-4xl md:text-5xl font-bold mb-8">
              {formatPrice(product.price)}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/products/${productId}/shop`}
                className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
              >
                Configure & Purchase
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-2xl mb-2">✓</div>
                  <p>Professional Installation</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🛡️</div>
                  <p>Lifetime Support</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">📱</div>
                  <p>Content Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb at bottom for mobile */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">Digital Signage</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
