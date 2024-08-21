<template>
    <div>
        <!-- 全局函数和变量 -->
        <div v-if="false">
            <h1>全局函数和变量</h1>
            <p>{{ $myVar }}</p>
            <p>{{ $myFilters.format('天上人间') }}</p>
            <p>{{ $myMethod('苏州') }}</p>
        </div>
        <div class="div_box1">
            <h1>v-memo</h1>
            <!-- <div @click="select(item.id)" :key="item.id" v-for="item in arr" v-memo="[item.id == active]"> -->
            <div @click="select(item.id)" :key="item.id" v-for="item in arr">
                {{ item.id }} -- selected: {{ item.id === active }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from 'vue'

// 全局函数和变量使用
const instance = getCurrentInstance()
// console.log(instance?.proxy?.$myFilters.format('天上人间'))
// console.log(instance?.proxy?.$myVar)
// console.log(instance?.proxy?.$myMethod('苏州'))

//v-memo练习:缓存数据不变的节点, 让只有数据改变的节点重新渲染
const arr = reactive<any[]>([])
for (let i = 0; i < 1000; i++) {
    arr.push({
        id: i + 1,
        name: 'test' + i
    })
}
const active = ref<number>(1)
const select = async (index: number) => {
    active.value = index
    console.log('点击了' + index)
    console.time()
    await Promise.resolve()
    console.timeEnd()
}
</script>

<style scoped>
.div_box1 {
    height: 400px;
    overflow: hidden;
}
</style>
