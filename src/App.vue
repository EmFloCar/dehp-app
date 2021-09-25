<template>
<div>
  
  <router-view>
  
  </router-view>
</div>
</template>

<script>
import navbar from './components/navbar.vue'
import mainNavbar from './components/mainNavbar.vue'
export default {
  components: {
    navbar,
    mainNavbar
  }
  
}
</script>
