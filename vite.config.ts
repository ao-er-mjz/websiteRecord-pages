import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
// 导入path 用于设置别名
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [UnoCSS(), react()],
    //配置别名
    resolve: {
        // 需要在tsconfig.json的compilerOptions中配置paths
        alias: {
            '@': path.resolve('./src'), // @代替src
            '~': path.resolve('./src/components'), // @代替src/components
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    server: {
        proxy: {
            '/dev-api': {
                target: 'http://127.0.0.1:8002/',
                changeOrigin: true,
            },
            '/api': {
                target: 'https://bbs.hupu.com/',
                changeOrigin: true,
            },
            '/mcp': {
                target: 'https://ug.baidu.com/',
                changeOrigin: true,
            },
        },
    },
    // 配置开发服务器中的预览功能、允许你在本地开发服务器中查看静态文件
    preview: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:4523/m1/2899312-0-default/',
                changeOrigin: true,
            },
        },
    },

    build: {
        outDir: 'dist', // 输出目录
        assetsInlineLimit: 4096, // 小于该大小的资源将内联到 HTML 中
        rollupOptions: {
            input: 'index.html', // 入口文件
        },
    },
});
