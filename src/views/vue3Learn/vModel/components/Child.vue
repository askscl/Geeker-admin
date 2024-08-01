<template>
    <div class="ChildDiv" v-if="modelValue">
        <h3>我是子组件--测试多个v-model</h3>
        <div class="close"><button @click="close">关闭</button></div>
        <p>{{ modelValue }}</p>
        <p>{{ testVal }}</p>
        <div>内容：<input type="text" :value="testVal" @input="change" /></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// defineProps<{
//     modelvalue: boolean
// }>()
// const modelValue = defineModel()
// console.log(modelValue)
const modelValue = defineModel('modelValue')
const testVal = defineModel('testVal')
const emit = defineEmits(['update:modelValue', 'update:testVal'])

const close = () => {
    emit('update:modelValue', false)
}

const change = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:testVal', target.value)
}
</script>

<style scoped lang="scss">
.ChildDiv {
    width: 500px;
    border: 5px solid #ccc;
    padding: 10px;
}
.close {
    text-align: right;
}
</style>
