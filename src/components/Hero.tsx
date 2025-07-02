import React from "react";
import { ArrowRight, Star, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            1000+ Students Successfully Guided
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Kavi Kaushik</span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Counselling
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Simplifying Your College Journey with Real Mentorship
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Expert guidance for JEE, IPU & AKTU college admissions. Get
            personalized preference lists, 1:1 mentorship, and round-the-clock
            support during counseling season.
          </p>

          {/* CTA Button */}
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScSA85VI3ATtZZB0PtHPLg4Zxm-9UPXaDGc6qTj46DOvOavPw/viewform?usp=header",
                "_blank"
              )
            }
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-orange-500" />
              <span className="text-gray-700 font-medium">
                1000+ Students Guided
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-orange-500" />
              <span className="text-gray-700 font-medium">
                DTU 3rd Year Student
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-orange-500" />
              <span className="text-gray-700 font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
