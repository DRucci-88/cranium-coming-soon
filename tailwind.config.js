const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
// require('@tailwindcss/forms');
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': {
          '50': '#59457B',
          '100': '#554276',
          '200': '#4E3C6C',
          '300': '#473763',
          '400': '#403159',
          '500': '#392C4F',
          '600': '#302542',
          '700': '#261D35',
          '800': '#1D1628',
          '900': '#130F1B'
        },
        'secondary': {
          '50': '#EFFCF9',
          '100': '#DEF9F3',
          '200': '#BBF4E6',
          '300': '#96EED9',
          '400': '#75E8CD',
          '500': '#52E2C0',
          '600': '#2BDBB2',
          '700': '#1FB995',
          '800': '#189275',
          '900': '#126B56'
        },
      },
    },
  },
  // Apakah sidebar beneran memakai template orang lain ???

  plugins: [
    // eslint-disable-next-line global-require

    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ],
};
