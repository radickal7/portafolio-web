export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#020617",
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
        },
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        soft: "0 8px 32px rgba(0,0,0,0.24)",
        glow: "0 0 40px rgba(99,102,241,0.15)",
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        "float-delay": "float 18s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(200px, -150px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        }
      },
    },
  },
  plugins: [],
}
