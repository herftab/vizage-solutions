'use client';

import { Product } from '@/types';
import { useCartStore } from '@/lib/store';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm">Product Image</span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-accent">
            ${product.price.toLocaleString()}
          </span>
          <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? `In Stock (${product.inventory})` : 'Out of Stock'}
          </span>
        </div>
        
        <button
          onClick={() => addItem(product)}
          disabled={!product.inStock}
          className="w-full bg-accent text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}
