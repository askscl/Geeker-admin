/*
    infer 就是推导泛型参数（动态类型）
    infer 声明只能出现在extends子语句中
    infer 后面跟一个变量名

    infer协变
    infer逆变

    infer提取【头部、尾部】元素
    infer删除【第一个，最后一个】元素

    infer递归
*/

// 获取promise返回的参数
interface User2 {
    name: string;
    age: number
}


type PromiseType2 = Promise<User>;
type PromiseType3 = Promise<Promise<Promise<User>>>;

type GetPromiseType<T> = T extends Promise<infer U> ? GetPromiseType<U> : T;

type T = GetPromiseType<PromiseType2>;
type T2 = GetPromiseType<PromiseType3>;

//infer 协变 -- 出现在对象里
// 返回联合类型
const obj3 = {
    name: 'zhangsan',
    age: 18
}
type Bar1<T> = T extends { name: infer N, age: infer A } ? [N, A] : T;
type Bar2<T> = T extends { name: infer U, age: infer U } ? U : T;
type T3 = Bar1<typeof obj3>;
type T4 = Bar2<typeof obj3>;

// infer 逆变 -- 出现在函数的参数里
// 返回交叉类型 type a = number & string
type Bar<T> = T extends {
    a: (x: infer U) => void,
    b: (x: infer U) => void
} ? U : T;

type T5 = Bar<{
    a: (x: number) => void,
    b: (x: string) => void
}>;


// infer提取【头部、尾部】元素
type Arr = ['a', 'b', 'c'];

type First<T extends any[]> = T extends [infer First, ...any[]] ? First : [];
type a1 = First<Arr>;

type Last<T extends any[]> = T extends [...any[], infer Last] ? Last : [];
type a2 = Last<Arr>;


// infer删除【第一个，最后一个】元素
type FirstShift<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : [];
type a3 = FirstShift<Arr>;

type LastPop<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : [];
type a4 = LastPop<Arr>;

// infer递归
// 翻转数组
type ReverArr<T extends any[]> = T extends [infer First, ...infer Rest] ? [...ReverArr<Rest>, First] : T;
type a5 = ReverArr<Arr>;