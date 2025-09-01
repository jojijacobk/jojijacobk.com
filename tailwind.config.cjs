// tailwind.config.cjs
module.exports = {
  darkMode: "media",
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/pages/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {DEFAULT: "#14b8a6", 600: "#0d9488", 700: "#0f766e"},
      },
      // Use next/font CSS variables for sans
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-manrope)", "ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial"],
      },
      keyframes: {fadeIn: {"0%": {opacity: 0}, "100%": {opacity: 1}}},
      animation: {fadeIn: "fadeIn 300ms ease-out forwards"},
    },
  },
  plugins: [],
};
