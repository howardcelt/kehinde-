import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Layout, CheckCircle2, TrendingUp, BarChart3, Package, ArrowRight } from 'lucide-react';

export default function Projects() {
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
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Case Studies</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-gradient">
              Strategic <br /> Implementations.
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-20">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group reveal"
              >
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                  <div className="w-full lg:w-1/2 space-y-10 order-2 lg:order-1">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-accent font-display text-sm font-semibold italic">
                         <span className="w-6 h-px bg-accent" />
                         Project 0{index + 1}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-display group-hover:text-accent transition-colors">{project.title}</h2>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tools.map(tool => (
                          <span key={tool} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500">{tool}</span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Problem</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Solution</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{project.solution}</p>
                       </div>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group-hover:bg-primary group-hover:text-white transition-all duration-500">
                       <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                         <TrendingUp size={120} />
                       </div>
                       <div className="space-y-6 relative z-10">
                         <div className="flex items-center gap-3 text-accent font-bold">
                            <BarChart3 size={20} />
                            Key Results
                         </div>
                         <p className="text-2xl font-display">{project.result}</p>
                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-xl text-xs font-bold uppercase tracking-widest">
                            <CheckCircle2 size={12} />
                            {project.metrics}
                         </div>
                       </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="aspect-square bg-slate-100 rounded-[2.5rem] overflow-hidden relative group">
                       <img 
                         src="/input_file_0.png" 
                         alt={project.title}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                       <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-white font-display italic text-lg leading-tight">
                            {index === 0 ? "Building high-loyalty customer ecosystems." : "Scalable data architecture for modern sales."}
                          </p>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="pt-20 text-center space-y-8">
             <div className="inline-flex flex-col items-center gap-6">
                <h4 className="text-3xl font-display">Need a similar success story?</h4>
                <a href="#contact" className="group px-10 py-5 bg-primary text-white rounded-full font-bold flex items-center gap-3 hover:bg-accent hover:text-primary transition-all">
                   Start a Collaboration
                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
             </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
