import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F6F7FB",
        panel: "#FFFFFF",
        ink: "#172033",
        muted: "#667085",
        line: "#E6E8EF",
        fb: "#4267B2",
        fbSoft: "#EEF4FF",
        yt: "#D94747",
        ytSoft: "#FFF1F1",
        etsy: "#C76A2A",
        etsySoft: "#FFF5EC",
        pin: "#B83264",
        pinSoft: "#FFF0F6",
        kdp: "#2F8F6B",
        kdpSoft: "#EDFAF5",
        product: "#6D5BD0",
        productSoft: "#F4F2FF",
        seasonal: "#B7791F",
        seasonalSoft: "#FFFAEB",
        neutralSoft: "#F1F4F8"
      },
      boxShadow: {
        card: "0 8px 24px rgba(15, 23, 42, 0.06)",
        float: "0 18px 45px rgba(15, 23, 42, 0.10)"
      }
    }
  },
  plugins: []
};
export default config;
