/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',,
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['var(--poppins)'],
        'big-shoulders-text': ['var(--big-shoulders-text)'],
        'roboto': ['var(--roboto)'],
        'noto-sans-tc': ['var(--noto-sans-tc)'],
        'caveat': ['var(--caveat)']
      },
      colors: {
        /**
         * Replace these colors with the colors of your chosen  theme in '@/src/theme/theme.ts
         */
        'primary': '#545fc4',
        'primary400': '#6e76c7',
        'primary600': '#3644c9',
        'primary80': '#545fc4cc',
        'primary50': '#545fc480',
        'primary30': '#545fc44d',
        'secondary': '#212121',
        'secondary70': '#212121b3',
        'secondary50': '#21212180',
        'tertiary': '#eaeaea',
        'tertiary80': '#eaeaeacc',
        'tertiary70': '#eaeaeab3',
        'tertiary50': '#eaeaea80',
      },
      screens: {
        'xs': '0px'
      }
    },
  },
  plugins: [],
}
