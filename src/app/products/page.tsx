'use client';

import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-sm font-medium tracking-wider text-blue-200">EXPLORE CUTTING-EDGE DISPLAY SOLUTIONS</p>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Digital Signage Solutions <br />
            <span className="gradient-text">Tailored for Your Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Transform Your Space. Engage Your Audience. Drive Results.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Unparalleled Visibility in <span className="gradient-text">Any Light</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We will help you transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card p-8 rounded-2xl text-center group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🛠️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">We Install</h3>
              <p className="text-gray-600 leading-relaxed">
                From mounting your display to setting up power and network access, our expert team ensures a smooth, professional installation—done right, first time, every time.
              </p>
            </div>
            
            <div className="premium-card p-8 rounded-2xl text-center group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">We Generate Revenue</h3>
              <p className="text-gray-600 leading-relaxed">
                We help turn your screens into revenue-generating assets by sourcing advertisers and managing campaigns—bringing you passive income without lifting a finger.
              </p>
            </div>
            
            <div className="premium-card p-8 rounded-2xl text-center group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">We Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy peace of mind with free lifetime technical support. Whether it's setup help or content updates, our experts are here whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How We Can Help Your Business <span className="gradient-text">Exceed Your Expectations</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '👥', title: 'Drive More Footfall', desc: 'with clear, sun-readable messages visible from outside.' },
              { icon: '✨', title: 'Capture Customer Attention', desc: 'Indoors while they wait, dine, or browse.' },
              { icon: '💵', title: 'Generate New Revenue Streams', desc: 'by promoting third-party ads or in-store offers.' },
              { icon: '⚡', title: 'Greater Agility', desc: 'with Smart Content Tools (our CMS lets you manage content remotely).' },
              { icon: '🔮', title: 'Keep You Future-Proof', desc: 'with freestanding or ceiling-mounted options.' },
              { icon: '📊', title: 'Provide Instant Feedback', desc: 'enabling Data Driven Decisions' }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Our Products <span className="text-blue-400">Lead the Market</span>
            </h2>
            <p className="text-xl text-gray-300">Just some of the many reasons</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🔆', title: 'Ultra High Brightness', desc: 'Our displays ensure visibility even in direct sunlight, making them perfect for high-traffic areas.' },
              { icon: '🖥️', title: 'Double-Sided Viewing', desc: 'Engage audiences from every angle with dual screens for indoor and outdoor visibility.' },
              { icon: '📱', title: 'Dynamic Content Capabilities', desc: 'Broadcast different messages on each side to tailor your communication effectively.' },
              { icon: '🌡️', title: 'Smart Temperature Control', desc: 'Integrated airflow systems maintain optimal performance, ensuring longevity and reliability.' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Explore Our <span className="gradient-text">Display Options</span>
            </h2>
            <p className="text-xl text-gray-600">Most Popular Products Below. Please contact us for anything else.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Control Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Advanced <span className="gradient-text">Control Options</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Content Scheduling',
                  'Split Screen Functionality',
                  'Custom Layout Templates',
                  'One-Click Updates via CMS',
                  'Local or Cloud Hosting Options'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-700">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="premium-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Want us to manage it for you?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore our Content Management Service for complete peace of mind.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  Utilise our Marketing Resources
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  In-House CMS Design
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  Strategic Business Transformation Specialists
                </div>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium tracking-wider text-blue-200">CERTIFIED & SECURE</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SOTI Certification for <span className="text-blue-400">Enhanced Security</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our Ultra High Brightness Window Display is fully compliant with industry standards, including SOTI certification. 
              This certification ensures enhanced security and reliable device management through trusted enterprise-grade solutions. 
              It provides peace of mind for seamless integration and ongoing operation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Transform Your <span className="gradient-text">Business?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get in touch with our team to discuss your digital signage needs and discover the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/cart"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              View Cart
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
