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
        // Elevation system - subtle, professional depth
        'wex-xs': '0 1px 2px rgba(23, 45, 161, 0.04), 0 1px 3px rgba(23, 45, 161, 0.06)',
        'wex-sm': '0 2px 4px rgba(23, 45, 161, 0.04), 0 4px 8px -2px rgba(23, 45, 161, 0.08)',
        'wex-md': '0 4px 6px rgba(23, 45, 161, 0.03), 0 10px 20px -5px rgba(23, 45, 161, 0.10), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'wex-lg': '0 8px 12px rgba(23, 45, 161, 0.04), 0 20px 35px -10px rgba(23, 45, 161, 0.15), 0 2px 4px rgba(0, 0, 0, 0.03)',
        'wex-xl': '0 12px 20px rgba(23, 45, 161, 0.05), 0 30px 50px -15px rgba(23, 45, 161, 0.20), 0 4px 8px rgba(0, 0, 0, 0.04)',
        // Card-specific shadows with colored undertone
        'wex-card': '0 2px 8px rgba(23, 45, 161, 0.06), 0 8px 24px -8px rgba(23, 45, 161, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        'wex-card-hover': '0 4px 12px rgba(23, 45, 161, 0.08), 0 16px 32px -8px rgba(23, 45, 161, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        'wex-card-pressed': '0 1px 4px rgba(23, 45, 161, 0.08), 0 4px 12px -4px rgba(23, 45, 161, 0.12), inset 0 1px 2px rgba(23, 45, 161, 0.06)',
        // Soft glow effects
        'wex-glow-blue': '0 0 20px rgba(28, 110, 255, 0.15), 0 4px 12px rgba(23, 45, 161, 0.08)',
        'wex-glow-red': '0 0 20px rgba(200, 16, 46, 0.12), 0 4px 12px rgba(200, 16, 46, 0.06)',
        // Inner shadows for depth
        'wex-inner': 'inset 0 2px 4px rgba(23, 45, 161, 0.04), inset 0 1px 2px rgba(0, 0, 0, 0.02)',
        'wex-inner-light': 'inset 0 1px 2px rgba(23, 45, 161, 0.03)',
      },
      borderRadius: {
        'wex-frame': '0.75rem',
      }
    },
  },
  plugins: [
    // Simplified plugin that works in all environments
    function({ addBase, theme }) {
      const flattenColors = (colors, prefix = '') => {
        const result = {};
        for (const [key, value] of Object.entries(colors)) {
          const newKey = prefix ? `${prefix}-${key}` : key;
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            Object.assign(result, flattenColors(value, newKey));
          } else {
            result[newKey] = value;
          }
        }
        return result;
      };

      const allColors = flattenColors(theme("colors"));
      const cssVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": cssVars,
      });
    }
  ],
}
