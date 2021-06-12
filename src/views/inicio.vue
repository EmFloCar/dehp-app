<template>
  <div class="inicio">
    <div id="app">
      <div id="nav">
          <router-link to="palabras" id="button"><button class="button is-primary">PALABRA</button></router-link>
          <router-link to="refranes" id="button"><button class="button is-primary">REFRAN</button></router-link>
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  #button {
    padding: 10px;
  }

  .inicio{
    background-color: azure;
  }
</style>
