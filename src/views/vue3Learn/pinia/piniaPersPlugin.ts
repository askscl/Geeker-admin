/* 
    存储在sessionStorage中的数据，在页面刷新后依然存在, 关闭标签页自动删除
*/
import type { PiniaPluginContext } from 'pinia'
import { toRaw } from 'vue'

const setStorage = (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: string) => {
    /* const value = sessionStorage.getItem(key)
    if (value) {
        return JSON.parse(value)
    }
    return null */
    return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key) as string) : null
}
type Options = {
    key?: string
}

const __piniaKey__: string = '天空之城'

const piniaPersPlugin = (options: Options) => {
    return (context: PiniaPluginContext) => {
        // console.log(context)
        const { store } = context
        const myKey = `${options.key || __piniaKey__}` + store.$id
        const storeData = getStorage(myKey)
        store.$subscribe(() => {
            //只对练习的store进行持久化
            if (store.$id === 'learnStore') {
                setStorage(myKey, toRaw(store.$state))
            }
        })
        return {
            ...storeData
        }
    }
}

export default piniaPersPlugin
