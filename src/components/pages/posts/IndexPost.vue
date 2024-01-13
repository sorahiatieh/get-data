<template>
     <div class="create">
        <router-link class="btn btn-dark" :to="{name: 'createPost'}">Create Post</router-link>
    </div>
    <div v-if="loading" class="spinner-border" role="status">
        <span  class="visually-hidden"></span>
    </div>
    <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
        <div class="card">
            <div class="card-header">
                <router-link :to="{name :'postId' , params : {id: post.id}}">  {{post.title}} </router-link>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Body: {{ post.body }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'


export default {
    
    setup(){
        const posts= ref([]);
        const loading= ref(true);
       

        function getposts(){
            axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
               posts.value= response.data;
               loading.value = false;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })            
        }
        getposts()
        return { posts , loading}
        }
}
</script>

<style scoped>
.card{
    margin: 1rem;
}
</style>