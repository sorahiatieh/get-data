import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import IndexUser from './components/pages/users/IndexUser.vue'


const routes=[
    {path: '/' , name: HomePage ,component: HomePage},
    {path: '/Users' ,name: IndexUser, component: IndexUser},
    

    
];

const router=createRouter({
    history: createWebHistory(),
    routes
});

export default router;