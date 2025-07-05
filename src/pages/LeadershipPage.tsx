import React from "react";
import { Award, Users, Lightbulb, Target, Globe, TrendingUp } from "lucide-react";

const LeadershipPage: React.FC = () => {
  const boardMembers = [
    {
      name: "Mr. Mohan Perera",
      title: "Founder & Chief Executive Officer",
      image:
        "public/mr_mohan.png",
      bio: "Visionary leader and founder of BLMS, bringing together decades of business excellence with innovative youth collaboration.",
      expertise: [
        "Strategic Leadership",
        "Business Development",
        "Innovation Management",
      ],
    },
    {
      name: "Mr. Dilip Fernando",
      title: "Founder & Chairman",
      image:
        "public/mr.dilip.png",
      bio: "Dynamic CEO driving operational excellence and strategic growth across all BLMS subsidiaries.",
      expertise: [
        "Operations Management",
        "Strategic Planning",
        "Corporate Development",
      ],
    },
    {
      name: "Marcus Rodriguez",
      title: "Chief Technology Officer",
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Technology visionary leading digital transformation initiatives and AI development at Xlogica.",
      expertise: ["AI Development", "Digital Innovation", "Technology Strategy"],
    },
    {
      name: "Dr. Elena Vasquez",
      title: "Chief Medical Officer",
      image:
        "https://images.pexels.com/photos/3279203/pexels-photo-3279203.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Leading medical professional overseeing healthcare innovation and research at IHMI.",
      expertise: [
        "Medical Research",
        "Healthcare Innovation",
        "Clinical Excellence",
      ],
    },
    // repeated entries omitted for brevity - you can keep or adjust as needed
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-20 relative overflow-hidden"
        style={{ backgroundImage: "url('public/leadership0.png')" }}
      >
        <div className="bg-gradient-to-r from-red-950 to-blue-900/70 py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent animate-shimmer-text">
                Leadership Team
              </h1>
              <p className="text-xl text-gray-100 mb-8 animate-fade-slide-up">
                Meet the visionary leaders and innovative minds driving BLMS
                forward. Our unique blend of experienced executives and youth
                innovators creates the perfect environment for groundbreaking
                achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      {/* Board of Directors */}
<section className="py-20">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16 animate-fade-slide-up">
      <h2 className="text-4xl font-bold text-red-700 mb-4">Board of Directors</h2>
      <p className="text-lg text-gray-400 max-w-3xl mx-auto">
        Our distinguished board combines decades of industry expertise with strategic vision, guiding BLMS toward continued excellence and innovation.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {boardMembers.map((member, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 rounded-2xl shadow-xl overflow-hidden
            hover:shadow-red-800 transition-shadow duration-300 group transform-gpu
            animate-fade-slide-up-delay"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="aspect-w-1 aspect-h-1 w-full h-64 bg-gradient-to-br from-red-900 to-blue-900 overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
            <h3 className="text-xl font-bold text-red-300 mb-1">{member.name}</h3>
            <p className="text-red-500 font-semibold mb-3">{member.title}</p>
            <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
            <div className="space-y-1">
              {member.expertise.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="inline-block bg-gradient-to-r from-red-700 to-red-500 text-white px-2 py-1 rounded-full text-xs mr-1 transition-transform duration-300 group-hover:scale-110"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Leadership Philosophy */}
<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16 animate-fade-slide-up">
        <h2 className="text-5xl font-extrabold mb-4 tracking-wide bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
          Leadership Philosophy
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our leadership approach combines wisdom with innovation, creating an environment where experience and fresh perspectives unite to achieve extraordinary results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            colorFrom: "blue-800",
            colorTo: "blue-600",
            icon: <Users className="w-14 h-14 mb-6 animate-pulse-slow drop-shadow-lg text-blue-300" />,
            title: "Collaborative Leadership",
            desc: `We believe in the power of diverse perspectives. Our leadership model encourages collaboration between experienced executives and innovative youth leaders.`,
          },
          {
            colorFrom: "indigo-800",
            colorTo: "indigo-600",
            icon: <Target className="w-14 h-14 mb-6 animate-pulse-slow drop-shadow-lg text-indigo-300" />,
            title: "Purpose-Driven Vision",
            desc: `Every decision is guided by our commitment to creating positive impact and sustainable value for all stakeholders across our ecosystem.`,
          },
          {
            colorFrom: "purple-800",
            colorTo: "purple-600",
            icon: <Lightbulb className="w-14 h-14 mb-6 animate-pulse-slow drop-shadow-lg text-purple-300" />,
            title: "Innovation First",
            desc: `Innovation is at the heart of our leadership philosophy. We empower our teams to think differently and challenge conventional approaches.`,
          },
          {
            colorFrom: "green-800",
            colorTo: "green-600",
            icon: <Globe className="w-14 h-14 mb-6 animate-pulse-slow drop-shadow-lg text-green-300" />,
            title: "Global Impact",
            desc: `Our leadership team is committed to creating solutions that have global reach and positive impact on communities worldwide.`,
          },
        ].map(({ colorFrom, colorTo, icon, title, desc }, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br from-${colorFrom} to-${colorTo} p-10 rounded-3xl shadow-xl
              transform transition-transform duration-500 hover:scale-[1.07] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
              animate-fade-slide-up-delay`}
            style={{ animationDelay: `${i * 0.25}s` }}
          >
            {icon}
            <h3 className="text-3xl font-semibold mb-4 drop-shadow-md">{title}</h3>
            <p className="text-gray-100 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  <style >{`
    @keyframes fadeSlideUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
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
      animation: fadeSlideUp 0.7s ease forwards;
    }
    @keyframes pulseSlow {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }
    .animate-pulse-slow {
      animation: pulseSlow 3s ease-in-out infinite;
    }
  `}</style>
</section>


      {/* Animation styles */}
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
          animation-fill-mode: forwards;
          animation-delay: 0.3s;
        }

        @keyframes pulseSlow {
          0%,
          100% {
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

export default LeadershipPage;
