import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../components/Landing.vue';
import Landing1 from '../components/Landing1.vue';
const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing,
    },
    {
        path: '/free-trial',
        name: 'FreeTrial',
        component: Landing1,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
