function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

const [str1, str2] = swap<string>('hello', 'world');
const [num1, num2] = swap<number>(1, 2);

interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

function firstElement<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[0] : undefined;
}

const result1 = firstElement([1, 2, 3]);
const result2 = firstElement(['a', 'b', 'c']);