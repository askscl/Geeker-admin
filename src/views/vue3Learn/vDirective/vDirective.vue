<template>
    <div>
        <button @click="flag = !flag">切换</button>
        <div v-dir:aName.preMax="{ background: 'gray', flag: flag }" class="div_box"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, Directive, DirectiveBinding } from 'vue'

let flag = ref<boolean>(true)

type Binding = {
    background: string
}
const vDir: Directive = {
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    /* mounted(...args: Array<any>) {
        console.log('mounted')
        console.log(args)
    }, */
    mounted(el: HTMLElement, binding: DirectiveBinding<Binding>) {
        console.log('mounted')
        // console.log('dirName:', binding.arg)
        // console.log('preName:', binding.modifiers)
        // console.log('value:', binding.value.background)

        el.style.backgroundColor = binding.value.background
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    }
}
</script>

<style scoped>
.div_box {
    width: 100px;
    height: 100px;
}
</style>
