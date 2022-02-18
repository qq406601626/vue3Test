import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Dashboard from '../views/index.vue'
import Button from '../views/button.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        children: [
            {
                path: 'Button',
                name: 'Button',
                component: Button,
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
