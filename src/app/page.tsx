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


      {/* The Challenge Section - NEW */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-blue-100 rounded-full">
              <p className="text-sm font-semibold text-blue-700 tracking-wider">THE CHALLENGE</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Your Business Deserves Better <span className="gradient-text">Than Compromise</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every business faces unique space and engagement challenges. We don't just sell displays—we solve problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                ),
                title: 'Floor Space vs Product Range',
                problem: 'Cannot show everything without cluttering',
                solution: 'Digital catalogues with infinite inventory display',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Closed Doors, Lost Revenue',
                problem: 'Prime evening foot traffic, zero sales',
                solution: 'Window displays that sell whilst you sleep',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Static Signage Fatigue',
                problem: 'Same posters, declining impact',
                solution: 'Dynamic content that stays fresh',
                color: 'from-orange-500 to-red-500'
              }
            ].map((challenge, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`absolute top-0 left-0 w-1 h-0 bg-gradient-to-b ${challenge.color} group-hover:h-full transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${challenge.color} p-3 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full text-white">
                      {challenge.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-gray-600 text-sm">{challenge.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Our Solution</p>
                      <p className="text-gray-900 font-medium text-sm">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Ask Different Questions Section - NEW */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              We Ask <span className="gradient-text">Different Questions</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Instead of "What do you want to buy?"<br />
              <span className="font-semibold text-blue-600">We ask: "What's holding your business back?"</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                question: 'How can we help you reclaim valuable floor space?',
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              },
              {
                question: 'What if your shop could sell 24/7, even when closed?',
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                question: 'How do we turn browsers into buyers?',
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-4 shadow-lg">
                  <div className="w-full h-full text-white">
                    {item.icon}
                  </div>
                </div>
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">{item.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Real Scenarios Section - NEW */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
              <p className="text-sm font-semibold text-blue-700 tracking-wider">REAL SOLUTIONS</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Real Scenarios, <span className="gradient-text">Real Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              See how we've helped businesses like yours overcome their challenges
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'The Boutique Challenge',
                problem: '"Our clothing racks take up 60% of floor space, but customers want room to browse"',
                solution: 'Digital lookbooks on wall-mounted displays',
                result: '40% more floor space, same product visibility',
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                ),
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'The After-Hours Opportunity',
                problem: '"We close at 6pm but foot traffic peaks at 8pm"',
                solution: 'Window-facing double-sided displays with QR codes',
                result: '24/7 sales without staffing costs',
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'The Engagement Gap',
                problem: '"Customers walk past without stopping"',
                solution: 'Interactive displays with product browsing',
                result: '3x longer dwell time, higher conversion',
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                ),
                color: 'from-orange-500 to-red-500'
              }
            ].map((scenario, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className={`lg:col-span-1 bg-gradient-to-br ${scenario.color} flex items-center justify-center p-6`}>
                    <div className="w-12 h-12 text-white">
                      {scenario.icon}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-11 p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{scenario.title}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Problem</p>
                            <p className="text-gray-700 italic mt-1">{scenario.problem}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Solution</p>
                            <p className="text-gray-700 font-medium mt-1">{scenario.solution}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Result</p>
                            <p className="text-gray-900 font-bold mt-1">{scenario.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Let's Explore Your Space Together
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
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
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Content Management', 
                desc: 'Robust CMS platform for effortless content updates. Keep your displays fresh with real-time scheduling and remote management capabilities.',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'Art Curation', 
                desc: 'Professional curation services that align with your brand identity. Transform spaces with carefully selected visual content.',
                color: 'from-purple-500 to-pink-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: 'Customer Support', 
                desc: 'Dedicated support team available when you need us. Technical assistance and guidance throughout your journey.',
                color: 'from-green-500 to-teal-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Installation', 
                desc: 'Expert installation ensuring optimal performance. Professional setup for maximum impact and reliability.',
                color: 'from-orange-500 to-red-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Digital Canvas', 
                desc: 'Dynamic displays that engage and inspire. Transform environments with interactive visual experiences.',
                color: 'from-indigo-500 to-purple-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                ),
                title: 'Interactive Display', 
                desc: 'Immersive touchscreen solutions for customer engagement. Create memorable interactive experiences.',
                color: 'from-pink-500 to-rose-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: 'Window Display', 
                desc: 'High-visibility storefront solutions. Attract attention in any lighting with our specialized window displays.',
                color: 'from-yellow-500 to-orange-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Dynamic Signage', 
                desc: 'Versatile displays that adapt to your needs. Eye-catching solutions for every business environment.',
                color: 'from-cyan-500 to-blue-500'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* SVG Gradient Definitions */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Accent line */}
                <div className={`absolute top-0 left-0 w-1 h-0 bg-gradient-to-b ${service.color} group-hover:h-full transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
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
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Commercial Grade', 
                desc: 'Commercial Grade Product Displays able to be in use 24/7 for over 70,000 hours. No external buttons/controls to avoid tampering.',
                color: 'from-yellow-400 to-orange-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 18h.01" />
                  </svg>
                ),
                title: 'Dual Screen Display', 
                desc: 'Engage audiences both inside and outside your business with dual screens that display different content simultaneously for maximum impact.',
                color: 'from-blue-400 to-cyan-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'High Brightness', 
                desc: 'Impressive brightness levels ensuring visibility even in direct sunlight, making them ideal for storefronts and high-traffic areas.',
                color: 'from-orange-400 to-red-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: 'Cooling System', 
                desc: 'Integrated airflow system maintains optimal performance and longevity, even in challenging conditions and continuous operation.',
                color: 'from-cyan-400 to-blue-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: 'Remote Management', 
                desc: 'Control and update your displays remotely from anywhere. Schedule content, monitor performance, and manage multiple screens effortlessly.',
                color: 'from-purple-400 to-pink-500'
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="url(#gradient-blue-features)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Weatherproof Options', 
                desc: 'Outdoor-rated displays built to withstand harsh weather conditions. IP65 rated protection against dust and water for reliable outdoor use.',
                color: 'from-green-400 to-teal-500'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-500 overflow-hidden"
              >
                {/* SVG Gradient Definitions */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient-blue-features" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
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


