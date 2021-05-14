const headerLink = {
  color: "inherit",
  '&:hover, &:active': {
    'text-decoration': 'none'
  }
};

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: [
    "./src/**/*.{html,js,svelte,ts,svx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            a: {
              color: theme('colors.blue.400'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                'text-decoration': 'underline',
              },
            },
            strong: {
              color: theme('colors.gray.800')
            },
            h1: {
              'text-align': 'center',
              color: theme('colors.gray.800'),
              'margin-top': '0',
              a: headerLink
            },
            h2: {
              'text-align': 'center',
              color: theme('colors.gray.800'),
              'margin-top': '0',
              a: headerLink
            },
            h3: {
              'text-align': 'center',
              color: theme('colors.gray.800'),
              'margin-top': '0',
              a: headerLink
            },
            h4: {
              'text-align': 'center',
              color: theme('colors.gray.800'),
              'margin-top': '0',
              a: headerLink
            },
            code: {
              color: theme('colors.gray.800'),
              'background-color': theme('colors.gray.200'),
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: theme('colors.gray.600'),
              'margin-top': '0',
              'margin-bottom': '1em',
              'line-height': '1.75rem'
            },
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.gray.800'),
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.gray.800'),
                'font-weight': 'bold'
              }
            }
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.400'),
            a: {
              color: theme('colors.blue.400'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                'text-decoration': 'underline',
              },
            },
            strong: {
              color: theme('colors.gray.100')
            },
            h1: {
              'text-align': 'center',
              color: 'white',
              'margin-top': '0',
              a: headerLink
            },
            h2: {
              'text-align': 'center',
              color: 'white',
              'margin-top': '0',
              a: headerLink
            },
            h3: {
              'text-align': 'center',
              color: 'white',
              'margin-top': '0',
              a: headerLink
            },
            h4: {
              'text-align': 'center',
              color: 'white',
              'margin-top': '0',
              a: headerLink
            },
            code: {
              color: theme('colors.gray.400'),
              'background-color': theme('colors.gray.800'),
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: theme('colors.gray.400'),
              'margin-top': '0',
              'margin-bottom': '1em',
              'line-height': '1.75rem'
            },
            blockquote: {
              color: theme('colors.gray.100'),
            },
            'ul > li': {
              '&::before': {
                'background-color': 'white',
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: 'white',
                'font-weight': 'bold'
              }
            }
          }
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  variants: {
    extend: {
      typography: ['dark']
    }
  }
};
