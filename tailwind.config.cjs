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
            color: theme('colors.grey.600'),
            a: {
              color: theme('colors.gray.800'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: 'white',
                'background-color': theme('colors.gray.800'),
                strong: {
                  color: 'white'
                },
              },
            },
            strong: {
              color: theme('colors.gray.800')
            },
            h1: {
              'text-align': 'center',
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h2: {
              'text-align': 'center',
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h3: {
              'text-align': 'center',
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h4: {
              'text-align': 'center',
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            code: {
              color: 'white',
              'background-color': theme('colors.grey.800'),
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: theme('colors.grey.600'),
              'margin-top': '0',
              'margin-bottom': '1em',
              'line-height': '1.75rem'
            },
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.grey.800'),
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.grey.800'),
                'font-weight': 'bold'
              }
            }
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.400'),
            a: {
              color: theme('colors.gray.500'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: 'white',
                'background-color': theme('colors.gray.500'),
              },
            },
            strong: {
              color: theme('colors.gray.100')
            },
            h1: {
              'text-align': 'center',
              color: 'white',
              'margin-top': '0'
            },
            h2: {
              'text-align': 'center',
              color: 'white',
              'margin-top': '0'
            },
            h3: {
              'text-align': 'center',
              color: 'white',
              'margin-top': '0'
            },
            h4: {
              'text-align': 'center',
              color: 'white',
              'margin-top': '0'
            },
            code: {
              color: theme('colors.grey.800'),
              'background-color': 'white',
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
