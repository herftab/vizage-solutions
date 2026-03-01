import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, ProductOption } from '@/types';
import { products as initialProducts } from './products';

interface ProductAdminState {
  products: Product[];
  updateProductPrice: (id: string, price: number) => void;
  updateProductInventory: (id: string, inventory: number) => void;
  updateProductStock: (id: string, inStock: boolean) => void;
  addProductImage: (id: string, imageUrl: string) => void;
  removeProductImage: (id: string, imageUrl: string) => void;
  setProductMainImage: (id: string, imageUrl: string) => void;
  addProductOption: (productId: string, option: Omit<ProductOption, 'id'>) => void;
  updateProductOption: (productId: string, optionId: string, updates: Partial<ProductOption>) => void;
  removeProductOption: (productId: string, optionId: string) => void;
  getProduct: (id: string) => Product | undefined;
}

export const useProductAdminStore = create<ProductAdminState>()(
  persist(
    (set, get) => ({
      products: initialProducts,

      updateProductPrice: (id, price) => {
        set(state => ({
          products: state.products.map(p =>
            p.id === id ? { ...p, price } : p
          )
        }));
      },

      updateProductInventory: (id, inventory) => {
        set(state => ({
          products: state.products.map(p =>
            p.id === id ? { ...p, inventory, inStock: inventory > 0 } : p
          )
        }));
      },

      updateProductStock: (id, inStock) => {
        set(state => ({
          products: state.products.map(p =>
            p.id === id ? { ...p, inStock } : p
          )
        }));
      },

      addProductImage: (id, imageUrl) => {
        set(state => ({
          products: state.products.map(p =>
            p.id === id
              ? { ...p, gallery: [...(p.gallery || []), imageUrl] }
              : p
          )
        }));
      },

      removeProductImage: (id, imageUrl) => {
        set(state => ({
          products: state.products.map(p =>
            p.id === id
              ? { ...p, gallery: (p.gallery || []).filter(img => img !== imageUrl) }
              : p
          )
        }));
      },

      setProductMainImage: (id, imageUrl) => {
        set(state => ({
          products: state.products.map(p =>
            p.id === id ? { ...p, image: imageUrl } : p
          )
        }));
      },

      addProductOption: (productId, option) => {
        const newOption: ProductOption = {
          ...option,
          id: `opt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        };
        set(state => ({
          products: state.products.map(p =>
            p.id === productId
              ? { ...p, options: [...(p.options || []), newOption] }
              : p
          )
        }));
      },

      updateProductOption: (productId, optionId, updates) => {
        set(state => ({
          products: state.products.map(p =>
            p.id === productId
              ? {
                  ...p,
                  options: (p.options || []).map(opt =>
                    opt.id === optionId ? { ...opt, ...updates } : opt
                  )
                }
              : p
          )
        }));
      },

      removeProductOption: (productId, optionId) => {
        set(state => ({
          products: state.products.map(p =>
            p.id === productId
              ? {
                  ...p,
                  options: (p.options || []).filter(opt => opt.id !== optionId)
                }
              : p
          )
        }));
      },

      getProduct: (id) => {
        return get().products.find(p => p.id === id);
      }
    }),
    {
      name: 'vizage-product-admin-storage'
    }
  )
);
