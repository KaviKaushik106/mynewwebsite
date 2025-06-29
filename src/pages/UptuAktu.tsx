
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import YouTubeSection from '../components/YouTubeSection';
import { School, CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react';

const UptuAktu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <School className="w-8 h-8 mr-3" />
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                  UPTU/AKTU Expert
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                UPTU/AKTU Counseling 4.0
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Comprehensive UPTU/AKTU counseling with rank-based college recommendations, 
                strategic branch selection, and personalized mentorship support.
              </p>
              <div className="flex items-center space-x-6 text-green-100">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>400+ Students Helped</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <div className="text-center mb-6">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  SPECIAL LAUNCH PRICE
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-3xl font-bold text-green-600">₹999</span>
                  <span className="text-lg text-gray-500 line-through">₹1,499</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">34% off</span>
                </div>
              </div>
              
              <a
                href="https://forms.google.com/your-uptu-aktu-form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center"
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                Validity: 6 Months | Satisfaction guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">UPTU/AKTU Counseling Package</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for successful UPTU/AKTU counseling and admission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Rank-Based Recommendations</h3>
              <p className="text-gray-600">College suggestions tailored specifically to your UPTU/AKTU rank and category.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl border border-teal-200">
              <CheckCircle className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Branch Selection Strategy</h3>
              <p className="text-gray-600">Expert guidance on choosing the right branch based on career prospects and interests.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">College Comparison</h3>
              <p className="text-gray-600">Detailed comparison of UPTU/AKTU affiliated colleges with placement data.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Counseling Process Guide</h3>
              <p className="text-gray-600">Step-by-step guidance through the entire UPTU/AKTU counseling process.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Unlimited Support</h3>
              <p className="text-gray-600">24/7 WhatsApp and call support throughout your counseling journey.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
              <Clock className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">6 Months Access</h3>
              <p className="text-gray-600">Extended support covering the entire admission and counseling period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About UPTU/AKTU Counseling
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              🏫 <strong>Complete UPTU/AKTU Counseling Support for Uttar Pradesh Students</strong>
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Rank-Based College Selection</h3>
              <p>Get personalized college recommendations based on your UPTU/AKTU rank, category, and preferences. Our data-driven approach helps you make the best choice.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔬 Strategic Branch Selection</h3>
              <p>Expert guidance on choosing between different engineering branches based on career prospects, placement records, and your interests.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🏛️ College Analysis & Comparison</h3>
              <p>Comprehensive analysis of UPTU/AKTU affiliated colleges including infrastructure, faculty, placement records, and fee structure comparison.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Complete Process Support</h3>
              <p>End-to-end support from counseling registration to final seat allotment, including document verification and admission formalities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <YouTubeSection 
        title="UPTU/AKTU"
        description="Detailed video guides covering UPTU/AKTU counseling process, college selection strategies, and branch comparison analysis."
      />

      <Footer />
    </div>
  );
};

export default UptuAktu;
