'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FoodDrinkPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-20 md:py-32 pb-40 md:pb-52 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/industries" className="inline-flex items-center text-orange-200 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Industries
            </Link>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium tracking-wider">FOOD & DRINK SOLUTIONS</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Digital Menu Boards &<br />
              <span className="text-orange-200">Restaurant Displays</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl text-gray-100 leading-relaxed">
              Transform your food service operation with digital menu boards that enhance customer experience and streamline your business
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
              Modernise Your <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Food Service</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Digital menu boards are revolutionising the food and drink industry. From quick-service restaurants to fine dining establishments, digital displays offer unparalleled flexibility to showcase your menu, promote specials, and create an engaging dining experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Update your menu instantly, display mouth-watering imagery, and manage multiple locations from a single platform. Our all-in-one network solutions include Android screens with built-in media players and access to content management systems, making it easier than ever to keep your displays fresh and relevant.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Why Food & Drink Businesses Choose <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Digital Signage</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Instant Menu Updates',
                  description: 'Change prices, add specials, or remove sold-out items in seconds without reprinting menus',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Appetite Appeal',
                  description: 'High-resolution images and videos make your food look irresistible, increasing order values',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  color: 'from-pink-500 to-rose-500'
                },
                {
                  title: 'Daypart Scheduling',
                  description: 'Automatically switch between breakfast, lunch, and dinner menus at scheduled times',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'Reduce Perceived Wait Times',
                  description: 'Entertaining content keeps customers engaged whilst they queue or wait for orders',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Upsell Opportunities',
                  description: 'Promote meal deals, sides, and drinks to increase average transaction value',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Multi-Location Management',
                  description: 'Control all your displays from one central system, perfect for chains and franchises',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: 'from-purple-500 to-indigo-500'
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
          <div className="mb-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Perfect For <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Every Food Business</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Quick Service Restaurants (QSR)',
                  description: 'Fast-paced environments benefit from quick menu updates and eye-catching promotions'
                },
                {
                  title: 'Cafés & Coffee Shops',
                  description: 'Showcase your speciality drinks, pastries, and daily specials with beautiful imagery'
                },
                {
                  title: 'Pubs & Bars',
                  description: 'Display drinks menus, food offerings, and live sports schedules'
                },
                {
                  title: 'Fine Dining',
                  description: 'Elegant displays for wine lists, tasting menus, and chef specials'
                },
                {
                  title: 'Food Courts',
                  description: 'Help customers navigate multiple vendors with clear, attractive menu displays'
                },
                {
                  title: 'Takeaway & Delivery',
                  description: 'Streamline ordering with clear menu boards and collection point displays'
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h4>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <p className="text-sm font-semibold tracking-wider">SUCCESS STORY</p>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Mr Hungry's Fish & Chip Shop Goes Digital
                </h3>
                <p className="text-lg mb-6 text-gray-100 leading-relaxed">
                  One of Merseyside's top QSR establishments recently installed six 32" all-in-one network screens as digital menu boards as part of a complete shop renovation. The owners wanted a modern solution that matched their refurbished aesthetic whilst providing maximum flexibility.
                </p>
                <p className="text-lg text-gray-100 leading-relaxed">
                  With tempered glass faces, tablet-like aesthetics, and aluminium surrounds, these screens are the most stylish digital signage solution on the market. The all-in-one network solution includes Android screens with built-in media players and access to our CMS platform, allowing them to update menus instantly and schedule content throughout the day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Modernise Your <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Menu Boards?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Let's discuss how digital menu boards can enhance your customer experience and boost your bottom line
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl border-2 border-orange-600 hover:bg-orange-50 transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
