'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminStore } from '@/lib/admin-store';
import { useProductAdminStore } from '@/lib/product-admin-store';
import Link from 'next/link';
import { formatPrice } from '@/lib/currency';

export default function AdminProductsPage() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAdminStore();
  const { products, updateProductPrice, updateProductInventory, updateProductStock } = useProductAdminStore();
  
  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState('');
  const [editInventory, setEditInventory] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  const handleEditProduct = (productId: string, price: number, inventory: number) => {
    setEditingProduct(productId);
    setEditPrice(price.toString());
    setEditInventory(inventory.toString());
  };

  const handleSaveProduct = (productId: string) => {
    const price = parseFloat(editPrice);
    const inventory = parseInt(editInventory);
    
    if (!isNaN(price) && price >= 0) {
      updateProductPrice(productId, price);
    }
    if (!isNaN(inventory) && inventory >= 0) {
      updateProductInventory(productId, inventory);
    }
    
    setEditingProduct(null);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setEditPrice('');
    setEditInventory('');
  };

  const handleToggleStock = (productId: string, currentStock: boolean) => {
    updateProductStock(productId, !currentStock);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/admin/dashboard" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
                ← Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Manage Products</h1>
            </div>
            <button
              onClick={() => logout()}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Inventory
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-contain bg-gray-100 rounded-lg"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">{product.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {editingProduct === product.id ? (
                        <input
                          type="number"
                          step="0.01"
                          value={editPrice}
                          onChange={(e) => setEditPrice(e.target.value)}
                          className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <span className="font-semibold text-gray-900">{formatPrice(product.price)}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingProduct === product.id ? (
                        <input
                          type="number"
                          value={editInventory}
                          onChange={(e) => setEditInventory(e.target.value)}
                          className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <span className="text-gray-900">{product.inventory} units</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleStock(product.id, product.inStock)}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          product.inStock
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        } transition-colors`}
                      >
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      {editingProduct === product.id ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSaveProduct(product.id)}
                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditProduct(product.id, product.price, product.inventory)}
                            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                          >
                            Edit
                          </button>
                          <Link
                            href={`/admin/products/${product.id}/options`}
                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm inline-block"
                          >
                            Options
                          </Link>
                          <Link
                            href={`/admin/products/${product.id}/gallery`}
                            className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm"
                          >
                            Gallery
                          </Link>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
