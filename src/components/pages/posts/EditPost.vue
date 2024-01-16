<template>
    <div v-if="pageLoading" class="spinner-border" role="status">
        <span  class="visually-hidden"></span>
    </div>
    <div v-else class="col-md-6">
        <h2 class="mb-5">Edit Post:</h2>
        <postForm 
        @formData="updatePost" 
        :button-loading="loading" 
        button-text="Edit Post" 
        :post="post"/>
  </div>
</template>


<script>
import postForm from '@/components/posts/FormComponnent.vue'
import axios from 'axios'
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'


export default {
    components: {
        postForm
    },
    setup(){
        
        const loading=ref(false);
        const pageLoading=ref(true);
        const route = useRoute();
        const post = ref({})
        

        function getpost(){
            axios
            .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(function (response) {
               post.value=response.data;
               pageLoading.value= false
            })
            .catch(function (error) {
                console.log(error);
            })            
        }

        getpost()


        function updatePost(formData) {
      loading.value = true;
      console.log();
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post update successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { updatePost, loading, post, pageLoading };
    }
}
</script>

<style>

</style>