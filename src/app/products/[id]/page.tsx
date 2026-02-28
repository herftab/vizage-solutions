'use client';

import { useParams } from 'next/navigation';
import { products } from '@/lib/products';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';
import { useState } from 'react';
import { formatPrice } from '@/lib/currency';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('features');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            Back to Digital Signage
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">Digital Signage</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden group">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {product.category === 'Indoor Display' ? '📺' : 
                     product.category === 'Window Display' ? '🪟' : 
                     product.category === 'Interactive Display' ? '👆' : 
                     product.category === 'Outdoor Display' ? '🌤️' : '📱'}
                  </div>
                  <p className="text-gray-500 text-sm">Professional Product Image</p>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">✓</div>
                  <p className="text-xs font-medium text-gray-700">Certified Quality</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">🛡️</div>
                  <p className="text-xs font-medium text-gray-700">Lifetime Support</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">🚚</div>
                  <p className="text-xs font-medium text-gray-700">Free Installation</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {product.category}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                  <span className="ml-2 text-gray-600">(4.9/5.0)</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {product.inStock ? `In Stock (${product.inventory} units)` : 'Out of Stock'}
                </div>
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {formatPrice(product.price)}
                </div>
                <p className="text-gray-600">One-time payment • No hidden fees</p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.inventory, quantity + 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-600">
                    {product.inventory} available
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Add to Cart
                </button>
                <Link
                  href="/contact"
                  className="flex-1 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 text-center"
                >
                  Request Quote
                </Link>
              </div>

              {/* Key Benefits */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Why Choose This Display?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Professional installation included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Free lifetime technical support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Content management system included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Commercial grade warranty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="border-b border-gray-200">
              <div className="flex space-x-8 px-8">
                <button
                  onClick={() => setActiveTab('features')}
                  className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
                    activeTab === 'features'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
                    activeTab === 'specs'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('support')}
                  className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
                    activeTab === 'support'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Support
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'features' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.features?.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl">✓</div>
                        <div>
                          <p className="font-semibold text-gray-900">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Technical Specifications</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 py-3 border-b">
                      <span className="font-semibold text-gray-700">Display Type</span>
                      <span className="text-gray-600">Commercial Grade LCD</span>
                    </div>
                    <div className="grid grid-cols-2 py-3 border-b">
                      <span className="font-semibold text-gray-700">Brightness</span>
                      <span className="text-gray-600">2500+ nits</span>
                    </div>
                    <div className="grid grid-cols-2 py-3 border-b">
                      <span className="font-semibold text-gray-700">Operating Hours</span>
                      <span className="text-gray-600">24/7 (70,000+ hours)</span>
                    </div>
                    <div className="grid grid-cols-2 py-3 border-b">
                      <span className="font-semibold text-gray-700">Resolution</span>
                      <span className="text-gray-600">4K UHD (3840 x 2160)</span>
                    </div>
                    <div className="grid grid-cols-2 py-3 border-b">
                      <span className="font-semibold text-gray-700">Connectivity</span>
                      <span className="text-gray-600">HDMI, USB, Ethernet, WiFi</span>
                    </div>
                    <div className="grid grid-cols-2 py-3 border-b">
                      <span className="font-semibold text-gray-700">Power Consumption</span>
                      <span className="text-gray-600">150W - 300W</span>
                    </div>
                    <div className="grid grid-cols-2 py-3 border-b">
                      <span className="font-semibold text-gray-700">Warranty</span>
                      <span className="text-gray-600">3 Years Commercial</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'support' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Support & Services</h3>
                  <div className="space-y-6">
                    <div className="p-6 bg-blue-50 rounded-xl">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Professional Installation</h4>
                      <p className="text-gray-700">
                        Our expert team handles everything from mounting to network setup, ensuring your display is operational from day one.
                      </p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-xl">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Lifetime Technical Support</h4>
                      <p className="text-gray-700">
                        Access our support team 24/7 for any technical questions, content updates, or troubleshooting needs.
                      </p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-xl">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Content Management System</h4>
                      <p className="text-gray-700">
                        Manage your display content remotely with our intuitive CMS. Schedule content, update messaging, and monitor performance from anywhere.
                      </p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-xl">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Revenue Generation Support</h4>
                      <p className="text-gray-700">
                        We help you monetize your display by sourcing advertisers and managing campaigns, creating passive income streams.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="premium-card p-6 rounded-2xl group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                    {relatedProduct.category === 'Indoor Display' ? '📺' : 
                     relatedProduct.category === 'Window Display' ? '🪟' : 
                     relatedProduct.category === 'Interactive Display' ? '👆' : 
                     relatedProduct.category === 'Outdoor Display' ? '🌤️' : '📱'}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {relatedProduct.description}
                </p>
                <div className="text-2xl font-bold text-blue-600">
                  {formatPrice(relatedProduct.price)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing the Right Display?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our experts are here to help you find the perfect solution for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
          >
            Contact Our Team
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
