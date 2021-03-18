require('./script/get_code_version');

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    base: './',
    build: {
        sourcemap: process.env.NODE_ENV !== 'production'
    },
    // mode:,
    plugins: [
        vue(),
        legacy({
            polyfills: [
                // Empty by default
            ],
            corejs: true,
        })
    ],
});
