import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        wex: {
          red: '#C8102E',
          'red-dark': '#A00D25',
          'red-light': '#FF032B',
          'blue-main': '#172DA1',
          'blue-dark': '#122385',
          'blue-accent': '#1C6EFF',
          'blue-deep': '#25146F',
          yellow: '#FFBC00',
          'yellow-dark': '#E5A800',
          success: '#00C48C',
          pale: '#FDFDFF',
          light: '#EDF1FF',
        }
      },
      boxShadow: {
        'wex-ombre': '0 8px 30px -8px rgba(23, 45, 161, 0.18), 0 4px 20px -4px rgba(200, 16, 46, 0.12)',
      },
      borderRadius: {
        'wex-frame': '0.75rem',
      }
    },
  },
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
