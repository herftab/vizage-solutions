'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CorporatePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-700 via-gray-800 to-slate-900 text-white py-20 md:py-32 pb-40 md:pb-52 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/industries" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Industries
            </Link>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium tracking-wider">CORPORATE SOLUTIONS</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Corporate Digital<br />
              <span className="text-gray-300">Signage Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl text-gray-100 leading-relaxed">
              Professional solutions for meetings, presentations, and internal communications that drive business success
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
              Empower Your <span className="bg-gradient-to-r from-gray-700 to-slate-900 bg-clip-text text-transparent">Corporate Environment</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For any company to truly grow and succeed, it needs to use various tools from within its own organisation to achieve its goals. From great staff to functional offices, businesses may be missing out on a tool that can help their business grow—digital signage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Interactive touch displays are the best tool a corporation can have for meetings, presentations, and training sessions. The sharing of ideas is a crucial aspect in many meetings, and our displays easily allow you to share images, videos, and other files to and from the screen to mobile devices and laptops seamlessly.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Transform Your <span className="bg-gradient-to-r from-gray-700 to-slate-900 bg-clip-text text-transparent">Corporate Communications</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Interactive Meetings',
                  description: 'Wireless screen mirroring and file sharing features make collaboration seamless',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Replace Projectors',
                  description: 'Modern touch displays eliminate outdated projector systems and their limitations',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Internal Communications',
                  description: 'Keep staff informed with company news, announcements, and KPI dashboards',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  ),
                  color: 'from-green-500 to-teal-500'
                },
                {
                  title: 'Reception Displays',
                  description: 'Create impressive first impressions with video walls and welcome displays',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Training & Development',
                  description: 'Interactive displays enhance learning experiences and engagement',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  title: 'Room Booking Systems',
                  description: 'Touch screens act as virtual room labels for meeting room management',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  color: 'from-yellow-500 to-orange-500'
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
          <div className="mb-16 bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Corporate <span className="bg-gradient-to-r from-gray-700 to-slate-900 bg-clip-text text-transparent">Applications</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Boardrooms & Meeting Rooms',
                  description: 'Interactive displays for presentations, video conferencing, and collaborative work'
                },
                {
                  title: 'Reception & Lobby Areas',
                  description: 'Video walls and displays showcasing company achievements and visitor information'
                },
                {
                  title: 'Staff Canteens',
                  description: 'Display menus, company news, and entertainment content for employees'
                },
                {
                  title: 'Corridors & Common Areas',
                  description: 'Internal communications, wayfinding, and corporate messaging'
                },
                {
                  title: 'Training Rooms',
                  description: 'Interactive learning environments with touch-enabled collaboration'
                },
                {
                  title: 'Data Visualisation',
                  description: 'Real-time KPI dashboards and business intelligence displays'
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h4>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gray-700 to-slate-900 rounded-3xl p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <p className="text-sm font-semibold tracking-wider">KEY FEATURES</p>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  The Whiteboard of the Future
                </h3>
                <p className="text-lg mb-6 text-gray-100 leading-relaxed">
                  Interactive touch displays easily allow you to share images, videos, and other files to and from the screen to mobile devices and laptops (and vice versa) seamlessly. You can wirelessly mirror the display in both directions without the need for annoying wires or additional transmitters, allowing your meetings to flow naturally.
                </p>
                <p className="text-lg text-gray-100 leading-relaxed">
                  For larger meeting or conference rooms, LCD video walls may be a better choice to really wow attendees. Our touch screens have also been used as part of meeting room booking systems, acting as a virtual and interactive room label for attendees.
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
            Ready to Modernise Your <span className="bg-gradient-to-r from-gray-700 to-slate-900 bg-clip-text text-transparent">Corporate Space?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Let's discuss how digital signage can enhance collaboration and communication in your organisation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-700 to-slate-900 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
