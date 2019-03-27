import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
 
import './css/style.css'

import MUI from './MintUI.vue'
import EUI from './ElementUI.vue'

import router from './router2.js'

var vm = new Vue({
    el: '#app',
    render: c => c(MUI),
    router
})

// window.onload = function(){
//     function newRem(){
//         var windowScreenWidth = window.screen.width
//         var html = document.documentElement;
//         html.style.fontSize = windowScreenWidth/10 + 'px'
//     }
//     window.addEventListener('resize', newRem, false)
// }