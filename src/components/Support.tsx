
import React from 'react';
import { MessageCircle, Phone, Clock, HeadphonesIcon } from 'lucide-react';

const Support = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Help & Support
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant help and personalized support throughout your counseling journey
          </p>
        </div>

        {/* Support Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
            <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Support</h3>
            <p className="text-gray-600 text-sm">Instant messaging support for quick queries and updates</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">1:1 Call Support</h3>
            <p className="text-gray-600 text-sm">Personal consultation calls for detailed guidance</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
            <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Availability</h3>
            <p className="text-gray-600 text-sm">Round-the-clock support during counseling periods</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
            <HeadphonesIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Personal Mentorship</h3>
            <p className="text-gray-600 text-sm">Dedicated mentor support tailored to your needs</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Don't let counseling confusion stress you out. Get instant support from someone who's been through it all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/+919999999999?text=Hi%20Kavi,%20I%20need%20help%20with%20counseling"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Now</span>
            </a>
            
            <a
              href="tel:+919999999999"
              className="flex items-center space-x-2 bg-white text-orange-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Phone size={20} />
              <span>Call Direct</span>
            </a>
          </div>
          
          <p className="text-orange-200 text-sm mt-4">
            Available 24/7 during counseling season • Response within 15 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
