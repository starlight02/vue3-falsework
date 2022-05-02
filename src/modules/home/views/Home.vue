<template>
    <h1>{{ $t("home.title") }}</h1>
    <router-link :to="formatI18nRoute({name: 'User'})">去我的页面</router-link> | 
    <router-link :to="{name: 'Home'}">默认语言首页</router-link>
    <div>
      <select v-model="$i18n.locale">
        <option value="zh-Hans">简体中文</option>
        <option value="en">英文</option>
      </select>
    </div>
    <HelloWorld/>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from "vue-i18n";
import HelloWorld from '../../../components/HelloWorld.vue';

const route = useRoute();
const { locale, messages } = useI18n();

const formatI18nRoute = inject('formatI18nRoute');
</script>
