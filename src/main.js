import Vue from 'vue'
import App from "./app.vue"

Vue.config.productionTip = false
var app = new Vue({
	el:"#app",
	components: {
        App
    },
	data(){
		return{

		}
	},
	methods:{

	},
	/**
     * Vue2.x 区分了完整版和运行时版，然后当使用 webpack 的时候默认是只包含运行时的 ES Module 版本。
     * 运行时版不包括编译器【用来将模板字符串编译成为 JavaScript 渲染函数的代码】，所以不能用 template，要用 render 函数。
     * 而.vue文件里能写<template>则是因为vue-loader会处理，把<template>里的内容转换成 render() 函数的内容。
     * 参考：https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A
     */
	render: (createElement) => createElement(App)
})