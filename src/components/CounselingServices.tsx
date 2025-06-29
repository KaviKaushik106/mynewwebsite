
import React from 'react';
import { ArrowRight, MapPin, GraduationCap, School } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'jac-delhi',
    title: 'JAC Delhi Counseling',
    description: 'Complete guidance for JAC Delhi counseling process with personalized preference lists and strategic college selection.',
    icon: MapPin,
    gradient: 'from-orange-500 to-red-500',
    route: '/jac-delhi'
  },
  {
    id: 'ipu',
    title: 'IPU Counseling',
    description: 'Expert IPU counseling support with detailed college analysis and preference order optimization.',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-purple-500',
    route: '/ipu'
  },
  {
    id: 'uptu-aktu',
    title: 'UPTU/AKTU Counseling',
    description: 'Comprehensive UPTU/AKTU counseling with rank-based college recommendations and branch selection.',
    icon: School,
    gradient: 'from-green-500 to-teal-500',
    route: '/uptu-aktu'
  }
];

const CounselingServices = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Counseling Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized guidance for each counseling process with personalized support and proven strategies
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${service.gradient} p-6`}>
                  <Icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Personalized Preference List
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      1:1 Mentorship & Support
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      24/7 WhatsApp Assistance
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => navigate(service.route)}
                    className="w-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 group-hover:shadow-lg"
                  >
                    Explore
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CounselingServices;
