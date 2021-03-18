<template>
    <h1>{{ msg }}</h1>
    <button @click="count++, updateState()">count is: {{ count }}</button>
    <p>
        Edit <code>components/HelloWorld.vue</code> to test hot module
        replacement.
    </p>
    <p>{{ a }} | {{ b }}</p>
</template>

<script setup>
// 使用 script setup 无法使用 toRefs 去全部解构 reactive 包装的值
// 得使用 state.b 或 toRef 单独解构
import { defineProps, onMounted, reactive, ref, toRef, toRefs } from "vue";

defineProps({
    msg: {
        type: [String],
        default: "这是默认参数",
    },
});

const count = ref(10);
const state = reactive({
    a: 1,
    b: 2,
});
const b = toRef(state, "b");
const a = toRef(state, "a");

function updateState() {
    b.value += 2;
    state.a++;
}

onMounted(() => {
    console.log(state);
    console.log(state.b);
    console.log(b.value);
    console.log(count.value);
    console.log(count);
});
</script>
