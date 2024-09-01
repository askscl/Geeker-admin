<template>
    <div>
        <p>fatherData: {{ fatherData }}</p>
        <Child :name="['张三', '李四', '王五']" @send="getMessage"></Child>
        <Sun :data="list">
            <template #default="{ item, index }">
                <p>姓名：{{ item.name }}</p>
                <p>年龄：{{ item.age }}</p>
                <p>编号：{{ index }}</p>
            </template>
        </Sun>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Child from './Child.vue'
import Sun from './Sun.vue'

const fatherData = ref('父组件数据')
const getMessage = (message: string) => {
    fatherData.value = message
}

const list = [
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 20
    },
    {
        name: '王五',
        age: 22
    }
]
</script>

<style scoped></style>
