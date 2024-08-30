import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { resolve } from "path";
import { wrapperEnv } from "./build/getEnv";
import { createProxy } from "./build/proxy";
import { createVitePlugins } from "./build/plugins";
import pkg from "./package.json";
import dayjs from "dayjs";
import { PostcssPxToViewport } from "./src/views/vue3Learn/postcssPlugins/postcss-px-to-viewport";
// css.postcss配置：官网搜css.preprocessorOptions

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};

// @see: https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const root = process.cwd(); //获取项目根目录
    const env = loadEnv(mode, root);
    const viteEnv = wrapperEnv(env); // 获取环境变量

    return {
        base: viteEnv.VITE_PUBLIC_PATH, // /
        root,
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
                "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
            }
        },
        define: {
            __APP_INFO__: JSON.stringify(__APP_INFO__)
        },
        css: {
            postcss: {
                plugins: [PostcssPxToViewport()]
            },
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/styles/var.scss";`
                }
            }
        },
        server: {
            host: "0.0.0.0",
            port: viteEnv.VITE_PORT, //8848
            open: viteEnv.VITE_OPEN, //true
            cors: true,
            // Load proxy configuration from .env.development
            proxy: createProxy(viteEnv.VITE_PROXY)
        },
        plugins: createVitePlugins(viteEnv),
        esbuild: {
            pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
        },
        build: {
            outDir: "dist",
            minify: "esbuild",
            // esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
            // minify: "terser",
            // terserOptions: {
            // 	compress: {
            // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
            // 		drop_debugger: true
            // 	}
            // },
            // 禁用 gzip 压缩大小报告，可略微减少打包时间
            reportCompressedSize: false,
            // 规定触发警告的 chunk 大小
            chunkSizeWarningLimit: 2000,
            rollupOptions: {
                output: {
                    // Static resource classification and packaging
                    chunkFileNames: "assets/js/[name]-[hash].js",
                    entryFileNames: "assets/js/[name]-[hash].js",
                    assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
                }
            }
        }
    };
});
