"use client";

import { useState, useMemo } from "react";
import { faqData, FAQItem } from "@/data/faqs";
import { FaSearch, FaTimes } from "react-icons/fa";
import AccordionItem from "./AccordionItem";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSearch() {
  const [query, setQuery] = useState("");

  // Flatten all questions across categories for a global search
  const allQuestions = useMemo(() => {
    return faqData.flatMap(cat => 
      cat.questions.map(q => ({ ...q, category: cat.title }))
    );
  }, []);

  // Filter logic: matches question, answer, or category title
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return allQuestions.filter(item => 
      item.question.toLowerCase().includes(lowerQuery) ||
      item.answer.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
  }, [query, allQuestions]);

  return (
    <div className="w-full max-w-3xl mx-auto mb-16">
      {/* Search Input Box */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <FaSearch className={`${query ? 'text-sky-500' : 'text-gray-400'} transition-colors`} />
        </div>
        <input
          type="text"
          placeholder="Search e.g., 'Asus Screen Replacement' or 'SSD Upgrade'..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-12 pr-12 py-5 bg-white border-2 border-gray-100 rounded-4xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300/30 transition-all shadow-sm font-medium"
        />
        {query && (
          <button 
            onClick={() => setQuery("")}
            className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-red-500 transition-colors"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Instant Results Dropdown */}
      <AnimatePresence>
        {query.trim() !== "" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 space-y-3"
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4 mb-2">
              Found {filteredResults.length} relevant solutions
            </p>
            
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <AccordionItem key={`search-${index}`} item={item} />
              ))
            ) : (
              <div className="p-8 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-500">No exact matches found for "{query}".</p>
                <p className="text-sm text-sky-600 font-bold mt-2 cursor-pointer hover:underline">
                  Try searching "Motherboard" or "Gaming Laptop"
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
