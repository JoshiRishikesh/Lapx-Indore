"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { usePathname } from "next/navigation";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "ASUS", href: "/asus-service-center" },
  { name: "HP", href: "/hp-service-center" },
  { name: "DELL", href: "/dell-service-center" },
  { name: "LENOVO", href: "/lenovo-service-center" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-2">
            
            {/* Logo Section */}
            <Link href="/" className="shrink-0 flex items-center group">
              <Image 
                src="/logos/lapx-logo.avif" 
                alt="Lapx Logo" 
                width={120} 
                height={40} 
                priority 
                className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation - Active Pill + Hover Pill */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive 
                        ? "bg-blue-50 text-blue-600 shadow-sm" 
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Contact Actions (Always Visible) */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <a 
                href="tel:9111000757" 
                className="p-2.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-90"
                aria-label="Call Now"
              >
                <FiPhoneCall size={18} />
              </a>
              <a 
                href="https://wa.me/919111000757" 
                className="p-2.5 rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 active:scale-90"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              
              <Link 
                href="/contact" 
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
              >
                <BsCalendarCheck /> Book
              </Link>

              {/* Mobile Menu Toggle - High Contrast */}
              <button 
                onClick={() => setOpen(true)} 
                className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-950 hover:bg-slate-200 transition-colors shadow-sm"
              >
                <FiMenu size={22} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-60 bg-slate-950/40 backdrop-blur-sm md:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-70 h-full w-[85%] max-w-sm bg-white shadow-2xl md:hidden flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-slate-100">
                {/* Logo in Mobile Menu */}
                <Image 
                  src="/logos/lapx-logo.avif" 
                  alt="Lapx Logo" 
                  width={100} 
                  height={35} 
                  className="h-8 w-auto object-contain"
                />
                <button 
                  onClick={() => setOpen(false)} 
                  className="p-2.5 rounded-full bg-slate-950 text-white shadow-lg active:scale-90"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4 mb-2 block">Navigation</span>
                {navLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-lg font-bold transition-all active:bg-slate-50 ${
                        isActive ? "bg-blue-50 text-blue-600" : "text-slate-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="p-6 bg-slate-50 border-t">
                <Link 
                  href="/contact" 
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
                >
                  <BsCalendarCheck /> Book a Repair
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}