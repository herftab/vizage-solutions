'use client';

import ProductCard from '@/components/ProductCard';
import { products as staticProducts } from '@/lib/products';
import { useProductAdminStore } from '@/lib/product-admin-store';
import Link from 'next/link';

export default function ProductsPage() {
  // Get products from admin store if available, otherwise use static products
  const adminProducts = useProductAdminStore((state) => state.products);
  const products = adminProducts.length > 0 ? adminProducts : staticProducts;
  
  // Filter to only show Digital Signage products (not Digital Canvas)
  const signageProducts = products.filter(p => 
    p.category !== 'Digital Canvas'
  );
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay - positioned to show the screens */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero-digital-signage.jpg')",
              backgroundPosition: 'center 40%',
              filter: 'brightness(0.4) contrast(1.1)'
            }}
          ></div>
          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          {/* Additional blue tint overlay */}
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-xs md:text-sm font-medium tracking-wider text-blue-200">EXPLORE CUTTING-EDGE DISPLAY SOLUTIONS</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-[1.2]">
            Digital Signage Solutions <br />
            <span className="gradient-text pb-2">Tailored for Your Business</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300">
            Transform Your Space. Engage Your Audience. Drive Results.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Unparalleled Visibility in <span className="gradient-text">Any Light</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              We will help you transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="premium-card p-6 md:p-8 rounded-xl md:rounded-2xl text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-install)">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-blue-install" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">We Install</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                From mounting your display to setting up power and network access, our expert team ensures a smooth, professional installation - done right, first time, every time.
              </p>
            </div>
            
            <div className="premium-card p-6 md:p-8 rounded-xl md:rounded-2xl text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-revenue)">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-blue-revenue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">We Generate Revenue</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We help turn your screens into revenue-generating assets by sourcing advertisers and managing campaigns, bringing you passive income without lifting a finger.
              </p>
            </div>
            
            <div className="premium-card p-6 md:p-8 rounded-xl md:rounded-2xl text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-support)">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-blue-support" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">We Support</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Enjoy peace of mind with free lifetime technical support. Whether it's setup help or content updates, our experts are here whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              How We Can Help Your Business <span className="gradient-text">Exceed Your Expectations</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-benefits)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Drive More Footfall', 
                desc: 'with clear, sun-readable messages visible from outside.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-benefits)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: 'Capture Customer Attention', 
                desc: 'Indoors while they wait, dine, or browse.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-benefits)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Generate New Revenue Streams', 
                desc: 'by promoting third-party ads or in-store offers.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-benefits)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Greater Agility', 
                desc: 'with Smart Content Tools (our CMS lets you manage content remotely).' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-benefits)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Keep You Future-Proof', 
                desc: 'with freestanding or ceiling-mounted options.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-benefits)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Provide Instant Feedback', 
                desc: 'enabling Data Driven Decisions' 
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-blue-benefits" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{benefit.title}</h3>
                  <p className="text-xs md:text-base text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Why Our Products <span className="text-blue-400">Lead the Market</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300">Just some of the many reasons</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-features-products)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Ultra High Brightness', 
                desc: 'Our displays ensure visibility even in direct sunlight, making them perfect for high-traffic areas.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-features-products)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Double-Sided Viewing', 
                desc: 'Engage audiences from every angle with dual screens for indoor and outdoor visibility.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-features-products)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Dynamic Content Capabilities', 
                desc: 'Broadcast different messages on each side to tailor your communication effectively.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-features-products)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: 'Smart Temperature Control', 
                desc: 'Integrated airflow systems maintain optimal performance, ensuring longevity and reliability.' 
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-blue-features-products" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Explore Our <span className="gradient-text">Display Options</span>
            </h2>
            <p className="text-xl text-gray-600">Most Popular Products Below. Please contact us for anything else.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signageProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Control Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Advanced <span className="gradient-text">Control Options</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Content Scheduling',
                  'Split Screen Functionality',
                  'Custom Layout Templates',
                  'One-Click Updates via CMS',
                  'Local or Cloud Hosting Options'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-700">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="premium-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Want us to manage it for you?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore our Content Management Service for complete peace of mind.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  Utilise our Marketing Resources
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  In-House CMS Design
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  Strategic Business Transformation Specialists
                </div>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium tracking-wider text-blue-200">CERTIFIED & SECURE</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SOTI Certification for <span className="text-blue-400">Enhanced Security</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our Ultra High Brightness Window Display is fully compliant with industry standards, including SOTI certification. 
              This certification ensures enhanced security and reliable device management through trusted enterprise-grade solutions. 
              It provides peace of mind for seamless integration and ongoing operation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Transform Your <span className="gradient-text">Business?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get in touch with our team to discuss your digital signage needs and discover the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Our Team
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/shop"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
