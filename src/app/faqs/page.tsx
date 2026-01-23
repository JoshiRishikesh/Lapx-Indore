"use client";

import { faqData, FAQCategory } from "@/data/faqs";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight, FaMicrochip, FaLaptop, FaApple, FaTools, FaCheckCircle } from "react-icons/fa";
import { SiAsus, SiMsi } from "react-icons/si";
import FaqSearch from "@/components/faqs/FaqSearch";

const IconMap = ({ type }: { type: FAQCategory['iconType'] }) => {
  return (
    <div className="flex items-center justify-start h-12 w-full text-sky-500 group-hover:text-sky-600 transition-colors">
      {type === 'asus' && <SiAsus className="text-5xl md:text-6xl" />}
      {type === 'msi' && <SiMsi className="text-6xl md:text-7xl" />}
      {type === 'apple' && <FaApple className="text-4xl" />}
      {type === 'chip' && <FaMicrochip className="text-4xl" />}
      {!['asus', 'msi', 'apple', 'chip'].includes(type || '') && <FaLaptop className="text-4xl" />}
    </div>
  );
};

export default function FAQHub() {
  return (
    <main className="min-h-screen bg-white py-12 md:py-20 px-4 relative overflow-hidden">
      
      {/* Structural Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-linear-to-b from-sky-50/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] bg-size-[32px_32px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <FaTools className="text-[10px]" /> Lapx Expert Support Center
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9] mb-6">
              Laptop <span className="text-sky-500">Help Desk</span>
            </h1>
            <p className="max-w-3xl text-gray-500 text-base md:text-xl leading-relaxed">
              Find professional technical guides and troubleshooting for <span className="text-gray-900 font-bold italic underline decoration-sky-500/30">Laptop Repair at C21 Mall, Vijay Nagar, Indore</span>. 
              Our experts provide certified service for Dell, HP, MSI, Lenovo, Asus, and MacBook.
            </p>
          </motion.div>
        </header>

        {/* Global Search */}
        <section className="mb-20">
          <FaqSearch />
        </section>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/faqs/${category.slug}`} className="group block h-full">
                <div className="relative p-8 bg-white border border-gray-100 rounded-4xl shadow-sm hover:shadow-2xl hover:shadow-sky-500/10 hover:border-sky-200 transition-all duration-500 h-full flex flex-col">
                  
                  <div className="flex justify-between items-start mb-8">
                    <IconMap type={category.iconType} />
                    <span className="bg-gray-50 text-gray-400 group-hover:bg-sky-50 group-hover:text-sky-500 p-2 rounded-lg transition-colors">
                      <FaChevronRight size={12} />
                    </span>
                  </div>
                  
                  <div className="grow">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-sky-600 italic">Certified Solutions</span>
                    <span className="text-gray-300">C21 Mall, Indore</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* SEO Trust Banner: Enhanced for Lapx C21 Mall */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 relative group"
        >
          <div className="absolute inset-0 bg-sky-600 rounded-[3rem] blur-3xl opacity-5 group-hover:opacity-10 transition-opacity" />
          
          <div className="relative bg-gray-900 rounded-[3rem] p-8 md:p-16 text-center overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <FaMicrochip size={120} className="text-white" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Best Laptop Repairing Service Center <br className="hidden md:block" /> at <span className="text-sky-400 italic text-4xl md:text-6xl">C21 Mall, Indore</span>
              </h3>
              
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Visit **Lapx** for premium chip-level repairs, screen replacements, and battery upgrades. 
                The most trusted hub for Dell, HP, Lenovo, Asus, MSI, and MacBook repair in Vijay Nagar.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10 text-xs md:text-sm font-medium text-gray-300">
                <span className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/10"><FaCheckCircle className="text-sky-500" /> Genuine Spares</span>
                <span className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/10"><FaCheckCircle className="text-sky-500" /> Expert Technicians</span>
                <span className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/10"><FaCheckCircle className="text-sky-500" /> Transparent Pricing</span>
                <span className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/10"><FaCheckCircle className="text-sky-500" /> Same-Day Service</span>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="tel:09111000757" className="w-full md:w-auto bg-sky-500 hover:bg-sky-400 text-white font-bold py-5 px-10 rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-sky-500/20">
                  <span className="bg-white/20 p-2 rounded-lg"><FaTools /></span>
                  Consult a Lapx Expert
                </a>
                <div className="text-left">
                  <p className="text-white font-black text-xl leading-none">+91 91110 00757</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-2 font-bold">Lapx • C21 Mall • Vijay Nagar</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}