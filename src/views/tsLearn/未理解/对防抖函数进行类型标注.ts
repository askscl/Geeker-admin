/* 

fn.apply(this, args)，报错未解决

思路：




思考：
    1.怎么标注？----------------------------------------这是考对函数的标注
    2.在哪标注？----------------------------------------对整个防抖函数进行标注
    3.使用哪个关键字？
        3.1. type和 declare的区别及使用场景--------------使用declare，为什么？
        3.2. 扩展： interface 的区别及使用场景
    4.标注后的预期是什么？-------------------------------(原函数的参数列表) => void
    5.如何给入参标注
        5.1提示参数类型必需是数组？-----------------------A extends any[]
*/


// type Debounce = (fn: Function, delay: number) => Function;//错误示范
declare function debounce<A extends any[], R>(fn: (...args: A) => R, duration?: number): (...args: A) => void;


function handler(fn: () => void, a: number) {
    let timer: any = null;
    return function (...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            // fn.apply(this, args);
        }, 1000);
    };
}

const dHandler = debounce(handler, 1000);
// dHandler([]);