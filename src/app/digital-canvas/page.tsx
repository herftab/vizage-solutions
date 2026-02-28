'use client';

import Link from 'next/link';

export default function DigitalCanvasPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-xs md:text-sm font-medium tracking-wider text-purple-200">TRANSFORM WALLS INTO LIVING ART</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Transform Your Space with <br />
            <span className="gradient-text">Digital Elegance</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 px-4">
            Unveiling the Textura Home & PRO Canvas - Revolutionise Your Art Display
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Revolutionise Your <span className="gradient-text">Art Display</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              The Textura Digital Canvas from Vizage Solutions is your gateway to a world of stunning digital art. Designed to mimic the intricate details of traditional paintings, this canvas brings your favourite artworks to life with vivid colours and realistic textures. Whether you're an art enthusiast or a homeowner looking to enhance your décor, this digital canvas offers a seamless blend of technology and artistry.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The Digital Canvas is a next-generation art display system designed to bring gallery-grade visuals into any environment. Using ultra-high-definition (4K and beyond) images, proprietary software, and non-reflective display technology, it replicates the presence and depth of real canvas with none of the limitations.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Perfect for <span className="gradient-text">Every Environment</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="premium-card p-6 md:p-8 rounded-2xl">
              <div className="text-4xl mb-4">🍺</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Hospitality: Pubs, Bars & Restaurants</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In hospitality, your goal is simple: keep guests comfortable, engaged, and spending time in your space. Traditional art fades into the background quickly, but Digital Canvas evolves throughout the day or year, shifting with seasons, major events, or your promotions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  A rotating gallery keeps the environment fresh and stimulating
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  National events (F1, Wimbledon, holidays) can be reflected through themed visuals
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Art prompts conversation: customers stay longer and spend more
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Saves on redecoration costs by keeping your venue visually dynamic
                </li>
              </ul>
            </div>

            <div className="premium-card p-6 md:p-8 rounded-2xl">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Offices, Lobbies & Meeting Rooms</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A static office makes a flat first impression. The Digital Canvas introduces flexibility, personality, and professionalism without clutter.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Reinforce brand values through curated visuals
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Impress clients with thematic artwork during pitches or board meetings
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Display calming visuals to support staff wellness and creativity
                </li>
              </ul>
            </div>

            <div className="premium-card p-6 md:p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Retail & Showrooms</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Turn your store or showroom into an evolving story that changes with trends, collections, or events.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Create emotional connection with curated lifestyle visuals
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Use subtle motion or image shifts to guide flow or highlight featured products
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Maximise space by merging ambiance and communication in one seamless solution
                </li>
              </ul>
            </div>

            <div className="premium-card p-6 md:p-8 rounded-2xl">
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Barbers & Hair Salons</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In a barber's chair, time slows down, especially for new customers. The Digital Canvas provides a dynamic visual anchor to reduce social pressure, soothe anxiety, and spark casual conversation.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Some clients prefer to talk, others don't. Art gives both a comfortable middle ground
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Rotate artwork, quotes, or niche visuals to match your brand personality
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Makes your environment memorable and more likely to be shared on social media
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Summary of <span className="text-purple-400">Benefits</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Increases dwell time',
              'Enhances atmosphere with zero effort',
              'Sparks spontaneous conversation',
              'Adapts to seasons, promotions, events',
              'Reduces redecoration or signage costs',
              'Makes every visit feel fresh and elevated'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Advanced <span className="gradient-text">Features</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 premium-card rounded-2xl">
              <div className="text-5xl mb-4">🖼</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Hyper-Realistic Display</h3>
              <p className="text-gray-600">4K/8K visuals presented through advanced rendering to simulate canvas texture, lighting, and depth.</p>
            </div>
            
            <div className="text-center p-6 premium-card rounded-2xl">
              <div className="text-5xl mb-4">🌫</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Non-Reflective Technology</h3>
              <p className="text-gray-600">Engineered for dark rooms, our non-refractive screen preserves visual clarity without bouncing projector or ambient light.</p>
            </div>
            
            <div className="text-center p-6 premium-card rounded-2xl">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Curated Content Library</h3>
              <p className="text-gray-600">Select from world-class galleries, modern digital art, or upload commissioned or brand-specific works.</p>
            </div>
            
            <div className="text-center p-6 premium-card rounded-2xl">
              <div className="text-5xl mb-4">📲</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Remote Scheduling & Controls</h3>
              <p className="text-gray-600">Easily programme content to match the time of day, mood, or event using our intuitive management platform.</p>
            </div>
            
            <div className="text-center p-6 premium-card rounded-2xl">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Framing Options</h3>
              <p className="text-gray-600">Our canvases are framed and mounted to blend seamlessly with real-world gallery aesthetics.</p>
            </div>
            
            <div className="text-center p-6 premium-card rounded-2xl">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Installation</h3>
              <p className="text-gray-600">Installing your Textura digital canvas is a breeze. Just attach the mounting plate, connect the cable, and hang.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our <span className="gradient-text">Customers Are Saying</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "The Textura Digital Canvas has completely transformed my living room. The art looks so real, and I love being able to change the display whenever I want. It's like having a new piece of art every day!"
              </p>
              <p className="font-semibold text-gray-900">Emma J.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "As an art enthusiast, I was sceptical about digital displays. But the Textura Digital Canvas exceeded my expectations. The textures and colours are stunning, and the setup was incredibly easy. Highly recommend it!"
              </p>
              <p className="font-semibold text-gray-900">Michael T.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "I purchased the Textura Digital Canvas for my office, and it has been a game-changer. Clients often comment on the beautiful artwork, and it adds a touch of elegance to the space. The customer service from Vizage Solutions was top-notch!"
              </p>
              <p className="font-semibold text-gray-900">Sophia L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform <span className="text-purple-200">Your Space?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Discover the power of Digital Canvas and bring gallery-grade art into your environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/products"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-purple-700 transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
