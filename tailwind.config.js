export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 12s ease-in-out infinite",
        "float-delay": "float 18s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(200px, -150px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
    },
  },
  plugins: [],
}
