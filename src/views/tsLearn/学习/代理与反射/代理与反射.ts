//proxy 代理13个方法 参数 一模一样
//Reflect 反射 13个方法 参数 一模一样
// mobx observable(观察者模式)  ： mobx类似vuex

/*
    const person = {
        name: "why",
        age: 18,
        height: 1.88,
    };

    //proxy 支持对象 数组 函数 Set Map
    const personProxy = new Proxy(person, {
        get() {

        },
        set(target, key, value, receiver) {
            return true
        },
        //拦截函数调用
        apply() {

        },
        //拦截in操作符
        has() {

        },
        //   拦截for in
        ownKeys() {

        },
        //拦截new操作符
        construct() {

        },
        //拦截删除的操作
        deleteProperty(target, p) {

        },
    });
*/


//代理反射练习
/*
    const person = {
        name: "why",
        age: 24,
        height: 1.88,
    };
    console.log(person.name);
    console.log(Reflect.get(person, 'name', person));
    console.log(Reflect.set(person, 'name', '大大', person));
    console.log(person.name);

    const personProxy = new Proxy(person, {
        get(target, key, receiver) {
            if (target.age <= 18) {
                return Reflect.get(target, key, receiver)
            } else {
                return "小w成年了"
            }
        }
    });

    console.log(personProxy.age);
*/

//observable练习

const list: Set<Function> = new Set();

const autoRun = (cb: Function) => {
    if (!list.has(cb)) {
        list.add(cb);
    }
}
const observable = <T extends object>(params: T) => {
    return new Proxy(params, {
        set(target, key, value, receiver) {
            list.forEach(fn => fn());
            return Reflect.set(target, key, value, receiver)
        }
    });

}

const personProxy = observable({
    name: "why",
    age: 24,
    height: 1.88,
});

autoRun(() => {
    console.log('有变化了');
});

personProxy.name = "小w";
personProxy.name = "小w";



