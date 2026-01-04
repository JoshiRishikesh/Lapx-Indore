import React from "react";
import { FiCpu, FiCheckCircle, FiClock, FiUserCheck } from "react-icons/fi";

const pillars = [
  {
    icon: FiCpu,
    title: "Component-Level Laptop Motherboard Repair",
    description:
      "Advanced chip-level laptop motherboard repair that fixes complex faults and avoids expensive full replacements.",
    accent: "gray",
  },
  {
    icon: FiCheckCircle,
    title: "Genuine Laptop Spare Parts",
    description:
      "We use original-quality laptop components to ensure long-lasting performance while maintaining OEM repair standards.",
    accent: "green",
  },
  {
    icon: FiClock,
    title: "Fast Laptop Diagnosis & Same-Day Repair",
    description:
      "Quick laptop issue diagnosis with same-day repair availability for common problems, minimizing downtime.",
    accent: "blue",
  },
  {
    icon: FiUserCheck,
    title: "Certified Laptop Repair Technicians",
    description:
      "Experienced technicians specializing in HP, Dell, ASUS, and Lenovo laptop repairs for customers in Vijay Nagar, Indore.",
    accent: "red",
  },
];

// Accent styles
const accentClasses: Record<string, { border: string; text: string; bg: string }> =
  {
    gray: { border: "border-gray-500", text: "text-gray-500", bg: "bg-gray-500/10" },
    green: {
      border: "border-green-500",
      text: "text-green-500",
      bg: "bg-green-500/10",
    },
    blue: {
      border: "border-blue-500",
      text: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    red: { border: "border-red-500", text: "text-red-500", bg: "bg-red-500/10" },
  };

const ServicePillars: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO-SAFE HEADING */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-14">
          Why LAPX is a Trusted Laptop Repair Service in Vijay Nagar, Indore
        </h2>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const accent = accentClasses[pillar.accent];
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] border-t-4 ${accent.border} text-center`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex justify-center items-center text-5xl mb-5 p-4 rounded-full ${accent.text} ${accent.bg}`}
                >
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;
