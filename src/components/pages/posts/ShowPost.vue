<template>
    <div v-if="loading" class="spinner-border" role="status">
        <span  class="visually-hidden"></span>
    </div>
    <div v-else class="col-md-6">
        <div class="card">
            <div class="card-header">
                {{post.title}}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Body: {{ post.body }}</li>
            </ul>
            <div class="card-footer">
                <button class="btn btn-sm btn-danger me-4">Delete</button>
                <button class="btn btn-sm btn-dark ms-4">Edit</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
import { useRoute } from 'vue-router';

export default {
    
    setup(){
        const post= ref({});
        const loading= ref(true);
        const route= useRoute()

        function getpost(){
            axios
            .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(function (response) {
                // handle success
               post.value= response.data;
               loading.value = false;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })            
        }
        getpost()
        return { post , loading , route}
        }
}
</script>

<style scoped>
.card{
    margin: 1rem;
}
</style>