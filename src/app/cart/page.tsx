'use client';

import { useCartStore } from '@/lib/store';
import Link from 'next/link';

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some products to get started!</p>
        <Link 
          href="/products"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <p className="text-2xl font-bold text-accent">${item.price.toLocaleString()}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total().toLocaleString()}</span>
              </div>
            </div>
            
            <Link
              href="/checkout"
              className="block w-full bg-accent text-white text-center py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
