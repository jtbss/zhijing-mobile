import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import 'mint-ui/lib/style.css'
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