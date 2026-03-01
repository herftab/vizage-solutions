import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AdminUser {
  email: string;
  name: string;
  role: 'super-admin' | 'admin';
  createdAt: string;
}

export interface ProductOption {
  id: string;
  name: string;
  type: 'size' | 'mounting' | 'accessory' | 'cms' | 'installation';
  value: string;
  label: string;
  price: number;
  applicableProducts: string[]; // product IDs this option applies to
}

interface AdminState {
  isAuthenticated: boolean;
  currentUser: AdminUser | null;
  adminUsers: AdminUser[];
  productOptions: ProductOption[];
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addAdminUser: (user: Omit<AdminUser, 'createdAt'>) => void;
  removeAdminUser: (email: string) => void;
  addProductOption: (option: Omit<ProductOption, 'id'>) => void;
  updateProductOption: (id: string, option: Partial<ProductOption>) => void;
  removeProductOption: (id: string) => void;
}

// Default super admin
const defaultAdmin: AdminUser = {
  email: 'andyherft@gmail.com',
  name: 'Andy Herft',
  role: 'super-admin',
  createdAt: new Date().toISOString()
};

// Simple password storage (in production, use proper authentication)
const adminPasswords: Record<string, string> = {
  'andyherft@gmail.com': 'admin123' // Change this password!
};

export const useAdminStore = create<AdminState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      currentUser: null,
      adminUsers: [defaultAdmin],
      productOptions: [],

      login: (email: string, password: string) => {
        const users = get().adminUsers;
        const user = users.find(u => u.email === email);
        
        if (user && adminPasswords[email] === password) {
          set({ isAuthenticated: true, currentUser: user });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ isAuthenticated: false, currentUser: null });
      },

      addAdminUser: (user) => {
        const newUser: AdminUser = {
          ...user,
          createdAt: new Date().toISOString()
        };
        set(state => ({
          adminUsers: [...state.adminUsers, newUser]
        }));
        // Set default password
        adminPasswords[user.email] = 'admin123';
      },

      removeAdminUser: (email) => {
        // Prevent removing super admin
        if (email === 'andyherft@gmail.com') return;
        
        set(state => ({
          adminUsers: state.adminUsers.filter(u => u.email !== email)
        }));
        delete adminPasswords[email];
      },

      addProductOption: (option) => {
        const newOption: ProductOption = {
          ...option,
          id: `opt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        };
        set(state => ({
          productOptions: [...state.productOptions, newOption]
        }));
      },

      updateProductOption: (id, updates) => {
        set(state => ({
          productOptions: state.productOptions.map(opt =>
            opt.id === id ? { ...opt, ...updates } : opt
          )
        }));
      },

      removeProductOption: (id) => {
        set(state => ({
          productOptions: state.productOptions.filter(opt => opt.id !== id)
        }));
      }
    }),
    {
      name: 'vizage-admin-storage'
    }
  )
);
