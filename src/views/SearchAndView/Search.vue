<template>
  <div class="inicio ">
    <div>
      <section>
        <b-tabs type="is-boxed is-centered">
          <b-tab-item label="PALABRAS">
            <div>
              <div class="columns is-centered" style="padding-top: 30px;">
                <div class=" column is-half">
                  <b-field>
                    <b-input
                      placeholder="Buscar palabra..."
                      type="search"
                      icon-pack="fas"
                      icon="search"
                      v-model="searchPalabra"
                      rounded
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
              <div class="container box column is-one-third">
                <div class="box " v-for="palabra in PalabrasFiltradas" :key="palabra._id">
                  <div class="columns is-centered">
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
                      <a v-on:click="seleccionarPalabra(palabra._id)"
                        >Ver más</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="REFRANES">
            <div>
              <div class="columns is-centered" style="padding-top: 30px;">
                <div class=" column is-half">
                  <b-field>
                    <b-input
                      placeholder="Buscar refrán..."
                      type="search"
                      icon-pack="fas"
                      icon="search"
                      v-model="searchRefran"
                      rounded
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
              <div class="container box column is-one-third">
                <div class="box " v-for="refran in RefranesFiltrados" :key="refran._id">
                  <div class="columns is-centered">
                    <div class="column is-three-quarters color has-text">
                      <div>
                        <b>
                          <p>
                            {{ refran.lema.toUpperCase() }}
                          </p>
                        </b>
                      </div>
                    </div>
                    <div class="column">
                      <a v-on:click="seleccionarRefran(refran._id)"
                        >Ver más</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
        </b-tabs>
      </section>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      palabras: [],
      refranes: [],
      searchPalabra: "",
      searchRefran: "",

      seleccionada: [],
    };
  },

  // tabla
  async mounted() {
    let response = await axios.get(
      "https://diccionario-backend.herokuapp.com/palabra/"
    );
    this.palabras = response.data;
    console.log(response.data);

    let response2 = await axios.get(
        "https://diccionario-backend.herokuapp.com/refran/"
    );
    this.refranes = response2.data;
    console.log(response2.data)
  },

  computed: {
    PalabrasFiltradas: function() {
      return this.palabras.filter((palabra) => {
        return palabra.lema.toLowerCase().match(this.searchPalabra.toLowerCase());
      });
    },

    RefranesFiltrados: function() {
      return this.refranes.filter((refran) => {
        return refran.lema.toLowerCase().match(this.searchRefran.toLowerCase());
      });
    },    
  },

  methods: {
    seleccionarPalabra(id){
      this.$router.push('/inicio/palabra/' + id)
    },

    seleccionarRefran(id){
      this.$router.push('/inicio/refran/' + id)
    }
  },
};
</script>

<style lang="scss" scoped>
.inicio {
  background-color: rgb(241, 241, 241);
  height: 100vh;
}

</style>
