
import { Metadata } from "next";

import HeroSection from "@/components/homepage/HeroSection";
import BrandLogoSection from "@/components/homepage/BrandLogoSection";
import PillarsSection from "@/components/homepage/PillarsSection";
import BrandServiceSection from "@/components/homepage/BrandServiceSection";

export const metadata: Metadata = {
  title:
    "Premium Laptop Service Center in Vijay Nagar, Indore | ASUS, HP, Dell, Lenovo Repair Experts",
  description:
    "Looking for a trusted laptop service center in Vijay Nagar, Indore? LAPX Service Center offers Authorized & Expert Repair for ASUS, HP, Dell, and Lenovo laptops. Fast diagnosis, genuine parts, motherboard, battery, screen, keyboard & component-level repairs by certified technicians. Serving nearby areas including Palasia, AB Road, Rau, Sanwer Road, and MG Road.",
  authors: [{ name: "LAPX Service Center" }],
  keywords: [
    "Laptop Service Center Vijay Nagar Indore",
    "Laptop Repair Indore",
    "ASUS Laptop Service Indore",
    "HP Laptop Service Indore",
    "Dell Laptop Service Indore",
    "Lenovo Laptop Service Indore",
    "Authorized Laptop Repair Indore",
    "Trusted Laptop Service Center",
    "Laptop Motherboard Repair Indore",
    "Laptop Battery Replacement Indore",
    "Laptop Screen Replacement Indore",
    "Laptop Keyboard Repair Indore",
    "Laptop Component Level Repair Indore",
    "Laptop Service Near Me Vijay Nagar",
    "Laptop Repair Near Me Indore",
    "Vijay Nagar Laptop Repair",
    "Laptop Service Palasia",
    "Laptop Service AB Road Indore",
    "Laptop Service Rau",
    "Laptop Service Sanwer Road",
    "Laptop Service MG Road"
  ],
  metadataBase: new URL("https://lapx.co.in"), // added for OG resolution
  openGraph: {
    title: "Premium Laptop Service Center Vijay Nagar, Indore | LAPX Service Center",
    description:
      "LAPX Service Center in Vijay Nagar, Indore provides Authorized & Trusted Laptop Repair for ASUS, HP, Dell, and Lenovo. Certified technicians, genuine parts, fast diagnosis, and expert motherboard, battery, screen, and component-level repairs. Serving Palasia, AB Road, Rau, Sanwer Road, MG Road, and nearby areas.",
    url: "/",
    siteName: "LapX Service Center",
    images: [
      {
        url: "https://lapx.co.in/brand/homepage/hero.webp", // absolute URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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
