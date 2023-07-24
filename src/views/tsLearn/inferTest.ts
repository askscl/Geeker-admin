type Return<T> = T extends (...args: any[]) => infer R ? R : T;
type sum = (a: number, b: number) => number;
type concat = (a: any[], b: any[]) => any[];

let sumResult: Return<sum>;
let concatResult: Return<concat>;

/* function getSum(x: number | string, y : number | string): number | string{
    return x + y;
}

function getSum1(x: number, y : number): number{
    return x + y;
}

function getSum2(x: string, y : string): string{
    return x + y;
}

function getSum3(x: number, y : string | number): number{
    return x + y;
} */

export {};
