<template>
    <div :class="$style.red">我是内容</div>
    <div :class="[zzK.green, zzK.border]">我是内容2</div>
</template>

<script setup lang="ts">
import { ref, reactive, useCssModule } from 'vue'
const myStyle = useCssModule('zzk')
//一般用于TSX  和 render  函数 居多
</script>

<style module>
.red {
    color: red;
}
</style>

<style module="zzK">
.green {
    color: green;
}
.border {
    border: 1px solid green;
}
</style>
