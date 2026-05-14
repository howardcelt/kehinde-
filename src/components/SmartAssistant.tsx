import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { GoogleGenAI } from '@google/genai';
import { cn } from '../lib/utils';

export default function SmartAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    {
      role: 'assistant',
      content: `Hello! I'm Kehinde's Career Advisor. I can tell you about her experience, skills, or how she can help your business. What would you like to know?`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API Key missing');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const context = `
        You are a Career Advisor assistant for Kehinde Ogunjumelo. 
        Her resume data: ${JSON.stringify(portfolioData)}
        Your goal is to answer questions about Kehinde's professional experience, skills, and value proposition.
        Be professional, helpful, and concise. 
        Always speak highly of Kehinde.
        If asked about things not in her resume, politely direct them to her contact info.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `${context}\n\nUser Question: ${userMessage}`
      });
      
      const text = response.text || "I'm sorry, I couldn't generate a response.";

      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error connecting to my knowledge base. Please try again or contact Kehinde directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/20 group"
      >
        <div className="relative">
          <MessageSquare size={24} className="group-hover:opacity-0 transition-opacity" />
          <Sparkles size={24} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-100"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-xl">
                  <Sparkles size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Kehinde's Career AI</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/60">Always ready to help</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div
                    className={cn(
                      "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                      m.role === 'user'
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-slate-100 text-slate-800 rounded-tl-none"
                    )}
                  >
                    {m.content}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    {m.role === 'user' ? <User size={10} /> : <Bot size={10} />}
                    {m.role === 'user' ? 'You' : 'Assistant'}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-2 mr-auto max-w-[85%]">
                  <div className="bg-slate-100 px-4 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-slate-400" />
                    <span className="text-sm text-slate-400 italic">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-accent/20 focus-within:border-accent transition-all"
              >
                <input
                  type="text"
                  placeholder="Ask anything about Kehinde..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 text-sm bg-transparent outline-none py-2"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-primary text-white rounded-xl disabled:bg-slate-200 disabled:text-slate-400 transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
