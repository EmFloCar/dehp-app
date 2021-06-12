<template>
  <div>
    <div id="paddingForm">
      <form class="box">
        <div class="field">
          <label class="label">Lema:</label>
          <div class="control">
            <input class="input" type="text" >
          </div>
        </div>

        <div class="field">
          <label class="label">Información gramatical:</label>
          <div class="control">
            <input class="input" type="text" >
          </div>
        </div>

        <div class="field">
          <label class="label">Hiperónimo:</label>
          <div class="control">
            <input class="input" type="text" >
          </div>
        </div>

        <div class="field">
          <label class="label">Hipónimo:</label>
          <div class="control">
            <input class="input" type="text" >
          </div>
        </div>

        <div class="field">
          <label class="label">Significado:</label>
          <div class="control">
            <input class="input" type="text" >
          </div>
        </div>

        <div class="field">
          <label class="label">Ejemplo:</label>
          <div class="control">
            <input class="input" type="text" >
          </div>
        </div>

        <button class="button is-primary">Guardar</button>
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
            <th>Significado</th>
            <th>Ejemplo</th>
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
                  <button class="button is-danger"><i class="fas fa-times"></i></button>
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
  </div>

</template>


<script>
const axios = require('axios');
export default {
  data(){
    return{
      palabras: [],
    } 
  },

  mounted(){
    axios.get("http://localhost:3000/palabra/")
    .then(response=>this.palabras = response.data)
    console.log(this.response)
    }
    

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
</style>