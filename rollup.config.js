import commonjs from '@rollup/plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import babel from "@rollup/plugin-babel";
import webpack from "webpack";
import {uglify} from "rollup-plugin-uglify";
import inject from "@rollup/plugin-inject";

export default {
    input: 'src/Carousel.vue',
    output: [
        {
            file: "dist/vue-owl-carousel.js",
            format: 'esm',
            sourcemap: false
        }
    ],
    plugins: [
        VuePlugin(),
        commonjs(),
        babel({
            babelHelpers: 'bundle',
            presets: [
                '@vue/cli-plugin-babel/preset'
            ],
            plugins: [
                ['@babel/plugin-transform-runtime', { useESModules: false }]
            ],
        }),
        uglify({
            mangle: true,
        }),
        inject({
            include: '**/*.js',
            exclude: 'node_modules/**',
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
    ],
    external: ['vue']
}
