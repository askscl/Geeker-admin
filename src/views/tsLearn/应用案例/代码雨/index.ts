/* 
2D代码雨动画
*/
const canvas: HTMLCanvasElement = document.querySelector('#myDraw') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

const str: string[] = 'XMZSWZS010101'.split('');
const Arr = Array(Math.ceil(canvas.width / 10)).fill(0);
console.log(Arr);

const rain = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; //填充背景颜色
    ctx.fillRect(0, 0, canvas.width, canvas.height); //背景
    ctx.fillStyle = '#0f0'; //文字绿色
    Arr.forEach((item, index) => {

        //fillText的作用是：绘制文字str[n]，x坐标每次递增10倍，y 坐轴每次递增 10
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);

        //添加随机数让字符随机出现不至于那么平整
        /* 
            1.超出屏幕高度，回归为0；
            2.item > 10000 * Math.random():这是啥作用？:数字大于10000以内的随机数，就回归为0
            3.否则数字由0开始一直在递增
        */
        Arr[index] = item >= canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
    });
    // console.log(Arr);
};

setInterval(rain, 40);

