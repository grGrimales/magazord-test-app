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
        headerBg: '#24292E', // Cor de fundo do cabeçalho

        // Cores de texto
        textPrimary: '#000000', 
        textSecondary: '#989898', 
        textHighlight: '#0587FF', 
        textWhite: '#FFFFFF', 
        textHover: '#0058A9', 

        // Fundo geral
        background: '#F8F8F8', 

        // Bordas e separadores
        border: '#DBDBDB', 
        borderDark: '#262626', 

        // Botões
        buttonPrimary: '#0056A6', // Cor principal dos botões
        buttonSecondary: '#0587FF', // Cor secundária dos botões

        // Tabs ativas (Repositories e Starred)
        tabActive: '#FD8C73', 

        // Alertas e avisos
        alertRed: '#FE354D', // Cor para mensagens de erro ou alerta
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
      },

      spacing: {
        '104': '104px',
        '150': '150px',
        '105': '105px',
        '145': '145px',
      },
      
      width: {
        "btn-small": "88px", 
        "btn-large": "120px", 
      },
    },
  },
  plugins: [],
} satisfies Config;
