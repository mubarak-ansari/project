import React from 'react';
import { Users, Truck, Shield, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">About ShopHub</h1>
        <p className="mt-4 text-base sm:text-lg text-gray-500">
          Your one-stop destination for all your shopping needs
        </p>
      </div>

      <div className="mt-12 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: "Customer First",
              description: "We prioritize our customers' satisfaction above everything else"
            },
            {
              icon: Truck,
              title: "Fast Delivery",
              description: "Quick and reliable shipping to your doorstep"
            },
            {
              icon: Shield,
              title: "Secure Shopping",
              description: "Your data and transactions are always protected"
            },
            {
              icon: Heart,
              title: "Quality Products",
              description: "Carefully curated products from trusted brands"
            }
          ].map((feature) => (
            <div key={feature.title} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-center">
                <feature.icon className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 sm:mt-16 bg-white rounded-lg shadow-sm p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">Our Story</h2>
        <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto">
          Founded in 2025, ShopHub has grown from a small online store to a comprehensive
          e-commerce platform. We believe in making quality products accessible to everyone
          while providing an exceptional shopping experience. Our commitment to customer
          satisfaction and product quality has made us a trusted name in online retail.
        </p>
      </div>
    </div>
  );
}