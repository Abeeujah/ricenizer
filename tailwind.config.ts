import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: { home: { 100: "#1137B7" } },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0rem",
        md: "0rem",
        lg: "0rem",
        xl: "1rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
});
export default config;
