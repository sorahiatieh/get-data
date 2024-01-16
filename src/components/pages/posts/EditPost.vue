<template>
    <div class="col-md-6">
        <h2 class="mb-5">Edit Post:</h2>
        <postForm @formData="updatePost" :button-loading="loading" button-text="Edit Post"/>
  </div>
</template>


<script>
import postForm from '@/components/posts/FormComponnent.vue'
import axios from 'axios'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'


export default {
    components: {
        postForm
    },
    setup(){
        const form=reactive({
            title: "",
            body: "",
            titleError: "",
            bodyError: ""
        });
        const loading=ref(false);
        const route = useRoute();
        

        function getpost(){
            axios
            .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(function (response) {
                // handle success
               form.title= response.data.title;
               form.body= response.data.body;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })            
        }

        getpost()


        function updatePost(){
            loading.value = true;

            axios
              .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
                id: route.params.id,
                title: form.title,
                body: form.body,
                userId: 1
              })
              .then(function () {
                 loading.value = false;

                 Swal.fire({
                    title: 'Tanks!',
                    text: 'Post updated successfully ',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

              })
              .catch(function (error) {
                  console.log(error);
              });      
        }

        return { form, loading, updatePost }
    }
}
</script>

<style>

</style>