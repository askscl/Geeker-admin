/* 
    存储在sessionStorage中的数据，在页面刷新后依然存在, 关闭标签页自动删除
*/
import type { PiniaPluginContext } from 'pinia'
import { toRaw } from 'vue'

const setStorage = (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: string) => {
    return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key) as string) : null
}

type Options = {
    key?: string
}

const __piniaKey__: string = '天空之城'

//利用柯里化拿到两个参数，一个options，一个PiniaPluginContext
const piniaPersPlugin = (options: Options) => {
    return (context: PiniaPluginContext) => {
        // console.log(context)
        const { store } = context
        const myKey = `${options.key || __piniaKey__}` + store.$id

        const storeData = getStorage(myKey) // 初始化时，从sessionStorage中获取数据

        // 数据变化时，更新sessionStorage中的数据
        store.$subscribe(() => {
            //只对练习的store进行持久化
            if (store.$id === 'learnStore') {
                // 更新数据，toRaw()将响应式数据转为普通对象
                setStorage(myKey, toRaw(store.$state))
            }
        })
        // 如果sessionStorage中存在数据，则赋值给store
        return {
            ...storeData
        }
    }
}

export default piniaPersPlugin
