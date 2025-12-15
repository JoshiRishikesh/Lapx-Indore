// src/context/BrandThemeContext.tsx
"use client";

import { createContext, useContext, useMemo } from "react";
// Import both the type and the color data
import { brandColors, BrandTheme } from "@/theme/brandColors"; 

// 1. Define Context with the specific theme type
const BrandThemeContext = createContext<BrandTheme>(brandColors.lenovo); // default

export const BrandThemeProvider = ({
  brand,
  children,
}: {
  brand: string;
  children: React.ReactNode;
}) => {
  // Use useMemo to prevent unnecessary re-renders
  const theme = useMemo(() => {
    // 2. Safely access the theme, defaulting to lenovo if key is missing
    return brandColors[brand.toLowerCase()] || brandColors.lenovo;
  }, [brand]);

  return (
    <BrandThemeContext.Provider value={theme}>
      {children}
    </BrandThemeContext.Provider>
  );
};

// 3. Update hook to return the full BrandTheme object
export const useBrandTheme = () => useContext(BrandThemeContext);