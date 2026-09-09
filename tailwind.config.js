/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF8F5',
          100: '#F5EFE8',
          200: '#ECE5DE',
          300: '#E8E1D5',
          400: '#D9CEBF',
          card: '#FDFCFA',
        },
        sage: {
          50: '#F2F6F2',
          100: '#E4EDE3',
          200: '#C9D7C8',
          300: '#ABC0AA',
          400: '#889D86',
          500: '#6D826E',
          600: '#586B57',
          700: '#465545',
          800: '#333F32',
          900: '#232C23',
        },
        gold: {
          50: '#FAF6ED',
          100: '#F3EBDA',
          200: '#E8D9BB',
          300: '#D9C394',
          400: '#C7A667',
          500: '#B7934F',
          600: '#9C7A36',
          700: '#7E6028',
        },
        ink: {
          title: '#2D332D',
          body: '#4E544F',
          muted: '#7E857F',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(88, 107, 87, 0.06), 0 2px 6px -1px rgba(70, 60, 50, 0.03)',
        'card': '0 12px 32px -4px rgba(70, 85, 69, 0.07), 0 4px 12px -2px rgba(45, 51, 45, 0.03)',
        'glow-gold': '0 0 24px -2px rgba(183, 147, 79, 0.22)',
      }
    },
  },
  plugins: [],
}
