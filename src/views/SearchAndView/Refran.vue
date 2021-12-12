<template>
    <div class="container componente">
      <div class="container">
        <div class="block">
          <div class="columns box">
            <div class="column is-full centrado block">
                <p>
                    <b> {{ this.refran.lema }}:</b>
                    {{ this.refran.isoglosa }}.
                    {{ this.refran.acto_de_habla }}
                    {{ this.refran.significado }}
                </p>
            </div>
          </div>
          <div class="columns">
            <div class="column centrado">
              <figure>
                <img  class="imgCenter" v-bind:src="this.refran.imagenUrl" />
              </figure>
            </div>
            <div class="column">
              <mapa :isoglosa="this.refran.isoglosa.split(', ')"></mapa>
            </div>
          </div>
          <div class="centrado" id="regresar">
              <router-link to="/" >
            <b-button class="is-info">REGRESAR</b-button>
              </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import mapa from '../../components/mapa.vue'
export default {
    components:{
      mapa
    },
    data() {
        return {
            id: null,
            refran: {
              lema: null,
              isoglosa: null,
              acto_de_habla: null,
              significado: null,
              imagenUrl: null,
            },            


        }

    },

    mounted() {
        this.id = this.$route.params.id;
        this.actualizar();
    },

    methods: {
        async actualizar(){
        let response = await axios.get("https://diccionario-backend.herokuapp.com/refran/" + this.id);
          this.refran.lema = response.data.lema
          this.refran.isoglosa = response.data.isoglosa.split(",").join(", ")
          this.refran.acto_de_habla = response.data.acto_de_habla
          this.refran.significado = response.data.significado
          this.refran.imagenUrl = response.data.imagenUrl
        },
    },
}
</script>

<style lang="scss" scoped>
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

#regresar {
  padding-top: 20px;
  padding-bottom: 60px;
}
</style>