<template>
    <div>
        <p>{{ name }}</p>
        <p><button @click="send">派发</button></p>
    </div>
</template>

<script generic="T" setup lang="ts">
// defineProps=================================================================================
// 方式一：普通的
/* import type { PropType } from 'vue'
    const props = defineProps({
        name: {
            type: Array as PropType<string[]>
        }
    }) */
// 方式二：之前的
/* const props = defineProps<{
        name: string[]
    }>() 
// props.name*/
// 方式三：
// 3.3.0+的方式:静态类型
// const props = defineProps(['name'])
// 3.3.0+的方式:动态类型, 对defineProps进行泛型约束, 新增泛型支持需要在script标签上加上generic="T"
const props = defineProps<{
    name: T[]
}>()

//defineEmits=================================================================================
// 普通写法定义一个数组
// const emit = defineEmits(['send'])
// ts写法
// const emit = defineEmits<{
//     (event: 'send', message: string): void
// }>()
// vue3.3.0+的方式
const emit = defineEmits<{
    send: [message: string]
}>()
const send = () => {
    emit('send', 'hello child')
}

// defineOptions=================================================================================
// vue3.3 内置了defineOptions，不需要再去下载插件
// 它里面的属性跟optionsAPI里面的属性是一样的
// 常用的属性是定义name
defineOptions({
    name: 'DefineApiChild'
})
</script>

<style scoped></style>
