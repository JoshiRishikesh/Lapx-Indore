
import { Metadata } from "next";

import HeroSection from "@/components/homepage/HeroSection";
import BrandLogoSection from "@/components/homepage/BrandLogoSection";
import PillarsSection from "@/components/homepage/PillarsSection";
import BrandServiceSection from "@/components/homepage/BrandServiceSection";

export const metadata: Metadata = {
  title: "LapX - Certified Laptop Service Center & Repair In Indore Vijay Nagar - APPLE | ASUS | MSI | DELL | HP | ACER | LENOVO",
  description:
    "LapX - Certified Laptop Service Center In Indore Vijay Nagar. Professional repair for APPLE MACBOOK | ASUS | MSI | DELL | HP | ACER | LENOVO. Expert chip-level repairing and genuine parts near Orbit Mall.",
  authors: [{ name: "LapX Service Center" }],
  keywords: [
    // Priority 1: Indore + Focus Brands
    "Asus Service Center in Indore Vijay Nagar",
    "MSI Service Center Indore Vijay Nagar",
    "Apple MacBook Repair Indore Vijay Nagar",
    "Laptop repair in Indore Vijay Nagar",
    
    // Priority 2: Indore + Specific Services
    "HP Laptop Service Center in Indore Vijay Nagar",
    "Dell Service Center in Indore Vijay Nagar",
    "Lenovo Laptop Repair in Indore Vijay Nagar",
    "Acer Service Center in Indore Vijay Nagar",
    "Gaming Laptop Repair in Indore",
    "Laptop Motherboard Repair in Indore",
    
    // Priority 3: Localized High-Intent
    "Laptop Repair Shop Near Me",
    "Best Laptop Repairing Near Orbit Mall",
    "Laptop Screen Replacement Vijay Nagar",
    "SSD Upgrade for Laptop Indore",
    "Liquid Damage Repair Indore",
    
    // Priority 4: Trust & Brand
    "Same-day repair in Indore",
    "Genuine parts in Indore",
    "Chip-level laptop repairing in Indore",
    "LapX Indore",
  ],
  metadataBase: new URL("https://lapx.co.in"),
  openGraph: {
    title: "LapX - Certified Laptop Service Center & Repair In Indore Vijay Nagar",
    description:
      "Expert Apple MacBook, Asus, MSI, Dell, and HP laptop repairs at LapX Indore. Same-day chip-level repairing and genuine parts near Orbit Mall, Vijay Nagar.",
    url: "/",
    siteName: "LapX Service Center",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "LapX Certified Laptop Service Center Indore Vijay Nagar",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://lapx.co.in",
  },
};


export default function HomePage() {
  return (
    <main className="bg-linear-to-b from-gray-50 to-white scroll-smooth">
      <HeroSection />
      <BrandLogoSection />
      <PillarsSection />
      <BrandServiceSection />
    </main>
  );
}
