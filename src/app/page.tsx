import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"1920\" height=\"600\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3ClinearGradient id=\"grad\" x1=\"0%25\" y1=\"0%25\" x2=\"100%25\" y2=\"100%25\"%3E%3Cstop offset=\"0%25\" style=\"stop-color:%231a1a2e;stop-opacity:1\" /%3E%3Cstop offset=\"100%25\" style=\"stop-color:%230f3460;stop-opacity:1\" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\"1920\" height=\"600\" fill=\"url(%23grad)\" /%3E%3Cg opacity=\"0.1\"%3E%3Ccircle cx=\"300\" cy=\"150\" r=\"100\" fill=\"%23fff\" /%3E%3Ccircle cx=\"800\" cy=\"400\" r=\"150\" fill=\"%23fff\" /%3E%3Ccircle cx=\"1400\" cy=\"200\" r=\"120\" fill=\"%23fff\" /%3E%3Crect x=\"100\" y=\"400\" width=\"200\" height=\"150\" fill=\"%23fff\" /%3E%3Crect x=\"1200\" y=\"100\" width=\"250\" height=\"180\" fill=\"%23fff\" /%3E%3C/g%3E%3C/svg%3E')"
          }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-4 text-gray-300">Explore Cutting-Edge Digital Display Solutions</p>
          <h1 className="text-6xl font-bold mb-6">
            Welcome to Vizage Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your business with our innovative digital signage and art displays, 
            designed to captivate and engage your audience.
          </p>
          <Link 
            href="/products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6">Our Mission at Vizage Solutions</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            At Vizage Solutions, we are dedicated to revolutionizing the way businesses communicate 
            through digital display technologies. Our mission is to provide state-of-the-art solutions 
            that enhance visibility and engagement, ensuring our clients stay ahead in a competitive market.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Comprehensive Services for Your Business</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Content Management</h3>
              <p className="text-gray-600">
                Our robust CMS allows you to effortlessly manage and update your digital content, ensuring your displays always showcase the latest information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Art Curation</h3>
              <p className="text-gray-600">
                Enhance your space with our professional art curation services, selecting pieces that align with your brand and captivate your audience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Experience unparalleled customer support with our dedicated team, ready to assist you with any inquiries or technical issues.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Installation</h3>
              <p className="text-gray-600">
                Our expert installation team ensures your digital displays are set up for optimal performance and maximum impact.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold mb-2">Digital Canvas</h3>
              <p className="text-gray-600">
                Transform your environment with our digital canvases, offering dynamic and interactive displays that engage and inspire.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">👆</div>
              <h3 className="text-xl font-semibold mb-2">Interactive Display</h3>
              <p className="text-gray-600">
                Engage your audience with our interactive display solutions, designed to create immersive experiences and foster customer interaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🪟</div>
              <h3 className="text-xl font-semibold mb-2">Window Display</h3>
              <p className="text-gray-600">
                Maximize your storefront's impact with our high-visibility window displays, perfect for attracting attention in any lighting condition.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-semibold mb-2">Dynamic Signage</h3>
              <p className="text-gray-600">
                Our dynamic signage solutions provide versatile and eye-catching displays that adapt to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features of Our Digital Signage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Commercial Grade</h3>
              <p className="text-gray-600">
                Commercial Grade Product Displays able to be in use 24/7 for over 70,000 hours. No external buttons/controls (avoid tampering).
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Dual Screen Display</h3>
              <p className="text-gray-600">
                Engage audiences both inside and outside your business with dual screens that display different content simultaneously for maximum impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🌡️</div>
              <h3 className="text-xl font-semibold mb-2">Integrated Airflow</h3>
              <p className="text-gray-600">
                Equipped with an integrated airflow system, our displays maintain optimal performance and longevity, even in challenging conditions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🔆</div>
              <h3 className="text-xl font-semibold mb-2">High Brightness</h3>
              <p className="text-gray-600">
                Our displays boast an impressive brightness level, ensuring visibility even in direct sunlight, making them ideal for storefronts and high-traffic areas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold mb-2">Dual Screen Capability</h3>
              <p className="text-gray-600">
                Engage audiences both inside and outside your business with dual screens that display different content simultaneously for maximum impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">❄️</div>
              <h3 className="text-xl font-semibold mb-2">Cooling System</h3>
              <p className="text-gray-600">
                Equipped with an integrated airflow system, our displays maintain optimal performance and longevity, even in challenging conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Connect with Us for Tailored Solutions</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to elevate your business with cutting-edge digital displays? Contact Vizage Solutions 
            today to discover how our innovative signage can transform your customer engagement.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
