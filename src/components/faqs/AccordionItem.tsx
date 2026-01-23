"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaTools } from "react-icons/fa";

// Updated Interface to support highlighted JSX
export interface EnhancedFAQItem {
  question: string | ReactNode; 
  answer: string;
  category?: string;
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
              {/* Technician Advice Badge (Subtle Brand Reinforcement) */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-50 text-sky-500">
                  <FaTools size={10} />
                </div>
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                  Expert Technician Resolution
                </span>
              </div>

              <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.answer}
              </div>

              {/* Call to action for Vijay Nagar Location */}
              {isOpen && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="mt-6 pt-4 border-t border-dashed border-gray-100"
                >
                  <p className="text-xs text-gray-400 italic">
                    Need urgent help? Visit our <span className="text-sky-500 font-semibold">Laptop repair in Vijay Nagar Indore</span> for a free diagnostic.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}