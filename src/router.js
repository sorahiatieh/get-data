import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import TemplateUser from './components/pages/users/TemplateUser.vue'
import IndexUser from './components/pages/users/IndexUser.vue'
import ShowUser from './components/pages/users/ShowUser.vue'

import TemplatePost from './components/pages/posts/TemplatePost.vue'
import IndexPost from './components/pages/posts/IndexPost.vue'
import ShowPost from './components/pages/posts/ShowPost.vue'
import CreatePost from './components/pages/posts/CreatePost.vue'


const routes=[
    {path: '/' , name: 'HomePage' ,component: HomePage},
    {path: '/Users' ,name: 'TemplateUser', component: TemplateUser, children: [
        {path: '' ,name: 'IndexUser', component: IndexUser},
        {path: ':id' ,name: 'userId' , component: ShowUser},
    ]},
    {path: '/Posts' ,name: 'TemplatePost', component: TemplatePost, children: [
        {path: '' ,name: 'IndexPost', component: IndexPost},
        {path: ':id' ,name: 'postId' , component: ShowPost},
        {path: 'create' ,name: 'createPost' , component: CreatePost},
    ]},
    
];

const router=createRouter({
    history: createWebHistory(),
    routes
});

export default router;