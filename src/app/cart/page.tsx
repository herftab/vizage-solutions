'use client';

import { useCartStore } from '@/lib/store';
import Link from 'next/link';
import { formatPrice } from '@/lib/currency';

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
          {items.map((item) => {
            const optionsKey = item.selectedOptions 
              ? JSON.stringify(item.selectedOptions)
              : 'no-options';
            const itemPrice = item.configuredPrice || item.price;
            
            return (
              <div key={`${item.id}-${optionsKey}`} className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    
                    {/* Display selected options */}
                    {item.selectedOptions && (
                      <div className="mb-3 space-y-1">
                        {item.selectedOptions.colour && (
                          <div className="text-sm text-gray-700">
                            <span className="font-medium">Colour:</span> {item.selectedOptions.colour.label}
                            {item.selectedOptions.colour.price > 0 && (
                              <span className="text-gray-500"> (+{formatPrice(item.selectedOptions.colour.price)})</span>
                            )}
                          </div>
                        )}
                        {item.selectedOptions.size && (
                          <div className="text-sm text-gray-700">
                            <span className="font-medium">Size:</span> {item.selectedOptions.size.label}
                            {item.selectedOptions.size.price > 0 && (
                              <span className="text-gray-500"> (+{formatPrice(item.selectedOptions.size.price)})</span>
                            )}
                          </div>
                        )}
                        {item.selectedOptions.cms && (
                          <div className="text-sm text-gray-700">
                            <span className="font-medium">CMS Add On:</span> {item.selectedOptions.cms.label}
                            {item.selectedOptions.cms.price > 0 && (
                              <span className="text-gray-500"> (+{formatPrice(item.selectedOptions.cms.price)})</span>
                            )}
                          </div>
                        )}
                        {item.selectedOptions.subscription && (
                          <div className="text-sm text-gray-700">
                            <span className="font-medium">CMS Subscription:</span> {item.selectedOptions.subscription.label}
                            {item.selectedOptions.subscription.price > 0 && (
                              <span className="text-gray-500"> (+{formatPrice(item.selectedOptions.subscription.price)})</span>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-bold text-blue-600">{formatPrice(itemPrice)}</p>
                      <span className="text-xs text-gray-400">+ VAT</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1, optionsKey)}
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1, optionsKey)}
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id, optionsKey)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(total())}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>VAT (20%)</span>
                <span>{formatPrice(total() * 0.2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-sm">Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total (inc. VAT)</span>
                <span>{formatPrice(total() * 1.2)}</span>
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
