//1.对象混入：合并 A对象 B对象
//2.类的混入：A类 B类合并到一起
namespace MinxinTest {


    interface A {
        age: number
    }

    interface B {
        name: string
    }

    const a: A = {
        age: 18
    }

    const b: B = {
        name: '小洪'
    }

    //1.扩展运算符  浅拷贝 返回新的类型
    const c = { ...a, ...b };
    //2.Object.assign()  浅拷贝 返回交叉类型
    const c2 = Object.assign({}, a, b);

    //3.nodejs18以上 深拷贝
    // const c3 = structuredClone(a);

    //==================================================
    //类的混入
    //插件类型的混入
    class Logger {
        log(msg: string) {
            console.log(msg);
        }
    }

    class Html {
        render() {
            console.log('render')
        }
    }

    class App {
        run() {
            console.log('run')
        }
    }

    type Custructor<T> = new (...args: any[]) => T

    function pluginMinxins<T extends Custructor<App>>(Base: T) {
        return class extends Base {
            private Logger = new Logger();
            private Html = new Html();
            constructor(...args: any[]) {
                super(...args);
                this.Logger = new Logger()
                this.Html = new Html();
            }

            run(): void {
                this.Logger.log('run');
            }
            render() {
                this.Logger.log('render');
                this.Html.render();
            }

        }
    }

    const mixins = pluginMinxins(App);
    const app = new mixins();
    app.run();
    app.render();






}