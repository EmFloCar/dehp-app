<template>
  <div>
    <div id="paddingForm">
      <form class="box">
        <div class="field">
          <label class="label">Lema:</label>
          <div class="control">
            <input class="input" type="text" v-model="nueva_palabra.lema">
          </div>
        </div>

        <div class="field">
          <label class="label">Información gramatical:</label>
          <div class="control">
            <input class="input" type="text" v-model="nueva_palabra.informacion_gramatical">
          </div>
        </div>

        <div class="field">
          <label class="label">Hiperónimo:</label>
          <div class="control">
            <input class="input" type="text" v-model="nueva_palabra.hiperonimo">
          </div>
        </div>

        <div class="field">
          <label class="label">Hipónimo:</label>
          <div class="control">
            <input class="input" type="text" v-model="nueva_palabra.hiponimo">
          </div>
        </div>

        <div class="field">
          <label class="label">Significado:</label>
          <div class="control">
            <textarea class="textarea" v-model="nueva_palabra.significado"></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label">Ejemplo:</label>
          <div class="control">
            <textarea class="textarea" rows="3" v-model="nueva_palabra.ejemplo"></textarea>
          </div>
        </div>
        <div class="buttons is-centered">
        <button class="button is-primary is-medium" v-on:click="guardar(), limpiar()">Guardar</button>
        </div>
      </form>
    </div>
    <div>
      <router-view/>
    </div>

       <pre>{{$data}}</pre>
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

    
  },

  }

    


</script>

<style lang="scss" scoped>
  #paddingForm{
    padding-right: 200px;
    padding-left: 200px;
  }

  #paddingList{
    padding-top: 30px;
    padding-bottom: 50px;
  }

  #paddingIcon{
    padding-right: 5px;
    padding-left: 5px;  
  }

  #tamaño{
      width: 300px;
  }

</style>