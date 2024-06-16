// 1.Record
// 2.ReturnType

// 1.Record
// 约束对象的key 和value的类型
// 所以接受两个泛型
// 支持嵌套

//对象的key 只能是string number symbol



type ObjKey = keyof any;
type CustomRecord<K extends ObjKey, T> = {
    [P in K]: T
}

type Key = 'name' | 'age' | 'sex'; //key一个不能少
type Value = '唱歌' | '跳舞' | '打篮球'; //value随便

const obj1: Record<Key, Value> = {
    name: '唱歌',
    age: '打篮球',
    sex: '唱歌'
}
const obj2: Record<Key, Record<Key, Value>> = {
    name: {
        name: '唱歌',
        age: '打篮球',
        sex: '唱歌'
    },
    age: {
        name: '唱歌',
        age: '打篮球',
        sex: '唱歌'
    },
    sex: {
        name: '唱歌',
        age: '打篮球',
        sex: '唱歌'
    }
}

// 2.ReturnType
// 获取函数的返回值类型

// 实现原理
type CustomReturnType<F extends Function> = F extends (...args: any[]) => infer R ? R : never;
const fn2 = () => [1, 2, 3, 'adf', true];
type arrNum = ReturnType<typeof fn2>;
type arrNum2 = CustomReturnType<typeof fn2>;