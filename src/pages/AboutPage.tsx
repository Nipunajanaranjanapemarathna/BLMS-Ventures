import React from "react";
import { Users, Target, Eye, Lightbulb, Award, Globe } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-gradient-to-br from-black via-gray-900 to-black text-white space-y-32 overflow-hidden">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-44 overflow-hidden"
        style={{ backgroundImage: "url('/aboutus.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-slide-up-delay">
          <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 bg-clip-text text-transparent animate-shimmer-text">
            About <span className="italic">BLMS</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto animate-fade-slide-up-delay-2">
            Powered by youth and vision, shaping the future of business and leisure innovation.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-6">

          {/* Headline */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-slide-left">
              <h2 className="text-4xl font-bold mb-6">Visionary Foundation</h2>
              <p className="text-lg text-gray-400 mb-4">
                Jointly founded by <span className="text-red-400 font-semibold">Frodenburg</span> and <span className="text-red-400 font-semibold">Together with Youth</span>,
                <span className="text-yellow-400 font-semibold"> BLMS</span> is a 50-50 partnership that combines experience with innovation.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Together, we craft a forward-looking ecosystem built on collaboration and creativity.
              </p>
              <div className="text-red-300 font-semibold text-xl">Frodenburg + Youth = <span className="text-yellow-400">BLMS</span></div>
            </div>

            <div className="bg-gradient-to-br from-red-700 to-pink-500 rounded-3xl p-10 shadow-2xl animate-fade-slide-right delay-200 hover:shadow-pink-600/60 transition-shadow duration-500">
              <blockquote className="text-2xl italic mb-4 text-white leading-relaxed">
                "The future belongs to those who dare to combine experience with innovation."
              </blockquote>
              <cite className="text-sm text-yellow-200">– Frodenburg, Co-Founder of BLMS</cite>
            </div>
          </div>

          {/* Logos with different card sizes, no rotation/glow animation */}
          <div className="flex justify-center items-center gap-12 mb-20 animate-fade-in">

            {/* Frodenburg Card - Larger card size */}
            <div
              className="relative rounded-3xl overflow-hidden border-4 border-gray-800 shadow-lg flex items-center justify-center"
              style={{ width: "14rem", height: "14rem" }}
            >
              <img
                src="public/mr.dilip.png"
                alt="Frodenburg Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Youth Card - Smaller card size */}
            <div
              className="relative rounded-3xl overflow-hidden border-4 border-gray-800 shadow-md flex items-center justify-center"
              style={{ width: "9rem", height: "9rem" }}
            >
              <img
                src="public/youth-founder.png"
                alt="Youth Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>

          </div>

          {/* Memories Gallery */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-3">Memorable Moments</h3>
            <p className="text-lg text-gray-400">Celebrating our journey through collaboration, innovation, and passion.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-slide-up delay-300">
            {[
              { size: "h-64", borderRadius: "rounded-xl", shadow: "shadow-lg", rotate: "rotate-0", overlayBg: "bg-pink-700" },
              { size: "h-48", borderRadius: "rounded-2xl", shadow: "shadow-md", rotate: "-rotate-2", overlayBg: "bg-purple-700" },
              { size: "h-56", borderRadius: "rounded-lg", shadow: "shadow-xl", rotate: "rotate-1", overlayBg: "bg-blue-700" },
              { size: "h-60", borderRadius: "rounded-3xl", shadow: "shadow-lg", rotate: "-rotate-1", overlayBg: "bg-red-700" },
              { size: "h-52", borderRadius: "rounded-xl", shadow: "shadow-md", rotate: "rotate-2", overlayBg: "bg-yellow-700" },
              { size: "h-44", borderRadius: "rounded-lg", shadow: "shadow-xl", rotate: "rotate-0", overlayBg: "bg-green-700" },
            ].map(({ size, borderRadius, shadow, rotate, overlayBg }, index) => (
              <div
                key={index}
                className={`relative overflow-hidden ${borderRadius} ${shadow} transform transition duration-300 hover:scale-[1.05] group ${rotate}`}
                style={{ willChange: "transform" }}
              >
                <img
                  src={`https://picsum.photos/600/400?random=${index + 1}`}
                  alt={`Memory ${index + 1}`}
                  className={`w-full object-cover ${size} transition duration-300`}
                />
                <div
                  className={`absolute inset-0 ${overlayBg} bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 text-center px-4`}
                >
                  <p className="text-white text-lg font-semibold">
                    {`Description for Memory ${index + 1}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[{
            title: "Our Vision",
            icon: <Eye className="w-8 h-8 text-white" />,
            desc: "To redefine global standards in business and leisure through innovation."
          }, {
            title: "Our Mission",
            icon: <Target className="w-8 h-8 text-white" />,
            desc: "Empowering enterprises and educating leaders via integrated solutions."
          }].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-[1.05] animate-fade-slide-up-delay"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-tr from-red-600 to-yellow-400 rounded-lg flex items-center justify-center mb-4 animate-pulse-slow">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-slide-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              From idea to impact — our evolution across industries is shaped by vision and action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              title: "Foundation",
              icon: <Lightbulb className="w-10 h-10 text-white" />,
              desc: "Vision materialized through youth collaboration."
            }, {
              title: "Expansion",
              icon: <Award className="w-10 h-10 text-white" />,
              desc: "Growth across tech, healthcare, and hospitality."
            }, {
              title: "Global Impact",
              icon: <Globe className="w-10 h-10 text-white" />,
              desc: "Reshaping industries with innovation."
            }].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-md
                  transform transition-transform duration-500 hover:scale-105 hover:shadow-red-600 animate-fade-slide-up-delay"
                style={{ animationDelay: `${i * 0.25}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-tr from-red-600 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-black via-red-800 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Values that inspire everything we do — boldness, unity, and integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Innovation", "Collaboration", "Excellence", "Integrity"].map((value, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl text-center
                  transform transition-transform duration-500 hover:scale-105 hover:shadow-red-600 animate-fade-slide-up-delay"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-red-400 mb-2">{value}</h3>
                <p className="text-gray-300">{`We prioritize ${value.toLowerCase()} in every decision and action.`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles */}
      <style >{`
        @keyframes shimmerText {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-shimmer-text {
          background-size: 200% 100%;
          animation: shimmerText 4s linear infinite;
        }

        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 1s ease forwards;
        }
        .animate-fade-slide-up-delay {
          animation: fadeSlideUp 1s ease forwards;
          animation-delay: 0.3s;
        }
        .animate-fade-slide-up-delay-2 {
          animation: fadeSlideUp 1s ease forwards;
          animation-delay: 0.6s;
        }

        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.85;
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
