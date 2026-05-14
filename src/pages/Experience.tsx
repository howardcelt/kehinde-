import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Briefcase, Calendar, CheckCircle2, Trophy, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <section className="section-padding">
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="space-y-6">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex items-center gap-3"
            >
              <div className="h-0.5 w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Journey</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-gradient">
              Professional <br /> Path to Excellence.
            </h1>
          </div>

          <div className="space-y-12 relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 -z-10 hidden lg:block" />

            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-0`}
              >
                {/* Visual Dot on Timeline */}
                <div className="absolute left-0 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg hidden lg:block" />

                {/* Content Card */}
                <div className={`w-full lg:w-[45%] ${index % 2 === 0 ? 'lg:pr-16 text-left' : 'lg:pl-16 text-left'}`}>
                  <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all group overflow-hidden relative">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-50 rounded-full flex items-end justify-start p-8 group-hover:bg-accent/10 transition-colors">
                      <ArrowUpRight className="text-slate-200 group-hover:text-accent transition-colors" size={24} />
                    </div>

                    <div className="space-y-6 relative z-10">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-accent font-display text-sm font-semibold italic">
                           <Calendar size={14} />
                           {exp.duration}
                        </div>
                        <h3 className="text-2xl font-display font-bold leading-tight group-hover:text-primary transition-colors">{exp.role}</h3>
                        <p className="text-slate-400 font-display text-lg">{exp.company}</p>
                      </div>

                      <div className="space-y-4">
                        <p className="text-xs font-bold text-slate-300 uppercase tracking-widest border-b border-slate-50 pb-2">Responsibilities</p>
                        <ul className="space-y-3">
                          {exp.responsibilities.slice(0, 4).map((resp, i) => (
                            <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                               <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                               {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-slate-50">
                        <div className="flex items-center gap-3 text-primary font-bold text-sm mb-4">
                           <Trophy size={18} className="text-accent" /> Key Achievements
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((ach, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-100 transition-colors">
                              {ach}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty Space for layout */}
                <div className="hidden lg:block lg:w-[45%]" />
              </motion.div>
            ))}
          </div>

          <div className="pt-20 text-center">
             <div className="inline-flex flex-col items-center gap-4">
                <Briefcase size={32} className="text-accent" />
                <h4 className="text-2xl font-display font-medium">Over 5 years of transforming operations.</h4>
                <p className="text-slate-500 max-w-lg">Each role has been a stepping stone towards mastering the art of customer success and sales leadership.</p>
             </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
