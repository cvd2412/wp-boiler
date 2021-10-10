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
    theme: {
        extend: {},
    },
}
