//Partial<T：接口> 所有属性  可选
//Required<T：接口> 所有属性  必选
// Pick<T：接口,K：联合> 提取部分属性
// Exclude<T：联合,K：联合> 排除部分属性             注意：T和K 都需要是联合类型
// Omit<T：接口,K：联合> 排除部分属性 并返回新的类型   注意：T：k只能是接口，K是联合类型

interface User {
    address?: string;
    name?: string;
    age?: number;
}


//原理实现
type CoustomPartial<T> = {
    [P in keyof T]?: T[P];
}

// type PartialUser = Partial<User>;
type PartialUser = CoustomPartial<User>;


//原理实现
type CoustomRequired<T> = {
    [P in keyof T]-?: T[P];
}

// type RequiredUser = Required<User>;
type RequiredUser = CoustomRequired<User>;


//原理实现
type CoustomPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// type test1 = Pick<User, 'name' | 'age'>
type test1 = CoustomPick<User, 'name' | 'age'>;

//原理实现
// 为什么是never，因为联合类型会排除掉never
// 'a' | 'b' | 'c'  =>  never | 'b' | never;
type CoustomExclude<T, K> = T extends K ? never : T;
// type test2 = Exclude<'a' | 'b' | 'c', 'a' | 'c'>;
type test2 = CoustomExclude<'a' | 'b' | 'c', 'a' | 'c'>;
// type test21 = Exclude<User, 'name'>;

//原理实现
// Exclude Pick混合使用来实现Omit
// 1.Exclude 去排除不需要的属性
// 2.Pick 提取剩下的属性
type CoustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type test3 = Omit<User, 'name'>;

