<template>
    <div class="sunDiv">
        <h3>我是孙组件--测试自定义修饰符--测试无法使用</h3>
        <!-- <input v-model="modelVal" type="text" /> -->
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// const modelVal = defineModel()

// 以下报错：defineModel() 不是可迭代对象, _useModel is not a function or its return value is not iterable
/* const [modelVal, modifiers] = defineModel("title", {
    set(value: string) {
        if (modifiers.capitalize) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
        return value
    }
})
console.log(modifiers) */
</script>

<style scoped lang="scss">
.sunDiv {
    width: 500px;
    border: 5px solid #ccc;
    padding: 10px;
}
</style>
