import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(214 32% 91%)',
        background: 'var(--bg)',
        foreground: 'var(--fg)',
        primary: { DEFAULT: '#1d4ed8', foreground: '#ffffff' },
        accent: { DEFAULT: '#0ea5e9' }
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px'
      }
    }
  },
  plugins: []
} satisfies Config