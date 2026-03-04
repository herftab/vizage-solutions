'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function EducationPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { title: 'Interactive Learning', description: 'Touch displays with educational apps for engaged learning', color: 'from-indigo-500 to-purple-500' },
    { title: 'Replace Projectors', description: 'Modern touch displays eliminate outdated interactive projectors', color: 'from-blue-500 to-cyan-500' },
    { title: 'Multi-Touch Capability', description: 'Up to 10 touch points for group learning activities', color: 'from-green-500 to-teal-500' },
    { title: 'Internal Communications', description: 'Instant updates for room changes, events, and announcements', color: 'from-orange-500 to-red-500' },
    { title: 'Reception Video Walls', description: 'Impressive displays showcasing school achievements', color: 'from-purple-500 to-pink-500' },
    { title: 'Clear in All Environments', description: 'Frosted finish diffuses light for legibility in any setting', color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 md:py-32 pb-40 md:pb-52 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/industries" className="inline-flex items-center text-purple-200 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Industries
            </Link>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium tracking-wider">EDUCATION SOLUTIONS</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Education Digital<br />
              <span className="text-purple-200">Signage Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl text-gray-100 leading-relaxed">
              Interactive displays and digital signage for schools, colleges, universities, and training facilities
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              The Future of the <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Classroom</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Digital signage displays are great tools for educational establishments as their purpose is to impart knowledge. Interactive touch displays are the future of the classroom and replace outdated interactive projectors. There are so many educational apps designed for smartphones and tablets ready for teachers to get students involved, engaged, and excited about the learning process.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Interactive touch displays are purpose-built for presenting and teaching. Their large size (55", 65", and 70") allows everyone in the classroom to view the display. They also feature up to 10 touch points, so learning with the touch screen can be a group activity instead of a solo one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} p-3 mb-6`}>
                  <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Transform Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Learning Environment?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Let's discuss how interactive displays can enhance education at your institution
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get in Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
