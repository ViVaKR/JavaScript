import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
        cute: ['Cute Font', 'sans-serif'],
        noto: ['Noto Sans KR', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        firacode: ['Fira Code', 'monospace'],
        dongle: ['Dongle', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
