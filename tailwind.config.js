/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["codystar", "segoe ui"]
      },
      colors: {
        darkest: "#343a40",
        dark: "#495057",
        medium: "#ced4da",
        light: "#f1f3f5",

        theme: "#1098ad",
        accent: "#ffa94d",
      },
      animation: {
        "spin-slow" : "spin 20s linear infinite"
      }
    },
  },
  plugins: [],
}

