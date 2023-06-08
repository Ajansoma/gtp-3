/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          '100': '#81AFDD',
          '200': '#FF8AF1',
          '300': '#FF4820',
        },
        bg: {
          'body': '#040C18',
          'blog': '#042c54',
          'footer': '#031B34',
        },
        gradient: {
          'text-100': '#AE67FA',
          'text-200': '#F49867',
          'bg-100': '#002853',
          'bg-200': '#040518',
        },
      },
    },
  },
  plugins: [],
};
