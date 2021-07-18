<template>
  <div>
    <div id="paddingForm">
      <form class="box" >
        <section>

          <b-field label="Lema:" :label-position='"on-border"'>
            <b-input v-model='nuevoRefran.lema'></b-input>
          </b-field>

          <b-field label="Isoglosa:" :label-position='"on-border"'>
            <b-input v-model='nuevoRefran.isoglosa'></b-input>
          </b-field>

          <b-field label="Acto de habla:" :label-position='"on-border"'>
            <b-input v-model='nuevoRefran.acto_de_habla'></b-input>
          </b-field>

          <b-field label="Significado:" :label-position='"on-border"'>
            <b-input type="textarea" v-model='nuevoRefran.significado'></b-input>
          </b-field>

          <div class="buttons is-centered">
            <b-button type="is-success is-centered" v-on:click=" savedToast(), guardar(), limpiar()" >Guardar</b-button>
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
      nuevoRefran: {
        lema: "",
        isoglosa: "",
        acto_de_habla: "",
        significado: "",
        },
    
      refranes: [],
    } 
  },

  
  methods:{
    //form
    guardar(){
      axios.post("https://diccionario-backend.herokuapp.com/refran/", this.nuevoRefran).then(response=>{console.log(response)})
    },

    limpiar(){
      this.nuevoRefran.lema = "",
      this.nuevoRefran.isoglosa = "",
      this.nuevoRefran.acto_de_habla = "",
      this.nuevoRefran.significado = ""
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

