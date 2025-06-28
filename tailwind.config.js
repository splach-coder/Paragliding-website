/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors : {
        'dark-blue': '#212A31',
        'slate-blue': '#2E3944',
        'deep-teal': '#124E66',
        'grayish-teal': '#748D92',
        'light-gray': '#D3D9D4',
      }
    },
  },
  plugins: [],
  publicDir: "public"
};
