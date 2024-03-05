/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        goldenRose: {
          primary: "#eab308",
          secondary: "#4c9e00",
          accent: "#eab308",
          neutral: "#f5f5f4",
          "base-100": "#e5e7eb",
          info: "#0066ff",
          success: "#50aa00",
          warning: "#f97316",
          error: "#e2314b",
        },
      },
      // "light",
      // "dark",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
