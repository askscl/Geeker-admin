import type { App } from 'vue'

//自定义国际化翻译
export default {
    install: (app: App, options: any) => {
        app.config.globalProperties.$translate = (key: string) => {
            return key.split('.').reduce((o, i) => {
                if (o) return o[i]
            }, options)
        }
    }
}
