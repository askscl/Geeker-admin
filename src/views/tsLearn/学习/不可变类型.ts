/* 
题目：深度遍历属性使其变成只读的，官方提供的关键字readonly只有第一层的属性生效

思考：
    1.约束一个对象，格式要如何写？
    2.需要判断值是否为对象吗？---不需要，为什么？

注意事项：
    1.关键字readonly全为小写
    2.Record知识点翻阅??

学习：
    1.在 TypeScript 中，Record 是一个工具类型，它允许你基于给定的键和值类型创建一个新的对象类型。
        具体来说，Record<K extends keyof any, T> 创建了一个对象类型，
        其中对象的属性键是 K 类型（K 必须是可以用作对象键的类型，比如 string、number、symbol 或这些类型的字面量类型），而属性值都是 T 类型。
        
        type AgeRecord = Record<string, number>;  
    
        // 这是一个符合 AgeRecord 类型的对象  
        const ages: AgeRecord = {  
            Alice: 30,  
            Bob: 25,  
            Charlie: 35  
        };  
        
        // 以下是不符合 AgeRecord 类型的对象（因为 "David" 的值不是 number 类型）  
        const invalidAges: AgeRecord = {  
            Alice: 30,  
            Bob: 25,  
            Charlie: "35" // 错误：类型 "string" 的值不能分配给类型 "number"  
        };
        在这个例子中，AgeRecord 是一个类型，它的属性键是 string 类型，属性值是 number 类型。
        因此，ages 对象符合 AgeRecord 类型，而 invalidAges 对象则不符合，因为 "Charlie" 的值是一个字符串而不是数字。

    2.你还可以使用字面量类型或枚举类型作为键的类型，以创建更具体的对象类型：
        type Person = 'Alice' | 'Bob' | 'Charlie';  
        type PersonAgeRecord = Record<Person, number>;  
        
        const personAges: PersonAgeRecord = {  
            Alice: 30,  
            Bob: 25,  
            Charlie: 35  
        };  
        
        // 以下是不符合 PersonAgeRecord 类型的对象（因为包含了 "David" 这个不在 Person 类型中的键）  
        const invalidPersonAges: PersonAgeRecord = {  
            Alice: 30,  
            Bob: 25,  
            Charlie: 35,  
            David: 40 // 错误：类型 "David" 不在 "Person" 类型中  
        };
        在这个例子中，PersonAgeRecord 是一个类型，它的属性键必须是 'Alice'、'Bob' 或 'Charlie' 之一，而属性值是 number 类型。

*/

type DeepReadonly<T extends Record<string | symbol, any>> = {
    // readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
    readonly [K in keyof T]: DeepReadonly<T[K]>;
}

interface Obj {
    a: number;
    b: string;
    c: {
        d: number
    }
}

let obj: DeepReadonly<Obj> = {
    a: 1,
    b: '2',
    c: {
        d: 3
    }
}

// obj.a = 3;
// obj.c = 5;
// obj.c.d = 4; 
