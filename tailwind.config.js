/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(215 27.9% 16.9%)",
        input: "hsl(215 27.9% 16.9%)",
        ring: "hsl(180 100% 45%)",
        background: "hsl(222.2 84% 4.9%)",
        foreground: "hsl(210 40% 98%)",

        // Seoul Asan Medical Center Primary Colors - Official CI
        primary: {
          DEFAULT: "hsl(180 100% 22.9%)", // #007474 - Deep Medical Teal
          foreground: "hsl(210 40% 98%)",
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#1A9B9B', // Bright Teal
          600: '#007474', // CI Deep Teal
          700: '#006060',
          800: '#004d4d',
          900: '#003939',
          950: '#002626',
        },

        // Seoul Asan Medical Center Official CI Colors
        asan: {
          // Main Colors - ASAN GREEN (Pantone 3155C: C100, M15, Y45, K40)
          green: {
            DEFAULT: '#006450', // Main ASAN GREEN
            light: '#6B9B8A', // ASAN Light Green (Pantone 5483C: C60, M5, Y30, K20)
            dark: '#004A3C',
          },
          // ASAN Orange (Pantone 138C: C0, M55, Y100, K0)
          orange: {
            DEFAULT: '#FF8C00',
            light: '#FFA940',
            dark: '#E67300',
          },
          // Sub colors
          gray: {
            DEFAULT: '#53565A', // Pantone Cool Gray 11C
            light: '#8B8D8F',
            dark: '#3A3C3E',
          },
        },

        // Accent Orange from CI Mountain Icon
        accent: {
          DEFAULT: "hsl(22 100% 63%)", // #FF8C42
          foreground: "hsl(210 40% 98%)",
          50: '#fff4ed',
          100: '#ffe7d6',
          200: '#ffcbad',
          300: '#ffa87a',
          400: '#FF8C42', // CI Orange
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },

        secondary: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(215 20.2% 65.1%)",
        },

        // Medical Category Colors - Harmonized Teal Spectrum
        medical: {
          // Teal variants for medical imaging (darker teal)
          teal: {
            DEFAULT: '#007474',
            light: '#1A9B9B',
            dark: '#005555',
          },
          // Cyan for natural language processing
          cyan: {
            DEFAULT: '#06b6d4',
            light: '#22d3ee',
            dark: '#0891b2',
          },
          // Turquoise for predictive analytics
          turquoise: {
            DEFAULT: '#14b8a6',
            light: '#2dd4bf',
            dark: '#0d9488',
          },
          // Deep teal for deep learning
          deepTeal: {
            DEFAULT: '#0e7490',
            light: '#0891b2',
            dark: '#155e75',
          },
          // Mint for voice AI
          mint: {
            DEFAULT: '#10b981',
            light: '#34d399',
            dark: '#059669',
          },
          // Orange accent for generative AI
          coral: {
            DEFAULT: '#FF8C42',
            light: '#ffa87a',
            dark: '#f97316',
          },
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        // Medical teal-based glow effects
        'glow-teal': '0 0 20px rgba(0, 116, 116, 0.25), 0 0 40px rgba(0, 116, 116, 0.15)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.25), 0 0 40px rgba(6, 182, 212, 0.15)',
        'glow-turquoise': '0 0 20px rgba(20, 184, 166, 0.25), 0 0 40px rgba(20, 184, 166, 0.15)',
        'glow-deepTeal': '0 0 20px rgba(14, 116, 144, 0.25), 0 0 40px rgba(14, 116, 144, 0.15)',
        'glow-mint': '0 0 20px rgba(16, 185, 129, 0.25), 0 0 40px rgba(16, 185, 129, 0.15)',
        'glow-coral': '0 0 20px rgba(255, 140, 66, 0.25), 0 0 40px rgba(255, 140, 66, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
