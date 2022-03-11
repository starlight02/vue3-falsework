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
import { onMounted, reactive, toRef, toRefs } from "vue";

defineProps({
    msg: {
        type: [String],
        default: "这是默认参数",
    },
});

let count = $ref(10);
const state = reactive({
    a: 1,
    b: 2,
});

// 使用 state.b 或 toRef 单独解构 reactive 包装的值
// 使用了 $()，不需要使用 b.value
// let b = $(toRef(state, 'b'));
// let a = $(toRef(state, 'a'));

let {a, b} = $(toRefs(state));

function updateState() {
    b += 2;
    state.a++;
}

onMounted(() => {
    console.log(state);
    console.log(a);
    console.log(b);
    console.log(count);
});
</script>
