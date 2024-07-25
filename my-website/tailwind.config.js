// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         typing: {
//           'from': { width: '0' },
//           'to': { width: '100%' },
//         },
//         colorChange: {
//           '0%, 100%': { color: '#fff' },
//           '50%': { color: '#f00' },
//         },
//       },
//       animation: {
//         typing: 'typing 3s steps(40, end) infinite',
//         colorChange: 'colorChange 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}