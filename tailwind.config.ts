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
      animation: {
        'open-close-anim': 'open-close 1s',
      },
      keyframes: {
        'open-close': {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        }
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        fira_code: ["Fira Code"],
      },
      backgroundImage: {
        'grad-sky': "linear-gradient(transparent, #E1E7FF)",
        'grad-night': "linear-gradient(transparent, #17234E)",
      },
      colors: {
        light: {
          background: "#FFFFFF",
          primary: "#334364",
          secondary: "#3F5581",
          schema: {
            text: "#162340",
          },
          gray: {
            100: "#F5F5F5",
            200: "#E8E8E8",
            300: "#D0D0D0"
          },
          blue: {
            50: "#EEF1FF",
            100: "#E1E7FF",
            150: "#d3dcff",
            200: "#BFCCFF",
            300: "#4F5E77",
            400: "#6587FF"
          }

        },
        dark: {
          background: "#000418",
          schema: {
            input: "#131728"
          },
          blue: {
            50: "#FE1E7FF",
            100: "#E2EAFF",
            200: "#C2D2FF",
            300: "#B7C9FF",
            400: "#96ABFF",
            500: "#293348",
            550: "#29334850",
            600: "#0619425A",
            650: "#0f1735",
            700: "#17234E"
          },
          gray: {
            100: "#D0D0D0",
          }
        }
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated"), require('@tailwindcss/typography')],
};
export default config;
