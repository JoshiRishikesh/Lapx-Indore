"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaTools, FaLaptopCode, FaMicrochip, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { MdOutlineLocationOn, MdSupportAgent } from "react-icons/md";

export default function NotFound() {
  // Syncing these with your Footer.tsx link structure
  const quickLinks = [
    { name: "ASUS Support", link: "/asus-service-center", icon: <FaLaptopCode size={20} /> },
    { name: "HP Support", link: "/hp-service-center", icon: <MdSupportAgent size={20} /> },
    { name: "DELL Support", link: "/dell-service-center", icon: <FaTools size={20} /> },
    { name: "MSI Support", link: "/msi-service-center", icon: <FaShieldAlt size={20} /> },
  ];

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-linear-to-b from-white to-gray-50 px-4 overflow-hidden">
      {/* Tech-themed background mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] bg-size-[30px-30px]"></div>

      <div className="relative max-w-5xl w-full text-center z-10 py-12">
        {/* Error State Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-widest font-orbitron">
            Error Code: 404
          </span>
          <h1 className="text-8xl md:text-[11rem] font-orbitron font-black text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-sky-600 to-gray-900 leading-none mt-4 drop-shadow-sm">
            OFFLINE
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
            The requested hardware/page is not responding.
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base">
            It seems this link has crashed. If you are looking for the 
            <span className="text-sky-600 font-semibold"> Best Laptop Repairing Near Orbit Mall</span> or 
            certified <span className="text-sky-600 font-semibold">Laptop Motherboard Repair Indore</span>, 
            please use the diagnostics below to find your way.
          </p>
        </motion.div>

        {/* Diagnostic Links (SEO Internal Linking) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {quickLinks.map((item, index) => (
            <Link key={index} href={item.link} className="group">
              <div className="p-6 bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-sky-200/50 hover:border-sky-400 transition-all text-center h-full flex flex-col items-center justify-center gap-3">
                <div className="text-sky-500 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-[11px] md:text-xs uppercase tracking-wider font-orbitron">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Primary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 bg-gray-950 hover:bg-sky-600 text-white font-orbitron font-bold py-4 px-10 rounded-xl transition-all shadow-xl active:scale-95"
          >
            Reboot to Home <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <div className="flex flex-col items-start text-left border-l-2 border-sky-500 pl-4">
            <div className="flex items-center gap-2 text-gray-900 font-bold uppercase text-sm">
              <MdOutlineLocationOn className="text-red-600" size={18} />
              Lap-X Vijay Nagar
            </div>
            <p className="text-xs text-gray-500">LG-11, Orbit Mall, Indore</p>
          </div>
        </motion.div>

        {/* Subtle Organic SEO Footer */}
        <div className="mt-20 opacity-70 hover:opacity-100 transition-opacity duration-500">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-medium leading-loose">
            Expert Gaming Laptop Repair Indore • Liquid Damage Specialist • SSD Upgrade for Laptop Indore • 
            Genuine parts • Asus Service Center in Indore Vijay Nagar • MSI Service Center Indore
          </p>
        </div>
      </div>
    </div>
  );
}