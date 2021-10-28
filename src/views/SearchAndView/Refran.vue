<template>
    <div class="container componente">
      <div class="container">
        <div class="block">
          <div class="columns box">
            <div class="column is-full centrado block">
                <p>
                    <b> {{ this.refran.lema }}:</b>
                    {{ this.refran.isoglosa }}
                    {{ this.refran.acto_de_habla }}
                    {{ this.refran.significado }}
                </p>
            </div>
          </div>
          <div class="columns is-centered componente">
            <div class="column box is-three-quarters ">
              <div class="centrado">
                <div class="mapa centrado">
                  <div style="font-size: 24px;">
                    <i class="fas fa-image fa-10x"></i>
                  </div>
                </div>
              </div>
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
export default {
    data() {
        return {
            id: null,
            refran: {},            


        }

    },

    mounted() {
        this.id = this.$route.params.id;
        this.actualizar();
    },

    methods: {
        async actualizar(){
        let response = await axios.get("https://diccionario-backend.herokuapp.com/refran/" + this.id);
        this.refran = response.data;
        console.log(response.data)
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

.mapa {
  background-color: rgb(188, 206, 245);
  width: 400px;
  height: 300px;
}

#regresar {
  padding-top: 20px;
  padding-bottom: 60px;
}
</style>