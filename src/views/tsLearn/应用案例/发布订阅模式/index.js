"use strict";
//发布订阅模式
/*
    1.面试经常手写
    2.有谁在用？
        2.1 vue2.0事件总线 eventBus $on监听 $emit派发 $off
        2.2 electron     ipcRenderer  ipcMain 通讯
        2.3 DOM2 addEventListener removeEventListener
*/
class Emitter {
    constructor() {
        this.events = new Map();
    }
    once(event, callback) {
        //1.创建一个自定义函数，通过On触发，之后再通过off回收
        const cb = (...args) => {
            callback(...args);
            this.off(event, cb);
        };
        this.on(event, cb);
    }
    on(event, callback) {
        if (this.events.has(event)) {
            const callbackList = this.events.get(event);
            callbackList && callbackList.push(callback);
        }
        else {
            //否则第一次存
            this.events.set(event, [callback]);
        }
    }
    emit(event, ...args) {
        const callbackList = this.events.get(event);
        if (callbackList) {
            callbackList.forEach(fn => {
                fn(...args);
            });
        }
    }
    off(event, callback) {
        const callbackList = this.events.get(event);
        if (callbackList) {
            callbackList.splice(callbackList.indexOf(callback), 1);
        }
    }
}
const bus = new Emitter();
const fn = (b, n) => {
    console.log(b, n);
};
// bus.on('message', fn);
// bus.off('message', fn);
bus.once('message', fn);
bus.emit('message', false, 1);
bus.emit('message', false, 1);
bus.emit('message', false, 1);
bus.emit('message', false, 1);
