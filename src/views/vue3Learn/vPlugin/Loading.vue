<template>
    <div v-if="isShow" class="loading">
        <div class="loading-content">Loading...</div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isShow = ref(false)
const show = () => {
    isShow.value = true
}
const hide = () => {
    isShow.value = false
}

//对外暴露 当前组件的属性和方法
defineExpose({
    isShow,
    show,
    hide
})
</script>

<style scoped lang="scss">
.loading {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
        font-size: 30px;
        color: #fff;
    }
    z-index: 99999;
}
</style>
