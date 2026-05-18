"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden section-inset wave-top">
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none" style={{background: 'radial-gradient(ellipse at top right, #0d213b 0%, transparent 70%)'}} />
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.04] pointer-events-none rounded-full" style={{background: 'radial-gradient(circle, #c0392b 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}} />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(13,33,59,0.2)] ring-1 ring-black/5">
              <img 
                src="/assets/founder.webp" 
                alt="Founder of REducate University"
                className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle bottom gradient on portrait */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/30 via-transparent to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-brand-primary/8 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-brand-accent/15 rounded-full blur-2xl -z-10" />
            {/* Accent corner squares */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-brand-accent/40 rounded-sm -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-primary/10 rounded-sm -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Quote className="w-20 h-20 text-brand-primary/10 absolute -top-8 -left-4 -z-10 transform -rotate-6" />
            
            <span className="eyebrow text-brand-primary mb-4 inline-flex items-center gap-2">
              <span className="w-6 h-px bg-brand-primary" />
              From the Founder's Diary
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary mb-8 leading-tight">
              A Vision for the <br />
              <span className="italic text-brand-accent font-light">Future of Education</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                "When we laid the foundation stone of REducate University four decades ago, we had a singular vision: to create an institution that doesn't just impart knowledge, but builds character. We wanted a place where raw potential is ignited, and global leaders are forged."
              </p>
              <p>
                "Today, as I walk through our bustling campus, I see that vision living and breathing in every student. Education is not merely about career preparation; it is about cultivating a mindset of continuous inquiry, unwavering ethics, and deep social responsibility."
              </p>
              <p>
                "Our commitment remains steadfast—to empower the next generation with the skills, wisdom, and courage to transform the world."
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-brand-secondary flex items-center justify-center font-serif text-xl font-bold text-white ring-4 ring-brand-secondary/10">
                AD
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-secondary font-serif">Dr. Anand Desai</h4>
                <p className="text-gray-500 font-medium text-sm mt-0.5">Founder & Chancellor, REducate University</p>
              </div>
              <div className="ml-auto hidden sm:block">
                <div className="w-10 h-10 rounded-full border-2 border-brand-primary/20 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-brand-primary/40" />
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
