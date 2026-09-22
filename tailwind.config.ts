import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        laub: {
          50: "#F1F8EC",
          100: "#DCEFCF",
          200: "#BAE0A2",
          300: "#91CE6C",
          400: "#5DA83C",
          500: "#2F6E23",
          600: "#24561B",
          700: "#1B4215",
          800: "#133010",
          900: "#0A2417"
        },
        erde: {
          50: "#F8F2EA",
          100: "#EDE0CD",
          200: "#DBC2A0",
          300: "#C6A172",
          400: "#B3874F",
          500: "#9A6F3C",
          600: "#7D5930",
          700: "#5F4425",
          800: "#46321B",
          900: "#2E2112"
        },
        kies: {
          50: "#F4F4F2",
          100: "#E6E6E2",
          200: "#CDCEC7",
          300: "#B0B2A9",
          400: "#94968C",
          500: "#7C7F78",
          600: "#63665F",
          700: "#4C4E48",
          800: "#363832",
          900: "#23261F"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
