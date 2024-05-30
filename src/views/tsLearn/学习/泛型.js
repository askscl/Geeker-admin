// 1.函数使用泛型
//简单使用
function test(x, y) { return [x, y]; }
test(1, 2);
test(1, 2);
test('a', 'b');
test(false, true);
//多个泛型
function getArr(value1, value2) {
    return [value1, value2];
}
var arr = getArr('jack', 123.321);
console.log('arr', arr);
console.log(arr[0].split(''));
console.log(arr[1].toFixed(2));
var a = true;
var b = undefined;
var c = null;
var d = 'abc';
var blue = /** @class */ (function () {
    function blue() {
        this.msg = '111';
    }
    return blue;
}());
var data = {
    msg: false
};
//4类class使用泛型 
var Methods = /** @class */ (function () {
    function Methods(defaultValue) {
        this.defaultValue = defaultValue;
    }
    Methods.prototype.sayHi = function (msg) {
        console.log(msg, this.defaultValue);
    };
    return Methods;
}());
var m1 = new Methods(100);
m1.sayHi(100);
var m2 = new Methods('abc');
m2.sayHi('abc');
function getLength(x) {
    return x.length;
}
console.log(getLength('aaaaaa'));
console.log(getLength([123, 22, 33]));
// console.log(getLength(123));
// 5.2定义一个函数，传入对象和key, 返回value
function getVal(obj, key) {
    return obj[key];
}
var objtest = {
    name: 'blue',
    age: 15
};
console.log(getVal(objtest, 'age'));
