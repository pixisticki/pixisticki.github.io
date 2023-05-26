/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      rotate: {
        '360': '360deg',
      },
      dropShadow: {
        glow: [
          "0 0px 5pt rgba(255,255, 255, 0.2)",
          "0 0px 10pt rgba(255, 255,255, 0.2)",
        ],
      },
      colors: {
        'black-transparent': 'rgba(9, 9, 11, 0.8)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
