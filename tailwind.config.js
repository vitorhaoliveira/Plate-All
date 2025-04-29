// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}' // ajuste conforme sua estrutura de pastas
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#64748b',
        background: '#f8fafc',
        danger: '#dc2626'
      }
    }
  },
  plugins: []
}
