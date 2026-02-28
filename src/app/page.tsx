'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Premium with Background Image */}
      <section className="relative text-white py-20 md:py-40 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero-times-square.jpg')",
              filter: 'grayscale(30%) brightness(0.7) contrast(1.0)'
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
          <div className={`inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-xs md:text-sm font-medium tracking-wider text-blue-200">EXPLORE CUTTING-EDGE DIGITAL DISPLAY SOLUTIONS</p>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-[1.2] ${isVisible ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
            <span className="block mb-2">Welcome to</span>
            <span className="gradient-text block pb-2">Vizage Solutions</span>
          </h1>
          
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed px-4 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            Transform your business with our innovative digital signage and art displays, 
            designed to captivate and engage your audience with unparalleled sophistication.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
            <Link 
              href="/products"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl overflow-hidden shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center text-sm md:text-base">
                Explore Products
                <svg className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-sm md:text-base"
            >
              Contact Us
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
          
          {/* Scroll Indicator - Hidden on mobile */}
          <div className={`mt-12 md:mt-16 hidden md:block ${isVisible ? 'animate-float delay-800' : 'opacity-0'}`}>
            <div className="flex flex-col items-center text-gray-400">
              <span className="text-sm mb-2">Scroll to explore</span>
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Mission Section - Premium */}
      <section className="py-16 md:py-24 bg-white relative section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900">
              Our Mission at <span className="gradient-text">Vizage Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 md:mb-8"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center leading-relaxed font-light px-4">
              At Vizage Solutions, we are dedicated to revolutionising the way businesses communicate 
              through digital display technologies. Our mission is to provide state-of-the-art solutions 
              that enhance visibility and engagement, ensuring our clients stay ahead in a competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Premium with Staggered Animation */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/30 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 md:mb-20">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-200 to-blue-400"></div>
              <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-600 uppercase">Our Services</span>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent via-blue-200 to-blue-400"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 text-center mb-3 md:mb-6">
              Comprehensive Solutions for <br className="hidden sm:block" />
              <span className="gradient-text">Modern Businesses</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto text-center">
              From installation to ongoing support, we deliver end-to-end digital signage solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {[
              { 
                icon: '📱', 
                title: 'Content Management', 
                desc: 'Robust CMS platform for effortless content updates. Keep your displays fresh with real-time scheduling and remote management capabilities.',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: '🎨', 
                title: 'Art Curation', 
                desc: 'Professional curation services that align with your brand identity. Transform spaces with carefully selected visual content.',
                color: 'from-purple-500 to-pink-500'
              },
              { 
                icon: '💬', 
                title: 'Customer Support', 
                desc: 'Dedicated support team available when you need us. Technical assistance and guidance throughout your journey.',
                color: 'from-green-500 to-teal-500'
              },
              { 
                icon: '🛠️', 
                title: 'Installation', 
                desc: 'Expert installation ensuring optimal performance. Professional setup for maximum impact and reliability.',
                color: 'from-orange-500 to-red-500'
              },
              { 
                icon: '🖼️', 
                title: 'Digital Canvas', 
                desc: 'Dynamic displays that engage and inspire. Transform environments with interactive visual experiences.',
                color: 'from-indigo-500 to-purple-500'
              },
              { 
                icon: '👆', 
                title: 'Interactive Display', 
                desc: 'Immersive touchscreen solutions for customer engagement. Create memorable interactive experiences.',
                color: 'from-pink-500 to-rose-500'
              },
              { 
                icon: '🪟', 
                title: 'Window Display', 
                desc: 'High-visibility storefront solutions. Attract attention in any lighting with our specialized window displays.',
                color: 'from-yellow-500 to-orange-500'
              },
              { 
                icon: '📺', 
                title: 'Dynamic Signage', 
                desc: 'Versatile displays that adapt to your needs. Eye-catching solutions for every business environment.',
                color: 'from-cyan-500 to-blue-500'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Accent line */}
                <div className={`absolute top-0 left-0 w-1 h-0 bg-gradient-to-b ${service.color} group-hover:h-full transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-4">
                    <div className="text-2xl md:text-4xl transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Learn more link - hidden on mobile */}
                  <div className="hidden md:flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-4">
                    <span>Explore service</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned with Unique Style */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IndoaXRlIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')]"></div>
        </div>
        
        {/* Gradient accent */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-20">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-400/30 to-blue-400"></div>
              <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase">Technology</span>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent via-blue-400/30 to-blue-400"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-6">
              Key Features of Our <span className="text-blue-400">Digital Signage</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto text-center">
              Industry-leading technology that sets us apart from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { 
                icon: '⚡', 
                title: 'Commercial Grade', 
                desc: 'Commercial Grade Product Displays able to be in use 24/7 for over 70,000 hours. No external buttons/controls (avoid tampering).',
                color: 'from-yellow-400 to-orange-500'
              },
              { 
                icon: '📱', 
                title: 'Dual Screen Display', 
                desc: 'Engage audiences both inside and outside your business with dual screens that display different content simultaneously for maximum impact.',
                color: 'from-blue-400 to-cyan-500'
              },
              { 
                icon: '🌡️', 
                title: 'Integrated Airflow', 
                desc: 'Equipped with an integrated airflow system, our displays maintain optimal performance and longevity, even in challenging conditions.',
                color: 'from-green-400 to-teal-500'
              },
              { 
                icon: '🔆', 
                title: 'High Brightness', 
                desc: 'Our displays boast an impressive brightness level, ensuring visibility even in direct sunlight, making them ideal for storefronts and high-traffic areas.',
                color: 'from-orange-400 to-red-500'
              },
              { 
                icon: '🖥️', 
                title: 'Dual Screen Capability', 
                desc: 'Engage audiences both inside and outside your business with dual screens that display different content simultaneously for maximum impact.',
                color: 'from-purple-400 to-pink-500'
              },
              { 
                icon: '❄️', 
                title: 'Cooling System', 
                desc: 'Equipped with an integrated airflow system, our displays maintain optimal performance and longevity, even in challenging conditions.',
                color: 'from-cyan-400 to-blue-500'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-500 overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl md:text-5xl mb-3 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium with Urgency */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <p className="text-xs md:text-sm font-medium tracking-wider">LIMITED TIME OFFER</p>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            Connect with Us for <span className="text-cyan-300">Tailored Solutions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed px-4">
            Ready to elevate your business with cutting-edge digital displays? Contact Vizage Solutions 
            today to discover how our innovative signage can transform your customer engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 bg-white text-blue-700 font-bold text-base md:text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-glow hover:scale-105"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/products"
              className="w-full sm:w-auto group inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 bg-transparent text-white font-bold text-base md:text-lg rounded-xl border-2 border-white hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              View Products
            </Link>
          </div>
          
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs md:text-sm text-blue-100">
            <div className="flex items-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Consultation
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Expert Installation
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Lifetime Support
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
