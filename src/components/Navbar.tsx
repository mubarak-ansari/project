import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Menu className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 font-bold text-xl">ShopHub</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-indigo-600" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}