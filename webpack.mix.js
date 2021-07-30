const mix = require('laravel-mix');
const path = require('path');
const sveltePreprocess = require('svelte-preprocess');

const mode = (process.env.NODE_ENV || 'development');
const prod = (mode === 'production');

mix.webpackConfig({
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.ts', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    module: {
        rules: [
            {// Svelte
                test: /\.(html|svelte)$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        preprocess: sveltePreprocess({ sourceMap: !prod })
                    }
                }
            },
            {
                // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false
                }
            },
			{// TypeScript
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
        ]
    },
    devtool: (prod ? false : 'source-map')
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/build')
    .sass('resources/scss/app.scss', 'public/build', [
        //
    ]);
