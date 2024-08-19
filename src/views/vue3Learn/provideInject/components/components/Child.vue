<template>
    <div>
        <h4>子组件</h4>
        <el-button @click="change">改变颜色</el-button>
        <div class="box"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, inject } from 'vue'
import type { Ref } from 'vue'
const appColor = inject<Ref<string>>('boxColor')
const change = () => {
    appColor!.value = 'red' //!.表示非空断言,告诉编译器这个值一定有值，不会是null或者undefined
}
</script>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: v-bind('appColor');
}
</style>
