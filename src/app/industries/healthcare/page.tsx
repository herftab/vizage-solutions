'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HealthcarePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-cyan-600 text-white py-20 md:py-32 pb-40 md:pb-52 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/industries" className="inline-flex items-center text-teal-200 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Industries
            </Link>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium tracking-wider">HEALTHCARE SOLUTIONS</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Healthcare Digital<br />
              <span className="text-teal-200">Signage Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl text-gray-100 leading-relaxed">
              Improve patient experience with wayfinding, information displays, and waiting room solutions
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
              Transform <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Healthcare Communications</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Digital signage displays are transforming the way that healthcare facilities communicate with staff and patients. Whether they are used for wayfinding or for displaying healthcare information, digital displays offer a chance for hospitals to engage, interact, and ultimately improve the whole healthcare experience for a patient.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Digital signage can be displayed in various locations at a hospital or healthcare facility including lobbies, hallways, car parks, canteens, and waiting rooms. Think of your digital signage as a modern and dynamic pin noticeboard, used to display vital health advice and public messages in an organised and dynamic way.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Why Healthcare Facilities Choose <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Digital Signage</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Reduce Perceived Wait Times',
                  description: 'Engaging content in waiting rooms lessens anxiety and reduces perceived waiting times',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: 'from-green-500 to-teal-500'
                },
                {
                  title: 'Wayfinding Solutions',
                  description: 'Interactive displays help patients and visitors navigate complex healthcare facilities',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  ),
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Health Information',
                  description: 'Display vital health advice, public health messages, and educational content',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Easy Updates',
                  description: 'Simple USB update method can be done by any member of staff, regardless of IT knowledge',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Clear Cluttered Walls',
                  description: 'Replace messy posters with organised digital displays, saving on printing costs',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  title: 'Real-Time Updates',
                  description: 'Provide real-time updates on appointments, delays, and emergency announcements',
                  icon: (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
          <div className="mb-16 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Healthcare <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Applications</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Waiting Rooms',
                  description: 'Entertainment and health information to reduce stress and perceived wait times'
                },
                {
                  title: 'Reception & Lobbies',
                  description: 'Welcome displays, wayfinding, and visitor information'
                },
                {
                  title: 'Corridors & Hallways',
                  description: 'Directional signage and department information'
                },
                {
                  title: 'Canteens & Break Rooms',
                  description: 'Menu displays, staff communications, and wellness information'
                },
                {
                  title: 'Car Parks',
                  description: 'Parking guidance and facility information'
                },
                {
                  title: 'Emergency Departments',
                  description: 'Queue management and real-time wait time displays'
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
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <p className="text-sm font-semibold tracking-wider">WAYFINDING EXCELLENCE</p>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Navigate Complex Facilities with Ease
                </h3>
                <p className="text-lg mb-6 text-gray-100 leading-relaxed">
                  Wayfinding is a big issue for the healthcare sector. In most situations, it is important for doctors, nurses, and patients to be able to navigate from point A to point B as quickly as possible. Hospitals can sometimes feel like a labyrinth even to those who work there.
                </p>
                <p className="text-lg text-gray-100 leading-relaxed">
                  Interactive displays like PCAP touch screens with dual OS coupled with our touch CMS software can help to guide users to their exact destination. Digital signage is a highly effective communication tool for hospitals and healthcare facilities, providing real-time updates and clearing cluttered walls of messy posters.
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
            Ready to Improve Your <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Patient Experience?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Let's discuss how digital signage can enhance communication and wayfinding in your healthcare facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl border-2 border-green-600 hover:bg-green-50 transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
