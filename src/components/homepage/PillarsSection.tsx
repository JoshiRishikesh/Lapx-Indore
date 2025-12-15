"use client";
import React from "react";
import ServicePillars from "@/components/ServicePillars";
import { motion } from "framer-motion";

export default function PillarsSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4"
      >
        <ServicePillars />
      </motion.div>
    </section>
  );
}
