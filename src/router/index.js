import {createRouter, createWebHashHistory} from 'vue-router'
import button from '@/packages/button/index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/button',
            component: button
        },
    ]
})
export default router
