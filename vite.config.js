require('./script/get_code_version');

import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { createHtmlPlugin } from 'vite-plugin-html';
import { vueI18n } from '@intlify/vite-plugin-vue-i18n';

export default defineConfig({
    base: '/',
    server: {
        port: 3000,
    },
    build: {
        minify: 'terser',
        sourcemap: process.env.NODE_ENV !== 'production',
    },
    // mode:,
    plugins: [
        vue({
            reactivityTransform: true
        }),
        legacy({
            polyfills: [
                '> 0.2%', 'last 2 versions', 'not dead',
            ],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        }),
        vueI18n({
            include: resolve(__dirname, 'src/modules'),
        }),
        createHtmlPlugin({
            inject: {
                data: {
                    TITLE: 'Vue3 APP',
                },
                // tags 里的配置会插入到 head 中
                tags: [{
                    tag: 'meta',
                    attrs: {
                        name: 'keywords',
                        content: '关键字,关键字',
                    },
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'description',
                        content: '这是网站描述描述描述描述',
                    },
                }],
            },
            minify: true,
        }),
    ],
});
