module.exports = {
  content: ["./pages/**/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: "#4F46E5", // indigo-600
          light: "#818CF8", // indigo-400
          dark: "#3730A3", // indigo-800
          50: "#EBEAFD",
          100: "#D7D5FB",
          200: "#B0ABF7",
          300: "#8982F3",
          400: "#6158EF",
          500: "#4F46E5",
          600: "#2A20DC",
          700: "#211AAB",
          800: "#18137A",
          900: "#1a1a26",
        },

        // Neutral colors
        background: "#F8FAFC", // slate-50
        surface: "#FFFFFF", // white
        border: "#E2E8F0", // slate-200
        "text-primary": "#0F172A", // slate-900
        "text-secondary": "#475569", // slate-600
        "text-tertiary": "#94A3B8", // slate-400

        // Semantic colors
        success: "#10B981", // emerald-500
        warning: "#F59E0B", // amber-500
        error: "#F43F5E", // rose-500
        info: "#0EA5E9", // sky-500
      },
      fontFamily: {
        sans: [
          "Roboto",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#0F172A",
            a: {
              color: "#4F46E5",
              "&:hover": {
                color: "#2A20DC",
              },
            },
            h1: {
              color: "#0F172A",
              fontWeight: "700",
            },
            h2: {
              color: "#0F172A",
              fontWeight: "600",
            },
            h3: {
              color: "#0F172A",
              fontWeight: "600",
            },
            h4: {
              color: "#0F172A",
              fontWeight: "500",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
