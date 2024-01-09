<template>
  <HeaderMenu/>
  
  <router-view></router-view>
</template>

<script>

import HeaderMenu from './components/section/HeaderMenu.vue'

export default {
  name: 'App',
  components: {
    HeaderMenu
  }
}
</script>

<style>

</style>
