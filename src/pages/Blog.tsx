import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { BookOpen, User, Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of Customer Success in a Digital-First World",
    category: "Customer Experience",
    date: "May 10, 2026",
    excerpt: "How AI and personalization are reshaping how we build long-term relationships with clients.",
    author: "Kehinde Ogunjumelo"
  },
  {
    title: "Mastering CRM Workflows for Maximum Efficiency",
    category: "CRM Strategy",
    date: "April 28, 2026",
    excerpt: "Practical tips on automating your Zoho or Bitrix24 pipelines to reduce manual labor.",
    author: "Kehinde Ogunjumelo"
  },
  {
    title: "The Psychology of Sales: Empathy as a Closing Tool",
    category: "Sales Growth",
    date: "March 15, 2026",
    excerpt: "Why understanding the customer's emotional state leads to better conversion rates than any script.",
    author: "Kehinde Ogunjumelo"
  }
];

export default function Blog() {
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
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Insights</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-gradient">
              Professional <br /> Thoughts & Guides.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-slate-50 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-full border border-slate-100">{post.category}</span>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                       <Calendar size={12} />
                       {post.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-display group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                       <User size={14} />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{post.author}</span>
                  </div>
                  <button className="text-accent group-hover:translate-x-1 transition-transform">
                     <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Categories Bar */}
          <div className="py-10 border-y border-slate-100">
             <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                {portfolioData.blogCategories.map(cat => (
                  <button key={cat} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">{cat}</button>
                ))}
             </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
