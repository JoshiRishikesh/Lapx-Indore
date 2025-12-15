"use client";
// src/components/Header.tsx

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "ASUS", href: "/asus-service-center" },
    { name: "HP", href: "/hp-service-center" },
    { name: "DELL", href: "/dell-service-center" },
    { name: "LENOVO", href: "/lenovo-service-center" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-gray-900 tracking-wide">
            LAPX
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 font-medium uppercase tracking-wide relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Call Button – VISIBLE ON ALL SCREENS */}
            <motion.a
              href="tel:9111000757"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900 text-white text-xs sm:text-sm font-semibold rounded-full shadow-md whitespace-nowrap"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Call</span>
            </motion.a>

            {/* WhatsApp Button – VISIBLE ON ALL SCREENS */}
            <motion.a
              href="https://wa.me/919111000757"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-[#25D366] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md whitespace-nowrap"
            >
              <FaWhatsapp className="text-lg" />
              <span className="hidden xs:inline sm:inline">Chat</span>
            </motion.a>

            {/* Hamburger – Mobile Only */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {open ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden pb-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg uppercase"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Header;
