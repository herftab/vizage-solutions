import { create } from 'zustand';
import { CartItem, Product } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, selectedOptions?: CartItem['selectedOptions'], configuredPrice?: number) => void;
  removeItem: (productId: string, optionsKey?: string) => void;
  updateQuantity: (productId: string, quantity: number, optionsKey?: string) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (product, selectedOptions, configuredPrice) => {
    const items = get().items;
    
    // Create a unique key for this configuration
    const optionsKey = selectedOptions 
      ? JSON.stringify(selectedOptions)
      : 'no-options';
    
    // Check if this exact configuration already exists
    const existingItem = items.find(item => {
      const itemOptionsKey = item.selectedOptions 
        ? JSON.stringify(item.selectedOptions)
        : 'no-options';
      return item.id === product.id && itemOptionsKey === optionsKey;
    });
    
    if (existingItem) {
      set({
        items: items.map(item => {
          const itemOptionsKey = item.selectedOptions 
            ? JSON.stringify(item.selectedOptions)
            : 'no-options';
          return item.id === product.id && itemOptionsKey === optionsKey
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      });
    } else {
      const newItem: CartItem = {
        ...product,
        quantity: 1,
        selectedOptions,
        configuredPrice: configuredPrice || product.price
      };
      set({ items: [...items, newItem] });
    }
  },
  
  removeItem: (productId, optionsKey) => {
    if (optionsKey) {
      set({ 
        items: get().items.filter(item => {
          const itemOptionsKey = item.selectedOptions 
            ? JSON.stringify(item.selectedOptions)
            : 'no-options';
          return !(item.id === productId && itemOptionsKey === optionsKey);
        })
      });
    } else {
      set({ items: get().items.filter(item => item.id !== productId) });
    }
  },
  
  updateQuantity: (productId, quantity, optionsKey) => {
    if (quantity <= 0) {
      get().removeItem(productId, optionsKey);
      return;
    }
    
    set({
      items: get().items.map(item => {
        if (optionsKey) {
          const itemOptionsKey = item.selectedOptions 
            ? JSON.stringify(item.selectedOptions)
            : 'no-options';
          return item.id === productId && itemOptionsKey === optionsKey
            ? { ...item, quantity }
            : item;
        }
        return item.id === productId ? { ...item, quantity } : item;
      }),
    });
  },
  
  clearCart: () => set({ items: [] }),
  
  total: () => {
    return get().items.reduce((sum, item) => {
      const itemPrice = item.configuredPrice || item.price;
      return sum + itemPrice * item.quantity;
    }, 0);
  },
}));
