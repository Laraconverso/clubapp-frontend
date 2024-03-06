import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fff4f1',
          '100': '#ffe8e1',
          '200': '#ffd3c7',
          '300': '#ffb5a0',
          '400': '#ff977a',
          '500': '#f8643b',
          '600': '#e5491d',
          '700': '#c13a14',
          '800': '#a03314',
          '900': '#843018',
          '950': '#481507',
        },
        'silver': {
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#dfdfdf',
          '300': '#c8c8c8',
          '400': '#b0b0b0',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
        'baltic-sea': {
          '50': '#f6f6f9',
          '100': '#eeedf1',
          '200': '#d7d6e1',
          '300': '#b3b2c7',
          '400': '#8989a7',
          '500': '#6a6a8d',
          '600': '#565574',
          '700': '#47465e',
          '800': '#3d3c50',
          '900': '#363545',
          '950': '#272631',
      },      
      },
      fontFamily: {
        bauhs: ['bauhs93', 'sans'],
        squada: ['Squada One', 'sans']
      },
      dropShadow: {
        md: '0 4px 3px rgba(0, 0, 0, 0.5)'
      },
      screens: {
        "ml" : '350px'
      },
    },
  },
  plugins: [],
};
export default config;
