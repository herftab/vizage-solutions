'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAdminStore } from '@/lib/admin-store';
import { useProductAdminStore } from '@/lib/product-admin-store';
import Link from 'next/link';

export default function ProductGalleryPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  
  const { isAuthenticated } = useAdminStore();
  const { getProduct, addProductImage, removeProductImage, setProductMainImage } = useProductAdminStore();
  
  const [newImageUrl, setNewImageUrl] = useState('');
  const [product, setProduct] = useState(getProduct(productId));

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

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      addProductImage(productId, newImageUrl.trim());
      setNewImageUrl('');
      setProduct(getProduct(productId));
    }
  };

  const handleRemoveImage = (imageUrl: string) => {
    if (confirm('Are you sure you want to remove this image?')) {
      removeProductImage(productId, imageUrl);
      setProduct(getProduct(productId));
    }
  };

  const handleSetMainImage = (imageUrl: string) => {
    setProductMainImage(productId, imageUrl);
    setProduct(getProduct(productId));
  };

  const handleFixExtensions = () => {
    // Fix any image URLs missing .jpg extension
    const gallery = product.gallery || [];
    gallery.forEach((imageUrl) => {
      if (!imageUrl.endsWith('.jpg') && !imageUrl.endsWith('.png') && !imageUrl.endsWith('.jpeg')) {
        removeProductImage(productId, imageUrl);
        addProductImage(productId, `${imageUrl}.jpg`);
      }
    });
    setProduct(getProduct(productId));
    alert('Image extensions fixed! Please refresh the page.');
  };

  const allImages = [product.image, ...(product.gallery || [])];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div>
            <Link href="/admin/products" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
              ← Back to Products
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">{product.name} - Gallery</h1>
            <p className="text-sm text-gray-600">Manage product images</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add New Image */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Add New Image</h2>
            <button
              onClick={handleFixExtensions}
              className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Fix Missing Extensions
            </button>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              placeholder="/images/product-image.jpg"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleAddImage}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Image
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Enter the image path (e.g., /images/double-sided-display-2.jpg). Make sure the image is uploaded to the public/images folder.
          </p>
        </div>

        {/* Current Images */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Product Images</h2>
          
          {allImages.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No images yet. Add your first image above.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allImages.map((imageUrl, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={`${product.name} - Image ${index + 1}`}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  
                  {imageUrl === product.image && (
                    <div className="absolute top-2 left-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      Main Image
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      {imageUrl !== product.image && (
                        <button
                          onClick={() => handleSetMainImage(imageUrl)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
                        >
                          Set as Main
                        </button>
                      )}
                      {index > 0 && (
                        <button
                          onClick={() => handleRemoveImage(imageUrl)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-gray-500 truncate">
                    {imageUrl}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Image Upload Instructions</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
            <li>Upload your image file to the <code className="bg-blue-100 px-2 py-1 rounded">public/images/</code> folder</li>
            <li>Use descriptive filenames (e.g., double-sided-display-front.jpg)</li>
            <li>Enter the path starting with /images/ in the form above</li>
            <li>Click "Add Image" to add it to the gallery</li>
            <li>Set one image as the main product image</li>
            <li>Remove images you no longer need</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
