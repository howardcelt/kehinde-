import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Download, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-slate-400 pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-accent text-primary flex items-center justify-center font-display text-xl font-bold rounded-lg group-hover:scale-105 transition-transform">
                KO
              </div>
              <span className="font-display font-bold text-lg text-white">Kehinde Ogunjumelo</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Delivering exceptional customer experiences and driving business growth through strategic engagement and operational excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all">
                <Linkedin size={14} />
              </a>
              <a href={`mailto:${portfolioData.email}`} className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all">
                <Mail size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Me</Link></li>
              <li><Link to="/experience" className="hover:text-accent transition-colors">Career Journey</Link></li>
              <li><Link to="/skills" className="hover:text-accent transition-colors">Specializations</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Get In Touch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li>CRM Management</li>
              <li>Customer Success</li>
              <li>Sales Development</li>
              <li>Retention Strategy</li>
              <li>Virtual Assistance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition-colors">{portfolioData.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <a href={`tel:${portfolioData.phone}`} className="hover:text-white transition-colors">{portfolioData.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} className="text-accent" />
                {portfolioData.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs uppercase tracking-widest">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Kehinde Ogunjumelo. Built with Excellence.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-accent hover:text-white transition-colors group"
            >
              Back to Top
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
