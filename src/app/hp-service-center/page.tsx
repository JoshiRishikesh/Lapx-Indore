import { Metadata } from "next";
import { BrandThemeProvider } from "@/context/BrandThemeContext";
import HpServiceCenterPage from "./HpServiceCenterPage";

export const metadata: Metadata = {
  title: "HP Laptop Service Center Vijay Nagar Indore | Authorized Repair Experts",
  description:
    "Looking for a professional HP Service Center in Vijay Nagar, Indore? We provide expert repair for HP Pavilion, Omen, and EliteBook. Genuine parts, fast diagnosis, and certified motherboard/screen repairs.",
  authors: [{ name: "LAPX Service Center" }],
  keywords: [
    "HP Service Center Vijay Nagar Indore",
    "HP Laptop Repair Vijay Nagar",
    "HP Laptop Service Indore",
    "Authorized HP Service Center Indore",
    "HP Pavilion Repair Indore",
    "HP Omen Service Center Vijay Nagar",
    "HP EliteBook Repair Indore",
    "Laptop Repair Near Vijay Nagar Indore",
    "HP Motherboard Repair Indore",
    "HP Battery Replacement Vijay Nagar",
    "HP Screen Replacement Indore",
    "Laptop Keyboard Repair Vijay Nagar",
  ],
  metadataBase: new URL("https://lapx.co.in"),
  alternates: {
    canonical: "/hp-service-center",
  },
  openGraph: {
    title: "HP Laptop Service Center Vijay Nagar Indore",
    description:
      "Trusted HP laptop repair experts in Vijay Nagar, Indore. Certified service for Pavilion, Omen, and EliteBook using genuine HP spare parts.",
    url: "/hp-service-center",
    siteName: "LapX Service Center",
    images: [
      {
        url: "/brand/hp/homepage.webp", // MetadataBase will prepend the domain
        width: 1200,
        height: 630,
        alt: "LAPX HP Service Center Vijay Nagar Indore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    <BrandThemeProvider brand="hp">
      <HpServiceCenterPage />
    </BrandThemeProvider>
  );
}