<template>
    <div v-if="loading" class="spinner-border" role="status">
        <span  class="visually-hidden"></span>
    </div>
    <div v-else class="col-md-4">
        <CardView :user="user"/>

        <router-link class="btn btn-dark" :to="{name: 'IndexUser'}">Users</router-link>
    </div>
    
</template>
  
  <script>
  import axios from 'axios'
  import {ref} from 'vue'
  import CardView from '@/components/users/CardView.vue'
  import {useRoute} from 'vue-router'
  
  export default {
      components: {
          CardView
      },
      setup(){
          const user= ref({});
          const loading= ref(true);
          const route= useRoute(); 
  
          function getUser(){
              axios
              .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
              .then(function (response) {
                  // handle success
                 user.value= response.data;
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
          getUser()
          return { user , loading , route}
          }
  }
  </script>
  
  <style scoped>
  .card{
      margin: 1rem;
  }
  </style>