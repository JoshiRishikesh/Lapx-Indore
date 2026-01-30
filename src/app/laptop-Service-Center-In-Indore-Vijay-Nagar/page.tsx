// app/laptop-repair-in-vijay-nagar-indore/page.tsx
import { Metadata } from "next";
import HeroSection from "@/components/homepage/HeroSection";
import BrandLogoSection from "@/components/homepage/BrandLogoSection";
import BrandServiceSection from "@/components/homepage/BrandServiceSection";
import PillarsSection from "@/components/homepage/PillarsSection";
import ReviewsSection from "@/components/location/ReviewsSection"; // Create this component

export const metadata: Metadata = {
  title: "Laptop Repair in Vijay Nagar, Indore | HP, Dell, ASUS & Lenovo Service",
  description:
    "LAPX (Lapzoo) provides expert HP, Dell, ASUS & Lenovo laptop repairs in Vijay Nagar, Indore. Fast service, genuine parts, and 1,500+ happy customers.",
  keywords: [
    "Laptop Service Center In Indore, Vijay Nagar",
    "Laptop Service Center Near Me In Indore, Vijay Nagar",
    "HP Laptop Service Center In Indore",
    "Dell Laptop Service Center In Indore, Vijay Nagar",
    "ASUS Service Center In Indore, Vijay Nagar",
    "Lenovo Service Center In Indore, Vijay Nagar",
    "Macbook Service Center In Indore, Vijay Nagar",
    "Apple Service Center In Indore, Vijay Nagar"
  ],
  metadataBase: new URL("https://lapx.co.in"),
  openGraph: {
    title: "Laptop Service Center In Indore, Vijay Nagar | LAPX ",
    description:
      "Expert HP, Dell, ASUS & Lenovo laptop repairs in Vijay Nagar, Indore. Genuine parts and fast service by LAPX (Lapzoo).",
    url: "/laptop-repair-in-vijay-nagar-indore",
    siteName: "LAPX Service Center",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LAPX (Lapzoo) Laptop Repair Service Center Vijay Nagar, Indore",
      },
    ],
    type: "website",
  },
};

export default function VijayNagarPage() {
  return (
    <main className="bg-linear-to-b from-gray-50 to-white scroll-smooth">
      {/* Hero Section */}
      <HeroSection />

      {/* Brand Logos Section */}
      <BrandLogoSection />

      {/* Brand Services Section */}
      <BrandServiceSection />

      {/* Service Pillars Section */}
      <PillarsSection />

      {/* Reviews Section */}
      <ReviewsSection location="Vijay Nagar, Indore" />
    </main>
  );
}
