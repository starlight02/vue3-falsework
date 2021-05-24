import { createI18n } from "vue-i18n";
import { messages } from "vite-i18n-resources";

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    // inheritLocale: true,
    locale: 'zh-Hans',
    fallbackLocale: {
        'zh-Hant': ['zh-Hans'],
        'zh': ['zh-Hans'],
        'default': ['zh-Hans']
    },
    messages,
})

if (import.meta.hot) {
    import.meta.hot.on("locales-update", data => {
        Object.keys(data).forEach(lang => {
            i18n.global.setLocaleMessage(lang, data[lang]);
        });
    });
}

export default i18n;