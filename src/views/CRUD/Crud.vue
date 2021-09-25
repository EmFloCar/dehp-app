<template>
    <div class="inicio">
      <div>
        <navbar/>
      </div>

      <div>
        <router-view/>
      </div>
    </div>

</template>

<script>
import navbar from '../../components/navbar.vue'
export default {
  components: {
    navbar,
  }
  
}
</script>

<style lang="scss" scoped>
  .inicio {
    background-color: rgb(241, 241, 241);
  }
</style>
