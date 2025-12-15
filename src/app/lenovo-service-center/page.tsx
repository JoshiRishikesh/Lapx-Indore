import { Metadata } from "next";
import { BrandThemeProvider } from "@/context/BrandThemeContext";
import LenovoServiceCenterPage from "./LenovoServiceCenterPage";

export const metadata: Metadata = {
  title: "Authorized Lenovo Laptop Service Center Indore | Trusted Lenovo Repair Experts",
  description:
    "Looking for a Lenovo Service Center near me in Indore? Visit our Authorized & Trusted Lenovo Laptop Service Center for ThinkPad, Legion & IdeaPad. Expert motherboard, battery, keyboard, screen, and component-level repairs with genuine parts and fast diagnosis.",
  authors: [{ name: "LAPX Service Center" }],
  keywords: [
    "Lenovo Service Center Indore",
    "Lenovo Laptop Repair Indore",
    "Authorized Lenovo Service Center",
    "Trusted Lenovo Repair",
    "ThinkPad Repair Indore",
    "Legion Laptop Service Indore",
    "IdeaPad Laptop Repair Indore",
    "Laptop Service Center Near Me Indore",
    "Lenovo Component Level Repair",
    "Lenovo Motherboard Repair Indore",
    "Lenovo Screen Replacement Indore",
    "Lenovo Battery Replacement Indore",
  ],
  metadataBase: new URL("https://lapx.co.in"), // set your live domain
  openGraph: {
    title: "Lenovo Laptop Service Center Indore",
    description:
      "Authorized & Trusted Lenovo laptop repair experts in Indore. Genuine spare parts, certified technicians, and fast diagnosis for ThinkPad, Legion, and IdeaPad laptops.",
    url: "/lenovo-service-center",
    siteName: "LapX Service Center",
    images: [
      {
        url: "https://lapx.co.in/brand/lenovo/homepage.avif", // absolute URL for OG image
        width: 1200,
        height: 630,
      },
    ],
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
