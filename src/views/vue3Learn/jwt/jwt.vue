<template>
    <div>
        <h2>jwt鉴权练习</h2>
        <el-button type="primary" v-has-show="'shop:create'">创建</el-button>
        <el-button type="primary" v-has-show="'shop:edit'">编辑</el-button>
        <el-button type="primary" v-has-show="'shop:delete'">删除</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Directive } from 'vue'

// permission
sessionStorage.setItem('userId', '911')

// mock后台返回的数据
const permission = [
    // '用户id:页面:按钮',
    '911:shop:create',
    '911:shop:edit',
    '911:shop:delete'
]
const userId = sessionStorage.getItem('userId') as string
const vHasShow: Directive<HTMLElement, string> = (el, binding) => {
    if (!permission.includes(userId + ':' + binding.value)) {
        el.style.display = 'none'
    }
}
</script>

<style scoped></style>
