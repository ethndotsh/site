/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "system-ui",
        "Helvetica Neue",
        "Helvetica",
        "Roboto",
        "sans-serif",
      ],
      serif: ["ui-serif", "Georgia"],
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      animation: {
        "bounce-slow": "bounce-slow 0.8s infinite",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubicBezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubicBezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
