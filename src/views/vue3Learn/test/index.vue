<template>
    <div>
        <p>{{ $myVar }}</p>
        <p>{{ $myFilters.format('天上人间') }}</p>
        <p>{{ $myMethod('苏州') }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from 'vue'
// 全局函数和变量使用
const instance = getCurrentInstance()
console.log(instance?.proxy?.$myFilters.format('天上人间'))
console.log(instance?.proxy?.$myVar)
console.log(instance?.proxy?.$myMethod('苏州'))
</script>

<style scoped></style>
