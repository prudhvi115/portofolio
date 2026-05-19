/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#050816',
        'cyber-bg-sec': '#0f172a',
        'neon-cyan': '#00f5ff',
        'neon-purple': '#8b5cf6',
        'neon-pink': '#ec4899',
        'text-primary': '#ffffff',
        'text-secondary': '#94a3b8'
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        }
      }
    },
  },
  plugins: [],
}
