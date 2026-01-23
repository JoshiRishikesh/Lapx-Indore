import { Metadata } from "next";
import { BrandThemeProvider } from "@/context/BrandThemeContext";
import MSIServiceCenterPage from "./MsiServiceCenterPage";

export const metadata: Metadata = {
  title: "MSI Service Center Indore Vijay Nagar | Expert Gaming Laptop Repair",
  description:
    "Leading MSI Service Center Indore for Katana, Stealth, and Raider series. We specialize in MSI chip-level repairing, liquid damage fix, and high-refresh screen replacement in Vijay Nagar.",
  authors: [{ name: "LAPX Service Center" }],
  keywords: [
    "MSI Service Center Indore",
    "MSI Service Center in Indore Vijay Nagar",
    "MSI Laptop Repair Indore",
    "Gaming Laptop Repair Indore",
    "MSI Gaming Laptop Service Vijay Nagar",
    "MSI Motherboard Repair Indore",
    "Laptop Motherboard Repair Indore",
    "MSI Screen Replacement Vijay Nagar",
    "MSI Battery Replacement Indore",
    "Chip-level repairing Indore",
    "MSI Katana Repair Indore",
    "MSI Stealth Service Vijay Nagar",
    "Laptop Repair in Vijay Nagar Indore",
  ],
  metadataBase: new URL("https://lapx.co.in"),
  alternates: {
    canonical: "/msi-service-center",
  },
  openGraph: {
    title: "MSI Laptop Service Center Indore Vijay Nagar",
    description:
      "Expert MSI gaming laptop repair in Vijay Nagar, Indore. specialized in chip-level motherboard repair, genuine parts, and same-day service.",
    url: "/msi-service-center",
    siteName: "LapX Service Center",
    images: [
      {
        url: "/brand/msi/homepage.avif", 
        width: 1200,
        height: 630,
        alt: "LAPX MSI Service Center Indore Vijay Nagar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    /* Ensure 'msi' is defined in your BrandThemeContext to trigger the Red/Black theme */
    <BrandThemeProvider brand="msi">
      <MSIServiceCenterPage />
    </BrandThemeProvider>
  );
}