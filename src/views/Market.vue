<template>
    <section class="market">
        <!-- 头部 -->
        <div class="header">
            <!--  Banner  -->
            <img src="../assets/banner.jpg" alt="banner">
            <!-- 选项卡 -->
            <ul class="option-wrapper">
                <li v-for="(option,i) in optionList" :key="i" :class="{'current-option':option.active}" @click="optionClick(option)">
                    <i class="mdi mdi-24px" :class="option.icon"></i>
                    <span v-text="option.name"></span>
                </li>
            </ul>
        </div>
        <div class="list-wrapper">
            <!-- 列表标题 -->
            <div class="title-wrapper">
                <h1>
                    {{ title }}
                    <span style="color: #34b597;">·</span>
                    <span class="tips" v-text="tips"></span>
                </h1>
                <router-link :to="{name:'More'}">
                    <span>更多</span>
                    <i class="mdi mdi-24px mdi-chevron-right"></i>
                </router-link>
            </div>
            <!-- 产品分类选项卡 -->
            <ul class="product-type-wrapper">
                <li v-for="(type,i) in productTypeList" :key="i" :class="{'active-type':type.active}" @click="productTypeClick(type)">{{ type.name }}</li>
            </ul>
            <!-- 产品列表 -->
            <div class="product-list-wrapper">
                <template v-for="(p,i) in productList" :key="i">
                    <Product
                        :id="p.id"
                        :name="p.name"
                        :image="p.img"
                        :contact="p.mobile"
                        :profession="p.profession"
                        :heat="p.heat"
                        :district="p.district"
                    >
                    </Product>
                    <hr/>
                </template>
            </div>
            <!-- 按钮 -->
            <button class="application" @click="apply">我是师傅，申请入驻</button>
            <!-- 卡片 -->
            <div class="company-card">

            </div>
        </div>
    </section>
</template>

<script>
import {reactive, ref, toRef, toRefs} from 'vue';
import Product from '../components/Product.vue';

import image1 from '../assets/product_img1.gif';
import image2 from '../assets/product_img2.gif';
import image3 from '../assets/product_img3.jpg';

export default {
    name: 'Market',
    components: {Product},
    setup() {
        //选项列表
        const optionList = ref([
            {icon: 'mdi-hexagon-multiple-outline', name: '逛建材', active: true},
            {icon: 'mdi-account-hard-hat', name: '找师傅', active: false},
            {icon: 'mdi-bed-king-outline ', name: '挑家具', active: false},
            {icon: 'mdi-clover', name: '看设计', active: false},
        ]);
        // const state = reactive({
        //     optionList: [
        //         {icon: '', name: '逛建材', active: true},
        //         {icon: '', name: '找师傅', active: false},
        //         {icon: '', name: '挑家具', active: false},
        //         {icon: '', name: '看设计', active: false},
        //     ],
        // });
        // const optionList = toRef(state, 'optionList');

        //标题
        const title = ref('建材市场');
        //标题提示
        const tips = ref('本地建材商推荐');
        //产品种类列表
        const productTypeList = ref([
            {name: '瓷砖', active: false},
            {name: '油漆', active: true},
            {name: '卫浴', active: false},
            {name: '地板', active: false},
            {name: '墙布', active: false},
            {name: '石膏线', active: false},
        ]);

        //产品列表数据
        const productList = ref([]);

        //油漆产品数据
        const paintList = [
            {id: 1, name: '三棵树马上住(城南建材市场)', img: image1, mobile: '151****7890', heat: 10, profession: '油漆工', district: '章贡区'},
            {id: 2, name: '立邦(中环广场专卖店)', img: image2, mobile: '152****7890', heat: 6, profession: '油漆工', district: '章贡区'},
            {id: 3, name: '嘉宝莉漆', img: image3, mobile: '153****7890', heat: 3, profession: '油漆工', district: '章贡区'},
        ];

        // 数据初始化
        productList.value = paintList;


        //选项卡点击事件
        const optionClick = (option) => {
            optionList.value.forEach(o => o.active = false);
            option.active = true;
            console.log(`现在是 ${option.name} 选项`);
            // 在这里可以发送请求获取数据
            // TODO
        };

        const apply = () => {
            window.confirm('点击了');
        };

        //产品类型点击事件
        const productTypeClick = (type) => {
            productTypeList.value.forEach(t => t.active = false);
            type.active = true;
            // 实际上这里应该请求相应的产品数据
            // TODO
            if (type.name === '油漆') {
                productList.value = paintList;
            } else {
                productList.value = [];
            }
        };

        return {
            optionList,
            title,
            tips,
            productTypeList,
            productList,
            optionClick,
            productTypeClick,
            apply,
        };
    },
};
</script>

<style lang="scss" scoped>
.market {
    width: 100%;
    padding-bottom: 24px;

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
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 96px;
                height: 65px;
                border-radius: 4px;
                box-shadow: 0 0 5px 1px #eeeeee;
                font-size: 16px;
                color: #969696;
                cursor: pointer;
            }

            .current-option {
                background-color: #34b597;
                color: #ffffff;
            }
        }
    }

    .list-wrapper {
        width: 100%;

        .title-wrapper {
            width: 100%;
            padding: 10px 24px;
            border-bottom: 1px solid #eeeeee;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > h1 {
                display: flex;
                align-items: baseline;
                font-size: 24px;
                font-weight: 600;

                .tips {
                    font-size: 18px;
                    color: #969696;
                    font-weight: normal;
                }
            }

            > a {
                display: inline-flex;
                align-items: center;
                font-size: 18px;
                color: #969696;
                text-decoration: none;
            }
        }

        .product-type-wrapper {
            width: 100%;
            padding: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > li {
                font-size: 20px;
                color: #969696;
            }

            .active-type {
                font-size: 22px;
                font-weight: 600;
                color: rgb(32, 32, 32);
                position: relative;

                &::after {
                    position: absolute;
                    width: 100%;
                    height: 50%;
                    background-color: rgba(52, 180, 155, 0.3);
                    bottom: 0;
                    left: 0;
                    content: '';
                }
            }
        }

        .product-list-wrapper {
            width: 100%;
            padding: 0 24px 24px;

            > hr {
                width: 100%;
                height: 1px;
                margin: 0;
                border: none;
                outline: none;
                background-color: #eeeeee;
            }
        }

        .application {
            width: 365px;
            height: 65px;
            margin: 0 auto;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            border-radius: 65px;
            box-shadow: 0 2px 10px 0px rgba(52, 180, 155, 0.5);
            background-color: #34b597;
            color: #ffffff;
            font-size: 24px;
            font-weight: normal;
        }

        .company-card {
            width: 427px;
            height: 100px;
            margin: 48px 24px 0 24px;
            border-radius: 4px;
            box-shadow: 0 0 10px -3px rgba(40, 39, 39, 0.3);
        }
    }
}
</style>
