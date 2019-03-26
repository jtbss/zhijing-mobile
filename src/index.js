import './css/style.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'

Vue.use(VueRouter)

import router from './router.js'

var vm = new Vue({
    el: '#app',
    render: function(createEle){
        return createEle(app)
    },
    router
})