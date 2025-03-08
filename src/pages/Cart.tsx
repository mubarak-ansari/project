import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, total, removeFromCart, updateQuantity } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
        <div className="text-center py-12">
          <p className="text-gray-500 mb-6">Your cart is empty</p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1 mt-4 sm:mt-0 sm:ml-4">
                <h3 className="text-lg font-medium text-gray-900">{item.product.name}</h3>
                <p className="mt-1 text-gray-500">${item.product.price}</p>
              </div>
              <div className="flex items-center mt-4 sm:mt-0">
                <button
                  onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="mx-2 w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <Plus className="h-5 w-5" />
                </button>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="ml-4 p-1 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
          <span className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Total: ${total.toFixed(2)}</span>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/products"
              className="px-6 py-3 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 text-center"
            >
              Continue Shopping
            </Link>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}