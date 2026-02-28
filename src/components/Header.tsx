'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store';

export default function Header() {
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Vizage Solutions
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-accent transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-accent transition">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-accent transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-accent transition">
              Contact
            </Link>
            <Link href="/cart" className="relative text-gray-700 hover:text-accent transition">
              <span className="text-xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
