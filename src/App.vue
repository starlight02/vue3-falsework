<template>
    <router-view/>
    <AppBottomBar/>
</template>

<script setup>
import AppBottomBar from './components/AppBottomBar.vue';

console.log(`vite app 运行在 ${import.meta.env.MODE} 模式`);
</script>

<style>
#app {
    width: 100%;
    height: 100vh;
    padding-bottom: 60px;
    overflow: auto;
}
</style>
