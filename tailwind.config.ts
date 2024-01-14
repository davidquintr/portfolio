import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        fira_code: ["Fira Code"],
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(transparent, #0c1738)",
        "light-gradient": "linear-gradient(transparent, #c0e6ff)",
        "light-border-gradient":
          "linear-gradient(0.25turn, transparent, #a3daff, transparent)",
        "dark-border-gradient":
          "linear-gradient(0.25turn, transparent, #a3bbff, transparent)",
      },
      colors: {
        dark: {
          bg: "#101010",
          box: "#1a1a1a",
          items: "#202020",
          blue: {
            100: "#a3bbff",
            200: "#3e465e",
            300: "#122353",
            400: "#0c1738",
            500: "#262b37",
          },
          red: "#49262665",
          green: "#26492e",
          gray: "#d0d0d0",
        },
        light: {
          green: "#cbe6c0",
          red: "#e6c0c0",
          black: "#333333",
          gray: "#efefef",
          bg: "#eaeaea",
          shadow: '#575757',
          blue: {
            100: "#c0e6ff",
            200: "#a3daff",
            300: "#5bdaff",
            400: "#0b81af", // 0b6c93
            500: "#085877",
            600: "#053346",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated"), require('@tailwindcss/typography')],
};
export default config;
