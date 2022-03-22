import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Button from "@element-plus/button/doc/index.vue";
import Badge from "@element-plus/badge/doc/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/button",
        component: Button
    },
    {
        path: "/badge",
        component: Badge
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
