'use client';

import { Product } from '@/types';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';
import { formatPrice } from '@/lib/currency';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="premium-card rounded-2xl overflow-hidden group">
      <Link href={`/products/${product.id}`}>
        <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center cursor-pointer">
          <div className="text-center">
            <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
              {product.category === 'Indoor Display' ? '📺' : 
               product.category === 'Window Display' ? '🪟' : 
               product.category === 'Interactive Display' ? '👆' : 
               product.category === 'Outdoor Display' ? '🌤️' : '📱'}
            </div>
            <span className="text-gray-400 text-sm">View Details</span>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
        
        <Link href={`/products/${product.id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? `${product.inventory} in stock` : 'Out of Stock'}
          </span>
        </div>
        
        <div className="flex flex-col gap-2">
          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-300"
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <Link
            href={`/products/${product.id}`}
            className="w-full py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
