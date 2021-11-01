<template>
  <div>
        <b-navbar :centered="true" :shadow="true" id="inicio">
      <template #brand>
        <router-link to="/">
          <img src="../assets/logo.png" alt="">
        </router-link> 
        
      </template>
      <template #start>
        <h1>Diccionario electrónico del habla popular de los valles de los ríos Sinú y San Jorge</h1>   
      </template>

      <template #end >
        <div class="centrarConfig">
        <router-link to="/crud/palabras">
          <a>
            <b-button icon-pack="fas" icon-left="cog" />
          </a>
        </router-link>
        </div>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  h1{
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

img{
  height: 65px;
  width: 50px;
  padding-left: 10px;
}

.centrarConfig{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
}

</style>