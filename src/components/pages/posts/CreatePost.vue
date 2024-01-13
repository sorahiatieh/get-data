<template>
    <div class="col-md-6">
        <h2 class="mb-5">Create Post:</h2>
        <form>
            <div class="mb-3">
                <label class="form-label">Title:</label>
                <input type="text" class="form-control" v-model.lazy.trim="form.title">
                <div class="form-text text-danger">{{ form.titleError }}</div>
                
            </div>
            <div class="mb-3">
                <label class="form-label">Body:</label>
                <textarea type="textarea" class="form-control" v-model.lazy.trim="form.body"></textarea>
                <div class="form-text text-danger">{{ form.bodyError }}</div>
            </div>
            
            <button type="submit" class="btn btn-dark" :disabled="loading">
                <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
                Create</button>
            
        </form>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'


export default {
    setup(){
        const form=reactive({
            title:"",
            body:"",
            titleError:"",
            bodyError:""
        });
        const loading=ref(false);

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
                createPost()
            }
        }

        function createPost(){
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

        return { form, loading, validate ,createPost}
    }
}
</script>

<style>

</style>