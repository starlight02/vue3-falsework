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
}
</script>

<style lang="scss">
#app {
    width: 100%;
    height: 100vh;
    padding-bottom: 60px;
    overflow: auto;
}
</style>
