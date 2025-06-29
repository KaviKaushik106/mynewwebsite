
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import YouTubeSection from '../components/YouTubeSection';
import { GraduationCap, CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react';

const Ipu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 mr-3" />
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                  IPU Specialized
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                IPU Counseling 4.0
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert IPU counseling support with detailed college analysis, preference order optimization, 
                and personalized guidance for maximum success.
              </p>
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>300+ Students Guided</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Expert Analysis</span>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <div className="text-center mb-6">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  LIMITED TIME OFFER
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-3xl font-bold text-blue-600">₹999</span>
                  <span className="text-lg text-gray-500 line-through">₹1,499</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">34% off</span>
                </div>
              </div>
              
              <a
                href="https://forms.google.com/your-ipu-form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center"
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                Validity: 6 Months | Full refund guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IPU Counseling Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete IPU counseling package with expert guidance and proven strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Complete IPU Analysis</h3>
              <p className="text-gray-600">Detailed analysis of all IPU colleges, branches, and placement records.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Preference List Optimization</h3>
              <p className="text-gray-600">Strategic preference order based on your rank and career goals.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Round-wise Strategy</h3>
              <p className="text-gray-600">Specific strategies for each counseling round and seat upgradation.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Unlimited WhatsApp and call support throughout the process.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
              <CheckCircle className="w-8 h-8 text-yellow-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Document Guidance</h3>
              <p className="text-gray-600">Complete help with document verification and admission process.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
              <Clock className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Extended Support</h3>
              <p className="text-gray-600">6 months of continuous support and guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About IPU Counseling
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              🎓 <strong>Complete IPU Counseling Solution for All Your Admission Needs</strong>
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Detailed College Analysis</h3>
              <p>Get comprehensive insights into all IPU affiliated colleges, their placement records, infrastructure, and faculty quality to make informed decisions.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Strategic Preference Planning</h3>
              <p>Customized preference list creation based on your rank, category, and career aspirations. Our data-driven approach maximizes your chances of getting the best college.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔄 Round-wise Counseling Strategy</h3>
              <p>Specific guidance for each counseling round including seat upgradation strategies and float/freeze decisions to optimize your final seat allocation.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💬 Continuous Support</h3>
              <p>24/7 WhatsApp and call support throughout the IPU counseling process. Get instant answers to your queries and expert guidance at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <YouTubeSection 
        title="IPU"
        description="Comprehensive video tutorials covering IPU counseling process, college analysis, and preference filling strategies."
      />

      <Footer />
    </div>
  );
};

export default Ipu;
