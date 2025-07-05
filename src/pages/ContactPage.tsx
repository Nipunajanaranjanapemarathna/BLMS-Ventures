import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Facebook,
  Clock,
  Users,
  MessageSquare,
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-44"
        style={{ backgroundImage: "url('public/contactus.jpg')" }}
      >
        {/* Gradient Overlay with transparency */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent z-0"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-slide-up">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg animate-zoom-in">
              About <span className="italic">Contact Us</span>
            </h1>
            <p className="text-xl text-white mt-6 opacity-90 hover:opacity-100 transition-opacity duration-700 max-w-3xl mx-auto">
              Ready to transform your business? Let's start a conversation about how BLMS can
              help you achieve your goals through innovative solutions and collaborative
              partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-3xl shadow-xl p-10 animate-fade-slide-up">
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-red-600 pb-3">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'John Doe' },
                    {
                      label: 'Email Address *',
                      name: 'email',
                      type: 'email',
                      placeholder: 'john@company.com',
                    },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label htmlFor={name} className="block text-sm font-medium text-gray-200 mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        id={name}
                        name={name}
                        required
                        value={formData[name as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="xlogica">Xlogica Services</option>
                    <option value="ihmi">IHMI Services</option>
                    <option value="ihma">IHMA Programs</option>
                    <option value="careers">Career Opportunities</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-700 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-red-700 transition flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-10 animate-fade-slide-up delay-200">
              <div className="bg-gradient-to-br from-red-700 to-black p-8 rounded-3xl text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6 border-b border-red-600 pb-3">Contact Information</h3>
                <div className="space-y-6">
                  {[{
                    icon: Mail,
                    title: 'Email',
                    details: ['info@blms.com', 'partnerships@blms.com'],
                    detailClass: 'text-red-400 hover:underline',
                  }, {
                    icon: Phone,
                    title: 'Phone',
                    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
                    detailClass: 'text-red-300',
                  }, {
                    icon: MapPin,
                    title: 'Global Headquarters',
                    details: ['123 Innovation Drive', 'Business District', 'City, State 12345'],
                    detailClass: 'text-red-300 whitespace-pre-line',
                  }, {
                    icon: Clock,
                    title: 'Business Hours',
                    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
                    detailClass: 'text-red-300',
                  }].map(({ icon: Icon, title, details, detailClass }, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{title}</h4>
                        {details.map((line, i) => (
                          <p key={i} className={`${detailClass}`}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[{
                  icon: Users,
                  stat: '500+',
                  label: 'Clients Served',
                  bgFrom: 'from-red-700',
                  bgTo: 'to-pink-600',
                }, {
                  icon: MessageSquare,
                  stat: '24h',
                  label: 'Response Time',
                  bgFrom: 'from-green-700',
                  bgTo: 'to-green-400',
                }, {
                  icon: MapPin,
                  stat: '25+',
                  label: 'Countries',
                  bgFrom: 'from-purple-700',
                  bgTo: 'to-purple-400',
                }].map(({ icon: Icon, stat, label, bgFrom, bgTo }, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${bgFrom} ${bgTo} p-6 rounded-2xl shadow-xl text-center text-white transform transition-transform duration-500 hover:scale-[1.05]`}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-bold">{stat}</h4>
                    <p className="text-sm">{label}</p>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-gray-800 p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-white">Follow Us</h3>
                <div className="flex space-x-6">
                  {[{
                    href: '#',
                    bgFrom: 'from-blue-600',
                    bgTo: 'to-blue-400',
                    Icon: Linkedin,
                  }, {
                    href: '#',
                    bgFrom: 'from-pink-600',
                    bgTo: 'to-pink-400',
                    Icon: Instagram,
                  }, {
                    href: '#',
                    bgFrom: 'from-blue-700',
                    bgTo: 'to-blue-500',
                    Icon: Facebook,
                  }].map(({ href, bgFrom, bgTo, Icon }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      className={`w-12 h-12 bg-gradient-to-br ${bgFrom} ${bgTo} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                      aria-label="Social Link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-400 mt-6 max-w-sm">
                  Stay connected with BLMS for the latest updates, insights, and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto animate-fade-slide-up">
            <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-white">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on innovation, partnerships,
              and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              />
              <button className="bg-gradient-to-r from-red-700 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-red-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style >{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.9s ease forwards;
        }
        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-zoom-in {
          animation: zoomIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
