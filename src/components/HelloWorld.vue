<template>
    <h1>{{ msg }}</h1>
    <button @click="count++,updateState()">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
    <p>{{a}} | {{b}}</p>
</template>

<script>
import { onMounted, reactive, ref, toRef, toRefs } from 'vue';

export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    setup(props) {
        console.log(props);
        const count = ref(0);
        const state = reactive({
            a: 1,
            b: 2,
        });
        const b = toRef(state, 'b');

        function updateState() {
            b.value += 2;
            state.a++
        }

        onMounted(() => {
            console.log(state);
            console.log(state.b);
            console.log(b.value);
            console.log(count.value);
            console.log(count);
        });

        return {count, updateState, ...toRefs(state)};
    },
    // data() {
    //     return {
    //         count: 0,
    //     }
    // },
}
</script>
