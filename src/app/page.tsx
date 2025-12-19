
import { Metadata } from "next";

import HeroSection from "@/components/homepage/HeroSection";
import BrandLogoSection from "@/components/homepage/BrandLogoSection";
import PillarsSection from "@/components/homepage/PillarsSection";
import BrandServiceSection from "@/components/homepage/BrandServiceSection";

export const metadata: Metadata = {
  title: "Laptop Repair Service Center in Vijay Nagar, Indore | HP, Dell, ASUS",
  description:
    "LAPX (also known as Lapzoo) is Indore's trusted laptop repair service center in Vijay Nagar. Specializing in HP service center indore, Dell, ASUS, and Lenovo repairs. We provide genuine parts for screen replacement, motherboard repair, and battery issues with 1,500+ happy customers.",
  authors: [{ name: "LAPX Service Center" }, { name: "Lapzoo" }],
  keywords: [
    "Laptop Repair Service Center Indore",
    "LAPX Indore",
    "Lapzoo Indore",
    "HP Service Center Indore",
    "Dell Service Center Indore",
    "ASUS Service Center Indore",
    "Laptop Repair Near Me",
    "Lenovo Service Center Indore",
    "Laptop Repair Vijay Nagar",
    "HP Laptop Service Center Vijay Nagar",
    "Best laptop repair shop in Indore",
    "LAPX Lapzoo Indore",
  ],
  metadataBase: new URL("https://lapx.co.in"),
  openGraph: {
    title: "Laptop Repair Service Center in Vijay Nagar | LAPX (Lapzoo)",
    description:
      "Expert HP, Dell, and ASUS laptop repairs at LAPX (formerly Lapzoo) Indore. Genuine parts and fast service in Vijay Nagar.",
    url: "/",
    siteName: "LAPX Service Center",
    images: [
      {
        url: "/homepage-og.jpg", 
        width: 1200,
        height: 630,
        alt: "LAPX (Lapzoo) Laptop Repair Service Center Indore",
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
