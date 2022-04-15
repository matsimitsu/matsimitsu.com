const headerLink = {
  'color': 'var(--tw-prose-headings)',
  'text-decoration': 'none',
  '&:hover, &:active': {
    'text-decoration': 'none'
  }
};

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts,svx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray[600]'),
            '--tw-prose-headings': theme('colors.gray[800]'),
            '--tw-prose-lead': theme('colors.gray[700]'),
            '--tw-prose-links': theme('colors.blue[400]'),
            '--tw-prose-bold': theme('colors.gray[800]'),
            '--tw-prose-counters': theme('colors.gray[600]'),
            '--tw-prose-bullets': theme('colors.gray[400]'),
            '--tw-prose-hr': theme('colors.gray[300]'),
            '--tw-prose-quotes': theme('colors.gray[800]'),
            '--tw-prose-quote-borders': theme('colors.gray[300]'),
            '--tw-prose-captions': theme('colors.gray[700]'),
            '--tw-prose-code': theme('colors.gray[800]'),
            '--tw-prose-pre-code': theme('colors.gray[800]'),
            '--tw-prose-pre-bg': theme('colors.gray[100]'),
            '--tw-prose-th-borders': theme('colors.gray[300]'),
            '--tw-prose-td-borders': theme('colors.gray[200]'),
            h1: {
              'text-align': 'center',
              a: headerLink
            },
            h2: {
              'text-align': 'center',
              a: headerLink
            },
            h3: {
              'text-align': 'center',
              a: headerLink
            },
            h4: {
              'text-align': 'center',
              a: headerLink
            },
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.gray[400]'),
            '--tw-prose-headings': theme('colors.gray[200]'),
            '--tw-prose-lead': theme('colors.gray[300]'),
            '--tw-prose-links': theme('colors.blue[400]'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.gray[400]'),
            '--tw-prose-bullets': theme('colors.gray[600]'),
            '--tw-prose-hr': theme('colors.gray[700]'),
            '--tw-prose-quotes': theme('colors.gray[100]'),
            '--tw-prose-quote-borders': theme('colors.gray[700]'),
            '--tw-prose-captions': theme('colors.gray[400]'),
            '--tw-prose-code': theme('colors.gray[200]'),
            '--tw-prose-pre-code': theme('colors.gray[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[800]'),
            '--tw-prose-th-borders': theme('colors.gray[600]'),
            '--tw-prose-td-borders': theme('colors.gray[700]'),
            h1: {
              'text-align': 'center',
              a: headerLink
            },
            h2: {
              'text-align': 'center',
              a: headerLink
            },
            h3: {
              'text-align': 'center',
              a: headerLink
            },
            h4: {
              'text-align': 'center',
              a: headerLink
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
