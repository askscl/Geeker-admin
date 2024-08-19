<template>
    <div>
        <h4>父组件</h4>
        <div class="box"></div>
        <hr />
        <Child></Child>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, inject } from 'vue'
import Child from './components/Child.vue'
const appColor = inject('boxColor')
</script>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: v-bind('appColor');
}
</style>
