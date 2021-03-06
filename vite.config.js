require('./script/get_code_version');

import {resolve} from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import htmlPlugin from 'vite-plugin-html';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import i18nResources from 'vite-plugin-i18n-resources';

export default defineConfig({
    base: './',
    build: {
        sourcemap: process.env.NODE_ENV !== 'production',
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
        vueI18n(),
        // 此插件只能收集文件名为 {namespaces}.{locale}.json 的 JSON 文件
        i18nResources({
            path: resolve(__dirname, 'src/modules'),
        }),
        htmlPlugin(
            {
                inject: {
                    injectData: {
                        TITLE: 'Vue3 APP',
                    },
                    // tags 里的配置会插入到 head 中
                    tags: [
                        {
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
                        },
                    ],
                },
                minify: true,
            },
        ),
    ],
});
