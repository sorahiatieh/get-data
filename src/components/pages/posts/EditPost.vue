<template>
    <div class="col-md-6">
        <h2 class="mb-5">Edit Post:</h2>
        <form @submit.prevent="validate">
            <div class="mb-3">
                <label class="form-label">Title:</label>
                <input type="text" class="form-control" v-model.lazy.trim="form.title">
                <div class="form-text text-danger">{{ form.titleError }}</div>
                
            </div>
            <div class="mb-3">
                <label class="form-label">Body:</label>
                <textarea type="textarea" class="form-control" rows="6" v-model.lazy.trim="form.body"></textarea>
                <div class="form-text text-danger">{{ form.bodyError }}</div>
            </div>
            
            <button type="submit" class="btn btn-dark" :disabled="loading">
                <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
                Edit</button>
            
        </form>
  </div>
</template>


<script>
import axios from 'axios'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'


export default {
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

        function validate(){
            if(form.title === ""){
                form.titleError= "Title is required"
            }else{
                form.titleError=""
            }
            if(form.body === ""){
                form.bodyError = "Body is required"
            }else{
                form.bodyError=""
            }
            if(form.title !== "" && form.body !==""){
                loading.value=true;
                updatePost()
            }

            console.log(form.title, form.body)
        }

        function updatePost(){
            axios
              .get('https://jsonplaceholder.typicode.com/posts', {
                title: form.title,
                body: form.body,
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
              })
              .finally(function () {
                  // always executed
              });      
        }

        return { form, loading, validate }
    }
}
</script>

<style>

</style>