<template>
    <div>
        <ul>
            <li v-for="(item, index) in data" :key="index">
                <slot :item="item" :index="index"></slot>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" generic="T">
import { defineSlots } from 'vue'
//defineSlots=================================================================================
defineProps<{
    data: T[]
}>()
// 只有声明，没有实现, 没有任何参数，只能接受ts的泛型
// 约束slot的类型
// vue3.4无defineSlots
// defineSlots<{
//     default(props: { item: T; index: number }): void
// }>
</script>

<style scoped></style>
