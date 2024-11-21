module.exports = {
  content: [
    "./index.html",  // Jika menggunakan Vite
    "./src/**/*.{js,jsx,ts,tsx}", // Untuk file React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
};