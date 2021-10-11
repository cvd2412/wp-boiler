const tailwindForms = require('@tailwindcss/forms');
const tailwindTypography = require('@tailwindcss/typography');

module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './src/**/*.php',
            './template-parts/**/*.php',
            './*.php',
            './resources/js/**/*.js',
        ],
    },
    plugins: [
        tailwindForms({
            strategy: 'class',
        }),
        tailwindTypography
    ],
    theme: {
        extend: {},
    },
}
