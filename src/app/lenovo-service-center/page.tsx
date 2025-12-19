import { Metadata } from "next";
import { BrandThemeProvider } from "@/context/BrandThemeContext";
import LenovoServiceCenterPage from "./LenovoServiceCenterPage";

export const metadata: Metadata = {
  title: "Lenovo Laptop Service Center Vijay Nagar Indore | ThinkPad & Legion Repair",
  description:
    "Expert Lenovo Service Center in Vijay Nagar, Indore. Specializing in ThinkPad, Legion, and IdeaPad repair. We offer genuine parts, motherboard repair, and fast screen replacement.",
  authors: [{ name: "LAPX Service Center" }],
  keywords: [
    "Lenovo Service Center Vijay Nagar Indore",
    "Lenovo Laptop Repair Indore",
    "ThinkPad Repair Vijay Nagar",
    "Lenovo Legion Service Center Indore",
    "IdeaPad Repair Vijay Nagar",
    "Lenovo Laptop Service Near Me Indore",
    "Lenovo Motherboard Repair Indore",
    "Lenovo Battery Replacement Vijay Nagar",
    "Lenovo Screen Replacement Indore",
    "Yoga Laptop Repair Indore",
    "Lenovo Component Level Repair Vijay Nagar",
  ],
  metadataBase: new URL("https://lapx.co.in"),
  alternates: {
    canonical: "/lenovo-service-center",
  },
  openGraph: {
    title: "Lenovo Laptop Service Center Vijay Nagar Indore",
    description:
      "Looking for Lenovo repair in Vijay Nagar? We provide expert service for ThinkPad, Legion, and IdeaPad using genuine Lenovo spare parts.",
    url: "/lenovo-service-center",
    siteName: "LapX Service Center",
    images: [
      {
        url: "/brand/lenovo/homepage.avif", // MetadataBase will handle the domain
        width: 1200,
        height: 630,
        alt: "LAPX Lenovo Service Center Vijay Nagar Indore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    <BrandThemeProvider brand="lenovo">
      <LenovoServiceCenterPage />
    </BrandThemeProvider>
  );
}