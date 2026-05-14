import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { User, Quote, Target, Heart } from 'lucide-react';

const container = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header Area */}
          <div className="lg:col-span-12 mb-12">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex items-center gap-3 mb-6"
            >
              <div className="h-0.5 w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">About Me</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-gradient">
              The Story Behind <br /> the Results.
            </h1>
          </div>

          {/* Image & Stats */}
          <div className="lg:col-span-5 space-y-12">
            <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative group">
               <img 
                 src="/input_file_0.png" 
                 alt="Kehinde Ogunjumelo" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop";
                 }}
               />
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Successful Projects", value: "50+" },
                { label: "Client Satisfaction", value: "99%" },
                { label: "Revenue Generated", value: "$2M+" },
                { label: "Years Experience", value: "5+" }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-2xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-16">
            <motion.div variants={container} initial="initial" animate="animate" className="space-y-8">
              <motion.div variants={item} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                  <User size={24} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display">Philosophy</h3>
                  <p className="text-slate-600 leading-relaxed text-lg italic">
                    "{portfolioData.about.philosophy}"
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="p-8 bg-slate-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5" />
                <h3 className="text-2xl font-display mb-6 flex items-center gap-3">
                   <Target className="text-accent" /> Career Journey
                </h3>
                <p className="text-slate-400 leading-relaxed relative z-10">
                  {portfolioData.about.careerStory}
                </p>
              </motion.div>

              <motion.div variants={item} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center">
                  <Heart size={24} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display">Passion & Commitment</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {portfolioData.about.passion}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Resume Teaser */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="p-10 border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 group"
            >
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-display font-medium">Looking for a Success Leader?</h4>
                <p className="text-slate-500 mt-2">I am currently available for new opportunities.</p>
              </div>
              <button className="px-10 py-5 bg-primary text-white rounded-full font-bold group-hover:bg-accent group-hover:text-primary transition-all">
                Download Full Resume
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
