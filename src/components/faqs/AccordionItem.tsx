"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaTools, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// Interface updated to support the dynamic brand name from faqData
export interface EnhancedFAQItem {
  question: string | ReactNode; 
  answer: string;
  categoryName?: string; 
}

export default function AccordionItem({ item }: { item: EnhancedFAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`group border transition-all duration-300 rounded-2xl bg-white overflow-hidden ${
        isOpen 
          ? 'border-sky-500 shadow-lg shadow-sky-500/5 ring-1 ring-sky-500/10' 
          : 'border-gray-200 hover:border-sky-300 shadow-sm'
      }`}
    >
      {/* Header / Question Section */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between p-5 md:p-6 text-left transition-colors"
      >
        <span className={`font-bold pr-4 text-base md:text-lg transition-colors duration-300 ${
          isOpen ? 'text-sky-600' : 'text-gray-800'
        }`}>
          {item.question}
        </span>
        
        <div className={`mt-1 shrink-0 p-2 rounded-xl transition-all duration-500 ${
          isOpen 
            ? 'bg-sky-500 text-white rotate-180 shadow-md shadow-sky-200' 
            : 'bg-gray-50 text-gray-400 group-hover:bg-sky-50 group-hover:text-sky-500'
        }`}>
          {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 md:px-6 pb-6 border-t border-gray-50 pt-5">
              
              {/* Expert Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-50 text-sky-500">
                  <FaTools size={10} />
                </div>
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                  Expert Technician Resolution
                </span>
              </div>

              {/* The FAQ Answer */}
              <div className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                {item.answer}
              </div>

              {/* Dynamic SEO Footer & Branding */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="pt-4 border-t border-dashed border-gray-100"
              >
                <p className="text-xs text-gray-400 italic leading-relaxed mb-4">
                  Need urgent help? Visit <span className="text-sky-500 font-semibold">
                    LapX - Certified {item.categoryName || "Laptop Service Center"} 
                  </span>
                </p>

                {/* Direct Action Buttons for Local SEO Conversion */}
                <div className="flex flex-wrap items-center gap-3">
                  <a 
                    href="tel:9111000757" 
                    className="flex items-center gap-2 text-[11px] bg-sky-500 text-white px-4 py-2 rounded-full font-bold uppercase tracking-wider hover:bg-sky-600 transition-all shadow-sm active:scale-95"
                  >
                    <FaPhoneAlt size={10} /> Call Expert: 9111000757
                  </a>
                  <a 
                    href="https://maps.google.com/?q=LapX+Orbit+Mall+Indore" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[11px] text-gray-500 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:border-sky-500 hover:text-sky-500 transition-all shadow-sm"
                  >
                    <FaMapMarkerAlt size={10} /> Get Directions
                  </a>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}