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
  },
  plugins: [],
};
