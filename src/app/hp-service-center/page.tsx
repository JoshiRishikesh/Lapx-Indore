import { Metadata } from "next";
import { BrandThemeProvider } from "@/context/BrandThemeContext";
import HpServiceCenterPage from "./HpServiceCenterPage";


// ⭐ ADD YOUR META TAGS HERE
export const metadata: Metadata = {
  title: "Authorized HP Laptop Service Center Indore | Trusted HP Repair Experts",
  description:
    "Looking for an HP Service Center near me in Indore? Visit our Authorized & Trusted HP Laptop Service Center for Pavilion, Omen, and EliteBook series. Expert motherboard, battery, keyboard, screen, and component-level repairs with genuine parts and fast diagnosis.",
  authors: [{ name: "LAPX Service Center" }],
  keywords: [
    "HP Service Center Indore",
    "HP Laptop Repair Indore",
    "Authorized HP Service Center",
    "Trusted HP Repair",
    "Pavilion Laptop Repair Indore",
    "Omen Laptop Service Indore",
    "EliteBook Laptop Repair Indore",
    "Laptop Service Center Near Me Indore",
    "HP Component Level Repair",
    "HP Motherboard Repair Indore",
    "HP Screen Replacement Indore",
    "HP Battery Replacement Indore",
  ],
  metadataBase: new URL("https://lapx.co.in"), // use live domain after deployment
  openGraph: {
    title: "HP Laptop Service Center Indore",
    description:
      "Authorized & Trusted HP laptop repair experts in Indore. Genuine spare parts, certified technicians, and fast diagnosis for Pavilion, Omen, and EliteBook laptops.",
    url: "/hp-service-center",
    siteName: "LapX Service Center",
    images: [
      {
        url: "https://lapx.co.in/brand/hp/homepage.webp", // absolute URL for OG image
        width: 1200,
        height: 630,
      },
    ],
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
