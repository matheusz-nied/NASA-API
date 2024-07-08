/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
    theme: {
      extend: {
        backgroundImage: {
         'space-home': "url('/src/assets/home.png')",
         'space-read':"url('/src/assets/read.png')",
        },
        colors:{
          primary: '#16D900',
          secondary: '#ffffff',
          third: '#000000',
          
        }

      }
    },
  plugins: [],
}

