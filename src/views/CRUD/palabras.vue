<template>
  <div>
    <div id="paddingForm">
      <form
        class="box"
        enctype="multipart/form-data"
        style="background-color: lavender;"
      >
        <section>
          <b-field label="Lema:" :label-position="'on-border'">
            <b-input v-model="nueva_palabra.lema"></b-input>
          </b-field>

          <b-field
            label="Información gramatical:"
            :label-position="'on-border'"
          >
            <b-input v-model="nueva_palabra.informacion_gramatical"></b-input>
          </b-field>

          <b-field label="Hiperónimo:" :label-position="'on-border'">
            <b-input v-model="nueva_palabra.hiperonimo"></b-input>
          </b-field>

          <b-field label="Hipónimo:" :label-position="'on-border'">
            <b-input v-model="nueva_palabra.hiponimo"></b-input>
          </b-field>

          <b-field label="Isoglosa:" :label-position="'on-border'">
            <b-input v-model="nueva_palabra.isoglosa"></b-input>
          </b-field>
          
          <b-field label="Significado:" :label-position="'on-border'">
            <b-input
              type="textarea"
              v-model="nueva_palabra.significado"
            ></b-input>
          </b-field>

          <b-field label="Ejemplo:" :label-position="'on-border'">
            <b-input type="textarea" v-model="nueva_palabra.ejemplo"></b-input>
          </b-field>


          <b-field b-field class="centrado">
            <div class="box">
              <section>
                <b-field>
                  <b-upload v-model="seleccionada" drag-drop name="file">
                    <section class="section">
                      <div class="content has-text-centered">
                        <p>
                          <b-icon pack="fas" icon="upload" size="is-large">
                          </b-icon>
                        </p>
                        <p>Suelta la imagen aquí o haz clic para subir</p>
                      </div>
                    </section>
                  </b-upload>
                </b-field>

                <div class="tags">
                  <span
                    v-for="(file, index) in seleccionada"
                    :key="index"
                    class="tag is-primary"
                  >
                    {{ file.name }}
                    <button
                      class="delete is-small"
                      type="button"
                      @click="deleteDropFile(index)"
                    ></button>
                  </span>
                </div>
              </section>
            </div>
          </b-field>

          <!-- <b-field>
            <input @change="onImageSelected" type="file" name="file">
          </b-field> -->

          <div class="buttons is-centered">
            <b-button
              type="is-success is-centered is-medium"
              v-on:click="savedToast(), guardar(), limpiar()"
              >Guardar palabra</b-button
            >
          </div>
        </section>
      </form>
    </div>
    <pre>{{ $data }}</pre>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      nueva_palabra: {
        lema: "",
        informacion_gramatical: "",
        hiperonimo: "",
        hiponimo: "",
        significado: "",
        ejemplo: "",
        imagenUrl: null,
        isoglosa: "",
      },

      seleccionada: null,
      palabras: [],
    };
  },

  methods: {
    //form
    guardar() {
      const fd = new FormData();
      fd.append("lema", this.nueva_palabra.lema);
      fd.append("informacion_gramatical", this.nueva_palabra.informacion_gramatical);
      fd.append("hiperonimo", this.nueva_palabra.hiperonimo);
      fd.append("hiponimo", this.nueva_palabra.hiponimo);
      fd.append("significado", this.nueva_palabra.significado);
      fd.append("ejemplo", this.nueva_palabra.ejemplo);
      fd.append("file", this.seleccionada, this.seleccionada.name);
      fd.append("isoglosa", this.nueva_palabra.isoglosa);

      axios.post("https://diccionario-backend.herokuapp.com/palabra/", fd).then((response) => {
        console.log(response);
      });
    },

    limpiar() {
      (this.nueva_palabra.lema = ""),
        (this.nueva_palabra.informacion_gramatical = ""),
        (this.nueva_palabra.hiperonimo = ""),
        (this.nueva_palabra.hiponimo = ""),
        (this.nueva_palabra.significado = ""),
        (this.nueva_palabra.ejemplo = "");
      (this.nueva_palabra.imagenUrl = ""), (this.nueva_palabra.isoglosa = "");
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

    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },

    onImageSelected(event) {
      this.seleccionada = event.target.files[0];
      console.log(this.seleccionada);
    },
  },
};
</script>

<style lang="scss" scoped>
#paddingForm {
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
