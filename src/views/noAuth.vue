<template>
  <div>
    <div class="container">
      <br><br>
        <h1>El ACCESO A ESTA PÁGINA ES RESTRINGIDO</h1><br>
        <p>Comunicate con el administrador si crees que es un error</p>
    </div><br><br>
    <div class="button-container">
      <router-link to="/">
        <b-button type="is-success">
        INICIO
      </b-button>
      </router-link>

    </div>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.button-container{
  display: flex;
  justify-content: center;
}
</style>


