<template>
  <div class="inicio">
    <!-- <div>
      <div class="buttons has-addons is-centered">
          <router-link to="/palabras" id="button"><button class="button is-primary is-medium">AGREGAR PALABRAS</button></router-link>
          <router-link to="tabla-palabras" id="button"><button class="button is-primary is-medium">VER PALABRAS</button></router-link>
          <router-link to="refranes" id="button"><button class="button is-primary is-medium">AGREGAR REFRANES</button></router-link>
          
      </div>
    </div>     -->
<b-navbar :centered="true" :shadow="true" id="inicio">
        <template #start >
            <b-navbar-dropdown label="PALABRA">
                <router-link to="/palabras" ><b-navbar-item>Añadir</b-navbar-item></router-link>
                <router-link to="tabla-palabras"><b-navbar-item>Editar</b-navbar-item></router-link>
            </b-navbar-dropdown>

            <b-navbar-dropdown label="REFRAN">
                <router-link to="/refranes" ><b-navbar-item>Añadir</b-navbar-item></router-link>
                <router-link to="tabla-refranes"><b-navbar-item>Editar</b-navbar-item></router-link>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

  #button {
    padding: 10px;
  }

  .inicio{
    background-color: azure;

  }

</style>
