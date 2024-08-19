<template>
    <div>
        <el-radio-group v-model="boxColor">
            <el-radio label="gray">灰色</el-radio>
            <el-radio label="green">绿色</el-radio>
        </el-radio-group>
        <div class="box">{{ boxColor }}</div>
        <hr />
        <Father />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, readonly } from 'vue'
import Father from './components/Father.vue'

const boxColor = ref<string>('gray')

// provide('boxColor', readonly(boxColor))
provide('boxColor', boxColor)
</script>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: v-bind(boxColor);
}
</style>
