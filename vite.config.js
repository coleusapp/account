import {defineConfig} from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from "path";

const rootPath = '../../..';

export default defineConfig({
    envDir: rootPath,
    resolve: {
        alias: {
            '@account': path.resolve(__dirname, './resources/js'),
        },
    },
    build: {
        modulePreload: false
    },
    plugins: [
        laravel({
            input: "resources/js/app.js",
            refresh: true,
            buildDirectory: 'dist',
            publicDirectory: 'resources',
            hotFile: `${rootPath}/public/hot`
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
