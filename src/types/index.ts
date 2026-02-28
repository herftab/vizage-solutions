export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  inventory: number;
  features?: string[];
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
