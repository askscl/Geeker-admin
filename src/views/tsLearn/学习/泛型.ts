// 1.函数使用泛型

// import { Options } from "element-plus";

//简单使用
function test<T>(x: T, y: T): T[] { return [x, y] }

test<number>(1, 2);
test(1, 2);
test('a', 'b');
test(false, true);

//多个泛型
function getArr<K = number, V = string>(value1: K, value2: V): [K, V] {
    return [value1, value2]
}

const arr = getArr<string, number>('jack', 123.321);
console.log('arr', arr);

console.log(arr[0].split(''));
console.log(arr[1].toFixed(2));

//2.类型别名type使用泛型
type A<T> = T;

let a: A<boolean> = true;
let b: A<undefined> = undefined;
let c: A<null> = null
let d: A<string> = 'abc';

//3接口interface 使用泛型
interface IBlue<T> {
    msg: T
}

class blue implements IBlue<string>{
    msg: string = '111';
}

let data: IBlue<boolean> = {
    msg: false
}

//4类class使用泛型 
class Methods<T>{
    defaultValue: T;
    constructor(defaultValue: T) {
        this.defaultValue = defaultValue
    }
    sayHi(msg: T) {
        console.log(msg, this.defaultValue)
    }
}

const m1 = new Methods<number>(100);
m1.sayHi(100);

const m2 = new Methods<string>('abc');
m2.sayHi('abc');

//5.泛型结束

// 5.1定义一个函数，返回参数的length
interface ILength {
    length: number
}

function getLength<T extends ILength>(x: T): number {
    return x.length;
}

console.log(getLength('aaaaaa'));
console.log(getLength([123, 22, 33]));
// console.log(getLength(123));

// 5.2定义一个函数，传入对象和key, 返回value
function getVal<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let objtest = {
    name: 'blue',
    age: 15
}

console.log(getVal(objtest, 'age'));

// 写一个小工具，让 interface 的每一个属性都变成可选属性（?:）
//key in keyof: 遍历键
interface IPer {
    name: String;
    age: number;
    sex: string;
}

type Options<T extends object> = {
    [key in keyof T]?: T[key]
}
type a = Options<IPer>;

type ReadonlyTest<T extends object> = {
    readonly [key in keyof T]: T[key]
}
type b = ReadonlyTest<IPer>;


