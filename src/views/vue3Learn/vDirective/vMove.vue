<template>
    <div class="div_box" v-move>
        <h2 class="header"></h2>
        <div>内容：思考如何控制边界值？</div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, Directive, DirectiveBinding } from 'vue'
const vMove: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding<void>) => {
    const moveElement: HTMLHRElement = el.querySelector('.header') as HTMLHRElement
    // console.log(moveElement)
    const mouseDown = (e: MouseEvent) => {
        // e.clientX是鼠标点击的位置
        // el.offsetLeft是元素距离左边的距离
        // x得到  鼠标点击的位置  距离   元素左边的距离
        let x = e.clientX - el.offsetLeft
        let y = e.clientY - el.offsetTop
        const mouseMove = (e: MouseEvent) => {
            // console.log(e)
            el.style.left = e.clientX - x + 'px'
            el.style.top = e.clientY - y + 'px'
        }
        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mouseMove)
        })
    }
    moveElement.addEventListener('mousedown', mouseDown)
}
</script>

<style scoped lang="scss">
.div_box {
    width: 200px;
    height: 200px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid black;
    .header {
        width: 100%;
        height: 20px;
        background-color: black;
        margin: 0;
    }
}
</style>
