<template>
    <div class="col-md-6">
        <h2 class="mb-5">Create Post:</h2>
        <postForm @formData="createPost" :buttonLoading="loading"/>
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
            console.log(formData)
            axios
              .post('https://jsonplaceholder.typicode.com/posts', {
                title: formData.title,
                body: formData.body,
                userId: 1
              })
              .then(function () {
                  // handle success
                 loading.value = false;

                 Swal.fire({
                    title: 'Tanks!',
                    text: 'Post created successfully ',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

              })
              .catch(function (error) {
                  // handle error
                  console.log(error);
              });      
        }

        return { createPost ,loading}
    }
}
</script>

<style>

</style>