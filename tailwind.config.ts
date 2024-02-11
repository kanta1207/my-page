/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem', // 10px
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      width: {
        4.5: '1.125rem', // 18px
      },
      height: {
        4.5: '1.125rem', // 18px
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'var(--muted))',
          foreground: 'var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'var(--accent))',
          foreground: 'var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'var(--popover))',
          foreground: 'var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'var(--card))',
          foreground: 'var(--card-foreground))',
        },
      },
      borderRadius: {
        xs: '0.125rem', // 2px
        sm: '0.25rem', // 4px
        DEFAULT: '0.625rem', // 10px
      },
      boxShadow: {
        around: '0 0 8px 4px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideOutToBottom: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutToRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeOut: 'fadeOut 0.3s ease-in-out',
        slideInFromBottom: 'slideInFromBottom 0.3s ease-in-out',
        slideOutToBottom: 'slideOutToBottom 0.3s ease-in-out',
        slideInFromRight: 'slideInFromRight 0.3s ease-in-out',
        slideOutToRight: 'slideOutToRight 0.3s ease-in-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
