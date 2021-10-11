const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const read = require('fs-readdir-recursive');

module.exports = {
    devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,

    stats: {
        modules: false,
    },

    entry: {
        shared: [
            'picoapp',
            ...read(path.join(__dirname, 'resources/js/utils'))
                .map((file) => path.join(__dirname, `resources/js/utils/${file}`)),
        ],

        app: {
            import: path.join(__dirname, 'resources/app.js'),
            dependOn: 'shared',
        },

        // custom
        /*
        custom: {
            import: path.join(__dirname, 'resources/js/my-path'),
            dependOn: 'app',
        },*/

        // Standalone scripts
        lazyload: path.join(__dirname, 'resources/lazyload.js'),
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'assets'),
    },

    resolve: {
        alias: {
            '~': path.join(__dirname, 'resources'),
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { url: false },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),

            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
        ],

        splitChunks: {
            cacheGroups: {
                polyfills: {
                    test: /[\\/]node_modules[\\/](@babel|core-js|regenerator-runtime)[\\/]/,
                    name: 'polyfills',
                    chunks: 'initial',
                    priority: 60,
                    enforce: true,
                    reuseExistingChunk: true,
                },
            },
        },
    },
};
