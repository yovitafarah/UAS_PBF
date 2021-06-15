const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


const RemovePlugin = require('remove-files-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const removePlugin = new RemovePlugin({

    before: {
        test: [
            {
                folder: 'public',
                method: (filePath) => {
                    return new RegExp(/(?:.*\.js|.*\.map|mix-manifest\.json)$/, 'm').test(filePath);
                }
            },
            {
                folder: 'public/users/js',
                method: (filePath) => {
                    return new RegExp(/(?:.*\.js|.*\.map)$/, 'm').test(filePath);
                },
                recursive: true
            },
            {
                folder: 'public/users/css',
                method: (filePath) => {
                    return new RegExp(/(?:.*\.css|.*\.map)$/, 'm').test(filePath);
                }
            }
        ]
    },

    after: {}
})

mix.webpackConfig({
    plugins: [removePlugin, new ESLintPlugin()],
});

mix.js('resources/users/js/app.js', 'public/users/js').react()
    .extract(['@popperjs/core', 'axios', 'bootstrap', 'clsx', 'font-awesome', 'history', 'jquery', 'lodash', 'moment', 'prop-types', 'react', 'react-document-title', 'react-dom', 'react-loadable', 'react-redux', 'react-router-dom', 'reactstrap', 'redux', 'redux-thunk', 'ree-validate'])
    .sass('resources/users/sass/app.scss', 'public/users/css')
    .sourceMaps(false, 'source-map');

mix.copy('resources/users/assets', 'public/users/assets');

if (mix.inProduction()) {
    mix.version();
}

if (!mix.inProduction()) {
    mix.browserSync('http://localhost:8000')
}
