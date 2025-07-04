/*
    需求：实现一个拖拽指令，可在父元素区域任意拖拽元素。

    思路：
        1、设置需要拖拽的元素为absolute，其父元素为relative。
        2、鼠标按下(onmousedown)时记录目标元素当前的 left 和 top 值。
        3、鼠标移动(onmousemove)时计算每次移动的横向距离和纵向距离的变化值，并改变元素的 left 和 top 值
        4、鼠标松开(onmouseup)时完成一次拖拽

    使用：在 Dom 上加上 v-draggable 即可
    <div class="dialog-model" v-draggable></div>
*/
import type { Directive } from 'vue'
interface ElType extends HTMLElement {
    parentNode: any
}
const draggable: Directive = {
    mounted: function (el: ElType) {
        el.style.cursor = 'move'
        el.style.position = 'absolute'
        el.onmousedown = function (e) {
            // pageX, pageY 鼠标在页面上的位置,pageX, pageY 是相对于整个页面的坐标，也就是从页面左上角开始计算，和浏览器是否有滚动条无关
            //  offsetLeft, offsetTop 元素相对于父元素的位置
            let disX = e.pageX - el.offsetLeft //鼠标距离元素左边的距离
            let disY = e.pageY - el.offsetTop //鼠标距离元素上边的距离
            document.onmousemove = function (e) {
                let x = e.pageX - disX
                let y = e.pageY - disY
                let maxX = el.parentNode.offsetWidth - el.offsetWidth
                let maxY = el.parentNode.offsetHeight - el.offsetHeight
                if (x < 0) {
                    x = 0
                } else if (x > maxX) {
                    x = maxX
                }

                if (y < 0) {
                    y = 0
                } else if (y > maxY) {
                    y = maxY
                }
                el.style.left = x + 'px'
                el.style.top = y + 'px'
            }
            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null
            }
        }
    }
}
export default draggable
