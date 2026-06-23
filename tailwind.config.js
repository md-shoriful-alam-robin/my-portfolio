/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Design token system
        ink:    '#0B0F1A',   // deep navy-black bg
        card:   '#111827',   // elevated card bg
        border: '#1E2D40',   // subtle borders
        teal:   '#00D4B8',   // primary accent
        violet: '#7C3AED',   // secondary accent
        glow:   '#00D4B8',   // glow effect color
        mist:   '#94A3B8',   // body text secondary
        snow:   '#F1F5F9',   // primary light text
        // Light mode
        lbg:    '#F8FAFC',
        lcard:  '#FFFFFF',
        lborder:'#E2E8F0',
        ltext:  '#0F172A',
        lmist:  '#64748B',
      },
      fontFamily: {
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'Inter', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(0,212,184,0.06)' stroke-width='1'/%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'cursor-pulse': 'cursor-pulse 1.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        'cursor-pulse': {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.8' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.4)', opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'teal-glow': '0 0 30px rgba(0, 212, 184, 0.2)',
        'violet-glow': '0 0 30px rgba(124, 58, 237, 0.25)',
        'card-dark': '0 4px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
