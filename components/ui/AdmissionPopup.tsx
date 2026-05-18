"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const hasShown = useRef(false);

  useEffect(() => {
    if (hasShown.current || isOpen) return;

    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled >= 0.35 && !hasShown.current) {
        hasShown.current = true;
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleApply = () => {
    handleClose();
    setTimeout(() => {
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px]"
            onClick={handleClose}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", damping: 24, stiffness: 280 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-5 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(13,33,59,0.16)]">

              {/* Image header */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img
                  src="/assets/convocation.webp"
                  alt="REducate University Convocation"
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/75 via-brand-secondary/20 to-transparent" />
                {/* Close button on image */}
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/55 text-white transition-colors backdrop-blur-sm"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                {/* Admission badge on image */}
                <div className="absolute bottom-5 left-6">
                  <span className="inline-block px-3 py-1.5 bg-brand-primary text-white text-[11px] font-bold tracking-[0.15em] uppercase rounded-sm">
                    Admissions Open · 2025–26
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 py-8 relative">
                {/* Text */}
                <h2 className="text-3xl font-serif font-bold text-brand-secondary leading-tight mb-4">
                  Your Future Starts<br />
                  <span className="italic font-light text-brand-primary">Here.</span>
                </h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                  Applications are now open. Limited seats available across all programs. Begin your journey with REducate University today.
                </p>

                {/* CTA */}
                <button
                  onClick={handleApply}
                  className="group w-full flex items-center justify-center gap-2 py-3 bg-brand-secondary text-white text-sm font-semibold rounded-xl hover:bg-brand-primary transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleClose}
                  className="w-full text-center text-gray-400 text-xs mt-3 hover:text-gray-600 transition-colors py-1"
                >
                  Remind me later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
