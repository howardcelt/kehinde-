import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Award, GraduationCap, BadgeCheck, ExternalLink, ScrollText } from 'lucide-react';

export default function Certifications() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="space-y-6">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex items-center gap-3"
            >
              <div className="h-0.5 w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Qualifications</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-gradient">
              Academic & <br /> Professional Merits.
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Education */}
            <div className="space-y-12">
               <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                 <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center">
                    <GraduationCap size={24} />
                 </div>
                 <h2 className="text-3xl font-display font-bold">Academic Foundation</h2>
               </div>
               
               <div className="space-y-10">
                 {portfolioData.education.map((edu, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="relative pl-8 border-l-2 border-slate-100 space-y-3 group"
                   >
                     <div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                     <p className="text-sm font-bold text-accent uppercase tracking-widest">{edu.honors}</p>
                     <h3 className="text-2xl font-display group-hover:text-primary transition-colors">{edu.degree}</h3>
                     <p className="text-slate-500 font-display text-lg">{edu.institution}</p>
                   </motion.div>
                 ))}
               </div>
            </div>

            {/* Certifications */}
            <div className="space-y-12">
               <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                 <div className="w-12 h-12 bg-accent text-primary rounded-2xl flex items-center justify-center">
                    <Award size={24} />
                 </div>
                 <h2 className="text-3xl font-display font-bold">Professional Certifications</h2>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {portfolioData.certifications.map((cert, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.05 }}
                     className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-accent/10 transition-all group"
                   >
                     <div className="flex items-start justify-between mb-8">
                        <BadgeCheck className="text-accent group-hover:scale-110 transition-transform" size={20} />
                        <ExternalLink className="text-slate-300 hover:text-primary cursor-pointer" size={14} />
                     </div>
                     <h4 className="text-sm font-bold text-slate-800 leading-snug">{cert}</h4>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>

          {/* Achievement Highlight */}
          <div className="pt-20">
            <div className="p-12 bg-primary rounded-[3rem] text-white relative overflow-hidden group">
               <ScrollText className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 group-hover:text-accent/5 transition-colors" />
               <div className="max-w-3xl space-y-8 relative z-10">
                  <div className="flex items-center gap-4">
                     <div className="w-1 h-12 bg-accent" />
                     <h2 className="text-4xl font-display">Special Recognition</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {portfolioData.achievements.map((ach, i) => (
                       <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="w-2 h-2 bg-accent rounded-full shrink-0 mt-2" />
                          <p className="text-sm text-slate-300 leading-relaxed">{ach}</p>
                       </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
