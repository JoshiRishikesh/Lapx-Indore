import { Metadata } from "next";
import { BrandThemeProvider } from "@/context/BrandThemeContext";
import AsusServiceCenterPage from "./AsusServiceCenterPage";

export const metadata: Metadata = {
  title: "ASUS Laptop Service Center Vijay Nagar Indore | ROG & TUF Repair",
  description:
    "Official & Trusted ASUS Service Center in Vijay Nagar, Indore. Specializing in ROG, TUF, and ZenBook repair. Fast screen replacement, battery changes, and motherboard repairs by experts.",
  authors: [{ name: "LAPX Service Center" }],
  keywords: [
    "ASUS Service Center Vijay Nagar Indore",
    "ASUS Laptop Repair Indore",
    "ASUS ROG Repair Vijay Nagar",
    "ASUS TUF Service Center Indore",
    "ZenBook Repair Vijay Nagar",
    "ASUS Laptop Service Near Me Indore",
    "ASUS Motherboard Repair Vijay Nagar",
    "ASUS Screen Replacement Indore",
    "ASUS Battery Replacement Vijay Nagar",
    "Gaming Laptop Repair Indore",
    "ASUS Component Level Repair Indore",
  ],
  metadataBase: new URL("https://lapx.co.in"),
  alternates: {
    canonical: "/asus-service-center",
  },
  openGraph: {
    title: "ASUS Laptop Service Center Vijay Nagar Indore",
    description:
      "Expert ASUS laptop repair in Vijay Nagar, Indore. We use genuine parts for ROG, TUF, and ZenBook series. Fast diagnosis and certified technicians.",
    url: "/asus-service-center",
    siteName: "LapX Service Center",
    images: [
      {
        url: "/brand/asus/homepage.webp", // MetadataBase will handle the domain
        width: 1200,
        height: 630,
        alt: "LAPX ASUS Service Center Vijay Nagar Indore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    <BrandThemeProvider brand="asus">
      <AsusServiceCenterPage />
    </BrandThemeProvider>
  );
}