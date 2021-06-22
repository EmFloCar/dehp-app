<template>
  <div class="inicio">
    <div>
      <div class="buttons has-addons is-centered">
          <router-link to="/palabras" id="button"><button class="button is-primary is-medium">AGREGAR PALABRAS</button></router-link>
          <router-link to="tabla-palabras" id="button"><button class="button is-primary is-medium">VER PALABRAS</button></router-link>
          <router-link to="refranes" id="button"><button class="button is-primary is-medium">AGREGAR REFRANES</button></router-link>
          
      </div>
    </div>    
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">

  #button {
    padding: 10px;
  }

  .inicio{
    background-color: azure;

  }
</style>
