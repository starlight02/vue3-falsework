import langs from '../assets/langs.json?raw';
import i18n from '../plugins/i18n'

export function i18nLocaleChange(lang) {
  const langMap = JSON.parse(langs);
  const map = langMap[lang.toLowerCase() || 'zh-cn'];
  if(map) {
      i18n.global.locale.value = map.locale;
      window.document.documentElement.setAttribute('lang', map.lang);
      window.document.documentElement.className = map.lang;
      return;
  }
}

export function formatI18nRoute(route) {
  const lang = window.localStorage.getItem(import.meta.env.VITE_SPECIFIED_LANG).toLowerCase();
  return {...route, name: lang? `I18n${route.name}` : route.name, params: { lang }};
}