import Link from 'next/link';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Premium */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-sm font-medium tracking-wider text-blue-200">EXPLORE CUTTING-EDGE DIGITAL DISPLAY SOLUTIONS</p>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block mb-2">Welcome to</span>
            <span className="gradient-text block">Vizage Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Transform your business with our innovative digital signage and art displays, 
            designed to captivate and engage your audience with unparalleled sophistication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/products"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl overflow-hidden shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Explore Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              Contact Us
            </Link>
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
      <section className="py-24 bg-white relative section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Mission at <span className="gradient-text">Vizage Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed font-light">
              At Vizage Solutions, we are dedicated to revolutionizing the way businesses communicate 
              through digital display technologies. Our mission is to provide state-of-the-art solutions 
              that enhance visibility and engagement, ensuring our clients stay ahead in a competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Premium */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Comprehensive Services for <span className="gradient-text">Your Business</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="premium-card p-8 rounded-2xl group cursor-pointer">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Content Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Our robust CMS allows you to effortlessly manage and update your digital content, ensuring your displays always showcase the latest information.
              </p>
            </div>
            
            <div className="premium-card p-8 rounded-2xl group cursor-pointer">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Art Curation</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhance your space with our professional art curation services, selecting pieces that align with your brand and captivate your audience.
              </p>
            </div>
            
            <div className="premium-card p-8 rounded-2xl group cursor-pointer">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">💬</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Customer Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience unparalleled customer support with our dedicated team, ready to assist you with any inquiries or technical issues.
              </p>
            </div>
            
            <div className="premium-card p-8 rounded-2xl group cursor-pointer">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🛠️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our expert installation team ensures your digital displays are set up for optimal performance and maximum impact.
              </p>
            </div>
            
            <div className="premium-card p-8 rounded-2xl group cursor-pointer">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🖼️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Canvas</h3>
              <p className="text-gray-600 leading-relaxed">
                Transform your environment with our digital canvases, offering dynamic and interactive displays that engage and inspire.
              </p>
            </div>
            
            <div className="premium-card p-8 rounded-2xl group cursor-pointer">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">👆</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Interactive Display</h3>
              <p className="text-gray-600 leading-relaxed">
                Engage your audience with our interactive display solutions, designed to create immersive experiences and foster customer interaction.
              </p>
            </div>
            
            <div className="premium-card p-8 rounded-2xl group cursor-pointer">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🪟</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Window Display</h3>
              <p className="text-gray-600 leading-relaxed">
                Maximize your storefront's impact with our high-visibility window displays, perfect for attracting attention in any lighting condition.
              </p>
            </div>
            
            <div className="premium-card p-8 rounded-2xl group cursor-pointer">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📺</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Dynamic Signage</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dynamic signage solutions provide versatile and eye-catching displays that adapt to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Premium */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IndoaXRlIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Key Features of Our <span className="text-blue-400">Digital Signage</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Commercial Grade</h3>
              <p className="text-gray-300 leading-relaxed">
                Commercial Grade Product Displays able to be in use 24/7 for over 70,000 hours. No external buttons/controls (avoid tampering).
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-2xl font-bold mb-4">Dual Screen Display</h3>
              <p className="text-gray-300 leading-relaxed">
                Engage audiences both inside and outside your business with dual screens that display different content simultaneously for maximum impact.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🌡️</div>
              <h3 className="text-2xl font-bold mb-4">Integrated Airflow</h3>
              <p className="text-gray-300 leading-relaxed">
                Equipped with an integrated airflow system, our displays maintain optimal performance and longevity, even in challenging conditions.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🔆</div>
              <h3 className="text-2xl font-bold mb-4">High Brightness</h3>
              <p className="text-gray-300 leading-relaxed">
                Our displays boast an impressive brightness level, ensuring visibility even in direct sunlight, making them ideal for storefronts and high-traffic areas.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🖥️</div>
              <h3 className="text-2xl font-bold mb-4">Dual Screen Capability</h3>
              <p className="text-gray-300 leading-relaxed">
                Engage audiences both inside and outside your business with dual screens that display different content simultaneously for maximum impact.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">❄️</div>
              <h3 className="text-2xl font-bold mb-4">Cooling System</h3>
              <p className="text-gray-300 leading-relaxed">
                Equipped with an integrated airflow system, our displays maintain optimal performance and longevity, even in challenging conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Connect with Us for <span className="text-cyan-300">Tailored Solutions</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed">
            Ready to elevate your business with cutting-edge digital displays? Contact Vizage Solutions 
            today to discover how our innovative signage can transform your customer engagement.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 bg-white text-blue-700 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-glow hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
