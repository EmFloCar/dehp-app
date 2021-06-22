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
          <label class="label">Isoglosa:</label>
          <div class="control">
            <input class="input" type="text" v-model="nueva_palabra.informacion_gramatical">
          </div>
        </div>

        <div class="field">
          <label class="label">Acto de habla:</label>
          <div class="control">
            <input class="input" type="text" v-model="nueva_palabra.hiperonimo">
          </div>
        </div>

        <div class="field">
          <label class="label">Explicación:</label>
          <div class="control">
            <textarea class="textarea" v-model="nueva_palabra.significado"></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label">Ejemplo:</label>
          <div class="control">
            <textarea class="textarea" v-model="nueva_palabra.significado"></textarea>
          </div>
        </div>

        <div id="center">
        <button class="button is-primary" v-on:click="guardar(), limpiar()">Guardar</button>
        </div>
      </form>
    </div>
    <div id="paddingList">
      <table class="table is-striped is-narrow is-hoverable is-fullwidth" >
        <thead>
          <tr>
            <th>Lema</th>
            <th>información gramatical</th>
            <th>Hiperónimo</th>
            <th>Hipónimo</th>
            <th id="tamaño">Significado</th>
            <th id="tamaño">Ejemplo</th>
            <th>Acciones</th>
          </tr>
          <tr v-for="(palabra in palabras">
            <td>{{palabra.lema}}</td>
            <td>{{palabra.informacion_gramatical}}</td>
            <td>{{palabra.hiperonimo}}</td>
            <td>{{palabra.hiponimo}}</td>
            <td>{{palabra.significado}}</td>
            <td>{{palabra.ejemplo}}</td>
            <td>
              <div class="field is-grouped">
                <p class="control">
                  <button class="button is-danger" v-on:click="eliminar(palabra._id)"><i class="fas fa-times"></i></button>
                </p>
                <p class="control">
                  <button class="button is-link"><i class="fas fa-edit"></i></button>
                </p>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
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

  mounted(){
    axios.get("http://localhost:3000/palabra/").then(response=>this.palabras = response.data)
    console.log(response.data)
    },
  
  methods:{
    guardar(){
      axios.post("http://localhost:3000/palabra/", this.nueva_palabra).then(response=>{console.log(response)})
    },
    
     eliminar(id){
      axios.delete("http://localhost:3000/palabra/" + id).then(response => {console.log(response)})  
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

  #center{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }

  #tamaño{
      width: 300px;
  }

</style>
