<template>
    <h1>{{ t('title') }}</h1>
    <button @click="goHome">去首页</button>
</template>

<script setup>
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const router = useRouter();
const formatI18nRoute = inject('formatI18nRoute');

const goHome = () => {
    router.push(formatI18nRoute({name: 'Home'}));
};

// 如果要使用 i18n 块里的配置，要设置 inheritLocale 属性为 true 且不能使用全局 $t 函数
const { locale, messages, t } = useI18n({
    inheritLocale: true
});

</script>

<i18n lang="json5">
{
  "en": {
    "language": "Language",
    "title": "hello, world!"
  },
  "zh-Hans": {
    "language": "言語",
    "title": "哇哇哇，上大分了"
  }
}
</i18n>