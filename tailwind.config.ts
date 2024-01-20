import { Poppins } from "next/font/google";
import { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        poppins: ['Poppins']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        secondary: "#AE262C",
        success: "#12B757",
        warning: {
          base: "#F7A809",
          50: "#F59128",
        },
        error: "#F6220E",
        primary: {
          base: "#F6921E",
          50: "#E7F2FE",
          100: "#CFE4FD",
          200: "#9FCAFB",
          300: "#6FAFF9",
          400: "#3F95F7",
          500: "#0F7AF5",
          600: "#0C62C5",
          700: "#0C62C5",
          800: "#063265",
          900: "#101828",
        },
        "primary-light": {
          base: "#27C3FC",
          50: "#E9F9FF",
          100: "#CFE4FD",
          200: "#9FCAFB",
          300: "#6FAFF9",
          400: "#3F95F7",
          500: "#0F7AF5",
          600: "#0C62C5",
          700: "#0C62C5",
          800: "#063265",
          900: "#101828",
        },
        black: {
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
          1000: "#FFFFFF1A"
        },
        "black-light": {
          base: "#020012",
          50: "#0C0A1B",
          100: "#1B1A2A",
          200: "#262535",
          300: "#32313F",
          400: "#3C3B49",
          900: "#C3D3E2"
        },
        bluish: {
          button: "#2C2B39",
          border: "#585C67"
        },
        blue: {
          "sky": "#C3D3E2"
        },
        yellow: {
          "green": "#D8DF25"
        },
        "deep-violet": "#633092",
        "deep-navy": "#303192"
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 4px 0px rgba(16, 24, 40, 0.08), 0px 1px 1px 0px rgba(13, 18, 30, 0.04)",
        md: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
        lg: "0px 14px 24px -4px rgba(16, 24, 40, 0.07)",
        xl: "0px 12px 30px -6px rgba(16, 24, 40, 0.10)",
        "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
        "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
      },
      fontSize: { 
        heading1: "56px",
        heading2: "48px",
        heading3: "36px",
        heading4: "24px",
        paragraph: "18px",
        paragraph2: "16px",
        paragraph3: "14px",
        paragraph4: "12px",
        button: "16px"
      },
      spacing: {
        "15": "60px",
        "12.5": "50px",
        "7.5": "30px",
        "8.5": "34px",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
