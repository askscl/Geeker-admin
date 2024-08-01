import { localGet } from '@/utils'
import { createVNode, render, VNode, App } from 'vue'
import Loading from './Loading.vue'

export default {
    install(app: App) {
        //createVNode vue提供的底层方法 可以给我们组件创建一个虚拟DOM 也就是Vnode
        const vnode: VNode = createVNode(Loading)

        //render 把我们的Vnode 生成真实DOM 并且挂载到指定节点
        render(vnode, document.body)

        // console.log('vnode: ', vnode)
        // console.log('exposed: ', vnode.component?.exposed)

        // Vue 提供的全局配置 可以自定义
        app.config.globalProperties.$__myLoading = {
            show: () => vnode.component?.exposed?.show(), //注意函数要加括号
            hide: () => vnode.component?.exposed?.hide(),
            lg: () => vnode.component?.exposed?.lg()
            // lg: () => console.log(111111)
        }
    }
}
