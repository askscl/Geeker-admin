// shadom用来创建一个独立的dom环境，隔离样式
//微前端的js用代理proxy隔离，样式用shadom隔离
class Btn extends HTMLElement {
    constructor() {
        super();
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
    // 当元素被插入到文档中时，会调用这个方法
    connectedCallback() {
        console.log('connectedCallback');
    }
    // 当元素从文档中移除时，会调用这个方法
    disconnectedCallback() {
        console.log('disconnectedCallback');
    }
    // 当自定义元素被移动到新文档时被调用
    adoptedCallback() {
        console.log('adoptedCallback');
    }
    // 当元素的属性发生变化时，会调用这个方法
    attributeChangedCallback() {
        console.log('attributeChangedCallback');
    }
}

window.customElements.define('btn-element', Btn);