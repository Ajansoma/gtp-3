/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      colors: {
        text: {
          '100': '#81AFDD',
          '200': '#FF8AF1',
          '300': '#FF4820',
          '400': '#3D6184',
          '500': '#71E5FF',
        },
        bg: {
          'body': '#040C18',
          'blog': '#042c54',
          'footer': '#031B34',
          'input': '#052D56',
          'filterA': '#1B78DE',
          'filterB': '#0F4279',
          'filterC': '#07325F',
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
