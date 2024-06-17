/* 
    类型守卫

    1.类型收缩 | 类型收窄

    2.类型谓词 | 自定义守卫

*/


// typeof是有缺陷的， 如数组 对象 null 都返回object
const isString = (str: any) => typeof str === 'string';
const isArr = (arr: any) => arr instanceof Array;

/*
    题目： 
        实现一个函数，该函数可以传入任何类型
        但是如果是object 就检查里面的属性值，
        如果里面的属性是number就取两位小数，
        如果是string就去除左右空格
        如果是函数就执行
    问题：
        1.发现没有任何代码提示，原因是any类型
            1.1 自定义守卫 它只能接受布尔值
            1.2 语法规则 参数 is 类型
                ---这个函数如果返回true，那么这个参数就是你想要的类型
            
        2.properties of undefined (reading 'name')
            2.1 node环境是undefined
            2.2 浏览器环境是window
            2.3 原因函数独立调用，this 指向window

*/

//({}) 是Object.prototype的简写
const isObj = (arg: any) => ({}).toString.call(arg) === '[object Object]';
const isNum = (num: any): num is number => typeof num === 'number';
const isStr = (str: any): str is string => typeof str === 'string';
const isFn = (fn: any): fn is Function => typeof fn === 'function';
const fn22 = (data: any) => {
    if (isObj(data)) {
        let val;
        Object.keys(data).forEach(key => {
            val = data[key];
            if (isNum(val)) {
                data[key] = val.toFixed(2);
            }
            if (isStr(val)) {
                data[key] = val.trim();
            }
            if (isFn(val)) {
                data[key]();
            }

        })
    }
}

const obj22 = {
    name: ' zhangsan ',
    age: 18.2222,
    fn: function () {
        console.log(this);
        return this.name
    }
}

fn22(obj22);
// console.log(obj22);

const type = typeof null;
console.log(type);