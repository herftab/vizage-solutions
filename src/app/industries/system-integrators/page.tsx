'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SystemIntegratorsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { title: 'OEM Solutions', description: 'Original equipment manufacturer partnerships for your brand', color: 'from-slate-600 to-gray-700' },
    { title: 'ODM Services', description: 'Original design manufacturer capabilities for custom solutions', color: 'from-blue-500 to-cyan-500' },
    { title: 'Bespoke Manufacturing', description: 'Tailored solutions to meet your exact specifications', color: 'from-purple-500 to-indigo-500' },
    { title: 'Volume Pricing', description: 'Competitive pricing for distributors and resellers', color: 'from-green-500 to-teal-500' },
    { title: 'Technical Support', description: 'Dedicated support for integrators and partners', color: 'from-orange-500 to-red-500' },
    { title: 'White Label Options', description: 'Rebrand our solutions as your own', color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-900 text-white py-20 md:py-32 pb-40 md:pb-52 overflow-hidden">
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
              <p className="text-sm font-medium tracking-wider">SYSTEM INTEGRATOR SOLUTIONS</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              OEM, ODM & Bespoke<br />
              <span className="text-gray-300">Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl text-gray-100 leading-relaxed">
              Tailored digital signage solutions for distributors, resellers, VARs, and system integrators
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
              Partner with <span className="bg-gradient-to-r from-slate-700 to-gray-900 bg-clip-text text-transparent">Industry Experts</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As an original equipment manufacturer, we specialise in providing OEM, ODM, and bespoke digital signage solutions for system integrators, distributors, resellers, and VARs. Our reliable and consistent manufacturing processes have been perfected over years of experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need white-label solutions, custom designs, or volume pricing for your projects, we offer the flexibility and expertise to support your business growth. Our factory produces solutions that supply markets globally, backed by supreme product quality and unrivalled customer service.
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
            Ready to <span className="bg-gradient-to-r from-slate-700 to-gray-900 bg-clip-text text-transparent">Partner With Us?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Let's discuss how we can support your business with OEM, ODM, and bespoke solutions
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-gray-900 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
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
