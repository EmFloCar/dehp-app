<template>
  <div class="inicio ">
    <div v-if="ver == true">
      <div class="columns is-centered" style="padding-top: 30px;">
      <div class=" column is-half">
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
    </div>

      <div class="jsjs ">
        <div class="container box column is-one-third" >
          <div class="box " v-for="palabra in PalabrasFiltradas">
            <div class="columns is-centered" >
              <div class="column is-three-quarters color has-text">
                <div> 
                  <b>
                    <p>
                      {{ palabra.lema.toUpperCase() }}
                    </p>
                  </b>
                </div>
              </div>
              <div class="column">
                <a v-on:click="PalabraSeleccionada(palabra), cambiar()">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- componente para visualizar -->
    <div v-if="ver == false" class="container componente">
      <div class="container">
        <div class="block">
          <div class="columns box">
            <div class="column is-full centrado block">
              <p>
                <b> {{ this.seleccionada.lema }}:</b>
                {{ this.seleccionada.informacion_gramatical }} (s),
                {{ this.seleccionada.hiperonimo }} (m.h),
                {{ this.seleccionada.hiponimo }} (c).
                {{ this.seleccionada.significado }}. "{{
                  this.seleccionada.ejemplo
                }}".
              </p>
            </div>
          </div>
            <div class="columns is-centered componente">
              <div class="column box is-three-quarters ">
                <figure class="image is-640x480">
                  <img v-bind:src="this.seleccionada.imagenUrl" />
                </figure>
              </div>
            </div>
            <div class="columns is-centered componente">
            <div class="column box is-three-quarters ">
              <div class="centrado">
                <div class="mapa centrado">
                  <div style="font-size: 24px;">
                    <i class="fas fa-map-marked-alt fa-10x"></i>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="centrado" id="regresar">
              <b-button class="is-info" v-on:click="cambiar() "
                >REGRESAR</b-button
              >
            </div>
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
      seleccionada: [],
    };
  },

  // tabla
  async mounted() {
    let response = await axios.get("https://diccionario-backend.herokuapp.com/palabra/");
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
    PalabraSeleccionada(palabra) {
      this.seleccionada = palabra;
    },

    cambiar() {
      if (this.ver == true) {
        this.ver = false;
      } else {
        this.ver = true;
      }
      console.log(this.ver);
    },
  },
};
</script>

<style lang="scss" scoped>
.inicio {
  background-color: azure;
  height: 100vh;
}

.jsjs {
  padding-bottom: 100px;
}

.has-text {
  height: auto;
  word-wrap: break-word;
}

.componente {
  padding: 40px 0px 0px 0px;
}

.centrado {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mapa {
  background-color: rgb(188, 206, 245);
  width: 600px;
  height: 500px;
}

#regresar{
  padding-top: 20px;
  padding-bottom: 60px;
}

</style>
