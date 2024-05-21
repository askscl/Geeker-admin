/* 
思考：
1.联合类型只能读取 公共的属性？--因为联合的子类型，如果读取各自私有的属性，其它的子类型没有
2.如何理解
    2.1联合类型理解为 “或”
    2.2交叉类型理解为 "且"
3.袁老师为何理解为 并集和 交集？
4.为何说 并集 和 交集 是相对于值来说？
    4.1值 又是指的哪个值？---值指的是子类型

*/


//联合类型
type U = {
    a: number;
    b: number;
} | {
    a: number;
    c: number;
};

const u: U = {
    a: 1,
    b: 2,
    c: 3
}

u.a;
// u.b;//为什么报错？---
// u.c;


//交叉类型
type I = {
    a: number;
    b: number;
} & {
    a: number;
    c: number;
};

//为什么报错？
const i: I = {
    a: 1,
    b: 2,
    c: 3
};




// | 和 & 运算符是如何展开的
type test1 = 'a' | 'b' | 1 & string;
//等价于
type test2 = ('a' & string) | ('b' & string) | (1 & string);
//交叉类型常用技巧，用于约束T的类型，针对属性名的约束
type test3<T> = string & keyof T;





