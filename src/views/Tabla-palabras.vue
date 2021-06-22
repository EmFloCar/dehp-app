<template>
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
          <tr v-for="palabra in palabras" :key="palabra.id">
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

      ViewForm: null,
      ViewTable: null,
    } 
  },

// tabla
  mounted(){
    axios.get("http://localhost:3000/palabra/").then(response=>this.palabras = response.data)
    console.log(response.data)
    },
  
  methods:{
    //tabla
     eliminar(id){
      axios.delete("http://localhost:3000/palabra/" + id).then(response => {console.log(response)})  
    },
  },

  }

    


</script>

<style lang="scss" scoped>

</style>