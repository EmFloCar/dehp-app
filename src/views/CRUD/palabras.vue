<template>
  <div>
    <div id="paddingForm">
      <form class="box" enctype="multipart/form-data">
        <section>
          <b-field label="Lema:" style="padding-bottom: 2%">
            <b-input v-model="nueva_palabra.lema" required></b-input>
          </b-field>

          <b-field
            label="Información gramatical:"
            style="padding-bottom: 2%"
          >
            <b-select
              v-model="nueva_palabra.informacion_gramatical"
              expanded
              required
              placeholder="seleccione una opción"
            >
              <option
                v-for="elemento in categoriasGramaticales"
                :value="elemento"
                :key="elemento"
              >
                {{ elemento }}
              </option>
            </b-select>
          </b-field>

          <b-field label="Hiperónimo:" style="padding-bottom: 2%">
            <b-select
              v-model="nueva_palabra.hiperonimo"
              expanded
              required
              placeholder="seleccione una opción"
            >
              <option
                v-for="elemento in hiperonimo"
                :value="elemento"
                :key="elemento"
              >
                {{ elemento }}
              </option>
            </b-select>
          </b-field>

          <b-field label="Etimología:" style="padding-bottom: 2%">
            <b-input type="textarea" v-model="nueva_palabra.etimologia" required></b-input>
          </b-field>

          <b-field label="Isoglosa:" style="padding-bottom: 3%">
            <div class="block centrado" 
            style="flex-wrap: wrap;">
              <b-checkbox 
                v-for="elemento in isoglosa"
                v-model="nueva_palabra.isoglosa"
                :native-value="elemento"
                :key="elemento">

                {{elemento}}

              </b-checkbox>
            </div>
            </b-field>

          <b-field label="Significado:" style="padding-bottom: 2%">
            <b-input
              type="textarea"
              v-model="nueva_palabra.significado"
              required
            ></b-input>
          </b-field>

          <b-field label="Ejemplo:" style="padding-bottom: 2%">
            <b-input
              type="textarea"
              v-model="nueva_palabra.ejemplo"
              required
            ></b-input>
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
            <b-button
              type="is-success is-centered is-medium"
              v-on:click="guardarVerificar()"
              >Guardar palabra</b-button
            >
          </div>
        </section>
      </form>
    </div> 
  </div>

</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      nueva_palabra: {
        lema: null,
        informacion_gramatical: null,
        hiperonimo: null,
        etimologia: null,
        significado: null,
        ejemplo: null,
        imagenUrl: null,
        isoglosa: [],
      },

      categoriasGramaticales: [
        "Sustantivo",
        "Adjetivo",
        "Artículo",
        "Pronombre",
        "Verbo",
        "Adverbio",
        "Interjección",
        "Preposición",
        "Conjunción",
        "Refran",
        "Frase proverbial",
        "Locución"
      ],

      isoglosa: [
        "Alto Sinú",
        "Medio Sinú",
        "Bajo Sinú",
        "San Jorge",
        "Costanera",
        "Sabanas",
      ],

      hiperonimo: [
        "Conocimiento de la naturaleza",
        "El mundo humano",
        "Acción del hombre sobre la naturaleza",
      ],

      imagen: {},
      palabras: [],
      vacio: 0,
    };
  },

  methods: {
    guardar() {
      const fd = new FormData();
      fd.append("lema", this.nueva_palabra.lema);
      fd.append("informacion_gramatical", this.nueva_palabra.informacion_gramatical);
      fd.append("hiperonimo", this.nueva_palabra.hiperonimo);
      fd.append("etimologia", this.nueva_palabra.etimologia);
      fd.append("significado", this.nueva_palabra.significado);
      fd.append("ejemplo", this.nueva_palabra.ejemplo);
      fd.append("file", this.imagen, this.imagen.name);
      fd.append("isoglosa", this.nueva_palabra.isoglosa);

      axios
        .post("https://diccionario-backend.herokuapp.com/palabra/", fd)
        .then((response) => {
          console.log(response.status);
        });
    },

    limpiar() {
      (this.nueva_palabra.lema = null),
        (this.nueva_palabra.informacion_gramatical = null),
        (this.nueva_palabra.hiperonimo = null),
        (this.nueva_palabra.etimologia = null),
        (this.nueva_palabra.significado = null),
        (this.nueva_palabra.ejemplo = null);
      (this.nueva_palabra.imagenUrl = null),
        (this.nueva_palabra.isoglosa = []);
      this.deleteDropFile();
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

    verificar() {
      if (this.nueva_palabra.lema == null || this.nueva_palabra.lema == "" ) {
        this.vacio++;
      }
      if (this.nueva_palabra.informacion_gramatical == null || this.nueva_palabra.informacion_gramatical == "" ) {
        this.vacio++;
      }
      if (this.nueva_palabra.hiperonimo == null || this.nueva_palabra.hiperonimo  == "" ) {
        this.vacio++;
      }
      if (this.nueva_palabra.etimologia == null || this.nueva_palabra.etimologia == "" ) {
        this.vacio++;
      }
      if (this.nueva_palabra.significado == null || this.nueva_palabra.significado == "" ) {
        this.vacio++;
      }
      if (this.nueva_palabra.ejemplo == null || this.nueva_palabra.ejemplo == "" ) {
        this.vacio++;
      }
      if (this.isEmptyObject(this.imagen) == true) {
        this.vacio++;
      }

      if (this.nueva_palabra.isoglosa.length == 0) {
        this.vacio++;
      }
    },

    isEmptyObject(obj) {
      for (var item in obj) {
        return false;
      }
      {
        return true;
      }
    },

    guardarVerificar() {
      this.verificar();

      if (this.vacio > 0) {
        this.$buefy.notification.open({
          duration: 5000,
          message: `Debe completar todos los campos`,
          position: "is-bottom-right",
          type: "is-danger",
          hasIcon: true,
          iconPack: "fas",
          icon: "exclamation-circle",
        });
        this.vacio = 0;
      } else {
        this.savedToast(), this.guardar(), this.limpiar();
      }
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

.agrupar{
  width: 960px;
  border: 1px solid black;
  margin: 15px auto;
  padding: 100px;
}

</style>
