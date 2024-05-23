import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                // sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],

            },
            typography: ({ theme }) => ({
                white: {
                    css: {
                        '--tw-prose-body': theme('colors.white'),
                        '--tw-prose-headings': theme('colors.white'),
                        '--tw-prose-lead': theme('colors.white'),
                        '--tw-prose-links': theme('colors.white'),
                        '--tw-prose-bold': theme('colors.white'),
                        '--tw-prose-counters': theme('colors.white'),
                        '--tw-prose-bullets': theme('colors.white'),
                        '--tw-prose-hr': theme('colors.white'),
                        '--tw-prose-quotes': theme('colors.white'),
                        '--tw-prose-quote-borders': theme('colors.white'),
                        '--tw-prose-captions': theme('colors.white'),
                        '--tw-prose-code': theme('colors.white'),
                        '--tw-prose-pre-code': theme('colors.white'),
                        // '--tw-prose-pre-bg': theme('colors.white'),
                        '--tw-prose-th-borders': theme('colors.white'),
                        '--tw-prose-td-borders': theme('colors.white'),
                        '--tw-prose-invert-body': theme('colors.white'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.white'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.white'),
                        '--tw-prose-invert-bullets': theme('colors.white'),
                        '--tw-prose-invert-hr': theme('colors.white'),
                        '--tw-prose-invert-quotes': theme('colors.white'),
                        '--tw-prose-invert-quote-borders': theme('colors.white'),
                        '--tw-prose-invert-captions': theme('colors.white'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.white'),
                        // '--tw-prose-invert-pre-bg': '',
                        '--tw-prose-invert-th-borders': theme('colors.white'),
                        '--tw-prose-invert-td-borders': theme('colors.white'),
                    },
                },
            }),
        },
    },

    plugins: [
        forms,
        require('@tailwindcss/typography'),
        require('postcss-import'),
        require('@tailwindcss/line-clamp'),
    ],
};
