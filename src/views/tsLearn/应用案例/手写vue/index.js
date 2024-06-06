"use strict";
//虚拟dom简单版
class Dom {
    createElement(el) {
        return document.createElement(el);
    }
    //填充文本
    setText(el, text) {
        text ? el.textContent = text : ''; //解决undefined类型不能赋值给null类型
    }
    //渲染函数
    render(data) {
        const root = this.createElement(data.tag);
        if (data.childrens && Array.isArray(data.childrens)) {
            data.childrens.forEach(item => {
                const child = this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    }
}
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        // 虚拟dom 就是通过js去渲染真实的dom
        const data = {
            tag: "div",
            childrens: [
                {
                    tag: "section",
                    text: '我是子节点1'
                },
                {
                    tag: "section",
                    text: '我是子节点2'
                },
                {
                    tag: "section",
                    text: '我是子节点3'
                },
            ]
        };
        const app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
    }
}
new Vue({
    el: '#app'
});
