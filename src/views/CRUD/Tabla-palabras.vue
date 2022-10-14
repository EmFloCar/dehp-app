<template>
  <div id="paddingList">
    <b-table :data="palabras" sticky-header height="600" narrowed hoverable striped> 
      <b-table-column field="lema" id="center" label="Lema" width="50" v-slot="props" searchable sortable centered>
          {{ props.row.lema }}
      </b-table-column>

      <b-table-column field="informacion_gramatical" label="Información Gramatical" width="50" v-slot="props"  centered>
          {{ props.row.informacion_gramatical }}
      </b-table-column>

      <b-table-column field="hiperonimo" label="Hiperónimo" width="50" v-slot="props" centered>
          {{ props.row.hiperonimo }}
      </b-table-column>

      <b-table-column field="etimologia" label="Etimología" width="20" v-slot="props" centered>
          {{ props.row.etimologia }}
      </b-table-column>

      <b-table-column field="significado" label="Significado" width="50" v-slot="props" centered>
          {{ props.row.significado }}
      </b-table-column>

      <b-table-column field="ejemplo" label="Ejemplo" width="50" v-slot="props" centered>
          {{ props.row.ejemplo }}
      </b-table-column>

      <b-table-column field="isoglosa" label="Isoglosa" width="50" v-slot="props" centered>
          {{ props.row.isoglosa }}
      </b-table-column>
      
      <b-table-column field="imagen" label="imagen" width="50" v-slot="props" centered>
        <b-tooltip
        label="clic aqui para ver la imagen"
        type="is-info"
        >
        <p class="control"> <b-button type="is-success" icon-pack="fas" icon-left="image" @click="isImageModalActive = true, setUrl(props.row.imagenUrl)"/> </p>
        </b-tooltip>

        <b-modal v-model="isImageModalActive">
            <p class="image is-4by3" >
                <img :src= url width="500" height="600">
            </p>
        </b-modal>
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
      palabras: [],
      isImageModalActive: false,
      url: null,
      
    } 
  },

// tabla
  async mounted(){
    if(!localStorage.token){
      return this.$router.replace('/noauth')
    }  
    
    let response = await axios.get("https://diccionario-backend.herokuapp.com/palabra/");
    this.palabras = response.data;
    },
  
  methods:{
    async eliminar(id){
      await axios.delete("https://diccionario-backend.herokuapp.com/palabra/" + id)
      this.palabras = this.palabras.filter((el)=>el._id !== id)
    },

    editar(id){
      this.$router.push('/crud/editar-palabra/' + id)
    },

    DeletedToast() {
        
        this.$buefy.toast.open({
            message: 'Eliminado',
            type: 'is-danger'
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
    },

    setUrl(seleccionada){
      this.url = seleccionada
    },
         
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

  .center{
     display: flex;
    justify-content: center;
    align-items: center;   
  }

</style>