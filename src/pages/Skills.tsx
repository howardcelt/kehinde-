import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { UserCheck, TrendingUp, Cpu, Award, Star, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const SkillGrid = ({ title, skills, icon: Icon, color }: { title: string, skills: string[], icon: any, color: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group relative overflow-hidden"
  >
    <div className={cn("absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-[0.03] group-hover:opacity-[0.05] transition-opacity", color)} />
    
    <div className="space-y-8 relative z-10">
      <div className="flex items-center justify-between">
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-200", color)}>
          <Icon size={28} />
        </div>
        <div className="flex items-center gap-1">
          {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-accent text-accent" />)}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-display font-bold text-primary">{title}</h3>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Core Domain Expert</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
            <CheckCircle2 size={16} className="text-accent" />
            <span className="text-sm font-medium text-slate-700">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6">
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="flex items-center gap-3"
              >
                <div className="h-0.5 w-12 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Mastery</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-display font-medium text-gradient">
                Specialized <br /> Skill Ecosystem.
              </h1>
            </div>
            <p className="text-slate-500 max-w-sm font-display italic text-lg leading-relaxed border-l-4 border-slate-100 pl-6">
              "Fusing technical proficiency with emotional intelligence to deliver world-class results."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <SkillGrid 
              title="Customer Success" 
              skills={portfolioData.skills.customerSuccess} 
              icon={UserCheck} 
              color="bg-primary" 
            />
            <SkillGrid 
              title="Sales & Growth" 
              skills={portfolioData.skills.sales} 
              icon={TrendingUp} 
              color="bg-indigo-600" 
            />
            <SkillGrid 
              title="Technical & CRM" 
              skills={portfolioData.skills.technical} 
              icon={Cpu} 
              color="bg-slate-700" 
            />
            <SkillGrid 
              title="Professional Execution" 
              skills={portfolioData.skills.professional} 
              icon={Award} 
              color="bg-accent" 
            />
          </div>

          <div className="relative pt-20">
            <div className="absolute inset-0 bg-slate-900 rounded-[3rem] -z-10" />
            <div className="p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="space-y-6 max-w-xl text-center md:text-left">
                  <h2 className="text-4xl font-display text-white">Always Evolving.</h2>
                  <p className="text-slate-400">My skill set is continuously updated to stay at the cutting edge of CRM technology and customer success methodologies.</p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {["Learning Zoho V2", "AI in CRM", "Advanced Analytics"].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-accent uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4 shrink-0">
                  <div className="w-32 h-32 bg-accent rounded-3xl flex flex-col items-center justify-center text-primary shadow-xl shadow-accent/10">
                     <span className="text-3xl font-bold font-display">10+</span>
                     <span className="text-[10px] font-bold uppercase tracking-tight">Certs</span>
                  </div>
                  <div className="w-32 h-32 bg-white/10 rounded-3xl flex flex-col items-center justify-center text-white border border-white/10">
                     <span className="text-3xl font-bold font-display">4+</span>
                     <span className="text-[10px] font-bold uppercase tracking-tight">CRM Platforms</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
