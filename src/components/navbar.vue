<template>
  <div>
        <b-navbar :centered="true" :shadow="true" id="inicio" :spaced="true">
      <template #start>

        <router-link to="/">
        <b-navbar-item >INICIO</b-navbar-item>
        </router-link>
        
        <b-navbar-dropdown label="PALABRA" hoverable>
          <router-link to="/crud/palabras"
            ><b-navbar-item>Añadir</b-navbar-item></router-link
          >
          <router-link to="/crud/tabla-palabras"
            ><b-navbar-item>Editar</b-navbar-item></router-link
          >
        </b-navbar-dropdown>

        <b-navbar-dropdown label="REFRAN" hoverable>
          <router-link to="/crud/refranes">
            <b-navbar-item >Añadir</b-navbar-item>
          </router-link>

          <router-link to="/crud/tabla-refranes">
            <b-navbar-item>Editar</b-navbar-item>
          </router-link>
        </b-navbar-dropdown>
      </template>
      <template #end>
        <div>
            <b-navbar-item v-on:click="confirmLogOut()">
                <b-icon
                pack="fas"
                icon="power-off"
                size="is-medium"
                type="is-danger"
                >
            </b-icon>
            </b-navbar-item>
        </div>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    cerrarSesion(){
      localStorage.removeItem("token");
      this.$router.push("/")
    },
    confirmLogOut() {
                this.$buefy.dialog.confirm({
                    title: 'Cerrando sesión',
                    message: '¿Estás seguro que quieres <b>cerrar</b> sesión?',
                    confirmText: 'Cerrar sesión',
                    type: 'is-danger',
                    hasIcon: false,
                    onConfirm: () => this.cerrarSesion()
                })
            }
  },
}
</script>