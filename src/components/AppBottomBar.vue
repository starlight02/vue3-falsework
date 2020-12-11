<template>
    <div class="app-bottom-bar">
        <router-link v-for="(m,i) in menuList" exact-active-class="current-menu" :to="{name:m.route}" :key="i" class="bottom-menu">
            <i :class="m.icon" class="mdi mdi-24px"></i>
            <span>{{ m.name }}</span>
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'AppBottomBar',
    setup() {
        const menuList = [
            {icon: 'mdi-home-minus-outline', name: '首页', route: 'Home'},
            {icon: 'mdi-pencil-ruler', name: '免费设计', route: 'Design'},
            {icon: 'mdi-wardrobe-outline', name: '家具', route: 'Furniture'},
            {icon: 'mdi-format-paint', name: '家装市场', route: 'Market'},
            {icon: 'mdi-account-outline', name: '我的', route: 'User'},
        ];

        return {menuList}
    },
}
</script>

<style lang="scss" scoped>
.app-bottom-bar {
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-top: 1px solid #eeeeee;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .bottom-menu {
        width: 60px;
        height: 44px;
        border-radius: 4px;
        color: #969696;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        text-decoration: none;
    }

    .current-menu {
        color: #34b597;
    }
}
</style>
