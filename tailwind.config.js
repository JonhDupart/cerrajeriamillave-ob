/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* --- Colores de la paleta principal UI --- */
        'naranja-dorado': '#FF9800',
        'gris-cromo': '#D1D5DB',
        'negro-carbon': '#121212',
        
        /* --- Tu paleta automotriz extendida --- */
        'grafito': '#0C0907',
        'carbon': '#1A1714',
        'plata': '#DCDBDB',
        'cromo-medio': '#A3A3A4',
        'acero': '#616160',
        'oro': '#F6A006',
        'naranja-auto': '#E36D01',
        'cobre': '#A45601',
        'marron-profundo': '#5C2B01',
        'amarillo-luz': '#FCDA22',
        'blanco-tecnico': '#F8F8F8',
      },
      fontFamily: {
        /* --- Fuentes para Títulos y Destacados --- */
        'russo': ['"Russo One"', 'sans-serif'],
        'anton': ['"Anton"', 'sans-serif'],
        'teko': ['"Teko"', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        
        /* --- Fuentes añadidas para Párrafos/Lectura --- */
        'roboto': ['"Roboto"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}