<template>
    <router-view />
</template>

<script setup>
const lang = window.navigator.language;
window.localStorage.setItem(import.meta.env.VITE_PREFERRED_LANG, lang);

console.log(`Vite APP 运行在 ${import.meta.env.MODE} 模式`);
</script>

<style>
#app {
    width: 100%;
    height: 100vh;
    padding-bottom: 60px;
    overflow: auto;
}
</style>
