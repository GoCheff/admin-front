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
      },
      colors: {
        primary: {
          DEFAULT: "#D68606",
        },
        secondary: {
          DEFAULT: "#FFCB83",
        },
        tertiary: {
          DEFAULT: "#FFFAFA",
        },
        quaternary: {
          DEFAULT: "#7E6641",
        },
      },
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
