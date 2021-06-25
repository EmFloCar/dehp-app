<template>
  <div id="paddingList">
    <b-table :data="palabras" sticky-header height="500px" narrowed hoverable striped> 
      <b-table-column field="lema" label="Lema" width="50" v-slot="props" searchable sortable>
          {{ props.row.lema }}
      </b-table-column>

      <b-table-column field="informacion_gramatical" label="Información Gramatical" width="50" v-slot="props"  >
          {{ props.row.informacion_gramatical }}
      </b-table-column>

      <b-table-column field="hiperonimo" label="Hiperónimo" width="50" v-slot="props" >
          <p> {{ props.row.hiperonimo }} </p> 
      </b-table-column>

      <b-table-column field="hiponimo" label="Hipónimo" width="50" v-slot="props" >
          {{ props.row.hiponimo }}
      </b-table-column>

      <b-table-column field="significado" label="Significado" width="50" v-slot="props" >
          {{ props.row.significado }}
      </b-table-column>

      <b-table-column field="ejemplo" label="Ejemplo" width="50" v-slot="props" >
          {{ props.row.ejemplo }}
      </b-table-column>

      <b-table-column label="Acciones" width="50" v-slot="props" centered>
        <div class="field is-grouped" id="center">
          <p class="control"> <b-button type="is-danger" icon-pack="fas" icon-left="trash" v-on:click="eliminar(props.row._id), DeletedToast(), actualizar()"/> </p>
          <p class="control"> <b-button type="is-info" icon-pack="fas" icon-left="edit"/> </p>
        </div>
      </b-table-column>
      
    </b-table>
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

// tabla
  mounted(){
    axios.get("http://localhost:3000/palabra/").then(response=>this.palabras = response.data)
    console.log(response.data)
    },
  
  methods:{
    eliminar(id){
      axios.delete("http://localhost:3000/palabra/" + id).then(response => {console.log(response)})  
    },

    actualizar(){
      axios.get("http://localhost:3000/palabra/").then(response=>this.palabras = response.data)
      console.log(response.data)
    },

    DeletedToast() {
        this.$buefy.toast.open({
            message: 'Eliminado',
            type: 'is-danger'
        })
    },
  },

  }

</script>

<style lang="scss" scoped>
  #paddingList{
    padding-top: 30px;
    padding-bottom: 50px;
  }

  #paddingIcon{
    padding-right: 1px;
    padding-left: 1px; 
  }

  #center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  

</style>