'use client';

import { useParams, useRouter } from 'next/navigation';
import { useProductAdminStore } from '@/lib/product-admin-store';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';
import { useState } from 'react';
import { formatPrice } from '@/lib/currency';

export default function ProductShopPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  const { getProduct } = useProductAdminStore();
  const product = getProduct(productId);
  const addItem = useCartStore((state) => state.addItem);

  // Configuration state
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

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

  // Group options by type
  const groupedOptions = (product.options || []).reduce((acc, option) => {
    if (!acc[option.type]) {
      acc[option.type] = [];
    }
    acc[option.type].push(option);
    return acc;
  }, {} as Record<string, typeof product.options>);

  // Calculate total price
  const calculateTotal = () => {
    let total = product.price;

    // Add selected options
    Object.values(selectedOptions).forEach(optionId => {
      const option = product.options?.find(opt => opt.id === optionId);
      if (option) total += option.price;
    });

    // Add accessories
    selectedAccessories.forEach(accId => {
      const accessory = product.options?.find(opt => opt.id === accId);
      if (accessory) total += accessory.price;
    });

    return total * quantity;
  };

  const handleOptionSelect = (type: string, optionId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [type]: optionId
    }));
  };

  const handleAccessoryToggle = (optionId: string) => {
    setSelectedAccessories(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleAddToCart = () => {
    // Check if all required options are selected (size, mounting, etc.)
    const requiredTypes = ['size', 'mounting'];
    const missingRequired = requiredTypes.filter(type => 
      groupedOptions[type]?.length > 0 && !selectedOptions[type]
    );

    if (missingRequired.length > 0) {
      alert(`Please select: ${missingRequired.join(', ')}`);
      return;
    }

    // Add configured product to cart
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }

    // Redirect to cart
    router.push('/cart');
  };

  const isConfigurationComplete = 
    (!groupedOptions.size || selectedOptions.size) &&
    (!groupedOptions.mounting || selectedOptions.mounting);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">Digital Signage</Link>
            <span>/</span>
            <Link href={`/products/${productId}`} className="hover:text-blue-600">{product.name}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Configure & Purchase</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                Configure Your {product.name}
              </h1>
              <p className="text-gray-600">
                Customise your display to perfectly match your business needs
              </p>
            </div>

            {/* Size Options */}
            {groupedOptions.size && groupedOptions.size.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Display Size</h2>
                  <span className="text-sm text-red-600 font-medium">Required</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {groupedOptions.size.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect('size', option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedOptions.size === option.id
                          ? 'border-blue-600 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {option.price > 0 ? `+${formatPrice(option.price)}` : 'Included'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Mounting Options */}
            {groupedOptions.mounting && groupedOptions.mounting.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Mounting Type</h2>
                  <span className="text-sm text-red-600 font-medium">Required</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedOptions.mounting.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect('mounting', option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedOptions.mounting === option.id
                          ? 'border-blue-600 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {option.price > 0 ? `+${formatPrice(option.price)}` : 'Included'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CMS Options */}
            {groupedOptions.cms && groupedOptions.cms.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Content Management System</h2>
                <div className="space-y-3">
                  {groupedOptions.cms.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect('cms', option.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedOptions.cms === option.id
                          ? 'border-blue-600 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600">
                          {option.price > 0 ? `+${formatPrice(option.price)}` : 'Included'}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Accessories */}
            {groupedOptions.accessory && groupedOptions.accessory.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Accessories</h2>
                <div className="space-y-3">
                  {groupedOptions.accessory.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-gray-50 cursor-pointer transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedAccessories.includes(option.id)}
                          onChange={() => handleAccessoryToggle(option.id)}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="font-medium text-gray-900">{option.label}</span>
                      </div>
                      <span className="text-gray-600">+{formatPrice(option.price)}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Installation */}
            {groupedOptions.installation && groupedOptions.installation.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Professional Installation</h2>
                {groupedOptions.installation.map((option) => (
                  <label key={option.id} className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-gray-50 cursor-pointer transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedOptions.installation === option.id}
                        onChange={() => handleOptionSelect('installation', option.id)}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600">Includes mounting, setup, and configuration</div>
                      </div>
                    </div>
                    <span className="text-gray-600">+{formatPrice(option.price)}</span>
                  </label>
                ))}
              </div>
            )}

            {/* No options configured message */}
            {(!product.options || product.options.length === 0) && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <p className="text-gray-600 mb-4">No configuration options available for this product.</p>
                <p className="text-sm text-gray-500">Contact us for custom configurations.</p>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>

              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>

              <h3 className="font-semibold text-lg mb-4 text-gray-900">{product.name}</h3>

              {/* Configuration Summary */}
              <div className="space-y-3 mb-6 text-sm">
                {Object.entries(selectedOptions).map(([type, optionId]) => {
                  const option = product.options?.find(opt => opt.id === optionId);
                  if (!option) return null;
                  return (
                    <div key={type} className="flex justify-between">
                      <span className="text-gray-600 capitalize">{type}:</span>
                      <span className="font-medium text-gray-900">{option.label}</span>
                    </div>
                  );
                })}
                {selectedAccessories.length > 0 && (
                  <div className="pt-3 border-t">
                    <div className="text-gray-600 mb-2">Accessories:</div>
                    {selectedAccessories.map(accId => {
                      const accessory = product.options?.find(opt => opt.id === accId);
                      if (!accessory) return null;
                      return (
                        <div key={accId} className="text-gray-900 text-xs ml-2">
                          • {accessory.label}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
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
              </div>

              {/* Total */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold text-gray-900">{formatPrice(calculateTotal())}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>VAT (20%):</span>
                  <span>{formatPrice(calculateTotal() * 0.2)}</span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <span className="text-lg font-bold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {formatPrice(calculateTotal() * 1.2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                onClick={handleAddToCart}
                disabled={!isConfigurationComplete || !product.inStock}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mb-3"
              >
                {isConfigurationComplete ? 'Add to Cart' : 'Complete Configuration'}
              </button>

              <Link
                href={`/products/${productId}`}
                className="block w-full py-3 text-center text-blue-600 font-medium hover:bg-blue-50 rounded-xl transition-all duration-300"
              >
                ← Back to Product Details
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free UK Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>3-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Lifetime Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
