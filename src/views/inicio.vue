<template>
  <div class="inicio">
    <div v-if="ver == true">
      <div class="block SearchBar">
        <b-field>
          <b-input
            placeholder="Buscar palabra..."
            type="search"
            icon-pack="fas"
            icon="search"
            v-model="search"
            rounded
          >
          </b-input>
        </b-field>
      </div>

      <div class="jsjs ">
        <div class="container box column is-one-third">
          <div class="box " v-for="palabra in PalabrasFiltradas" :key="palabra">
            <div class="columns">
              <div class="column is-two-thirds color has-text">
                <h1>{{ palabra.lema }}</h1>
              </div>
              <div class="column  is-centered">
              <!-- <b-button class="is-info">Ver más</b-button> -->
              <a v-on:click="PalabraSeleccionada(palabra), cambiar()">Abrir</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!-- componente para visualizar -->
    <div v-if="ver==false" class="container componente">
      <div class="container">
        <div class="box block">

        <div class="columns">

          <div class="column is-full componente-palabra">
              <p> <b> {{this.seleccionada.lema}}:</b> {{this.seleccionada.informacion_gramatical}} (s), {{this.seleccionada.hiperonimo}} (m.h), {{this.seleccionada.hiponimo}} (c).
              {{this.seleccionada.significado}}. "{{this.seleccionada.ejemplo}}".</p> 
          </div>

        </div>

        <div class="columns">
            <div class="column is-6">
              <figure class="image is-640x480" >
                <img src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2015/08/DIFFICULTIES.jpg">
              </figure>
            </div>

            <div class="column is-6" style="background-color: gray;">

              <figure class="image is-640x480">
                <img src="https://static.vecteezy.com/system/resources/previews/002/318/161/non_2x/map-location-icon-free-vector.jpg">
              </figure>
            </div>
        </div>
          <b-button class="is-info" v-on:click="cambiar()">regresar</b-button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      palabras: [],
      search: "",
      ver: true,
      seleccionada: []
    };
  },

  // tabla
  async mounted() {
    let response = await axios.get("http://localhost:3000/palabra/");
    this.palabras = response.data;
    console.log(response.data);
  },

  computed: {
    PalabrasFiltradas: function() {
      return this.palabras.filter((palabra) => {
        return palabra.lema.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },

  methods: {
    PalabraSeleccionada(palabra){
      this.seleccionada = palabra;
      console.log("seleccionada", this.seleccionada)
    },

    cambiar(){
      if (this.ver == true) {
        this.ver = false
      } else {
        this.ver = true
      }
      console.log(this.ver)
    },

  }
};
</script>

<style lang="scss" scoped>
.inicio {
  background-color: azure;
}
.SearchBar {
  padding: 70px 300px 30px 300px;
}

.jsjs {
  padding-bottom: 100px;
}

.has-text{
  height: auto;
  word-wrap: break-word;
}

.componente{
  padding: 40px 0px 0px 0px;
}

.componente-palabra{
  padding: 40px 0px 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
}
</style>
