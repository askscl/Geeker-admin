/* 
题目：深度遍历属性使其变成只读的，官方提供的关键字Readonly只有第一层的属性生效

思考：
    1.约束一个对象，格式要如何写？
    2.需要判断值是否为对象吗？---不需要，为什么？

注意事项：
    1.关键字readonly全为小写
    2.Record知识点翻阅
*/

type DeepReadonly<T extends Record<string | symbol, any>> = {
    // readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
    readonly [K in keyof T]: DeepReadonly<T[K]>;
}

interface Obj {
    a: number;
    b: string;
    c: {
        d: number
    }
}

let obj: Readonly<Obj> = {
    a: 1,
    b: '2',
    c: {
        d: 3
    }
}
// obj.a = 3;
obj.c.d = 4; //怎么没生效？