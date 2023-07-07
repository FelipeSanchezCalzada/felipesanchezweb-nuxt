import tailwindTypography from '@tailwindcss/typography';

module.exports = {
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '10000rem', // add required value here
          }
        }
      }
    },
  },
  plugins: [tailwindTypography],
}

