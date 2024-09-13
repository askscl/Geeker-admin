<template>
    <div>
        <!-- 全局函数和变量 -->
        <div v-if="false">
            <h1>全局函数和变量</h1>
            <p>{{ $myVar }}</p>
            <p>{{ $myFilters.format('天上人间') }}</p>
            <p>{{ $myMethod('苏州') }}</p>
        </div>

        <!-- 标记静态节点 -->
        <div class="div_box1" v-if="false">
            <h1>v-memo</h1>
            <div @click="select(item.id)" :key="item.id" v-for="item in arr" v-memo="[item.id == active]">
                <!-- <div @click="select(item.id)" :key="item.id" v-for="item in arr"> -->
                {{ item.id }} -- selected: {{ item.id === active }}
            </div>
        </div>

        <!-- pw转vw:注意只能用class的形式，行内样式无法生效 -->
        <div class="div_pwToVw" v-if="false">pw转vw</div>

        <!-- 全局css变量 -->
        <div>
            <h1 class="h1_header">全局css变量</h1>
            <button @click="changeFontSize(36)">大</button>
            <button @click="changeFontSize(24)">中</button>
            <button @click="changeFontSize(14)">小</button>
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

//===============================================================
//v-memo练习: 标记静态节点： 缓存数据不变的节点, 让只有数据改变的节点重新渲染
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

//===============================================================
// 给你想做全局的字体大小，添加这个变量就可以了 var(--font-size)
// 任何页面都可以用
/* 
    //官网示例
    import { useCssVar } from '@vueuse/core'

    const el = ref(null)
    const color1 = useCssVar('--color', el)

    const elv = ref(null)
    const key = ref('--color')
    const colorVal = useCssVar(key, elv)

    const someEl = ref(null)
    const color2 = useCssVar('--color', someEl, { initialValue: '#eee' })
*/
import { useCssVar } from '@vueuse/core'
const changeFontSize = (size: number) => {
    // 方式一
    // document.documentElement.style.getPropertyValue('--my-font-size')
    // document.documentElement.style.setProperty('--my-font-size', size + 'px')
    // 方式二
    const fontSize = useCssVar('--my-font-size')
    fontSize.value = size + 'px'
}
</script>

<style scoped>
:root {
    --my-font-size: 24px;
}
.div_box1 {
    height: 400px;
    overflow: hidden;
}
.div_pwToVw {
    width: 200pw;
    height: 100px;
    background: gray;
}
.h1_header {
    font-size: var(--my-font-size);
}
</style>
