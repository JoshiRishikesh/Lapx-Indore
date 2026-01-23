// src/theme/brandColors.ts

export interface BrandTheme {
  primary: string;    // Main brand color (Buttons, Headlines)
  secondary: string;  // Hover states / Accents
  text: string;       // Primary text color
  icon: string;       // Icon or active indicator color
}

export const brandColors: Record<string, BrandTheme> = {
  msi: {
    // MSI "Dragon Red" & Obsidian Black theme
    primary: "#FF0000",   // True MSI Red
    secondary: "#C41E3A", // Darker Crimson for hovers
    text: "#FFFFFF",      // White text for high contrast on black
    icon: "#FF0000",      // Red icons/indicators
  },

  lenovo: {
    primary: "#DC2626",   // Red-600
    secondary: "#F87171", // Red-400
    text: "#111827",      // Gray-900
    icon: "#EF4444",      // Red-500
  },

  hp: {
    primary: "#06B6D4",   // Cyan-500
    secondary: "#67E8F9", // Cyan-300
    text: "#111827",      // Gray-900
    icon: "#22D3EE",      // Cyan-400
  },

  dell: {
    primary: "#0076CE",   // Official Dell Blue
    secondary: "#005a9e", // Darker Blue
    text: "#111827",      // Gray-900
    icon: "#0076CE",      // Dell Blue
  },

  asus: {
    primary: "#0067b8",   // Official Asus Blue
    secondary: "#005da6", // Darker Asus Blue
    text: "#111827",      // Gray-900
    icon: "#0067b8",      // Asus Blue
  },
};