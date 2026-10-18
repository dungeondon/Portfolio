/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  corePlugins: { preflight: false }, // keeps the existing layout unchanged; set to true for Tailwind's full reset
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(var(--r))" },
          "50%": { transform: "translateY(-14px) rotate(var(--r))" },
        },
      },
      animation: { float: "float 6s ease-in-out infinite" },
    },
  },
  plugins: [],
};
