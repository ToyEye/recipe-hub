import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "8px",
      },
      screens: { lg: "1240px" },
      fontFamily: {
        sans: [
          "Roboto",

          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        title: [
          "Montserrat",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        "dark-navy": "#111827",
        "light-gray": "#dddddd",
        "off-white": "#f5f5f5",
        "cool-gray-600": "#4b5563",
        "cool-gray-400": "#9ca3af",
        "slate-blue": "#76849e",
        "vivid-orange": "#ff8c00",
        "cool-gray": "#d1d5db",
        graphite: "#3f4349",
        "alert-red": "#f44336",
        "overlay-dark": "rgba(47, 48, 58, 0.797)",
      },
      backgroundImage: {
        "mask-gradient":
          "linear-gradient(to right, rgba(47, 48, 58, 0.797), rgba(47, 48, 58, 0.797)), url('/img/desktop.webp')",
      },
      transitionDuration: {
        "350": "350ms",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.19, 1, 0.22, 1)", // Для custom easing
      },
    },
  },
  plugins: [],
} satisfies Config;
