<template>
  <div>
    <div id="paddingForm">
      <form class="box" >
        <section>

          <b-field label="Lema:" :label-position='"on-border"'>
            <b-input v-model='nueva_palabra.lema'></b-input>
          </b-field>

          <b-field label="Información gramatical:" :label-position='"on-border"'>
            <b-input v-model='nueva_palabra.informacion_gramatical'></b-input>
          </b-field>

          <b-field label="Hiperónimo:" :label-position='"on-border"'>
            <b-input v-model='nueva_palabra.hiperonimo'></b-input>
          </b-field>

          <b-field label="Hipónimo:" :label-position='"on-border"'>
            <b-input v-model='nueva_palabra.hiponimo'></b-input>
          </b-field>

          <b-field label="Significado:" :label-position='"on-border"'>
            <b-input type="textarea" v-model='nueva_palabra.significado'></b-input>
          </b-field>

          <b-field label="Ejemplo:" :label-position='"on-border"'>
            <b-input type="textarea" v-model='nueva_palabra.ejemplo'></b-input>
          </b-field>

          <div class="buttons is-centered">
            <b-button type="is-success is-centered" v-on:click=" savedToast(), guardar(), limpiar()" >Gurdar</b-button>
          </div>

        </section>
      </form>
    </div>

    <div>
      <router-view/>
    </div>
  </div>

</template>


<script>
const axios = require('axios');
export default {
  data(){
    return{
      nueva_palabra: {
      lema: "",
      informacion_gramatical: "",
      hiperonimo: "",
      hiponimo: "",
      significado: "",
      ejemplo: ""
      },

      palabras: [],
    } 
  },

    mounted(){
    axios.get("http://localhost:3000/palabra/").then(response=>this.palabras = response.data)
    console.log(response.data)
    },
  
  methods:{
    //form
    guardar(){
      axios.post("http://localhost:3000/palabra/", this.nueva_palabra).then(response=>{console.log(response)})
    },

    limpiar(){
      this.nueva_palabra.lema = "",
      this.nueva_palabra.informacion_gramatical = "",
      this.nueva_palabra.hiperonimo = "",
      this.nueva_palabra.hiponimo = "",
      this.nueva_palabra.significado = "",
      this.nueva_palabra.ejemplo = ""
    },

    savedToast() {
        this.$buefy.toast.open({
            message: 'Guardado',
            type: 'is-success'
        })
    },

    
  },

  }
</script>

<style lang="scss" scoped>
  #paddingForm{
    padding-top: 2%;
    padding-left: 20%;
    padding-right: 20%;
    padding-bottom: 5%;
  }
</style>

