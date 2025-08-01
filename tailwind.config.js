// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ajuste para sua estrutura
    './app/**/*.{js,ts,jsx,tsx}', // Inclui App Router (caso esteja usando)
    './components/**/*.{js,ts,jsx,tsx}' // Inclui componentes reutilizáveis
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/Rectangle.png')"
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      colors: {
        primary: '#011C2B',
        secondary: '#003366',
        background: '#f8fafc',
        danger: '#dc2626',
        cinza: '#7D7D7D',
        preto: '#121212'
      }
    }
  },
  plugins: []
}
