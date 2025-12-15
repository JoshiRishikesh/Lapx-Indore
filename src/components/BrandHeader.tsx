"use client";

import Image from "next/image";
import { FaCheckCircle, FaShieldAlt, FaStar } from "react-icons/fa"; 
import React from "react";
import { useBrandTheme } from "@/context/BrandThemeContext";

type BrandHeaderProps = {
  logo: string;
  brandName: string;
  tagline?: string;
  rating?: number;
};

const TrustMetric = ({
  icon: Icon,
  text,
  color
}: {
  icon: React.ElementType;
  text: string;
  color: string;
}) => (
  <div className="flex items-center text-xs sm:text-sm md:text-base text-gray-700 font-medium gap-1 sm:gap-2">
    <Icon className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" style={{ color }} />
    <span>{text}</span>
  </div>
);

export default function BrandHeader({ logo, brandName, tagline, rating }: BrandHeaderProps) {
  const theme = useBrandTheme();

  const defaultTagline = `Trusted, Professional &amp; Fast ${brandName} Laptop Service Center in Indore.`;

  const ratingText = rating
    ? `Rated ${rating.toFixed(1)}/5.0`
    : "Verified Service Partner";

  return (
    <section
      className="w-full py-8 sm:py-12 border-b shadow-lg"
      style={{
        background: `linear-gradient(to right, white, ${theme.primary}15, white)`,
        borderColor: theme.primary,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap items-center gap-4 sm:gap-8 px-4 md:px-8 lg:px-12">

        {/* Logo */}
        <div className="shrink-0 w-20 sm:w-24 md:w-28 lg:w-32">
          <div
            className="w-full h-full relative bg-white rounded-2xl shadow-xl flex items-center justify-center p-2 sm:p-4 transition-transform hover:scale-[1.03] duration-300"
            style={{ border: `3px solid ${theme.secondary}` }}
          >
            <Image
              src={logo}
              alt={`${brandName} Logo`}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start min-w-0">

          {/* Verified Badge */}
          <div className="flex items-center mb-1 sm:mb-2">
            <span
              className="inline-flex items-center px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider"
              style={{
                color: theme.secondary,
                backgroundColor: theme.secondary + "22",
              }}
            >
              <FaShieldAlt className="w-2 h-2 sm:w-3 sm:h-3 mr-1" style={{ color: theme.secondary }} />
              AUTHORIZED PARTNER
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 leading-snug">
            {brandName} Certified Repair Expertise
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-1 sm:mt-2 max-w-full leading-snug">
            {tagline || defaultTagline}
          </p>

          <div
            className="w-16 sm:w-24 h-1 rounded-full mt-2 sm:mt-3"
            style={{ backgroundColor: theme.primary }}
          ></div>

          {/* Trust Metrics */}
          <div
            className="mt-3 sm:mt-5 pt-2 sm:pt-4 border-t flex flex-wrap gap-x-4 gap-y-2"
            style={{ borderColor: theme.primary + "33" }}
          >
            <TrustMetric icon={FaCheckCircle} text="Genuine Parts Guarantee" color={theme.icon} />
            <TrustMetric icon={FaShieldAlt} text="6-Month Warranty on Repairs" color={theme.icon} />
            <TrustMetric icon={FaStar} text={ratingText} color={theme.icon} />
          </div>

        </div>
      </div>
    </section>
  );
}
