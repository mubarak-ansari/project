import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  total: number;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.product.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + product.price,
        };
      }
      return {
        items: [...state.items, { product, quantity: 1 }],
        total: state.total + product.price,
      };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
      total: state.total - (state.items.find((item) => item.product.id === productId)?.product.price || 0),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      const item = state.items.find((item) => item.product.id === productId);
      if (!item) return state;
      const priceDiff = item.product.price * (quantity - item.quantity);
      return {
        items: state.items.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        ),
        total: state.total + priceDiff,
      };
    }),
}));