import { defineStore } from 'pinia'

type User = {
    name: string
    age: number
}

const result: User = {
    name: '小红',
    age: 20
}

const Login = (): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result)
        }, 800)
    })
}

export const useLearnStore = defineStore('learnStore', {
    state: () => {
        return {
            current: 1,
            name: '小明',
            age: 18,
            user: <User>{}
        }
    },
    // 类似computed ：修饰一些值
    getters: {
        // 相互调用不是很好，会产生意外的undefine
        newName(): string {
            return this.name + '的年龄是：' + `${this.getUserAge}`
        },
        getUserAge(): number {
            return this.user.age
        }
    },
    // 类似methods ：修改state中的值， 可以做同步，异步操作
    actions: {
        setCurrent(num: number) {
            this.current = num
        },
        /* setUser() {
            this.user = result
        }, */
        async setUser() {
            this.user = await Login()
            this.setName('小绿')
        },
        setName(name: string) {
            this.name = name
        }
    }
})
