/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        //TODO add default size
        12: ["12px", "12px"],
        10: ["10px", "10px"],
        13: ["13px", "13px"],
        14: ["14px", "14px"],
        16: ["16px", "16px"],
        18: ["18px", "18px"],
        20: ["20px", "20px"],
        28: ["28px", "28px"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1680px",
        "3xl": "1920px",
      },
      colors: {
        default: "text-white",
        "t-primary": "#110B14",
        primary: "#37F040",
        "outline-primary": "#252026",
        container: "#1B161E",
      },
    },
  },
  plugins: [],
};
