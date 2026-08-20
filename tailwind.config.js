/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFDF8',
        'ivory-deep': '#FFF6E6',
        paper: '#FFFFFF',
        ink: '#241A10',
        'ink-soft': '#6E6050',
        'ink-faint': '#9C8F7C',
        gold: '#C9971F',
        'gold-deep': '#A67A15',
        orange: '#E8672B',
        'orange-deep': '#C24E1B',
        terracotta: '#BE5A3B',
        royal: '#2C3E8C',
        'royal-deep': '#212F6B',
        emerald: '#0F8A6C',
        pink: '#E39CB4',
        maroon: '#7E2A3B',
        'maroon-deep': '#5E1F2C',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Work Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        sm2: '0 6px 16px rgba(36,26,16,0.08)',
        md2: '0 16px 32px rgba(36,26,16,0.10)',
        lg2: '0 28px 60px rgba(36,26,16,0.14)',
      },
      borderRadius: {
        DEFAULT2: '18px',
      },
      keyframes: {
        marqueeSlide: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: 'marqueeSlide 52s linear infinite',
      },
    },
  },
  plugins: [],
};
