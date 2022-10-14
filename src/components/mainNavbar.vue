<template>
  <div>
        <b-navbar :centered="true" :shadow="true" id="inicio">
      <template #brand>
        <router-link to="/">
          <img src="../assets/logo.png" class="universidad">
        </router-link> 
        <img src="../assets/lexicon.png" class="lexicon">
        
      </template>
      <template #start>
        <h2>Diccionario electrónico del habla popular de los valles de los ríos Sinú y San Jorge</h2>   
      </template>

      <template #end >
        <div class="centrarConfig">
        <router-link to="/login">
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
  h2{
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

.lexicon{
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-left: 10px;
}

.universidad{
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