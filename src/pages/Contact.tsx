import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, Linkedin, Send, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

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
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Inquiry</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-gradient">
              Let's Create <br /> Success Together.
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
               <div className="space-y-8">
                  <h3 className="text-3xl font-display font-medium leading-tight">I'm currently available for full-time roles & high-impact projects.</h3>
                  <p className="text-slate-500 leading-relaxed text-lg italic">
                    "I am committed to helping businesses grow by ensuring their customers are consistently successful and satisfied."
                  </p>
               </div>

               <div className="space-y-8">
                  <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-accent/20 transition-all group">
                     <div className="w-12 h-12 bg-white text-accent rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                        <Mail size={24} />
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                        <a href={`mailto:${portfolioData.email}`} className="text-lg font-display font-medium hover:text-accent transition-colors">{portfolioData.email}</a>
                     </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-accent/20 transition-all group">
                     <div className="w-12 h-12 bg-white text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Phone size={24} />
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Call Me</p>
                        <a href={`tel:${portfolioData.phone}`} className="text-lg font-display font-medium hover:text-indigo-600 transition-colors uppercase tracking-tight">{portfolioData.phone}</a>
                     </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-accent/20 transition-all group">
                     <div className="w-12 h-12 bg-white text-slate-800 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-slate-800 group-hover:text-white transition-colors">
                        <Linkedin size={24} />
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">LinkedIn</p>
                        <a href="#" className="text-lg font-display font-medium hover:text-slate-800 transition-colors">Ogunjumelo Kehinde</a>
                     </div>
                  </div>
               </div>

               <div className="pt-8 border-t border-slate-100 flex items-center gap-4 text-slate-400 p-2">
                  <MapPin size={18} className="text-accent" />
                  <span className="text-sm font-semibold uppercase tracking-widest">{portfolioData.location}</span>
               </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
               <div className="p-8 md:p-12 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden">
                  {formState === 'success' ? (
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                     >
                        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                           <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-3xl font-display">Message Received!</h3>
                        <p className="text-slate-500 max-w-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                        <button 
                           onClick={() => setFormState('idle')}
                           className="text-accent font-bold uppercase tracking-widest text-xs hover:underline underline-offset-8"
                        >
                           Send another message
                        </button>
                     </motion.div>
                  ) : (
                     <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex items-center gap-3 mb-10 text-primary">
                           <MessageSquare className="text-accent" />
                           <h3 className="text-2xl font-display font-bold">Send a Message</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                              <input 
                                 required
                                 type="text" 
                                 placeholder="John Doe"
                                 className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-accent transition-all outline-none text-sm font-medium"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                              <input 
                                 required
                                 type="email" 
                                 placeholder="john@example.com"
                                 className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-accent transition-all outline-none text-sm font-medium"
                              />
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                           <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-accent transition-all outline-none text-sm font-medium appearance-none">
                              <option>General Inquiry</option>
                              <option>Business Opportunity</option>
                              <option>Collaboration</option>
                              <option>Other</option>
                           </select>
                        </div>

                        <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                           <textarea 
                              required
                              rows={5}
                              placeholder="How can I help you today?"
                              className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-accent transition-all outline-none text-sm font-medium resize-none"
                           />
                        </div>

                        <button 
                           disabled={formState === 'loading'}
                           className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200/50 disabled:bg-slate-100 disabled:text-slate-400"
                        >
                           {formState === 'loading' ? (
                             <>
                               <Loader2 size={20} className="animate-spin" />
                               Processing...
                             </>
                           ) : (
                             <>
                               Send Message
                               <Send size={20} />
                             </>
                           )}
                        </button>
                     </form>
                  )}
               </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
