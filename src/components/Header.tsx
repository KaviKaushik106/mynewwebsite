
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
              K
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">Kavi Kaushik</h1>
              <p className="text-sm text-gray-600">Counselling</p>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/+919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href="tel:+919999999999"
              className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">Call</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
