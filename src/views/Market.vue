<template>
    <section class="market">
        <div class="header">
            <img src="../assets/banner.jpg" alt="banner">
            <ul class="option-wrapper">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
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

        .option-wrapper {
            width: 100%;
            display: flex;
            justify-content: space-between;
            
            > li {
                display: flex;
                width: 90px;
                height: 65px;
                border-radius: 4px;
                box-shadow: 0 0 1em 1px #969696;
            }
        }
    }
}
</style>
