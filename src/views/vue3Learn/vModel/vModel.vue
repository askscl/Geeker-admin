<template>
    <div>
        <div><b>我是父亲组件</b></div>
        <div>{{ isShow }}</div>
        <div>{{ twoVal }}</div>
        <div>{{ threeVal }}</div>
        <div><button @click="isShow = !isShow">开关</button></div>
        <hr />
        <Child v-model="isShow" v-model:testVal="twoVal" />
        <Sun v-model:title.capitalize="threeVal" />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Child from './components/Child.vue'
import Sun from './components/Sun.vue'

const isShow = ref<boolean>(false)
const twoVal = ref<string>('我是文字')
const threeVal = ref<string>('adfd')
</script>

<style scoped></style>
