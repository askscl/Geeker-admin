/* 
题目：给柯里化的函数加上ts类型标注

思路：
1.传入的函数的参数有三种情况
    1.1 () => R，没有参数的
    1.2 (x) => R, 拥有一个参数的
    1.3 (x) => R, 拥有多个参数的，每传入一个参数需要返回一个函数，直到最后 一个参数为止，则运行函数
        1.3.1当走到第二个参数时，只需递归调用本身

注意事项：
1.如何表示函数的入参：...args
2.如何利用infer
3.如何表示剩余参数：...infer REST   为什么?
4.如何表示空数组： A extends []
5.用never表示终止条件

扩展：
1.柯里化如何实现？
*/

type Curried<A, R> = 
      A extends []? () => R 
    : A extends [infer ARG] ? (param: ARG) => R 
    : A extends [infer ARG, ...infer REST]? (param: ARG) =>Curried<REST, R> 
    : never;


declare function curry<A extends any[], R>(fn: (...args: A) => R): Curried<A, R>;

function sum(a: string, b: number, c:object){
    return 12313;
}

const currySum = curry(sum);

currySum('asdf')(2)({});














//函数柯里化
/* function curry(fn: Function){
    return function curry1(...args1: any[]){
        if(args1.length >= fn.length){
            return fn.call(null, ...args1)
        }else{
            return function(...args2: any[]){
                return curry1.apply(null, [...args1, ...args2])
            }
        }
    }
} */