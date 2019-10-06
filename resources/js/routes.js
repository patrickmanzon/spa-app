import VueRouter from 'vue-router';
import Home from './components/Home.vue'


const router = new VueRouter({

    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: "home"
        }
    ]
});

export default router;
