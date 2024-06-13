// 前提配置：
// "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
// "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */

/* 
    1.类装饰器 ClassDecorator target 构造函数
    2.属性装饰器 PropertyDecorator
    3.参数装饰器 ParameterDecorator
    4.方法装饰器 MethodDecorator
    5.装饰器工厂: 给装饰器传参
    6.import 'reflect-metadata' //pnpm i reflect-metadata
    7.axios  //pnpm i axios
*/

import axios from "axios";
import 'reflect-metadata';

//不去破坏原有的结构, 给类添加属性和方法
const Base = (name: string) => {
    //这里的target是构造函数
    const fn: ClassDecorator = (target) => {
        // console.log(target);
        target.prototype.aa = name;
        target.prototype.fn = () => {
            // console.log(1);
        }
    }
    return fn;
}

const Get = (url: string) => {
    //这里的target不是构造函数，而是原型对象; key是修饰的函数名; decorators是描述符
    const fn: MethodDecorator = (target, key, deccriptor: PropertyDescriptor) => {
        // console.log(target, key, deccriptor);
        const reflectKey = Reflect.getMetadata('key', target);
        axios.get(url).then(res => {
            deccriptor.value(reflectKey ? res.data[reflectKey] : res.data)
        })
    }
    return fn
}

const Result = () => {
    //target原型对象；key; 函数名, index: 参数索引
    const fn: ParameterDecorator = (target, key, index) => {
        console.log(target, key, index);
        //第一个参数，任意取的key名，第二个参数是要映射保存的key名
        Reflect.defineMetadata('key', 'result', target);

    }
    return fn;
}

//target原型对象；key：属性名
const Name: PropertyDecorator = (target, key) => {
    console.log(target, key)
}


//类装饰器
@Base('xiao yu')
class Http {
    //属性装饰器
    @Name
    address: string;
    constructor() {
        this.address = '中国';
    }

    //方法装饰器
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList(@Result() data: any) { //参数装饰器
        // console.log(data.result.list)
        // console.log(data.list)

    }

    // @Post()
    create() {

    }
}
const http = new Http() as any;
// console.log(http.aa);












