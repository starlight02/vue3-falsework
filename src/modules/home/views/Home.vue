<template>
    <h1>这是首页</h1>
    <router-link :to="{name:'User'}">去我的页面</router-link>
    <HelloWorld/>
</template>

<script setup>
import HelloWorld from '../../../components/HelloWorld.vue';

import {useRoute, useRouter} from 'vue-router';

const route = useRoute();

console.log('这是：', route.name);
</script>
