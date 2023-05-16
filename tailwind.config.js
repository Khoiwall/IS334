/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1680px",
      },
      colors: {
        default: "text-white",
        "t-primary": "#110B14",
        primary: "#37F040",
        "outline-primary": "#252026",
      },
    },
  },
  plugins: [],
};
