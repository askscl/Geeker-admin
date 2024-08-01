<template>
    <div>
        <div>插件开发</div>
        <div>插件开发2: {{ $translate('greetings.hello') }}</div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from 'vue'

// 练习使用star
const instance = getCurrentInstance()
// console.log('instance', instance?.proxy?.$__myLoading)
// console.log("instance", instance)
// instance?.proxy?.$__myLoading.lg()
instance?.proxy?.$__myLoading.show()

setTimeout(() => {
    instance?.proxy?.$__myLoading.hide()
}, 1500)

// 练习使用end
</script>

<style scoped></style>
