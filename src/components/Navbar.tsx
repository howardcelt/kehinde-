import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-display text-xl font-bold rounded-lg group-hover:scale-105 transition-transform">
            KO
          </div>
          <span className="font-display font-bold text-lg hidden sm:block">Kehinde Ogunjumelo</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide hover:text-accent transition-colors relative py-1',
                location.pathname === link.path ? 'text-accent' : 'text-slate-600'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </Link>
          ))}
          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
          >
            <Download size={14} />
            CV
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl absolute top-full left-0 right-0 border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-xl font-display font-medium text-slate-800 hover:text-accent transition-colors',
                    location.pathname === link.path && 'text-accent'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <a href={`mailto:${portfolioData.email}`} className="p-2 bg-slate-50 rounded-full hover:text-accent transition-colors">
                  <Mail size={20} />
                </a>
                <a href={`tel:${portfolioData.phone}`} className="p-2 bg-slate-50 rounded-full hover:text-accent transition-colors">
                  <Phone size={20} />
                </a>
                <a href="#" className="p-2 bg-slate-50 rounded-full hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
