import React from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                K
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">Kavi Kaushik</h3>
                <p className="text-gray-400">Counselling</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Simplifying your college journey with real mentorship and
              personalized guidance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/+919675316488"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="tel:+919675316488"
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:kavikaushik9675@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/jac-delhi"
                  className="hover:text-white transition-colors"
                >
                  JAC Delhi Counselling
                </a>
              </li>
              <li>
                <a href="/ipu" className="hover:text-white transition-colors">
                  IPU Counselling
                </a>
              </li>
              <li>
                <a
                  href="/uptu-aktu"
                  className="hover:text-white transition-colors"
                >
                  UPTU/AKTU Counselling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  1:1 Mentorship
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone size={16} className="mr-3" />
                <span>+91 96753 16488</span>
              </div>
              <div className="flex items-center">
                <MessageCircle size={16} className="mr-3" />
                <span>WhatsApp Available 24/7</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3" />
                <span>kavikaushik9675@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-3" />
                <span>Delhi Technological University</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kavi Kaushik Counselling. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Helping students achieve their college dreams since 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
