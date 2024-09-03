// shadom用来创建一个独立的dom环境，隔离样式--沙箱隔离样式
//微前端的js用代理proxy隔离，样式用shadom隔离
class Btn extends HTMLElement {
    constructor() {
        super();

        // 表示 shadow DOM 子树的根节点。
        const shaDom = this.attachShadow({ mode: 'open' });

        // 方式一
        /* this.p = this.h('p');
        this.p.innerText = 'hello world';
        this.p.setAttribute('style', 'color: red'); 
        shaDom.appendChild(this.p);
        */
        //方式二
        this.template = this.h('template');
        this.template.innerHTML = `
            <style>
                p {
                    color: red;
                }
            </style>
            <p>hello world tempale</p>
        `;
        shaDom.appendChild(this.template.content.cloneNode(true));

    }

    // 创建元素
    h(el) {
        return document.createElement(el);
    }

    // 生命周期
    //当自定义元素第一次被连接到文档 DOM 时被调用。
    connectedCallback() {
        console.log('我已经插入了！！！嗷呜')
    }

    //当自定义元素与文档 DOM 断开连接时被调用。
    disconnectedCallback() {
        console.log('我已经断开了！！！嗷呜')
    }

    //当自定义元素被移动到新文档时被调用
    adoptedCallback() {
        console.log('我被移动了！！！嗷呜')
    }
    //当自定义元素的一个属性被增加、移除或更改时被调用
    attributeChangedCallback() {
        console.log('我被改变了！！！嗷呜')
    }
}

window.customElements.define('btn-element', Btn);