module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary'),
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98',
      },
      black: {
        medium: '#005c98',
        faded: '#000059',
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb',
      },
      red: {
        primary: '#ed4956',
      },
    },
  },
};
