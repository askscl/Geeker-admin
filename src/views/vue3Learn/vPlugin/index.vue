<template>
    <div>插件开发</div>
</template>
<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from "vue"

// 练习使用star
const instance = getCurrentInstance()
// console.log("instance", instance)

instance?.proxy?.$__myLoading.show()
// setTimeout(() => {
//     instance?.proxy?.$__myLoading.hide()
// }, 3000)

// 练习使用end
</script>

<style scoped></style>
