import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SubsidiariesPageProps {
  onNavigate: (page: string) => void;
}

const SubsidiariesPage: React.FC<SubsidiariesPageProps> = ({ onNavigate }) => {
  const subsidiaries = [
    {
      name: 'Xlogica',
      fullName: 'Xlogica Technologies',
      description: 'Leading the future of technology and artificial intelligence solutions',
      longDescription:
        'Xlogica specializes in cutting-edge AI development, machine learning solutions, and advanced technology consulting. We transform businesses through innovative digital solutions and intelligent automation.',
      image: 'public/XLogica (1).png',
      services: ['AI Development', 'Machine Learning', 'Digital Transformation', 'Technology Consulting'],
    },
    {
      name: 'IHMI',
      fullName: 'International Health & Medical Institute',
      description: 'Advancing healthcare through innovative medical solutions and research',
      longDescription:
        'IHMI is dedicated to revolutionizing healthcare delivery through advanced medical research, innovative treatment protocols, and comprehensive health management systems.',
      image: 'public/ihmi.png',
      services: ['Medical Research', 'Healthcare Innovation', 'Treatment Protocols', 'Health Management'],
    },
    {
      name: 'IHMA',
      fullName: 'International Hospitality Management Academy',
      description: 'Shaping the future leaders of hospitality and management',
      longDescription:
        'IHMA provides world-class education and training in hospitality management, developing the next generation of industry leaders through comprehensive programs and hands-on experience.',
      image: '/subsidiaries/ihma.jpg',
      services: ['Hospitality Education', 'Management Training', 'Leadership Development', 'Industry Certification'],
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-20 relative"
        style={{ backgroundImage: "url('/hero02.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-slide-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
              Our Subsidiaries
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Three dynamic companies working together to transform industries and create innovative solutions across technology, healthcare, and hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Subsidiaries Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {subsidiaries.map((subsidiary, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(255,0,60,0.5)] animate-fade-slide-up-delay"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={subsidiary.image}
                  alt={`${subsidiary.name} Logo`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8 bg-gray-900 bg-opacity-90">
                  <h3 className="text-3xl font-bold mb-1">{subsidiary.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{subsidiary.fullName}</p>
                  <p className="text-gray-300 mb-4">{subsidiary.description}</p>
                  <p className="text-gray-400 text-sm mb-6">{subsidiary.longDescription}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-200 mb-3">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {subsidiary.services.map((service, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-red-600 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-red-700 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-pink-700 text-white text-center">
        <div className="container mx-auto px-6 animate-fade-slide-up">
          <h2 className="text-4xl font-extrabold mb-6 tracking-wide">Ready to Explore Our Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our integrated approach can transform your business across technology, healthcare, and hospitality sectors.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-red-100 transition-all duration-300 inline-flex items-center justify-center mx-auto"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Animations */}
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
          animation: fadeSlideUp 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default SubsidiariesPage;
