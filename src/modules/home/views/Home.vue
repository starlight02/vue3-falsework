<template>
    <h1>{{ $t("home.title") }}</h1>
    <router-link :to="{name:'User'}">去我的页面</router-link>
    <HelloWorld/>
</template>

<script setup>
import HelloWorld from '../../../components/HelloWorld.vue';
import {useRoute, useRouter} from 'vue-router';
import { useI18n } from "vue-i18n";

const route = useRoute();

const { locale, messages } = useI18n();

console.log(messages.value.hans);

console.log('这是：', route.name);
</script>