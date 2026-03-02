'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAdminStore } from '@/lib/admin-store';
import Link from 'next/link';
import { formatPrice } from '@/lib/currency';

interface ProductOption {
  id: string;
  type: 'colour' | 'size' | 'cms' | 'subscription';
  name: string;
  value: string;
  label: string;
  price: number;
  enabled: boolean; // Whether this option is visible on the product page
}

const getDefaultOptions = (productId: string): ProductOption[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(`productOptions_${productId}`);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse stored options:', e);
      }
    }
  }

  return [
    { id: 'colour-black', type: 'colour', name: 'Colour', value: 'black', label: 'Black', price: 0, enabled: true },
    { id: 'colour-white', type: 'colour', name: 'Colour', value: 'white', label: 'White', price: 0, enabled: true },
    { id: 'size-49', type: 'size', name: 'Size', value: '49', label: '49"', price: 0, enabled: true },
    { id: 'size-55', type: 'size', name: 'Size', value: '55', label: '55"', price: 500, enabled: true },
    { id: 'cms-yes', type: 'cms', name: 'CMS Add On', value: 'yes', label: 'Yes', price: 299, enabled: true },
    { id: 'cms-no', type: 'cms', name: 'CMS Add On', value: 'no', label: 'No', price: 0, enabled: true },
    { id: 'subscription-na', type: 'subscription', name: 'CMS Subscription', value: 'na', label: 'N/A', price: 0, enabled: true },
    { id: 'subscription-1year', type: 'subscription', name: 'CMS Subscription', value: '1year', label: '1 Year', price: 199, enabled: true },
    { id: 'subscription-3years', type: 'subscription', name: 'CMS Subscription', value: '3years', label: '3 Years', price: 499, enabled: true },
    { id: 'subscription-unlimited', type: 'subscription', name: 'CMS Subscription', value: 'unlimited', label: 'Unlimited', price: 999, enabled: true },
  ];
};

export default function ProductOptionsPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  
  const { isAuthenticated } = useAdminStore();
  
  const [options, setOptions] = useState<ProductOption[]>([]);
  const [editingOption, setEditingOption] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState<number>(0);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    setOptions(getDefaultOptions(productId));
  }, [productId]);

  if (!isAuthenticated) {
    return null;
  }

  const handleEdit = (option: ProductOption) => {
    setEditingOption(option.id);
    setEditPrice(option.price);
  };

  const handleSavePrice = (optionId: string) => {
    const updatedOptions = options.map(opt => 
      opt.id === optionId ? { ...opt, price: editPrice } : opt
    );
    setOptions(updatedOptions);
    
    // Save to localStorage with product-specific key
    if (typeof window !== 'undefined') {
      localStorage.setItem(`productOptions_${productId}`, JSON.stringify(updatedOptions));
    }
    
    setEditingOption(null);
    setEditPrice(0);
  };

  const handleToggleEnabled = (optionId: string) => {
    const updatedOptions = options.map(opt => 
      opt.id === optionId ? { ...opt, enabled: !opt.enabled } : opt
    );
    setOptions(updatedOptions);
    
    // Save to localStorage with product-specific key
    if (typeof window !== 'undefined') {
      localStorage.setItem(`productOptions_${productId}`, JSON.stringify(updatedOptions));
    }
  };

  const handleCancel = () => {
    setEditingOption(null);
    setEditPrice(0);
  };

  const groupedOptions = options.reduce((acc, option) => {
    if (!acc[option.type]) {
      acc[option.type] = [];
    }
    acc[option.type].push(option);
    return acc;
  }, {} as Record<string, ProductOption[]>);

  const typeLabels: Record<string, string> = {
    colour: 'Colour',
    size: 'Size',
    cms: 'CMS Add On',
    subscription: 'CMS Subscription'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div>
            <Link href="/admin/products" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
              ← Back to Products
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Product Configuration Options</h1>
            <p className="text-sm text-gray-600">Manage pricing for this product's configuration options</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Banner */}
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Product-Specific Configuration Options</h3>
              <p className="text-sm text-blue-800">
                These options are specific to <strong>{productId}</strong>. 
                Changes here will only affect this product's configuration page and won't impact other products.
              </p>
            </div>
          </div>
        </div>

        {/* Options List */}
        <div className="space-y-6">
          {Object.entries(groupedOptions).map(([type, typeOptions]) => (
            <div key={type} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {typeLabels[type] || type}
              </h2>
              <div className="space-y-3">
                {typeOptions.map((option) => (
                  <div key={option.id} className={`p-4 border rounded-lg transition-all ${
                    option.enabled ? 'border-gray-200 hover:bg-gray-50' : 'border-gray-300 bg-gray-50 opacity-60'
                  }`}>
                    {editingOption === option.id ? (
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 mb-2">{option.label}</div>
                          <div className="flex items-center gap-2">
                            <label className="text-sm text-gray-600">Price (£):</label>
                            <input
                              type="number"
                              step="0.01"
                              value={editPrice}
                              onChange={(e) => setEditPrice(parseFloat(e.target.value) || 0)}
                              className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-32"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSavePrice(option.id)}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancel}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <div className="font-medium text-gray-900">{option.label}</div>
                            {!option.enabled && (
                              <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full">
                                Hidden
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            Value: {option.value} • Price: {option.price > 0 ? formatPrice(option.price) : 'Included'}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {/* Toggle Switch */}
                          <label className="flex items-center gap-2 cursor-pointer">
                            <span className="text-sm text-gray-600">Visible:</span>
                            <div className="relative">
                              <input
                                type="checkbox"
                                checked={option.enabled}
                                onChange={() => handleToggleEnabled(option.id)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </div>
                          </label>
                          <button
                            onClick={() => handleEdit(option)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm whitespace-nowrap"
                          >
                            Edit Price
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3">How Configuration Options Work</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li><strong>Colour:</strong> Customers can choose between Black or White (no additional cost by default)</li>
            <li><strong>Size:</strong> Display sizes 49" or 55" - edit prices as needed</li>
            <li><strong>CMS Add On:</strong> Yes/No option for Content Management System - edit the "Yes" price</li>
            <li><strong>CMS Subscription:</strong> If CMS is "No", shows N/A. If "Yes", customers choose 1 Year, 3 Years, or Unlimited</li>
            <li><strong>Visibility Toggle:</strong> Use the toggle switch to show/hide options on the product configuration page. Hidden options won't appear to customers.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-4">
            All changes (prices and visibility) are saved automatically and will apply to all products immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
