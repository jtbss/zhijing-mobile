import VueRouter from 'vue-router'

import login from './MainRouter/Login.vue'
import personal from './MainRouter/info.vue'

import log from './SubRourer/log.vue'
import reg from './SubRourer/reg.vue'

var router = new VueRouter({
    routes: [
        { 
            path: '/login', 
            component: login,
            children: [
                { path: 'log', component: log },
                { path: 'reg', component: reg }
            ] 
        },
        { path: '/personal', component: personal }
    ]
})

export default router