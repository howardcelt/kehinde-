import { motion } from 'motion/react';
import { ArrowRight, Download, Linkedin, Globe, ShieldCheck, Zap, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 lg:px-24 pt-10 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">{portfolioData.availability}</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-medium leading-[1.1] text-gradient">
              {portfolioData.hero.headline}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-xl leading-relaxed">
              {portfolioData.hero.subheadline}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
              >
                Hire Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-2 px-8 py-4 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all">
                Download CV
                <Download size={18} />
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connect with me</p>
              <div className="flex items-center gap-4 text-slate-400">
                <a href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Globe size={20} /></a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[320px] h-[400px] md:w-[450px] md:h-[550px]">
              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-slate-100 rounded-[2rem] -rotate-3 z-0" />
              <div className="absolute -inset-4 border border-accent/20 rounded-[2rem] rotate-3 z-0" />
              
              {/* Image Placeholder - User should upload input_file_0.png */}
              <div className="absolute inset-0 bg-slate-100 rounded-[1.5rem] overflow-hidden shadow-2xl z-10 group">
                <img 
                  src="/input_file_0.png" 
                  alt="Kehinde Ogunjumelo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <p className="text-sm font-display italic">"Client satisfaction is my top priority."</p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -right-10 top-1/4 z-20 glass p-6 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 text-accent flex items-center justify-center rounded-xl font-bold text-lg">
                    5+
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Years of</p>
                    <p className="text-sm font-bold text-slate-800">Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">Expertise in Corporate Excellence</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {["CRM Specialist", "Sales Expert", "Success Leader", "Operations Specialist"].map((text) => (
              <span key={text} className="text-2xl font-display font-medium text-slate-400">{text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-medium">Core Specializations</h2>
            <p className="text-slate-600 max-w-2xl mx-auto italic font-display text-lg px-4">
              "Turning customer interactions into impactful business success stories."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-6 hover:bg-slate-900 hover:text-white transition-all duration-500 group">
              <div className="w-14 h-14 bg-white text-primary flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-accent group-hover:text-primary transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-display">Customer Success</h3>
              <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed">
                Strategic relationship management focused on long-term client retention and satisfaction.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-6 hover:bg-accent hover:text-primary transition-all duration-500 group">
              <div className="w-14 h-14 bg-white text-primary flex items-center justify-center rounded-2xl shadow-sm transition-colors">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-display">Sales & Growth</h3>
              <p className="text-sm text-slate-600 group-hover:text-primary/70 leading-relaxed">
                Driving revenue through expert lead generation, prospecting, and high-conversion sales closing.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-6 hover:bg-slate-900 hover:text-white transition-all duration-500 group">
              <div className="w-14 h-14 bg-white text-primary flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-accent group-hover:text-primary transition-colors">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-display">CRM Strategy</h3>
              <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed">
                Optimizing business operations through master-level CRM workflow integration and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -z-0" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-medium">Ready to amplify your business growth?</h2>
          <p className="text-xl text-slate-400 font-display italic">
            "I help businesses build exceptional relationships that drive sustainable results."
          </p>
          <div className="flex justify-center pt-8">
            <Link to="/contact" className="px-10 py-5 bg-accent text-primary rounded-full font-bold text-lg hover:bg-white transition-all shadow-2xl shadow-accent/20">
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
