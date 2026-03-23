"use client";

import React from "react";
import { FaCheckCircle, FaTools, FaLaptop } from "react-icons/fa";

export default function AcerSEOSections() {
  return (
    <>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
          Acer Laptop Repair Services in Indore
        </h2>

        <p className="text-center max-w-3xl mx-auto text-slate-600 mb-12">
          Looking for a trusted Acer laptop service center in Indore? LAPX provides expert repair services for all Acer models including Aspire, Nitro, Swift and Predator series. Our technicians handle everything from basic servicing to complex motherboard repairs with precision.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Acer Screen Replacement Indore",
            "Acer Battery Replacement",
            "Acer Motherboard Repair",
            "Acer Charging Port Repair",
            "Acer Overheating & Fan Issue Fix",
            "Acer Laptop Dead Repair",
          ].map((s) => (
            <div key={s} className="p-6 bg-white rounded-xl shadow">
              <FaTools className="text-orange-500 mb-3" />
              <h3 className="font-bold">{s}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMS SECTION (VERY IMPORTANT FOR SEO) */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-black text-center mb-10">
          Common Acer Laptop Problems We Fix
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            "Acer laptop not turning on",
            "Acer laptop screen flickering or broken",
            "Acer laptop battery draining fast",
            "Acer laptop overheating issue",
            "Acer laptop charging problem",
            "Acer keyboard not working",
          ].map((problem) => (
            <div key={problem} className="flex items-center gap-3">
              <FaLaptop className="text-blue-500" />
              <p>{problem}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 px-6 bg-slate-50">
        <h2 className="text-3xl font-black text-center mb-10">
          Why Choose LAPX Acer Service Center Indore
        </h2>

        <div className="max-w-4xl mx-auto space-y-4 text-lg">
          {[
            "Certified and experienced Acer laptop technicians",
            "Same-day Acer laptop repair service in Indore",
            "Affordable pricing starting at ₹199",
            "100% genuine spare parts",
            "Post-warranty support available",
            "Convenient location in Vijay Nagar, Indore",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-black text-center mb-10">
          What Our Customers Say
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Rahul Sharma",
              text: "Best Acer laptop repair in Indore. My Nitro gaming laptop was overheating and they fixed it within 3 hours.",
            },
            {
              name: "Priya Verma",
              text: "Affordable and fast service. Got my Acer screen replaced the same day. Highly recommended.",
            },
            {
              name: "Amit Patel",
              text: "Professional technicians and genuine parts. LAPX is the best Acer service center in Vijay Nagar.",
            },
          ].map((t, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <p className="text-sm text-slate-600 mb-4">"{t.text}"</p>
              <h4 className="font-bold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (VERY IMPORTANT FOR SEO + FEATURED SNIPPETS) */}
      <section className="py-20 px-6 bg-slate-50">
        <h2 className="text-3xl font-black text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              q: "What is the cost of Acer laptop repair in Indore?",
              a: "The cost depends on the issue. Basic servicing starts at ₹199, while parts replacement varies based on model and damage.",
            },
            {
              q: "Do you provide same-day Acer laptop repair?",
              a: "Yes, most Acer laptop repairs are completed within the same day depending on the issue.",
            },
            {
              q: "Do you use genuine Acer spare parts?",
              a: "Yes, we use high-quality and genuine compatible parts for all Acer laptop repairs.",
            },
            {
              q: "Where is your Acer service center located in Indore?",
              a: "We are located at Lower Ground Floor, LG-39, Orbit Mall, Vijay Nagar, Indore.",
            },
            {
              q: "Do you provide warranty on repairs?",
              a: "Yes, we provide 30 to 90 days warranty on most repairs and replacements.",
            },
          ].map((faq, i) => (
            <div key={i}>
              <h3 className="font-bold">{faq.q}</h3>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL SEO BOOST */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Acer Laptop Service Center Near You in Indore
        </h2>

        <p className="max-w-3xl mx-auto text-slate-600">
          We serve all major areas in Indore including Vijay Nagar, Palasia, AB Road, Bhawarkua, Rajwada and nearby locations. If you are searching for “Acer laptop repair near me”, LAPX is your trusted destination.
        </p>
      </section>

      {/* FINAL SEO BLOCK */}
      <section className="py-10 px-6 text-xs text-slate-500 text-center">
        Acer Laptop Service Center Indore | Acer Laptop Repair Indore | Acer Service Center Vijay Nagar |
        Acer Screen Replacement Indore | Acer Battery Repair Indore | Acer Motherboard Repair Indore |
        Acer Charging Port Repair Indore | Best Acer Repair Shop Indore
      </section>

    </>
  );
}