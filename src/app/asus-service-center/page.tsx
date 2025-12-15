import { Metadata } from "next";
import { BrandThemeProvider } from "@/context/BrandThemeContext";
import AsusServiceCenterPage from "./AsusServiceCenterPage";


export const metadata: Metadata = {
  title: "Authorized ASUS Laptop Service Center Indore | Trusted ASUS Repair Experts",
  description:
    "Looking for an ASUS Service Center near me in Indore? Visit our Authorized & Trusted ASUS Laptop Service Center for ZenBook, ROG, and TUF series. Expert motherboard, battery, keyboard, screen, and component-level repairs with genuine parts and fast diagnosis.",
  authors: [{ name: "LAPX Service Center" }],
  keywords: [
    "ASUS Service Center Indore",
    "ASUS Laptop Repair Indore",
    "Authorized ASUS Service Center",
    "Trusted ASUS Repair",
    "ZenBook Repair Indore",
    "ROG Laptop Service Indore",
    "TUF Laptop Repair Indore",
    "Laptop Service Center Near Me Indore",
    "ASUS Component Level Repair",
    "ASUS Motherboard Repair Indore",
    "ASUS Screen Replacement Indore",
    "ASUS Battery Replacement Indore",
  ],
  metadataBase: new URL("https://lapx.co.in"), // Add this after Vercel deployment
  openGraph: {
    title: "ASUS Laptop Service Center Indore",
    description:
      "Authorized & Trusted ASUS laptop repair experts in Indore. Genuine spare parts, certified technicians, and fast diagnosis for ZenBook, ROG, and TUF laptops.",
    url: "/asus-service-center",
    siteName: "LapX Service Center",
    images: [
      {
        url: "https://lapx.co.in/brand/asus/homepage.webp", // absolute URL
        width: 1200,
        height: 630,
      },
    ],
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