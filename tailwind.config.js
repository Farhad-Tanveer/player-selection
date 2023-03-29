/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1c2b35",

          secondary: "#FFE0B2",

          accent: "#baf3ff",

          neutral: "#1D2025",

          "base-100": "#FCFCFD",

          info: "#2262E2",

          success: "#68DFD1",

          warning: "#F6CD51",

          error: "#F9402F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
