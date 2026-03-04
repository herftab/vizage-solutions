'use client';

import { useParams, useRouter } from 'next/navigation';
import { products as staticProducts } from '@/lib/products';
import { useProductAdminStore } from '@/lib/product-admin-store';
import { useCartStore } from '@/lib/store';
import { CartItem } from '@/types';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { formatPrice } from '@/lib/currency';
import { getProductOptions, ProductOption } from '@/lib/product-options';

export default function ProductShopPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  
  // Get product from admin store if available, otherwise use static products
  const getAdminProduct = useProductAdminStore((state) => state.getProduct);
  const adminProduct = getAdminProduct(productId);
  const staticProduct = staticProducts.find(p => p.id === productId);
  const product = adminProduct || staticProduct;
  
  const addItem = useCartStore((state) => state.addItem);

  const [options, setOptions] = useState<ProductOption[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColour, setSelectedColour] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedCMS, setSelectedCMS] = useState<string>('');
  const [selectedSubscription, setSelectedSubscription] = useState<string>('');

  // Load options on mount (product-specific)
  useEffect(() => {
    const loadedOptions = getProductOptions(productId);
    setOptions(loadedOptions);
    
    // Set default selections
    const defaultColour = loadedOptions.find(o => o.type === 'colour');
    const defaultSize = loadedOptions.find(o => o.type === 'size');
    const defaultCMS = loadedOptions.find(o => o.type === 'cms' && o.value === 'no');
    
    if (defaultColour) setSelectedColour(defaultColour.id);
    if (defaultSize) setSelectedSize(defaultSize.id);
    if (defaultCMS) {
      setSelectedCMS(defaultCMS.id);
      // Set subscription to N/A by default
      const naSubscription = loadedOptions.find(o => o.type === 'subscription' && o.value === 'na');
      if (naSubscription) setSelectedSubscription(naSubscription.id);
    }
  }, []);

  // Update subscription when CMS selection changes
  useEffect(() => {
    const cmsOption = options.find(o => o.id === selectedCMS);
    if (cmsOption) {
      if (cmsOption.value === 'no') {
        // Set to N/A
        const naOption = options.find(o => o.type === 'subscription' && o.value === 'na');
        if (naOption) setSelectedSubscription(naOption.id);
      } else if (cmsOption.value === 'yes' && selectedSubscription === options.find(o => o.value === 'na')?.id) {
        // If switching to Yes and currently on N/A, select first paid option
        const firstPaidOption = options.find(o => o.type === 'subscription' && o.value !== 'na');
        if (firstPaidOption) setSelectedSubscription(firstPaidOption.id);
      }
    }
  }, [selectedCMS, options]);

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
  const colourOptions = options.filter(o => o.type === 'colour' && o.enabled);
  const sizeOptions = options.filter(o => o.type === 'size' && o.enabled);
  const cmsOptions = options.filter(o => o.type === 'cms' && o.enabled);
  const subscriptionOptions = options.filter(o => o.type === 'subscription' && o.enabled);

  // Get selected CMS value to determine subscription visibility
  const selectedCMSOption = options.find(o => o.id === selectedCMS);
  const showSubscriptionOptions = selectedCMSOption?.value === 'yes';

  // Calculate total price
  const calculateTotal = () => {
    let total = product.price;

    const selectedOptions = [selectedColour, selectedSize, selectedCMS, selectedSubscription];
    selectedOptions.forEach(optionId => {
      const option = options.find(o => o.id === optionId);
      if (option) total += option.price;
    });

    return total * quantity;
  };

  const handleAddToCart = () => {
    // Build selected options object
    const selectedOptionsData: CartItem['selectedOptions'] = {};
    
    if (selectedColour) {
      const option = options.find(o => o.id === selectedColour);
      if (option) {
        selectedOptionsData.colour = {
          id: option.id,
          label: option.label,
          price: option.price
        };
      }
    }
    
    if (selectedSize) {
      const option = options.find(o => o.id === selectedSize);
      if (option) {
        selectedOptionsData.size = {
          id: option.id,
          label: option.label,
          price: option.price
        };
      }
    }
    
    if (selectedCMS) {
      const option = options.find(o => o.id === selectedCMS);
      if (option) {
        selectedOptionsData.cms = {
          id: option.id,
          label: option.label,
          price: option.price
        };
      }
    }
    
    if (selectedSubscription) {
      const option = options.find(o => o.id === selectedSubscription);
      if (option) {
        selectedOptionsData.subscription = {
          id: option.id,
          label: option.label,
          price: option.price
        };
      }
    }
    
    // Calculate configured price (base price + all option prices)
    const configuredPrice = calculateTotal() / quantity;
    
    // Add configured product to cart
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedOptionsData, configuredPrice);
    }

    // Redirect to cart
    router.push('/cart');
  };

  const isConfigurationComplete = 
    (colourOptions.length === 0 || selectedColour) &&
    (sizeOptions.length === 0 || selectedSize) &&
    (cmsOptions.length === 0 || selectedCMS) &&
    (subscriptionOptions.length === 0 || selectedSubscription);

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

            {/* Colour Options */}
            {colourOptions.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Colour</h2>
                  <span className="text-sm text-red-600 font-medium">Required</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {colourOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedColour(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedColour === option.id
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

            {/* Size Options */}
            {sizeOptions.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Display Size</h2>
                  <span className="text-sm text-red-600 font-medium">Required</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {sizeOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedSize(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedSize === option.id
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

            {/* CMS Add On */}
            {cmsOptions.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">CMS Add On</h2>
                  <span className="text-sm text-red-600 font-medium">Required</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Add our Content Management System to easily update and schedule your display content remotely.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {cmsOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedCMS(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedCMS === option.id
                          ? 'border-blue-600 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {option.price > 0 ? `+${formatPrice(option.price)}` : 'No additional cost'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CMS Subscription */}
            {(cmsOptions.length > 0 || subscriptionOptions.length > 0) && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">CMS Subscription</h2>
                  <span className="text-sm text-red-600 font-medium">Required</span>
                </div>
                {!showSubscriptionOptions || subscriptionOptions.filter(o => o.value !== 'na').length === 0 ? (
                  <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                    <div className="font-semibold text-gray-900">N/A</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {cmsOptions.length > 0 
                        ? 'Select "Yes" for CMS Add On to view subscription options'
                        : 'No subscription options available'}
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-4">
                      Choose your subscription duration for ongoing CMS access and support.
                    </p>
                    <div className="space-y-3">
                      {subscriptionOptions.filter(o => o.value !== 'na').map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setSelectedSubscription(option.id)}
                          className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            selectedSubscription === option.id
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
                  </>
                )}
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>

              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-2xl"></div>
                </div>
                
                {/* Image Container with Shadow */}
                <div className="relative w-full h-full p-8 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-4 text-gray-900">{product.name}</h3>

              {/* Configuration Summary */}
              <div className="space-y-3 mb-6 text-sm">
                {selectedColour && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Colour:</span>
                    <span className="font-medium text-gray-900">
                      {options.find(o => o.id === selectedColour)?.label}
                    </span>
                  </div>
                )}
                {selectedSize && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium text-gray-900">
                      {options.find(o => o.id === selectedSize)?.label}
                    </span>
                  </div>
                )}
                {selectedCMS && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">CMS Add On:</span>
                    <span className="font-medium text-gray-900">
                      {options.find(o => o.id === selectedCMS)?.label}
                    </span>
                  </div>
                )}
                {selectedSubscription && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">CMS Subscription:</span>
                    <span className="font-medium text-gray-900">
                      {options.find(o => o.id === selectedSubscription)?.label}
                    </span>
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
