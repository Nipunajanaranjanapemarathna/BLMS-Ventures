import React from "react";
import { ArrowRight, Users, Lightbulb, Target, Award } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        className="w-full min-h-screen flex items-center justify-center relative bg-cover bg-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('public/hero02.png')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {/* Dark animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900/80 animate-gradient-x z-10"></div>

        <div className="container mx-auto px-6 relative z-20 animate-float-up">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-yellow-400 to-white bg-clip-text text-transparent animate-shimmer-text">
              Empowering Innovation in Business & Leisure
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 opacity-90 animate-fade-slide-up-delay">
              BLMS leads the future of integrated management through youth-powered
              solutions and visionary leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-slide-up-delay-2">
              <button
                onClick={() => onNavigate("about")}
                className="relative overflow-hidden px-10 py-4 rounded-lg bg-gradient-to-r from-blue-500 via-red-500 to-pink-500 text-white font-semibold
                hover:from-pink-600 hover:via-red-700 hover:to-blue-700 transition-all duration-500
                shadow-lg hover:shadow-pink-600/70
                transform hover:scale-105 flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                <span className="absolute inset-0 bg-white opacity-10 rounded-lg -left-full animate-slide-shine"></span>
              </button>
              <button
                onClick={() => onNavigate("subsidiaries")}
                className="relative px-10 py-4 rounded-lg border-2 border-white text-white font-semibold
                hover:bg-white hover:text-blue-900 transition-colors duration-300
                shadow-md hover:shadow-blue-400/70
                transform hover:scale-105"
              >
                Our Companies
              </button>
            </div>
          </div>
        </div>

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
            animation: shimmerText 5s linear infinite;
          }
          @keyframes slideShine {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }
          .animate-slide-shine {
            animation: slideShine 2.5s ease-in-out infinite;
          }
          @keyframes fadeSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-slide-up-delay {
            animation: fadeSlideUp 1s ease forwards;
            animation-delay: 0.5s;
          }
          .animate-fade-slide-up-delay-2 {
            animation: fadeSlideUp 1s ease forwards;
            animation-delay: 1s;
          }
          @keyframes gradientX {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradientX 15s ease infinite;
          }
          @keyframes floatUpDown {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-12px);
            }
          }
          .animate-float-up {
            animation: floatUpDown 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-slide-up">
            <h2 className="text-5xl font-bold text-red-600 mb-4 tracking-wide relative inline-block">
              What Sets Us Apart
              <span
                className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-400 via-red-600 to-red-400
          animate-shimmer rounded-full"
              ></span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Jointly founded by{" "}
              <span className="text-white font-semibold">Frodenburg</span> and{" "}
              <span className="text-white font-semibold">Together with Youth</span>,{" "}
              <span className="text-white font-semibold"> BLMS</span> is a 50-50
              partnership that combines the wisdom of experience with the power of
              youth-driven innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "Youth-Powered Innovation",
                desc: "Harnessing the creativity and energy of young innovators to drive breakthrough solutions.",
                iconBgFrom: "red-700",
                iconBgTo: "red-500",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-white" />,
                title: "Visionary Leadership",
                desc: "Led by Foidenberg's expertise and commitment to transforming business management.",
                iconBgFrom: "red-600",
                iconBgTo: "red-500",
              },
              {
                icon: <Target className="w-8 h-8 text-white" />,
                title: "Integrated Solutions",
                desc: "Comprehensive management services across technology, health, and hospitality sectors.",
                iconBgFrom: "red-800",
                iconBgTo: "red-500",
              },
              {
                icon: <Award className="w-8 h-8 text-white" />,
                title: "Excellence Standard",
                desc: "Setting new benchmarks in service quality and innovative business practices.",
                iconBgFrom: "yellow-600",
                iconBgTo: "red-500",
              },
            ].map(({ icon, title, desc, iconBgFrom, iconBgTo }, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-tr from-red-900 via-gray-800 to-black p-8 rounded-2xl shadow-2xl
            transform transition-all duration-400 group hover:scale-[1.07] hover:shadow-red-600"
              >
                <div
                  className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6
              bg-gradient-to-br from-${iconBgFrom} to-${iconBgTo}
              group-hover:scale-110 group-hover:animate-pulse transition-transform`}
                >
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-300">{desc}</p>
                <button
                  className="mt-6 px-6 py-2 rounded-full border-2 border-transparent
              bg-gradient-to-r from-red-600 to-red-400
              text-white font-semibold
              group-hover:border-red-400
              group-hover:shadow-[0_0_15px_rgba(255,0,0,0.75)]
              transition-all duration-300 ease-in-out
              hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        <style >{`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
          .animate-shimmer {
            background-size: 200% 100%;
            animation: shimmer 3s linear infinite;
          }
          @keyframes fadeSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-slide-up {
            animation: fadeSlideUp 1s ease forwards;
          }
        `}</style>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-900 via-gray-800 to-black  text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-slide-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-slide-up delay-200">
            Join the revolution in business and leisure management. Let's create
            something extraordinary together.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center group animate-fade-slide-up delay-300"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <style >{`
          @keyframes fadeSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-slide-up {
            animation: fadeSlideUp 1s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
        `}</style>
      </section>
    </div>
  );
};

export default HomePage;
