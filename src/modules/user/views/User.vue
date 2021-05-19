<template>
    <h1>这是我的</h1>
    <button @click="goHome">去首页</button>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

console.log('这是：', route.name);

const goHome = () => {
    router.push({name: 'Home'});
};
</script>
