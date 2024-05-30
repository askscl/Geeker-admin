/* 
题目：
对 addImpl('string', 'boolean', 'number', (a, b, c) => {}); 进行类型标注
1.a,b,c与左边的类型一一对应

考点：
    1.什么时候使用泛型--约束类型之间的关系的时候

思考：
    1.用declare定义的函数类型，需要写{}吗？---不需要
    2.剩余参数的表现形式（语法如何写）?--------首先这玩意是一个数组
        2.1---是...args: any[] 这样？
    3. ...JSTypeName[] 可以表示'number','string','boolean'等?
        3.1字符串数组展开， 不应该用...string[]   这样表示吗？
        3.2为何只需要替换string为JSTypeName就可以改变数组里面的值？
    4.如何将左边的参数列表，与右边的函数参数列表对应起来
        4.1使用泛型，如何使用？
            4.1.1类型别名或者函数名的入口处写上 T extends JSTypeName[];---注意有个中括号
            4.1.2前半段直接 用...T替换
            4.1.3后半段用新写的type别名替换----这里是全题的最难点！！！！！！！！！


注意事项：
    1.

*/

type jsTypeMap = {
    'string': string,
    'number': number,
    'boolean': boolean
}

type JSTypeName = keyof jsTypeMap;
// type JSTypeName = 'string' | 'number' | 'boolean' | 'object' | 'function' | 'symbol' | 'undefined' | 'bigint';



// 这边不是一个数组吗?---为何这样可以表示一个数组？
type argsType<T extends JSTypeName[]> = {
    [K in keyof T]: jsTypeMap[T[K]]
};

declare function addImpl<T extends JSTypeName[]>(
    ...args: [
        ...T,
        (...args: argsType<T>) => any
    ]): void;

addImpl('number', 'boolean', 'number', (a, b, c) => { });

