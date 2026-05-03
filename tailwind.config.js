/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        "ink-soft": "#141414",
        ivory: "#F5F5F2",
        "ivory-warm": "#EDE9E3",
        gold: "#C6A972",
        "gold-bright": "#D4B87E",
        "gold-muted": "rgba(198, 169, 114, 0.28)",
        "gold-faint": "rgba(198, 169, 114, 0.12)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.75rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        display: ["clamp(2.75rem,6vw,4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3.25rem,7vw,5.75rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(3.5rem,8vw,6.5rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        prose: "38rem",
        content: "76rem",
        "content-tight": "68rem",
      },
      boxShadow: {
        lux: "0 32px 64px -24px rgba(11, 11, 11, 0.35), 0 0 0 1px rgba(198, 169, 114, 0.15)",
        "lux-soft": "0 24px 48px -20px rgba(11, 11, 11, 0.22)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "image-reveal": {
          "0%": { opacity: "0", transform: "scale(1.04)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "line-grow": "line-grow 1.2s ease-out 0.4s forwards",
        "image-reveal": "image-reveal 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};
