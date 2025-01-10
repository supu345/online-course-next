/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "3rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "4rem",
      },
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/images/show/image-2.png')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        theme: "#FF014F",
        body: "#252525",
        bodyWhite: "#ECF0F3",
        card: "#1D1C22",
        hpp: "#1B7D75", // Custom color for hpp
        text: "#c4cfde",
        btn: "#29282D",
        border: "#4b5563",
      },
    },
    screens: {
      sm: "380px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    important: true,
  },
  plugins: [],
};
