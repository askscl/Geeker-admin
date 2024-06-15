//发布订阅模式
/* 
    1.面试经常手写 
    2.有谁在用？
        2.1 vue2.0事件总线 eventBus $on监听 $emit派发 $off
        2.2 electron     ipcRenderer  ipcMain 通讯
        2.3 DOM2 addEventListener removeEventListener
*/

/* 

    const cb = () => {
        console.log('ssfdf')
    };

    document.addEventListener('ssfdf', cb, {
        once: true
    });

    document.removeEventListener('ssfdf', cb);

    const e = new Event('ssfdf');
    document.dispatchEvent(e);
    document.dispatchEvent(e);
    document.dispatchEvent(e); 

*/


//once on emit off 订阅中心Map<事件的名称，[Function]订阅者集合>

interface Iemitter {
    events: Map<string, Function[]>;
    once: (event: string, callback: Function) => void; //触发一次
    on: (event: string, callback: Function) => void; //订阅
    emit: (event: string, ...args: any[]) => void; //派发
    off: (event: string, callback: Function) => void; //取消订阅
}

class Emitter implements Iemitter {
    events: Map<string, Function[]>;
    constructor() {
        this.events = new Map();
    }
    once(event: string, callback: Function) {
        //1.创建一个自定义函数，通过On触发，之后再通过off回收
        const cb = (...args: any[]) => {
            callback(...args);
            this.off(event, cb);
        }
        this.on(event, cb);

    }
    on(event: string, callback: Function) {
        if (this.events.has(event)) {
            const callbackList = this.events.get(event);
            callbackList && callbackList.push(callback);

        } else {
            //否则第一次存
            this.events.set(event, [callback]);
        }
    }
    emit(event: string, ...args: any[]) {
        const callbackList = this.events.get(event);
        if (callbackList) {
            callbackList.forEach(fn => {
                fn(...args);
            });
        }
    }
    off(event: string, callback: Function) {
        const callbackList = this.events.get(event);
        if (callbackList) {
            callbackList.splice(callbackList.indexOf(callback), 1);
        }
    }
}

const bus = new Emitter();
const fn = (b: boolean, n: number) => {
    console.log(b, n);
}
// bus.on('message', fn);
// bus.off('message', fn);
bus.once('message', fn);

bus.emit('message', false, 1);
bus.emit('message', false, 1);
bus.emit('message', false, 1);
bus.emit('message', false, 1);
