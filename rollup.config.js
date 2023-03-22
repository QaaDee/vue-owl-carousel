import commonjs from '@rollup/plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import babel from "@rollup/plugin-babel";
import webpack from "webpack";
import terser from "@rollup/plugin-terser";

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
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery'
        }),
        VuePlugin(),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            presets: [
                '@vue/cli-plugin-babel/preset'
            ],
            plugins: [
                ['@babel/plugin-transform-runtime', { useESModules: false }]
            ],
        }),
        terser()
    ],
    external: ['vue']
}
