module.exports = {
    darkMode: 'media',
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",  
      "./src/components/**/*.{js,ts,jsx,tsx}",  
      "./src/styles/*.css", 
    ],
    theme: {
      extend: {
        colors: {
          azulMarino: '#2A3D66',
          turquesa: '#40C9C6',
          amarilloMostaza: '#FBC02D',
          grisClaro: '#ECECEC',
          blanco: '#FFFFFF',
          negro: '#171717',
        },
      },
    },
    plugins: [],
  };
  