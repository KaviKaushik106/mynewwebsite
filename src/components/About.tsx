
import React from 'react';
import { GraduationCap, Users, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">Kavi Kaushik</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Hey there! I'm Kavi Kaushik, a 3rd year student at Delhi Technological University (DTU). 
              Beyond academics, I'm passionate about helping fellow students navigate the complex world 
              of college admissions and counseling.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <GraduationCap className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Academic Excellence</h4>
                  <p className="text-gray-600">Currently pursuing B.Tech at DTU with hands-on experience in the admission process</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                  <p className="text-gray-600">Successfully guided 1000+ students through various counseling processes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Personal Touch</h4>
                  <p className="text-gray-600">HR background and content creation skills help me connect with students personally</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Strategic Guidance</h4>
                  <p className="text-gray-600">Personalized counseling strategies based on individual ranks and preferences</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
              <h4 className="font-semibold text-gray-900 mb-2">My Mission</h4>
              <p className="text-gray-600">
                To simplify the college admission journey for every student by providing clear, 
                personalized guidance that removes confusion and maximizes opportunities.
              </p>
            </div>
          </div>

          {/* Image/Stats */}
          <div className="lg:text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                K
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Kavi Kaushik</h3>
              <p className="text-orange-600 font-medium mb-4">College Counseling Expert</p>
              <p className="text-gray-600">DTU Student • HR • Content Creator • Mentor</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Students Guided</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">3+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
