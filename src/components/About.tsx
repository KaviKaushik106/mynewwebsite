import React from "react";
import { GraduationCap, Users, Heart, Lightbulb } from "lucide-react";

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
            Hey! I'm Kavi Kaushik, a 3rd-year student at Delhi Technological University (DTU).
            A few years ago, I was in the same spot you're in right now — confused about counselling forms, overwhelmed by rank vs college pressure, and constantly second-guessing my choices.
            I know how stressful this process can be, especially when there’s no one to give real, practical advice.
That’s exactly why I started helping others — to make sure no student feels lost like I once did.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <GraduationCap className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Academic Excellence
                  </h4>
                  <p className="text-gray-600">
                    Currently pursuing B.Tech at DTU with hands-on experience in
                    the admission process
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Proven Track Record
                  </h4>
                  <p className="text-gray-600">
                    Successfully guided 1000+ students through various
                    counselling processes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Personal Touch
                  </h4>
                  <p className="text-gray-600">
                  Years of counseling experience and real conversations with students have taught me how to connect on a personal level — not just with their rank, but with their fears, hopes, and goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Strategic Guidance
                  </h4>
                  <p className="text-gray-600">
                    Personalized counselling strategies based on individual
                    ranks and preferences
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
              <h4 className="font-semibold text-gray-900 mb-2">My Mission</h4>
              <p className="text-gray-600">
                To simplify the college admission journey for every student by
                providing clear, personalized guidance that removes confusion
                and maximizes opportunities.
              </p>
            </div>
          </div>

          {/* Image/Stats */}
          <div className="lg:text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/kavi.jpg"
                  alt="Kavi Kaushik"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Kavi Kaushik
              </h3>
              <p className="text-orange-600 font-medium mb-4">
                College Counselling Expert
              </p>
              <p className="text-gray-600">
                DTU Student • Content Creator • Mentor • Counselling Expert • JAC/IPU/AKTU
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  1000+
                </div>
                <div className="text-gray-600 font-medium">Students Guided</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  3+
                </div>
                <div className="text-gray-600 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">
                  Support Available
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  100%
                </div>
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
