/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        DEFAULT: "#F2F2F2",
      },
      borderRadius: {
        DEFAULT: "30px",
      },
      boxShadow: {
        DEFAULT: "0 4px 4px 0 rgba(0, 0, 0, 0.1)",
        2: "0 30px 60px 0 rgba(57, 57, 57, 0.1)",
        3: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        4: "inset 0 -10px 5px 0 rgba(175, 175, 175, 0.25)",
        5: "0 4px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -10px 5px 0 rgba(175, 175, 175, 0.25)",
      },
      dropShadow: {
        DEFAULT: "0 4px 4px 0 rgba(0, 0, 0, 0.1)",
        2: "0 30px 60px 0 rgba(57, 57, 57, 0.1)",
        3: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        4: "inset 0 -10px 5px 0 rgba(175, 175, 175, 0.25)",
        5: "0 4px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -10px 5px 0 rgba(175, 175, 175, 0.25)",
      },
      colors: {
        primary: {
          900: "#2b1b01",
          800: "#563602",
          700: "#805004",
          600: "#ab6b05",
          DEFAULT: "#D68606",
          400: "#de9e38",
          300: "#e6b66a",
          200: "#efcf9b",
          100: "#f3dbb4",
          50: "#fbf3e6",
        },
        secondary: {
          DEFAULT: "#FFCB83",
        },
        tertiary: {
          DEFAULT: "#FFFAFA",
        },
        quaternary: {
          900: "#261f13",
          800: "#3f3321",
          700: "#58472e",
          600: "#715c3b",
          DEFAULT: "#7E6641",
          400: "#8b7554",
          300: "#988567",
          200: "#bfb3a0",
          100: "#d8d1c6",
          50: "#f2f0ec",
        },
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
