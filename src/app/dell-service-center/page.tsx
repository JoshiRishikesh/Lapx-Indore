import { Metadata } from "next";
import { BrandThemeProvider } from "@/context/BrandThemeContext";
import DellServiceCenterPage from "./DellServiceCenterPage";

export const metadata: Metadata = {
  title: "Dell Laptop Service Center Vijay Nagar Indore | Authorized Repair",
  description:
    "Looking for a Dell Service Center in Vijay Nagar, Indore? We offer expert repair for Alienware, Inspiron, and XPS. Genuine parts, fast diagnosis, and certified motherboard/screen repairs.",
  authors: [{ name: "LAPX Service Center" }],
  keywords: [
    "Dell Service Center Vijay Nagar Indore",
    "Laptop Repair Vijay Nagar Indore",
    "Dell Laptop Repair Indore",
    "Authorized Dell Service Center Indore",
    "Dell Laptop Service Near Vijay Nagar",
    "Alienware Repair Vijay Nagar",
    "Inspiron Service Center Indore",
    "XPS Laptop Repair Vijay Nagar",
    "Dell Motherboard Repair Indore",
    "Dell Battery Replacement Vijay Nagar",
    "Dell Screen Replacement Indore",
    "Laptop Service Center near AB Road Indore",
  ],
  metadataBase: new URL("https://lapx.co.in"),
  alternates: {
    canonical: "/dell-service-center",
  },
  openGraph: {
    title: "Dell Laptop Service Center Vijay Nagar Indore",
    description:
      "Trusted Dell laptop repair experts in Vijay Nagar, Indore. We provide genuine parts and fast service for all Dell models including Alienware & XPS.",
    url: "/dell-service-center",
    siteName: "LapX Service Center",
    images: [
      {
        url: "/brand/dell/homepage.avif", // MetadataBase will prepend the domain automatically
        width: 1200,
        height: 630,
        alt: "LAPX Dell Service Center Indore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    <BrandThemeProvider brand="dell">
      <DellServiceCenterPage />
    </BrandThemeProvider>
  );
}