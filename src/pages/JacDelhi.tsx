
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import YouTubeSection from '../components/YouTubeSection';
import { MapPin, CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react';

const JacDelhi = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 mr-3" />
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                  JAC Delhi Specialized
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                JAC Delhi Counseling 4.0
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Complete guidance for JAC Delhi counseling with personalized preference lists, 
                strategic college selection, and 1:1 mentorship support.
              </p>
              <div className="flex items-center space-x-6 text-orange-100">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>500+ Students Guided</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>100% Success Rate</span>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <div className="text-center mb-6">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  EARLY BIRD OFFER
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-3xl font-bold text-orange-600">₹999</span>
                  <span className="text-lg text-gray-500 line-through">₹1,499</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">34% off</span>
                </div>
              </div>
              
              <a
                href="https://forms.google.com/your-jac-delhi-form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center"
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                Validity: 6 Months | Money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Get</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive JAC Delhi counseling support designed to maximize your college admission success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Unlimited Call & WhatsApp Support</h3>
              <p className="text-gray-600">Get your queries resolved anytime during the counseling process.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">1:1 Mentorship</h3>
              <p className="text-gray-600">Personalized guidance tailored to your rank and preferences from DTU/NSUT/IIITD mentors.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Best Handcrafted Preference List</h3>
              <p className="text-gray-600">Strategic college selection optimized for JAC-Delhi counseling.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Setu Chat Support</h3>
              <p className="text-gray-600">Day-to-day doubt resolution through dedicated chat support.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
              <CheckCircle className="w-8 h-8 text-yellow-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
              <p className="text-gray-600">Stay updated with all notices and circulars throughout the process.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
              <Clock className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">6 Months Validity</h3>
              <p className="text-gray-600">Complete support throughout the entire counseling season.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About JAC Delhi Counseling
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              ⭐ <strong>Prachand Batch: A One-Stop Solution to All Your Counseling Doubts</strong>
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📞 Unlimited Call & WhatsApp Support</h3>
              <p>Get your queries resolved anytime during the JAC Delhi counseling process. Direct access to expert guidance when you need it most.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎓 1:1 Mentorship</h3>
              <p>Personalized guidance tailored to your rank and preferences. Get strategic advice from mentors who have successfully navigated the DTU/NSUT/IIITD admission process.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibent text-gray-900 mb-4">🏛️ Customized Choice Filling</h3>
              <p>Strategic selection of colleges for both JEE Main & Advanced counseling rounds. Our handcrafted preference lists are designed specifically for JAC Delhi's unique process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <YouTubeSection 
        title="JAC Delhi"
        description="Watch detailed video guides covering every aspect of JAC Delhi counseling process, from registration to final seat allotment."
      />

      <Footer />
    </div>
  );
};

export default JacDelhi;
