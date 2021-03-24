<template>
    <h1>这是首页</h1>
    <HelloWorld />
</template>

<script setup>
import HelloWorld from "../../../components/HelloWorld.vue";

import { useRoute, useRouter } from "vue-router";
const route = useRoute();

console.log(route.name);
</script>
