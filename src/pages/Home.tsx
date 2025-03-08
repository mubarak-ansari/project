import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900">
            <span className="block">Welcome to </span>
            <span className="block text-indigo-600">ShopHub</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl px-4">
            Discover amazing products across multiple categories. From the latest mobile phones to stylish furniture,
            we've got everything you need.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link
              to="/products"
              className="flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 w-full sm:w-auto"
            >
              <ShoppingBag className="mr-2" />
              Start Shopping
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 sm:mb-8 px-4 text-center sm:text-left">Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {['mobile', 'cloth', 'furniture', 'kitchen'].map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={`https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=600${category}`}
                    alt={category}
                    className="object-cover object-center w-full h-48 group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 capitalize group-hover:text-indigo-600 transition-colors duration-200">
                    {category}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}