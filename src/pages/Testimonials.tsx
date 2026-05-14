import { motion } from 'motion/react';
import { Quote, Star, User } from 'lucide-react';

const testimonials = [
  {
    name: "Akin O.",
    role: "Operational Lead, Remita",
    content: "Kehinde has an exceptional ability to simplify complex workflows. Her contribution to our customer engagement strategy was pivotal in reducing support friction.",
    rating: 5
  },
  {
    name: "Sarah M.",
    role: "Sales Manager, FiberOne",
    content: "One of the most dedicated telesales professionals I've worked with. Kehinde doesn't just sell; she builds relationships that lead to sustained growth.",
    rating: 5
  },
  {
    name: "Dr. Adebayo",
    role: "CEO, Pharmatech",
    content: "Her leadership at Upright Pharmacy transformed our customer retention rates. She has a natural talent for service and team coordination.",
    rating: 5
  },
  {
    name: "James L.",
    role: "CRM Consultant",
    content: "Kehinde's grasp of Zoho and Bitrix24 is impressive. She understands the technical side just as much as the human relationship side.",
    rating: 5
  }
];

export default function Testimonials() {
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
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Feedback</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-gradient">
              Voices of <br /> Industry Leaders.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white border border-slate-100 rounded-[2.5rem] relative overflow-hidden group hover:shadow-2xl hover:shadow-slate-200/50 transition-all"
              >
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 opacity-10 group-hover:text-accent group-hover:opacity-10 transition-colors" />
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl font-display text-slate-700 italic leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                       <User size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{t.name}</h4>
                      <p className="text-sm text-slate-400 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-12 md:p-20 bg-slate-900 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent opacity-10 rounded-full blur-[100px]" />
             <h2 className="text-4xl md:text-5xl font-display text-white relative z-10">Join a growing list of satisfied partners.</h2>
             <p className="text-slate-400 max-w-2xl mx-auto relative z-10">I am dedicated to delivering consistent, high-impact results for every organization I work with.</p>
             <div className="flex justify-center relative z-10">
                <button className="px-10 py-5 bg-accent text-primary rounded-full font-bold hover:bg-white transition-all">
                   Become Kehinde's Next Success Story
                </button>
             </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
