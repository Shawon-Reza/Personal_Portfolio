/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine linear infinite",
      },
      keyframes: {
        shine: {
          "0%": {
            "background-position": "200% center",
          },
          "100%": {
            "background-position": "-200% center",
          },
        },
      },
    },
  },
  plugins: [],
}

