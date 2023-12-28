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
        poppins: ["Poppins"],
        fira_code: ["Fira Code"],
      },
      backgroundImage: {
        "dark-gradient-bg": "linear-gradient(transparent, #0c1738)",
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
          green: "#26492e6",
          gray: "#d0d0d0",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
