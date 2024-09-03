<template>
    <div>
        <div>learnStore: {{ learnStore.current }}:{{ learnStore.name }}</div>
        <button @click="change">改变</button>
        <button @click="reset">重置</button>
        <button @click="undo">撤销</button>
        <button @click="redo">重做</button>
        <hr />
        <div>解构：{{ current }}:{{ name }}</div>
        <hr />
        <div>actions-user: {{ learnStore.user }}</div>
        <div>action-name: {{ learnStore.name }}</div>
        <div>getters: {{ learnStore.newName }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
import { useLearnStore } from '@/stores/modules/learnStore'
import { storeToRefs } from 'pinia'
import { useRefHistory } from '@vueuse/core'
const learnStore = useLearnStore()

// 读改
// 1 learnStore.age++
// 2 learnStore.$patch({ name: '张三', age: 99 })
// 3 learnStore.$patch(state => { state.name = '张三' state.age = 99 })
// 4 learnStore.$state = { current: 3, name: '张三', age: 99 }
// 5 action
const change = () => {
    // learnStore.setCurrent(567)
    current.value++
    // learnStore.setUser()
    // learnStore.setName('李四')
}

// 解构123
const { current, name } = storeToRefs(learnStore)
// console.log(current.value, name.value)

// 重置
const reset = () => {
    learnStore.$reset()
}

// 依赖收集
learnStore.$subscribe(
    (args, state) => {
        console.log(args, state)
    },
    {
        detached: true, // true表示解绑
        deep: true, // 深度监听
        flush: 'sync' // 同步监听
    }
)

// 监听action, true表示继续监听销毁的组件
/* learnStore.$onAction(({ name, store, after, onError }) => {
    console.log(name, store)
    after(() => {
        console.log('after')
    })
    // 捕获异步错误
    onError(error => {
        console.log(error)
    })
}, true) */

//undo/redo
// 注意使用解构后的变量
const { undo, redo, canUndo, canRedo } = useRefHistory(current)
</script>

<style scoped></style>
