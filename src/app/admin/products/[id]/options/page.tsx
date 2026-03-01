'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAdminStore } from '@/lib/admin-store';
import { useProductAdminStore } from '@/lib/product-admin-store';
import Link from 'next/link';
import { formatPrice } from '@/lib/currency';
import { ProductOption } from '@/types';

export default function ProductOptionsPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  
  const { isAuthenticated } = useAdminStore();
  const { getProduct, addProductOption, updateProductOption, removeProductOption } = useProductAdminStore();
  
  const [product, setProduct] = useState(getProduct(productId));
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingOption, setEditingOption] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'size' as 'size' | 'mounting' | 'accessory' | 'cms' | 'installation',
    value: '',
    label: '',
    price: 0
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    setProduct(getProduct(productId));
  }, [productId, getProduct]);

  if (!isAuthenticated || !product) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingOption) {
      updateProductOption(productId, editingOption, formData);
      setEditingOption(null);
    } else {
      addProductOption(productId, formData);
    }
    
    setFormData({
      name: '',
      type: 'size',
      value: '',
      label: '',
      price: 0
    });
    setShowAddForm(false);
    setProduct(getProduct(productId));
  };

  const handleEdit = (option: ProductOption) => {
    setFormData({
      name: option.name,
      type: option.type,
      value: option.value,
      label: option.label,
      price: option.price
    });
    setEditingOption(option.id);
    setShowAddForm(true);
  };

  const handleRemove = (optionId: string) => {
    if (confirm('Are you sure you want to remove this option?')) {
      removeProductOption(productId, optionId);
      setProduct(getProduct(productId));
    }
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingOption(null);
    setFormData({
      name: '',
      type: 'size',
      value: '',
      label: '',
      price: 0
    });
  };

  const groupedOptions = (product.options || []).reduce((acc, option) => {
    if (!acc[option.type]) {
      acc[option.type] = [];
    }
    acc[option.type].push(option);
    return acc;
  }, {} as Record<string, ProductOption[]>);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/admin/products" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
                ← Back to Products
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">{product.name} - Options</h1>
              <p className="text-sm text-gray-600">Manage product-specific configuration options</p>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAddForm ? 'Cancel' : 'Add Option'}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add/Edit Option Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {editingOption ? 'Edit Option' : 'Add New Option'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Option Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 85 inch Display"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="size">Size</option>
                    <option value="mounting">Mounting</option>
                    <option value="accessory">Accessory</option>
                    <option value="cms">Content Management</option>
                    <option value="installation">Installation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Value (ID)
                  </label>
                  <input
                    type="text"
                    value={formData.value}
                    onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 85"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Display Label
                  </label>
                  <input
                    type="text"
                    value={formData.label}
                    onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder='e.g., 85" Display'
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Price (£)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Additional cost on top of base price. Use 0 for included options.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingOption ? 'Update Option' : 'Add Option'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Options List */}
        <div className="space-y-6">
          {Object.entries(groupedOptions).map(([type, options]) => (
            <div key={type} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                {type} Options
              </h2>
              <div className="space-y-3">
                {options.map((option) => (
                  <div key={option.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600">
                        Value: {option.value} • Additional Price: {option.price > 0 ? formatPrice(option.price) : 'Included'}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(option)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemove(option.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {Object.keys(groupedOptions).length === 0 && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <p className="text-gray-500 mb-4">No options configured for this product yet.</p>
              <button
                onClick={() => setShowAddForm(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add First Option
              </button>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Option Types</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-blue-800">
            <li><strong>Size:</strong> Display sizes (32", 43", 55", etc.)</li>
            <li><strong>Mounting:</strong> Installation methods (Wall, Ceiling, Floor, etc.)</li>
            <li><strong>Accessory:</strong> Additional hardware (Remote, Speakers, etc.)</li>
            <li><strong>CMS:</strong> Content management system tiers</li>
            <li><strong>Installation:</strong> Professional installation services</li>
          </ul>
          <p className="text-sm text-blue-800 mt-4">
            These options will appear on the product configuration page when customers click "Configure & Purchase".
          </p>
        </div>
      </div>
    </div>
  );
}
