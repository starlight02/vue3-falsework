<template>
    <div class="product-card">
        <router-link class="cover-wrapper" :to="{name:'ProductDetail',params:{id}}">
            <img :src="image" alt="product_image">
        </router-link>
        <div class="product-info">
            <h3 v-text="name" @click="$router.push({name:'ProductDetail',params:{id}})"></h3>
            <div class="contact-wrapper">
                <span class="contact">{{ contact }}</span>
                <a :href="'tel://'+contact" class="circular">
                    <i class="mdi mdi-phone"></i>
                </a>
            </div>
            <div class="other-info-wrapper">
                <span class="heat">
                    <i class="mdi mdi-18px mdi-fire"></i>
                    {{ heat }}
                </span>
                <span>{{ profession }} | {{ district }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    props: {
        id: [String, Number],
        image: {
            default: '',
        },
        name: String,
        contact: String,
        profession: String,
        district: String,
        heat: {
            type: Number,
            default: 0,
        },
    },
};
</script>

<style lang="scss" scoped>
.product-card {
    width: 100%;
    height: 110px;
    margin: 16px 0 24px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .cover-wrapper {
        width: 110px;
        height: 110px;
        margin-right: 10px;
        border-radius: 4px;
        overflow: hidden;
        flex-shrink: 0;

        > img {
            width: 100%;
            height: 100%;
        }
    }


    .product-info {
        width: calc(100% - 120px);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-shrink: 1;

        > h3 {
            width: 100%;
            padding-bottom: 16px;
            font-size: 20px;
            font-weight: 600;
            color: rgb(32, 32, 32);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .contact-wrapper {
            display: flex;
            align-items: center;
            padding-bottom: 16px;

            .contact {
                font-size: 18px;
                color: #969696;
                padding-right: 16px;
            }

            .circular {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                border-radius: 256px;
                border: 1px solid #34b597;
                color: #34b597;
                text-decoration: none;
                font-size: 20px;
            }
        }


        .other-info-wrapper {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 16px;
            color: #c8c8c8;

            .heat {
                color: rgb(255, 101, 28);
                margin-right: 16px;
            }
        }
    }
}
</style>
