<template>
  <div id="paddingList">
    <b-table :data="refranes" sticky-header height="500px" narrowed hoverable striped> 

      <b-table-column field="lema" label="Lema" width="150" v-slot="props" searchable sortable>
          {{ props.row.lema }}
      </b-table-column>

      <b-table-column field="isoglosa" label="Isoglosa" width="50" v-slot="props"  >
          {{ props.row.isoglosa }}
      </b-table-column>

      <b-table-column field="acto_de_habla" label="Acto de habla" width="50" v-slot="props" >
          <p> {{ props.row.acto_de_habla }} </p> 
      </b-table-column>

      <b-table-column field="significado" label="Significado" width="50" v-slot="props" >
          {{ props.row.significado }}
      </b-table-column>

      <b-table-column label="Acciones" width="50" v-slot="props" centered>
        <div class="field is-grouped" id="center">
          <p class="control"> <b-button type="is-danger" icon-pack="fas" icon-left="trash" v-on:click="eliminarNew(props.row._id)"/> </p>
          <p class="control"> <b-button type="is-info" icon-pack="fas" icon-left="edit" v-on:click="editar(props.row._id)"/> </p>
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
      refranes: [],
    } 
  },

  async mounted(){
    let response = await axios.get("https://diccionario-backend.herokuapp.com/refran/");
    this.refranes = response.data; 
    console.log(response.data)
    },
  
  methods:{
    async eliminar(id){
      let response = await axios.delete("https://diccionario-backend.herokuapp.com/refran/" + id)
      this.refranes = this.refranes.filter((el)=>el._id !== id)
      console.log(response)
    },

    async editar(id){
      this.$router.push('/crud/editar-refran/' + id)
    },

    DeletedToast() {
        
        this.$buefy.toast.open({
            message: 'Eliminado',
            type: 'is-danger',
        })
        
    },

    eliminarNew(id) {
        this.$buefy.dialog.confirm({
            title: 'Borrando entrada',
            message: 'Estás seguro que quieres <b>borrar</b> esta entrada? Esta acción no se puede deshacer.',

            confirmText: 'Borrar entrada',
            cancelText: 'Cancelar',

            type: 'is-danger',
            hasIcon: true,
            iconPack: 'fas',
            icon: 'exclamation-circle',
            onConfirm: () => { this.DeletedToast(), this.eliminar(id)},
        })
    }
         
  },

  }

</script>

<style lang="scss" scoped>
  #paddingList{
    padding: 30px 20px 50px 20px;
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