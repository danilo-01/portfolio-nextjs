import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "prim-1": "#FFFFFF",
        "prim-2": "#000000",
        "prim-3": "#262626",
        "sec-1": "#5C80BC",
        "acc-1": "#EB5160",
        "acc-2": "#61C9A8",
      },
    },
  },
  plugins: [],
};
export default config;
