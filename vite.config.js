require('./script/get_code_version');

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import htmlPlugin from 'vite-plugin-html';

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
        }),
        htmlPlugin({
            inject: {
                injectData: {
                    TITLE: 'Vue3 APP',
                },
                tags:[
                    {
                        tag: "meta",
                        attrs: {
                            name: 'keywords',
                            content: '关键字,关键字'
                        }
                    },
                    {
                        tag: "meta",
                        attrs: {
                            name: 'description',
                            content: '这是网站描述描述描述描述'
                        }
                    },
                ]
            },
            minify : true,
            }
        )
    ],
});
