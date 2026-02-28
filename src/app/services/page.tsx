'use client';

import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-cyan-900 to-black text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Complete <span className="gradient-text">Solutions</span> for Your Business
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 px-4">
            At Vizage Solutions, we handle everything from installation and power setup to content design, management, and ongoing support. We even generate revenue through ad placements and curate digital art for your displays.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Helping You Choose */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Helping You Choose the <span className="gradient-text">Right Solution</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Not sure which product fits your needs?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-900">For High Foot Traffic Areas</h3>
              <p className="text-gray-700">Consider the Double-Sided Display to attract and inform both outside and inside audiences.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-900">For Interactive Customer Engagement</h3>
              <p className="text-gray-700">The Freestanding PCAP Touch Screen is perfect for providing detailed information and services.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-900">For Streamlined Operations</h3>
              <p className="text-gray-700">The Interactive Touch Screen CMS offers self-service capabilities, reducing staff workload.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Installation */}
            <div className="premium-card p-8 rounded-2xl">
              <div className="text-5xl mb-6">🛠️</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Digital Signage Installation</h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">Seamless Setup, Every Time</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you're installing a screen inside, outside, hanging, or freestanding, our expert team ensures your digital signage is professionally installed and ready to perform.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Wall-mounted, window-facing, freestanding, or ceiling-hung</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Precise positioning for maximum visibility</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Quick and clean installation</span>
                </li>
              </ul>
            </div>

            {/* Power & Network */}
            <div className="premium-card p-8 rounded-2xl">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Power and Network Preparation</h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">No Power? No Problem.</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you don't have a power outlet where your display needs to go, we'll take care of it. Our certified electricians ensure every screen is powered safely and effectively.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Mains power setup for new or awkward locations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Network setup where internet access is unavailable</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">End-to-end connectivity solutions</span>
                </li>
              </ul>
            </div>

            {/* Support & Warranty */}
            <div className="premium-card p-8 rounded-2xl">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Lifetime Technical Support & 3-Year Warranty</h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">Support That Goes Beyond Installation</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From the moment your display arrives, we're with you every step of the way. Our mission isn't just to install your product, it's to help your business thrive.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Setup Assistance - Get up and running quickly</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Troubleshooting Help - Fast, friendly solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Revenue Strategy Guidance - Turn your screen into a revenue-generating asset</span>
                </li>
              </ul>
            </div>

            {/* Content Management */}
            <div className="premium-card p-8 rounded-2xl">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Total Content Control</h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">Put Your Screens to Work - Your Way</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our advanced Content Management System (CMS) gives you complete control of your digital signage, whilst our expert team can manage it all for you.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">We design and upload engaging, on-brand content</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Update screens in real-time or schedule in advance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Manage content remotely from anywhere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="premium-card p-8 rounded-2xl">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Analytics & Performance Insights</h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">Track. Learn. Improve.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Knowing what works is just as important as getting started. Our analytics service helps you measure the effectiveness of your digital signage campaigns.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Monitor screen engagement and viewer traffic
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Understand which content performs best
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Monthly reporting & strategic recommendations
                </li>
              </ul>
            </div>

            <div className="premium-card p-8 rounded-2xl">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Art Curation Service</h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">Personalised Art for Your Digital Canvas</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Whether you're enhancing your home, café, or salon, our art curation service helps you turn your digital canvas into a reflection of your taste and personality.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  1:1 Style Consultation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Free Artwork Sourcing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Perfectly Formatted for Your Canvas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-cyan-200">Grow?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can help your business thrive.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-cyan-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
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
