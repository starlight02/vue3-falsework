import legacyPlugin from 'vite-plugin-legacy';
import VitePluginHtml from 'vite-plugin-html';

export default {
    base: './',
    // mode:,
    plugins: [
        // The default options are listed below. Pass nothing to use them.
        legacyPlugin({
            // The browsers that must be supported by your legacy bundle.
            // https://babeljs.io/docs/en/babel-preset-env#targets
            targets: [
                '> 0.5%',
                'last 2 versions',
                'Firefox ESR',
                'not dead',
            ],
            // Define which polyfills your legacy bundle needs. They will be loaded
            // from the Polyfill.io server. See the "Polyfills" section for more info.
            polyfills: [
                // Empty by default
            ],
            // Toggles whether or not browserslist config sources are used.
            // https://babeljs.io/docs/en/babel-preset-env#ignorebrowserslistconfig
            ignoreBrowserslistConfig: false,
            // When true, core-js@3 modules are inlined based on usage.
            // When false, global namespace APIs (eg: Object.entries) are loaded
            // from the Polyfill.io server.
            corejs: true,
        }),
        // 使用这插件是临时方案，感觉不太行
        VitePluginHtml({
            title: 'vite app - vue3.0练习',
            minify: process.env.NODE_ENV === 'production',
            options: {
                'BASE_URL': './',
                'IE_VERSION': 'IE 11',
            },
        }),
    ],
};
