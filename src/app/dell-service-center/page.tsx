import { Metadata } from "next";
import { BrandThemeProvider } from "@/context/BrandThemeContext";
import DellServiceCenterPage from "./DellServiceCenterPage";


export const metadata: Metadata = {
  title: "Authorized Dell Laptop Service Center Indore | Trusted Dell Repair Experts",
  description:
    "Looking for a Dell Service Center near me in Indore? Visit our Authorized & Trusted Dell Laptop Service Center for Alienware, Inspiron, and XPS series. Expert motherboard, battery, keyboard, screen, and component-level repairs with genuine parts and fast diagnosis.",
  authors: [{ name: "LAPX Service Center" }],
  keywords: [
    "Dell Service Center Indore",
    "Dell Laptop Repair Indore",
    "Authorized Dell Service Center",
    "Trusted Dell Repair",
    "Alienware Laptop Repair Indore",
    "Inspiron Laptop Service Indore",
    "XPS Laptop Repair Indore",
    "Laptop Service Center Near Me Indore",
    "Dell Component Level Repair",
    "Dell Motherboard Repair Indore",
    "Dell Screen Replacement Indore",
    "Dell Battery Replacement Indore",
  ],
  metadataBase: new URL("https://lapx.co.in"), // Add your live domain after deployment
  openGraph: {
    title: "Dell Laptop Service Center Indore",
    description:
      "Authorized & Trusted Dell laptop repair experts in Indore. Genuine spare parts, certified technicians, and fast diagnosis for Alienware, Inspiron, and XPS laptops.",
    url: "/dell-service-center",
    siteName: "LapX Service Center",
    images: [
      {
        url: "https://lapx.co.in/brand/dell/homepage.avif", // absolute URL for OG image
        width: 1200,
        height: 630,
      },
    ],
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