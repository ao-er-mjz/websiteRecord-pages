// 以下代码需全部 cv 过去!!! 如果没有的话可能会引起 unocss 插件不起作用,导致没有提示
// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    transformerAttributifyJsx,
} from 'unocss';

export default defineConfig({
    rules: [
        ['flex-c', { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }],
        ['w-100', { width: '100%' }],
        ['h-100', { height: '100%' }],
        ['flex', { display: 'flex' }],
        ['flex-1', { flex: '1' }],
        ['ju-c_f-e', { 'justify-content': 'flex-end' }],
        ['ju-c_c', { 'justify-content': 'center' }],
        ['f-s', { 'flex-shrink': '0' }],
        ['f-w_w', { 'flex-wrap': 'wrap' }],
        ['ju-c_s-e', { 'justify-content': 'space-evenly' }],
        ['ju-c_s-b', { 'justify-content': 'space-between' }],
        ['a-i_c', { 'align-items': 'center' }],
        ['cursor-po', { cursor: 'pointer' }],

        [/^w-b-(\d+)$/, ([, num]) => ({ width: `${num}%` })],
        [/^m-t-(\d+)$/, ([, num]) => ({ 'margin-top': `${num}px` })],
        [/^m-b-(\d+)$/, ([, num]) => ({ 'margin-bottom': `${num}px` })],
        [/^m-l-(\d+)$/, ([, num]) => ({ 'margin-left': `${num}px` })],
        [/^m-r-(\d+)$/, ([, num]) => ({ 'margin-right': `${num}px` })],
        [/^p-t-(\d+)$/, ([, num]) => ({ 'padding-top': `${num}px` })],
        [/^p-b-(\d+)$/, ([, num]) => ({ 'padding-bottom': `${num}px` })],
        [/^p-l-(\d+)$/, ([, num]) => ({ 'padding-left': `${num}px` })],
        [/^p-r-(\d+)$/, ([, num]) => ({ 'padding-right': `${num}px` })],
        [/^m-tb-(\d+)$/, ([, num]) => ({ 'margin-top': `${num}px`, 'margin-bottom': `${num}px` })],
        [/^m-lr-(\d+)$/, ([, num]) => ({ 'margin-left': `${num}px`, 'margin-right': `${num}px` })],
        [/^p-tb-(\d+)$/, ([, num]) => ({ 'padding-top': `${num}px`, 'padding-bottom': `${num}px` })],
        [/^p-lr-(\d+)$/, ([, num]) => ({ 'padding-left': `${num}px`, 'padding-right': `${num}px` })],

        [/^font-size-(\d+)$/, ([, num]) => ({ 'font-size': `${num}px` })],
        // 颜色类 匹配以字母和数字组合结尾的类名
        [/^color-([A-Fa-f0-9]+)$/, ([, num]) => ({ color: `#${num}` })],
        [/^gap-(\d+)$/, ([, num]) => ({ gap: `${num}px` })],
        [/^width-(\d+)$/, ([, num]) => ({ width: `${num}px` })],
        [/^wh-(\d+)$/, ([, num]) => ({ width: `${num}px`, height: `${num}px` })],
    ],
    theme: {},
    shortcuts: {},
    safelist: [],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            extraProperties: { display: 'inline-block', 'vertical-align': 'middle' },
        }),
        presetTypography(),
    ],
    transformers: [transformerAttributifyJsx()],
});
