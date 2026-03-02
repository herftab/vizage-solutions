export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  gallery?: string[]; // Additional product images
  category: string;
  inStock: boolean;
  inventory: number;
  features?: string[];
  options?: ProductOption[]; // Product-specific options
}

export interface ProductOption {
  id: string;
  name: string;
  type: 'size' | 'mounting' | 'accessory' | 'cms' | 'installation' | 'colour' | 'subscription';
  value: string;
  label: string;
  price: number;
  dependsOn?: {
    type: string;
    value: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerEmail: string;
  customerName: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}
