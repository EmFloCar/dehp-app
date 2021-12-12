<template>
  <div>
    <div id="paddingForm">
      <form class="box" >
        <section>

          <b-field label="Lema:">
            <b-input v-model='nuevoRefran.lema'></b-input>
          </b-field>

          <b-field label="Isoglosa:" style="padding-bottom: 3%">
            <div class="block centrado" 
            style="flex-wrap: wrap;">
              <b-checkbox 
                v-for="elemento in isoglosa"
                v-model="nuevoRefran.isoglosa"
                :native-value="elemento"
                :key="elemento">

                {{elemento}}

              </b-checkbox>
            </div>
            </b-field>

          <b-field label="Acto de habla:">
            <b-input v-model='nuevoRefran.acto_de_habla'></b-input>
          </b-field>

          <b-field label="Significado:">
            <b-input type="textarea" v-model='nuevoRefran.significado'></b-input>
          </b-field>

          <b-field >
            <div class="centrado">
              <section>
                <b-field>
                  <b-upload v-model="imagen" drag-drop accept="image/*">
                    <section class="section">
                      <div class="content has-text-centered">
                        <p>
                          <b-icon pack="fas" icon="upload" size="is-large">
                          </b-icon>
                        </p>
                        <p>Suelta la imagen aquí o haz click para subir</p>
                      </div>
                    </section>
                  </b-upload>
                </b-field>

                <div class="tags">
                  <span class="tag is-primary" v-show="imagen.name != null">
                    {{ imagen.name }}
                    <button
                      class="delete is-small"
                      type="button"
                      @click="deleteDropFile(), imageDeletedToast()"
                    ></button>
                  </span>
                </div>
              </section>
            </div>
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
        isoglosa: [],
        acto_de_habla: "",
        significado: "",
        },

      imagen: {},
      
      isoglosa: [
        "Alto Sinú",
        "Medio Sinú",
        "Bajo Sinú",
        "San Jorge",
        "Costanera",
        "Sabanas",
      ],
    
      refranes: [],
    } 
  },

  
  methods:{
    //form
    guardar(){
      const fd = new FormData();
      fd.append("lema", this.nuevoRefran.lema)
      fd.append("isoglosa", this.nuevoRefran.isoglosa)
      fd.append("acto_de_habla", this.nuevoRefran.acto_de_habla)
      fd.append("significado", this.nuevoRefran.significado)
      fd.append("file", this.imagen, this.imagen.name)

      axios
        .post("https://diccionario-backend.herokuapp.com/refran/", fd)
        .then(response=>{console.log(response.status)})
    },

    limpiar(){
      this.nuevoRefran.lema = "",
      this.nuevoRefran.isoglosa = [],
      this.nuevoRefran.acto_de_habla = "",
      this.nuevoRefran.significado = "",
      this.deleteDropFile()
    },

    savedToast() {
        this.$buefy.toast.open({
            message: 'Guardado',
            type: 'is-success'
        })
    },

    savedToast() {
      this.$buefy.toast.open({
        message: "Guardado",
        type: "is-success",
      });
    },

    imageDeletedToast() {
      this.$buefy.toast.open({
        message: "Imagen eliminada",
        type: "is-danger",
      });
    },

    deleteDropFile() {
      this.imagen = {};
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

  .centrado {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

