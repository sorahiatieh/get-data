<template>
    <div class="col-md-6">
        <h2 class="mb-5">Create Post:</h2>
        <postForm @formData="createPost" :button-loading="loading" button-text="Create Post"/>
  </div>
</template>


<script>
import postForm from '@/components/posts/FormComponnent.vue'
import { ref } from 'vue';
import axios from 'axios'
import Swal from 'sweetalert2'


export default {
    components: {
        postForm
    },
    setup(){
        const loading=ref(false);

        function createPost(formData){
            loading.value = true;
            axios
              .post('https://jsonplaceholder.typicode.com/posts', {
                title: formData.title,
                body: formData.body,
                userId: 1
              })
              .then(function () {
                 loading.value = false;

                 Swal.fire({
                    title: 'Tanks!',
                    text: 'Post created successfully ',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

              })
              .catch(function (error) {
                  console.log(error);
              });      
        }

        return { createPost ,loading}
    }
}
</script>

<style>

</style>