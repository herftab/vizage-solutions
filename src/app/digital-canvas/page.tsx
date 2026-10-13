'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products as staticProducts } from '@/lib/products';

export default function DigitalCanvasPage() {
  const canvasProducts = staticProducts.filter(p => p.category === 'Digital Canvas');

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 md:py-32 pb-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-xs md:text-sm font-medium tracking-wider text-purple-200">TRANSFORM WALLS INTO LIVING ART</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-[1.2]">
            Transform Your Space with <br />
            <span className="gradient-text pb-2">Digital Elegance</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300">
            Unveiling the Textura Home & PRO Canvas - Revolutionise Your Art Display
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
              Gallery-Grade Art <span className="gradient-text">In Any Space</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of technology and artistry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="premium-card p-6 md:p-8 rounded-xl md:rounded-2xl text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-texture)">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-purple-texture" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">Lifelike Textures</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Advanced texture-accurate display technology preserves surface finishes and enhances artwork details with ultra-realistic visuals.
              </p>
            </div>
            
            <div className="premium-card p-6 md:p-8 rounded-xl md:rounded-2xl text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-frame)">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-purple-frame" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">Handmade Frames</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Choose from four magnetic handmade wooden frame finishes: pine, white, walnut, or black to perfectly match your décor.
              </p>
            </div>
            
            <div className="premium-card p-6 md:p-8 rounded-xl md:rounded-2xl text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-install)">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-purple-install" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">Easy Installation</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Simply attach the mounting plate, connect the slim cable, and hang in portrait or landscape. Easier than hanging a traditional frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Perfect for <span className="gradient-text">Every Environment</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how Digital Canvas transforms spaces across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-benefits)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'Hospitality', 
                desc: 'Keep guests engaged with rotating galleries that evolve with seasons and events.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-benefits)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Offices & Lobbies', 
                desc: 'Reinforce brand values and impress clients with thematic artwork.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-benefits)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                ),
                title: 'Retail & Showrooms', 
                desc: 'Create emotional connections with curated lifestyle visuals.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-benefits)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: 'Residential', 
                desc: 'Transform your home with gallery-grade digital art displays.' 
              }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-purple-benefits" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Summary of Benefits */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Summary of Benefits Across All Businesses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Increases dwell time',
                'Enhances atmosphere with zero effort',
                'Sparks spontaneous conversation',
                'Adapts to seasons, promotions, events',
                'Reduces redecoration or signage costs',
                'Makes every visit feel fresh and elevated'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Advanced <span className="text-purple-400">Features</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300">Technology that brings art to life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Hyper-Realistic Display', 
                desc: '4K/8K visuals with advanced rendering to simulate canvas texture, lighting, and depth.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Non-Reflective Technology', 
                desc: 'Engineered for any lighting, preserving visual clarity without glare or reflection.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'Curated Content Library', 
                desc: 'Access world-class galleries, modern digital art, or upload your own commissioned works.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Remote Scheduling', 
                desc: 'Programme content to match time of day, mood, or event using our intuitive platform.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Professional Framing', 
                desc: 'Magnetic handmade wooden frames in four finishes blend seamlessly with gallery aesthetics.' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Smart Home Integration', 
                desc: 'Compatible with Control4, Crestron, Rako, and other home automation systems.' 
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-purple-features" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#f472b6" />
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

      {/* How to Choose Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How to Know Which <span className="gradient-text">Canvas is for You?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Three simple questions to help you choose between Home and Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Multiple Device Control</h3>
              <p className="text-gray-700 mb-4 text-center">
                Do you want to control more than one at the same time now or in the future?
              </p>
              <p className="text-lg font-bold text-purple-600 text-center">
                If YES, Buy Textura Pro
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Extended Business Warranty</h3>
              <p className="text-gray-700 mb-4 text-center">
                Are you purchasing for business with extended usage & require a 3 year warranty?
              </p>
              <p className="text-lg font-bold text-purple-600 text-center">
                If YES, Buy Textura Pro
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Art Curation Subscription</h3>
              <p className="text-gray-700 mb-4 text-center">
                Are you planning on purchasing the Vieunite Art Curation Subscription?
              </p>
              <p className="text-lg font-bold text-purple-600 text-center">
                If YES, Buy Textura Pro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Applications */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ideal <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Perfect for a wide range of commercial and residential environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-apps)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                text: 'Boutique Hotels & Hospitality' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-apps)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                ),
                text: 'Home & Commercial Cinema Rooms' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-apps)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                ),
                text: 'Retail Flagships & Pop-Up Installations' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-apps)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                text: 'Office Reception & Boardrooms' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-apps)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                text: 'High-End Residential Interiors' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-purple-apps)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                text: 'Hybrid Workspaces & Showrooms' 
              }
            ].map((app, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-purple-apps" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
                <p className="font-semibold text-gray-900">{app.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our <span className="gradient-text">Customers Are Saying</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Emma J.',
                text: 'The Textura Digital Canvas has completely transformed my living room. The art looks so real, and I love being able to change the display whenever I want. It\'s like having a new piece of art every day!'
              },
              {
                name: 'Michael T.',
                text: 'As an art enthusiast, I was sceptical about digital displays. But the Textura Digital Canvas exceeded my expectations. The textures and colours are stunning, and the setup was incredibly easy. Highly recommend it!'
              },
              {
                name: 'Sophia L.',
                text: 'I purchased the Textura Digital Canvas for my office, and it has been a game-changer. Clients often comment on the beautiful artwork, and it adds a touch of elegance to the space. The customer service from Vizage Solutions was top-notch!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform <span className="text-purple-200">Your Space?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Discover the power of Digital Canvas and bring gallery-grade art into your environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Contact Our Team
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/products"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-purple-700 transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
