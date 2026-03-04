'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RetailPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 md:py-32 pb-40 md:pb-52 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/industries" className="inline-flex items-center text-cyan-300 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Industries
            </Link>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium tracking-wider">RETAIL SOLUTIONS</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Retail Digital Signage<br />
              <span className="text-cyan-300">Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl text-gray-100 leading-relaxed">
              Transform your retail space with dynamic displays that captivate customers, showcase products, and drive sales
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Elevate Your <span className="gradient-text">Retail Experience</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In today's competitive retail landscape, creating an engaging shopping experience is essential. Digital signage offers retailers a powerful tool to capture attention, communicate brand messages, and influence purchasing decisions at the point of sale.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From window displays that work 24/7 to in-store screens that showcase your entire product range without taking up valuable floor space, our retail digital signage solutions help you maximise every square metre of your shop.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Why Retailers Choose <span className="gradient-text">Digital Signage</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Window Displays That Never Sleep',
                  description: 'Capture evening foot traffic with displays that continue selling even when your doors are closed',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Infinite Product Showcase',
                  description: 'Display your entire catalogue without cluttering your shop floor with physical stock',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  ),
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Dynamic Pricing & Promotions',
                  description: 'Update prices and promotions instantly across all displays without printing new signage',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  ),
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Enhanced Brand Experience',
                  description: 'Create immersive brand experiences with high-quality visuals and video content',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  ),
                  color: 'from-green-500 to-teal-500'
                },
                {
                  title: 'Reclaim Floor Space',
                  description: 'Replace bulky product displays with sleek digital catalogues mounted on walls',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  ),
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  title: 'Increase Dwell Time',
                  description: 'Engaging content keeps customers in your shop longer, increasing purchase likelihood',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: 'from-pink-500 to-rose-500'
                }
              ].map((benefit, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} p-3 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Retail <span className="gradient-text">Applications</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Fashion & Apparel',
                  description: 'Showcase lookbooks, style guides, and seasonal collections with stunning visual displays'
                },
                {
                  title: 'Window Displays',
                  description: 'High-brightness displays that remain visible in direct sunlight, perfect for storefronts'
                },
                {
                  title: 'Product Information',
                  description: 'Interactive displays allowing customers to browse specifications, reviews, and availability'
                },
                {
                  title: 'Queue Management',
                  description: 'Entertain and inform customers whilst they wait, reducing perceived wait times'
                },
                {
                  title: 'Wayfinding',
                  description: 'Help customers navigate large retail spaces and find products quickly'
                },
                {
                  title: 'Social Media Integration',
                  description: 'Display live social feeds, user-generated content, and customer reviews'
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h4>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Placeholder */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <p className="text-sm font-semibold tracking-wider">SUCCESS STORY</p>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Premium Footwear Brand Transforms London Stores
                </h3>
                <p className="text-lg mb-6 text-gray-100 leading-relaxed">
                  An international footwear brand renowned for their distinctive premium products approached us to revamp the front window displays of their Piccadilly and Westfield stores. The challenge was to create eye-catching displays that would work 24/7, capturing the attention of London's bustling foot traffic even after closing time.
                </p>
                <p className="text-lg text-gray-100 leading-relaxed">
                  Our double-sided window displays with high-brightness screens ensured visibility in all lighting conditions, whilst the sleek design complemented their premium brand aesthetic. The result? Increased evening engagement and a modern, dynamic storefront that reflects their innovative brand identity.
                </p>
              </div>
            </div>
          </div>

          {/* Recommended Products */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Recommended <span className="gradient-text">Solutions</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/products/double-sided-display" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-6xl">🖥️</div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Double-Sided Display
                  </h4>
                  <p className="text-gray-600 mb-4">Perfect for window displays and in-store dividers</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Learn More</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/products/single-sided-display" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-6xl">📺</div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Wall-Mounted Displays
                  </h4>
                  <p className="text-gray-600 mb-4">Sleek displays for product showcases and promotions</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Learn More</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/products" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                  <div className="text-6xl">✨</div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Interactive Touch Displays
                  </h4>
                  <p className="text-gray-600 mb-4">Engage customers with interactive product browsing</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Learn More</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Transform Your <span className="gradient-text">Retail Space?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Let's discuss how digital signage can help you maximise sales and create an unforgettable shopping experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
