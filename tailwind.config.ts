import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      colors: {
        headerBg: '#24292E', // Fondo del Header

        // Colores de texto
        textPrimary: '#000000', // Texto principal (Negro)
        textSecondary: '#989898', // Texto gris claro
        textHighlight: '#0587FF', // Texto resaltado (enlaces, acciones importantes)
        textWhite: '#FFFFFF', // Texto en elementos oscuros
        textHover: '#0058A9',

        // Fondos generales
        background: '#F8F8F8', // Fondo principal de la app

        // Bordes y separadores
        border: '#DBDBDB', // Líneas de separación y bordes
        borderDark: '#262626', // Bordes oscuros para ciertos elementos

        // Botones
        buttonPrimary: '#0056A6', // Botón principal
        buttonSecondary: '#0587FF', // Botón secundario (hover, enlaces)

        // Tabs activos (Repositories y Starred)
        tabActive: '#FD8C73', // Color de la línea de los tabs activos

        // Advertencias y alertas
        alertRed: '#FE354D', // Color para alertas o errores
      },
   
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
} satisfies Config;
