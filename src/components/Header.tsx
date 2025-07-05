import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Subsidiaries', id: 'subsidiaries' },
    { name: 'Leadership', id: 'leadership' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-100 bg-opacity-90 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <motion.img
              src="public/blms2.png"
              alt="BLMS Logo"
              className="h-12 w-auto object-contain rounded-xl shadow-md"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide"></h1>
              <p className="text-xs text-gray-600 italic tracking-wider"></p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative px-4 py-2 font-semibold uppercase tracking-widest transition duration-300 ease-in-out overflow-hidden rounded ${
                  currentPage === item.id
                    ? 'text-white bg-red-600'
                    : 'text-gray-800'
                } ${hoveredIndex === index ? 'text-white' : ''}`}
              >
                <span className="relative z-10">{item.name}</span>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 z-0 rounded"
                      initial={{ opacity: 0, scaleY: 0.8 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-red-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-300"
            >
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition duration-300 ${
                    currentPage === item.id
                      ? 'text-white bg-red-600'
                      : 'text-gray-700 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
