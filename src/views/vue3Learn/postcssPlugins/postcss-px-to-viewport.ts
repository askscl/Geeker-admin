// postcss 的插件 vite内置了postcss 无需安装
import { Plugin } from "postcss"
interface Options {
    unitToConvert?: string
    viewportWidth?: number
    unitPrecision?: number
}
const Options = {
    unitToConvert: 'pw', // 要转化的单位
    viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
    unitPrecision: 2, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
}
export const PostcssPxToViewport = (options: Options = Options): Plugin => {
    const opt = Object.assign({}, Options, options)
    return {
        postcssPlugin: 'postcss-px-to-viewport',
        // 钩子函数
        Declaration(node) {
            // console.log(node.prop, node.value);
            // pw 转换成vw
            // 设计稿750px
            // if (node.value.includes('pw')) {
            if (node.value.includes(opt.unitToConvert)) {

                const num = parseFloat(node.value) //考虑到有小数
                node.value = ((num / opt.viewportWidth) * 100).toFixed(opt.unitPrecision) + 'vw'

            }

        }

    }
}