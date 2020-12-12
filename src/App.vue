<template>
    <router-view/>
    <AppBottomBar/>
</template>

<script>
import AppBottomBar from './components/AppBottomBar.vue';

export default {
    name: 'App',
    components: {
        AppBottomBar,
    },
    setup() {
        console.log(`vite app 运行在 ${import.meta.env.MODE} 模式`);
    },
};
</script>

<style lang="scss">
#app {
    width: 100%;
    height: 100vh;
    padding-bottom: 60px;
    overflow: auto;
}
</style>
