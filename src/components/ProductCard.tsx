'use client';

import { Product } from '@/types';
import Link from 'next/link';
import { formatPrice } from '@/lib/currency';

interface ProductCardProps {
  product: Product;
  hideLearnMore?: boolean;
}

export default function ProductCard({ product, hideLearnMore = false }: ProductCardProps) {

  return (
    <div className="premium-card rounded-2xl overflow-hidden group">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center cursor-pointer overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-2xl"></div>
          </div>
          
          {/* Image Container with Shadow */}
          <div className="relative w-full h-full p-4 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 group-hover:drop-shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all duration-700 ease-out"
            />
          </div>
          
          {/* Shine Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
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
        
        <div className="flex items-baseline justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-gray-500 uppercase">from</span>
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-gray-400">+ VAT</span>
          </div>
          <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? `${product.inventory} in stock` : 'Out of Stock'}
          </span>
        </div>
        
        <div className="flex flex-col gap-2">
          <Link
            href={`/products/${product.id}/shop`}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center font-medium"
          >
            Configure & Purchase
          </Link>
          {!hideLearnMore && (
            <Link
              href={`/products/${product.id}`}
              className="w-full py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
