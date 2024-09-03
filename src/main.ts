import { createApp } from 'vue'
import App from './App.vue'
// reset style sheet
import '@/styles/reset.scss'
// CSS common style sheet
import '@/styles/common.scss'
// iconfont css
import '@/assets/iconfont/iconfont.scss'
// font css
import '@/assets/fonts/font.scss'
// element css
import 'element-plus/dist/index.css'
// element dark css
import 'element-plus/theme-chalk/dark/css-vars.css'
// custom element dark css
import '@/styles/element-dark.scss'
// custom element css
import '@/styles/element.scss'
// svg icons
import 'virtual:svg-icons-register'
// element plus
import ElementPlus from 'element-plus'
// element icons
import * as Icons from '@element-plus/icons-vue'
// custom directives
import directives from '@/directives/index'
// vue Router
import router from '@/routers'
// vue i18n
import I18n from '@/languages/index'
// pinia store
import pinia from '@/stores'
// errorHandler
import errorHandler from '@/utils/errorHandler'
//练习使用
import Loading from './views/vue3Learn/vPlugin/Loading'
import myI18 from './views/vue3Learn/vPlugin/myI18'
import piniaPersPlugin from './views/vue3Learn/pinia/piniaPersPlugin'

const app = createApp(App)

//练习使用star--手写vue插件
type Lod = {
    show: () => void
    hide: () => void
    lg: () => void
}

declare module 'vue' {
    export interface ComponentCustomProperties {
        $__myLoading: Lod
        $translate: (key: string) => string
    }
}

app.use(Loading)
app.use(myI18, {
    greetings: {
        hello: '你好'
    }
})

// 自己开发的持久化插件，练习结束可注释
pinia.use(piniaPersPlugin({ key: '开天辟地' }))
//练习使用end

// 自定义全局函数及变量star
declare module 'vue' {
    export interface ComponentCustomProperties {
        $myVar: string
        $myFilters: {
            format<T>(str: T): string
        }
        $myMethod: (str: string) => string
    }
}
app.config.globalProperties.$myVar = '我是全局变量'
app.config.globalProperties.$myFilters = {
    format<T>(str: T) {
        return `jix-${str}`
    }
}
app.config.globalProperties.$myMethod = (str: string) => {
    return `hello-${str}`
}
// 自定义全局函数及变量end

app.config.errorHandler = errorHandler

// register the element Icons component
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons])
})

app.use(ElementPlus).use(directives).use(router).use(I18n).use(pinia).mount('#app')
