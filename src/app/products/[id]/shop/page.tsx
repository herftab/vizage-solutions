'use client';

import { useParams, useRouter } from 'next/navigation';
import { products } from '@/lib/products';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';
import { useState } from 'react';
import { formatPrice } from '@/lib/currency';

export default function ProductShopPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);
  const addItem = useCartStore((state) => state.addItem);

  // Configuration state
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedMounting, setSelectedMounting] = useState('');
  const [selectedOrientation, setSelectedOrientation] = useState('');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [installationRequired, setInstallationRequired] = useState(false);
  const [contentManagement, setContentManagement] = useState('basic');

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

  // Product-specific configuration options
  const getProductOptions = () => {
    const baseOptions = {
      sizes: [
        { value: '32', label: '32" Display', price: 0 },
        { value: '43', label: '43" Display', price: 200 },
        { value: '55', label: '55" Display', price: 500 },
        { value: '65', label: '65" Display', price: 900 },
        { value: '75', label: '75" Display', price: 1500 }
      ],
      mounting: [
        { value: 'wall', label: 'Wall Mount', price: 0 },
        { value: 'ceiling', label: 'Ceiling Mount', price: 150 },
        { value: 'floor', label: 'Floor Stand', price: 300 },
        { value: 'freestanding', label: 'Freestanding', price: 450 }
      ],
      orientation: [
        { value: 'landscape', label: 'Landscape', price: 0 },
        { value: 'portrait', label: 'Portrait', price: 0 }
      ],
      accessories: [
        { value: 'remote', label: 'Remote Control', price: 45 },
        { value: 'media-player', label: 'Advanced Media Player', price: 299 },
        { value: 'speakers', label: 'External Speakers', price: 199 },
        { value: 'protective-cover', label: 'Protective Cover', price: 89 },
        { value: 'extended-warranty', label: 'Extended Warranty (5 Years)', price: 499 }
      ],
      installation: { price: 499 },
      contentManagement: [
        { value: 'basic', label: 'Basic (USB Updates)', price: 0 },
        { value: 'cloud', label: 'Cloud Management', price: 299 },
        { value: 'premium', label: 'Premium with Analytics', price: 599 }
      ]
    };

    // Customize based on product type
    if (productId === '2') {
      // Double-Sided Display specific options
      return {
        ...baseOptions,
        mounting: [
          { value: 'hanging', label: 'Hanging Mount', price: 0 },
          { value: 'freestanding', label: 'Freestanding with Floor Stand', price: 450 }
        ]
      };
    }

    if (productId === '4' || productId === '6') {
      // Interactive displays
      return {
        ...baseOptions,
        accessories: [
          ...baseOptions.accessories,
          { value: 'payment-terminal', label: 'Payment Terminal Integration', price: 799 },
          { value: 'printer', label: 'Receipt Printer', price: 349 }
        ]
      };
    }

    if (productId === '5') {
      // Outdoor display
      return {
        ...baseOptions,
        accessories: [
          ...baseOptions.accessories,
          { value: 'weatherproof-enclosure', label: 'Enhanced Weatherproof Enclosure', price: 899 },
          { value: 'heating-cooling', label: 'Advanced Climate Control', price: 1299 }
        ]
      };
    }

    return baseOptions;
  };

  const options = getProductOptions();

  // Calculate total price
  const calculateTotal = () => {
    let total = product.price;

    // Add size price
    const sizeOption = options.sizes.find(s => s.value === selectedSize);
    if (sizeOption) total += sizeOption.price;

    // Add mounting price
    const mountingOption = options.mounting.find(m => m.value === selectedMounting);
    if (mountingOption) total += mountingOption.price;

    // Add accessories
    selectedAccessories.forEach(acc => {
      const accessory = options.accessories.find(a => a.value === acc);
      if (accessory) total += accessory.price;
    });

    // Add installation
    if (installationRequired) total += options.installation.price;

    // Add content management
    const cmOption = options.contentManagement.find(c => c.value === contentManagement);
    if (cmOption) total += cmOption.price;

    return total * quantity;
  };

  const handleAccessoryToggle = (value: string) => {
    setSelectedAccessories(prev =>
      prev.includes(value)
        ? prev.filter(a => a !== value)
        : [...prev, value]
    );
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedMounting || !selectedOrientation) {
      alert('Please select all required options (Size, Mounting, Orientation)');
      return;
    }

    // Add configured product to cart
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }

    // Redirect to cart
    router.push('/cart');
  };

  const isConfigurationComplete = selectedSize && selectedMounting && selectedOrientation;

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

            {/* Display Size */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Display Size</h2>
                <span className="text-sm text-red-600 font-medium">Required</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {options.sizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setSelectedSize(size.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedSize === size.value
                        ? 'border-blue-600 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold text-gray-900">{size.label}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {size.price > 0 ? `+${formatPrice(size.price)}` : 'Included'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mounting Type */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Mounting Type</h2>
                <span className="text-sm text-red-600 font-medium">Required</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.mounting.map((mount) => (
                  <button
                    key={mount.value}
                    onClick={() => setSelectedMounting(mount.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedMounting === mount.value
                        ? 'border-blue-600 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold text-gray-900">{mount.label}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {mount.price > 0 ? `+${formatPrice(mount.price)}` : 'Included'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Orientation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Orientation</h2>
                <span className="text-sm text-red-600 font-medium">Required</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {options.orientation.map((orient) => (
                  <button
                    key={orient.value}
                    onClick={() => setSelectedOrientation(orient.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedOrientation === orient.value
                        ? 'border-blue-600 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold text-gray-900">{orient.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Management */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Content Management System</h2>
              <div className="space-y-3">
                {options.contentManagement.map((cm) => (
                  <button
                    key={cm.value}
                    onClick={() => setContentManagement(cm.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      contentManagement === cm.value
                        ? 'border-blue-600 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-gray-900">{cm.label}</div>
                      <div className="text-sm text-gray-600">
                        {cm.price > 0 ? `+${formatPrice(cm.price)}` : 'Included'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Accessories */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Accessories</h2>
              <div className="space-y-3">
                {options.accessories.map((accessory) => (
                  <label
                    key={accessory.value}
                    className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-gray-50 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedAccessories.includes(accessory.value)}
                        onChange={() => handleAccessoryToggle(accessory.value)}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="font-medium text-gray-900">{accessory.label}</span>
                    </div>
                    <span className="text-gray-600">+{formatPrice(accessory.price)}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Professional Installation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Professional Installation</h2>
              <label className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-gray-50 cursor-pointer transition-all duration-300">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={installationRequired}
                    onChange={(e) => setInstallationRequired(e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Professional Installation Service</div>
                    <div className="text-sm text-gray-600">Includes mounting, setup, and configuration</div>
                  </div>
                </div>
                <span className="text-gray-600">+{formatPrice(options.installation.price)}</span>
              </label>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>

              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6">
                <div className="text-6xl">
                  {product.category === 'Indoor Display' ? '📺' : 
                   product.category === 'Window Display' ? '🪟' : 
                   product.category === 'Interactive Display' ? '👆' : 
                   product.category === 'Outdoor Display' ? '🌤️' : '📱'}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-4 text-gray-900">{product.name}</h3>

              {/* Configuration Summary */}
              <div className="space-y-3 mb-6 text-sm">
                {selectedSize && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium text-gray-900">
                      {options.sizes.find(s => s.value === selectedSize)?.label}
                    </span>
                  </div>
                )}
                {selectedMounting && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mounting:</span>
                    <span className="font-medium text-gray-900">
                      {options.mounting.find(m => m.value === selectedMounting)?.label}
                    </span>
                  </div>
                )}
                {selectedOrientation && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Orientation:</span>
                    <span className="font-medium text-gray-900 capitalize">
                      {selectedOrientation}
                    </span>
                  </div>
                )}
                {contentManagement && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">CMS:</span>
                    <span className="font-medium text-gray-900">
                      {options.contentManagement.find(c => c.value === contentManagement)?.label}
                    </span>
                  </div>
                )}
                {selectedAccessories.length > 0 && (
                  <div className="pt-3 border-t">
                    <div className="text-gray-600 mb-2">Accessories:</div>
                    {selectedAccessories.map(acc => (
                      <div key={acc} className="text-gray-900 text-xs ml-2">
                        • {options.accessories.find(a => a.value === acc)?.label}
                      </div>
                    ))}
                  </div>
                )}
                {installationRequired && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Installation:</span>
                    <span className="font-medium text-gray-900">Included</span>
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
