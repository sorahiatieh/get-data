<template>
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
            
            <button type="submit" class="btn btn-dark" :disabled="buttonLoading">
                <div 
                v-if="buttonLoading" 
                class="spinner-border spinner-border-sm" 
                role="status"
                ></div>
                {{ buttonText }}</button>
            
        </form>
</template>

<script>
import { reactive } from 'vue';


export default {
  props:{
    buttonLoading : Boolean,
    buttonText: String
  },
  setup(props, {emit}){
    const form= reactive({
            title:"",
            body:"",
            titleError:"",
            bodyError:""
        });
        

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
                emit('formData', form)
            }

            //console.log(form.title, form.body)
        }

      return {form , validate }
  }
}
</script>

<style>

</style>