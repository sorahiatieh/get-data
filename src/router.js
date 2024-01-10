import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import TemplateUser from './components/pages/users/TemplateUser.vue'
import IndexUser from './components/pages/users/IndexUser.vue'
import ShowUser from './components/pages/users/ShowUser.vue'


const routes=[
    {path: '/' , name: HomePage ,component: HomePage},
    {path: '/Users' ,name: TemplateUser, component: TemplateUser, children: [
        {path: '' ,name: IndexUser, component: IndexUser},
        {path: ':id' ,name: ShowUser, component: ShowUser},
    ]},
    
];

const router=createRouter({
    history: createWebHistory(),
    routes
});

export default router;