<template>
    <div class="inicio">
     <div>
       <mainNavbar/>
     </div>

     <div>
      <router-view/>
     </div>

    </div>

</template>

<script>
import mainNavbar from '../components/mainNavbar.vue'
export default{
  components: {
    mainNavbar,
  }
}

</script>

<style lang="scss" scoped>
  .inicio {
    background-color: rgb(241, 241, 241);
    height: 100vh;
  }
</style>
