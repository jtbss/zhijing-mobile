import VueRouter from 'vue-router'

import homepage from './page/homepage.vue'
import service from './page/service.vue'
import news from './page/news.vue'
import company from './page/company.vue'
import joinus from './page/joinus.vue'
import login from './page/login.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: homepage },
        { path: '/service', component: service },
        { path: '/news', component: news },
        { path: '/company', component: company },
        { path: '/joinus', component: joinus },
        { path: '/login', component: login }
    ]
})

export default router