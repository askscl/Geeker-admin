/* 
本质：
    1.类型安全：保证成员始终可用
    2.子类型才能赋值给父类型
        2.1小 =》大(本质是属性多的  给  属性少的 赋值， 只能多不能少，这样保证了类型安全)
        2.2给: 小
           收：大

*/

interface Fans {
    call: any;
}

interface IKun extends Fans {
    sing: any;
    dance: any;
    basketball: any;
}

interface SuperIKun extends IKun {
    rap: any;
}

//第一题：--协变
let fans: Fans = {
    call: ''
};

//报错原因：将父类型赋值给 子类型了
// let ikun1: IKun = fans;


//第二题：--协变
let ikun: IKun = {
    sing: '',
    dance: '',
    basketball: '',
    call: ''
};

let fans2: Fans = ikun; //子类型赋值给父类型


//测试--孙赋值给子类型
let superIKun: SuperIKun = {
    sing: '',
    dance: '',
    basketball: '',
    call: '',
    rap: ''
}
let ikun2: IKun = superIKun;


//第三题：--逆变（针对函数的参数【参数从左边往右边传】来说）
type Transform = (x: IKun) => IKun;
// type SubTransform = (x: SuperIKun) => SuperIKun;
type SubTransform = (x: Fans) => SuperIKun;

const subTransform: SubTransform = (x) => {
    return x as any;
}
const transform: Transform = subTransform;
transform(ikun);