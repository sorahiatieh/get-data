<template>
    <div v-if="loading" class="spinner-border" role="status">
        <span  class="visually-hidden"></span>
    </div>
    <div v-else class="col-md-4" v-for="user in users" :key="user.id">
        <CardView :user="user"/>
    </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
import CardView from '@/components/users/CardView.vue'

export default {
    components: {
        CardView
    },
    setup(){
        const users= ref([]);
        const loading= ref(true);

        function getUsers(){
            axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
               users.value= response.data;
               loading.value = false;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });             
        }
        getUsers()
        return { users , loading}
        }
}
</script>

<style scoped>
.card{
    margin: 1rem;
}
</style>