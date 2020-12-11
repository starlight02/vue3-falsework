<template>
    <section class="market">
        <div class="header">
            <img src="../assets/banner.jpg" alt="banner">
        </div>

    </section>
</template>

<script>
export default {
    name: 'Market',
}
</script>

<style lang="scss" scoped>
.market {
    width: 100%;
    height: 1500px;

    .header {
        width: 100%;
        padding: 16px 24px;

        > img {
            width: 100%;
            margin-bottom: 24px;
            border-radius: 4px;
            overflow: hidden;
        }
    }
}
</style>
