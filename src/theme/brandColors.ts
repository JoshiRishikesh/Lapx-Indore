// src/theme/brandColors.ts

// Define the structure for type safety
export interface BrandTheme {
  primary: string;    // CSS color value (e.g., #DC2626)
  secondary: string;  // CSS color value
  text: string;       // CSS color value
  icon: string;       // CSS color value
}

// Map Tailwind's default colors to hex codes for reliability
export const brandColors: Record<string, BrandTheme> = {
  lenovo: {
    // red-600, red-400, gray-900, red-500
    primary: "#DC2626",   // Red-600
    secondary: "#F87171", // Red-400
    text: "#111827",      // Gray-900
    icon: "#EF4444",      // Red-500
  },

  hp: {
    // cyan-500, cyan-300, gray-900, cyan-400
    primary: "#06B6D4",   // Cyan-500
    secondary: "#67E8F9", // Cyan-300
    text: "#111827",      // Gray-900
    icon: "#22D3EE",      // Cyan-400
  },

  dell: {
    // blue-600, blue-400, gray-900, blue-500
    primary: "#2563EB",   // Blue-600
    secondary: "#60A5FA", // Blue-400
    text: "#111827",      // Gray-900
    icon: "#3B82F6",      // Blue-500
  },

  asus: {
    // indigo-600, indigo-400, gray-900, indigo-500
    primary: "#4F46E5",   // Indigo-600
    secondary: "#818CF8", // Indigo-400
    text: "#111827",      // Gray-900
    icon: "#6366F1",      // Indigo-500
  },
};