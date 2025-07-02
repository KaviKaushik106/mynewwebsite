import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import YouTubeSection from "../components/YouTubeSection";
import {
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
} from "lucide-react";

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
                IPU Counselling 4.0
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert IPU counselling support with detailed college analysis,
                preference order optimization, and personalized guidance for
                maximum success.
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
            {/* Profile Intro Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-blue-200">
                <img
                  src="/kavi.jpg"
                  alt="Kavi Kaushik"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Kavi Kaushik</h3>
              <p className="text-blue-600 font-medium mb-2">DTU Student, ECE</p>
              <ul className="text-gray-700 text-sm space-y-1 mb-2 text-left">
                <li>✅ Helped 1000+ students</li>
                <li>✅ Practical college guidance</li>
              </ul>
              <p className="text-gray-500 text-xs">
                Your trusted mentor for counselling success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pricing & Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="flex flex-col bg-white rounded-2xl shadow-lg p-8 border border-gray-100 items-center text-center h-full">
              <div className="text-4xl mb-2">💸</div>
              <h3 className="text-xl font-bold mb-1">
                Plan 1: Choice Filling Order Only
              </h3>
              <div className="text-2xl font-bold text-blue-600 mb-1">₹199</div>
              <p className="text-gray-500 mb-4">
                Quick help with preference order
              </p>
              <ul className="text-gray-700 mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
                <li>✅ Personalized Choice Filling Order</li>
                <li>✅ Rank-Based Branch Strategy</li>
                <li>✅ Priority College List</li>
                <li>✅ WhatsApp Doubt Resolution</li>
              </ul>
              <a
                href="#GOOGLE_FORM_LINK_1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-center transition"
              >
                BUY NOW
              </a>
            </div>
            {/* Plan 2 - Most Popular */}
            <div className="flex flex-col bg-white rounded-2xl shadow-2xl p-8 border-2 border-blue-600 items-center text-center relative h-full">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                Most Popular
              </span>
              <div className="text-4xl mb-2">☎️</div>
              <h3 className="text-xl font-bold mb-1">
                Plan 2: WhatsApp + Call Support
              </h3>
              <div className="text-2xl font-bold text-blue-600 mb-1">₹499</div>
              <p className="text-gray-500 mb-4">
                Complete guidance for your counselling
              </p>
              <ul className="text-gray-700 mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
                <li>✅ WhatsApp Doubt Support</li>
                <li>✅ One-Time Live Call (20 mins)</li>
                <li>✅ Rank & Category Analysis</li>
                <li>✅ College & Branch Suggestion</li>
              </ul>
              <a
                href="#GOOGLE_FORM_LINK_2"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-center transition"
              >
                BUY NOW
              </a>
            </div>
            {/* Plan 3 */}
            <div className="flex flex-col bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-lg p-8 items-center text-center text-white h-full">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="text-xl font-bold mb-1">
                Plan 3: First Year Mentorship Program
              </h3>
              <div className="text-2xl font-bold mb-1">₹1499</div>
              <p className="mb-4">Complete 1st-year guidance pack</p>
              <ul className="mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
                <li>✅ 4 Live Google Meet Sessions</li>
                <li>✅ Resume Building Workshop</li>
                <li>✅ Coding Guidance + Roadmap</li>
                <li>✅ Clubs & Societies Direction</li>
                <li>✅ Internship Preparation Help</li>
                <li>✅ Academic & Semester Planning</li>
              </ul>
              <a
                href="#GOOGLE_FORM_LINK_3"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full bg-white text-blue-700 hover:bg-gray-100 py-3 rounded-lg font-semibold text-center transition"
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IPU Counselling Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete IPU counselling package with expert guidance and proven
              strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Complete IPU Analysis
              </h3>
              <p className="text-gray-600">
                Detailed analysis of all IPU affiliated colleges, their
                placement records, infrastructure, and faculty quality to make
                informed decisions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Preference List Optimization
              </h3>
              <p className="text-gray-600">
                Strategic preference order based on your rank and career goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Round-wise Strategy
              </h3>
              <p className="text-gray-600">
                Specific strategies for each counselling round and seat
                upgradation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Unlimited WhatsApp and call support throughout the process.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
              <CheckCircle className="w-8 h-8 text-yellow-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Document Guidance
              </h3>
              <p className="text-gray-600">
                Complete help with document verification and admission process.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
              <Clock className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Extended Support
              </h3>
              <p className="text-gray-600">
                6 months of continuous support and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About IPU Counselling
          </h2>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              🎓{" "}
              <strong>
                Complete IPU Counselling Solution for All Your Admission Needs
              </strong>
            </p>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📊 Detailed College Analysis
              </h3>
              <p>
                Get comprehensive insights into all IPU affiliated colleges,
                their placement records, infrastructure, and faculty quality to
                make informed decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🎯 Strategic Preference Planning
              </h3>
              <p>
                Customized preference list creation based on your rank,
                category, and career aspirations. Our data-driven approach
                maximizes your chances of getting the best college.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🔄 Round-wise Counselling Strategy
              </h3>
              <p>
                Specific guidance for each counselling round including seat
                upgradation strategies and float/freeze decisions to optimize
                your final seat allocation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                💬 Continuous Support
              </h3>
              <p>
                24/7 WhatsApp and call support throughout the IPU counselling
                process. Get instant answers to your queries and expert guidance
                at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <YouTubeSection
        title="IPU"
        description="Comprehensive video tutorials covering IPU counselling process, college analysis, and preference filling strategies."
      />

      <Footer />
    </div>
  );
};

export default Ipu;
