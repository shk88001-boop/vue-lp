import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../components/Landing.vue';
import Landing1 from '../components/Landing1.vue';
import { loadVisiOpt } from '@/utils/visiopt';
const routes = [
    { path: '/', component: Landing },
    { path: '/free-trial', component: Landing1 },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
// 🔥 IMPORTANT PART
router.afterEach(() => {
    setTimeout(() => {
        loadVisiOpt();
    }, 0);
});
export default router;
//# sourceMappingURL=index.js.map