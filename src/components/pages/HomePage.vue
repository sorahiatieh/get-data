<template>
  <div class="container mt-5">
    <div class="row">
        <div class="col-md-6">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Velit nostrum aliquid sit blanditiis consequuntur tempore doloremque placeat alias ducimus qui natus enim illum,
                 unde fugit cumque voluptatum commodi delectus excepturi!
            </p>

            <router-link class="btn btn-dark" :to="{name: 'IndexUser'}">Users</router-link>
            <router-link class="btn btn-light ms-5" :to="{name: 'IndexPost'}">Posts</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>