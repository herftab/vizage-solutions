'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Vizage
            </div>
            <div className="text-2xl md:text-3xl font-light text-gray-800">Solutions</div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            
            <Link 
              href="/products" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/products') || pathname.startsWith('/products/')
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Digital Signage
            </Link>
            
            <Link 
              href="/digital-canvas" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/digital-canvas') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Digital Canvas
            </Link>
            
            <Link 
              href="/industries" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/industries') || pathname.startsWith('/industries/')
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Industries
            </Link>
            
            <Link 
              href="/services" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/services') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Services
            </Link>
            
            <Link 
              href="/shop" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/shop') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Shop
            </Link>
            
            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/cart" 
              className="relative ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span className="text-lg">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link 
              href="/cart" 
              className="relative px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg"
            >
              <span className="text-lg">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              
              <Link 
                href="/products" 
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/products') || pathname.startsWith('/products/')
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Digital Signage
              </Link>
              
              <Link 
                href="/digital-canvas" 
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/digital-canvas') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Digital Canvas
              </Link>
              
              <Link 
                href="/industries" 
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/industries') || pathname.startsWith('/industries/')
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Industries
              </Link>
              
              <Link 
                href="/services" 
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/services') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Services
              </Link>
              
              <Link 
                href="/shop" 
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/shop') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Shop
              </Link>
              
              <Link 
                href="/about" 
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/about') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/contact') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
