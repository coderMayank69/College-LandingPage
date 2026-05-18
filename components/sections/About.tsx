"use client";

import { motion } from "framer-motion";
import { BookOpen, Trophy, Globe, Users } from "lucide-react";

export default function About() {
  const features = [
    { icon: <BookOpen className="w-5 h-5 text-brand-primary" />, title: "Academic Excellence", description: "Rigorous curriculum designed by industry experts and leading academics to ensure you are future-ready." },
    { icon: <Trophy className="w-5 h-5 text-brand-primary" />, title: "Top Rankings", description: "Consistently recognized among the top educational institutions for innovation and student success." },
    { icon: <Globe className="w-5 h-5 text-brand-primary" />, title: "Global Perspective", description: "Exchange programs and international partnerships preparing you for a borderless career." },
    { icon: <Users className="w-5 h-5 text-brand-primary" />, title: "Expert Faculty", description: "Learn from accomplished professors who bring real-world experience into the classroom." },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative z-10 pt-36 md:pt-56 wave-top">
      {/* Noise/dot texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #0d213b 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-eyebrow">About REducate</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight mb-6">
              A Legacy of <br />
              <span className="italic font-light">Transforming Lives.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded on the principles of academic rigor and holistic development, REducate University stands as a beacon of knowledge and innovation. We believe in nurturing not just careers, but character.
            </p>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Our expansive campus, state-of-the-art facilities, and deeply committed faculty create an environment where intellectual curiosity thrives.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start p-5 rounded-xl hover-lift cursor-default" style={{background: 'rgba(247,248,250,0.8)', boxShadow: '0 2px 12px rgba(13,33,59,0.06), 0 0 0 1px rgba(13,33,59,0.05)'}}>
                  <div className="w-12 h-12 bg-brand-primary/8 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                    {feature.icon}
                  </div>
                  <div className="mt-1">
                    <h4 className="font-bold text-brand-secondary mb-1.5 text-sm uppercase tracking-wider">{feature.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-light text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/assets/about-students.webp"
                alt="Students studying on campus"
                className="object-cover w-full h-[500px] shadow-2xl"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"; }}
              />
              <div className="absolute -bottom-6 -left-6 w-44 h-44 bg-brand-primary -z-10 opacity-80" />
              <div className="absolute -top-6 -right-6 w-44 h-44 border-2 border-brand-accent -z-10" />
              <div className="absolute bottom-10 -left-10 bg-white p-6 shadow-xl border-l-4 border-brand-primary max-w-[190px]">
                <div className="text-4xl font-serif text-brand-primary font-bold mb-1">40+</div>
                <div className="text-xs font-bold text-brand-secondary uppercase tracking-wider leading-tight">Years of Academic Excellence</div>
              </div>
              <div className="absolute -right-8 top-10 w-36 h-48 shadow-xl hidden lg:block border-4 border-white">
                <img
                  src="/assets/classroom.webp"
                  alt="Classroom"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400"; }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
