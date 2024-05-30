/**
 * infer特点：推导泛型参数
    * 1.infer只能在extends中子语句使用
    * 2.infer协变，针对对象的属性是普通值来说，比如：T extends infer K，K是infer推断出来的，K是T的父类型
    * 3.infer逆变，针对对象的属性是函数来说，比如：T extends (infer K)[]，K是infer推断出来的，K是T的子类型
 * 
 * 总结：
    * 使用infer，技巧及思路是：要推断的目标在哪，就写在哪
    * 1.比如，是返回值就写在返回值
    * 2.是传入的泛型就写在泛型里
    * 3.是参数的类型就写在参数里
    * 4.是数组元素的类型就写在数组元素的类型里
 * 
 * 思考：
 *   1.使用场景在哪？
 * 
 * 练习：
 * extends extends extends extends
 */

//第1题--函数返回值推断
type Return<T> = T extends (...args: any[]) => infer R ? R : T;
type sum = (a: number, b: number) => number;
type concat = (a: any[], b: any[]) => any[];

let sumResult: Return<sum>;
let concatResult: Return<concat>;



//第2题--类型嵌套
//  ts里有类型推断，有递归
type PromiseType<T> = T extends Promise<infer K> ? K : T;

type pt = PromiseType<Promise<string>>;



//第3题--泛型里是个函数
type FirstArg<T> = T extends (first: infer I, ...args: any[]) => void ? I : T;

type fa = FirstArg<(name: string, age: number) => void>;




//第四题--数组形式
type ArrayType<T> = T extends (infer F)[] ? F : T;

type ItemType1 = ArrayType<[string, number]>;
type ItemType2 = ArrayType<string[]>;







//==========================================================================================
//第1题
/* type Return<T> = T extends (...args: any[]) => infer R ? R : T;
type sum = (a: number, b: number) => number;
type concat = (a: any[], b: any[]) => any[];

let sumResult: Return<sum>;
let concatResult: Return<concat>;



//第2题
//  ts里有类型推断，有递归
// type PromiseType<T> = T extends Promise<infer K> ? K : T;
type PromiseType<T> = T extends Promise<infer K> ? PromiseType<K> : T;

type pt = PromiseType<Promise<string>>;



//第3题
type FirstArg<T> = T extends (first: infer F, ...args: any[]) => any ? F : T;

type fa = FirstArg<(name: string, age: number) => void>;




//第四题
type ArrayType<T> = T extends (infer I)[] ? I : T; 

type ItemType1 = ArrayType<[string, number]>;
type ItemType2 = ArrayType<string[]>; */







/* function getSum(x: number | string, y : number | string): number | string{
    return x + y;
}

function getSum1(x: number, y : number): number{
    return x + y;
}

function getSum2(x: string, y : string): string{
    return x + y;
}

function getSum3(x: number, y : string | number): number{
    return x + y;
} */




export { };
