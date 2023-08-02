/**
 * 注意事项：
 * 1.类型的属性写法： T[K]
 * 2.去除属性为Symbol的语法： string & keyof T
 * 3.TS一样可以使用``，模版字符串
 * 4.声明函数的类型：使用declare关键字
 */

type Watcher<T> = {
    on<K extends string & keyof T>(
        eventName: `${K}Changed`,
        callback: (oldValue: T[K], newValue: T[K]) => void
    ): void;
}


declare function watch<T>(obj: T): Watcher<T>;

const personWatcher = watch({
    firstName: 'Saoirse',
    lastName: 'Ronan',
    age: 26,
    level: 2
});
personWatcher.on(
    'firstNameChanged',
    (oldValue, newValue) => {

    }
);