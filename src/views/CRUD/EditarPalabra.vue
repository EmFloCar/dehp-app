<template>
  <div id="paddingForm">
    <form class="box">
      <section>
        <b-field label="Lema:" :label-position="'on-border'">
          <b-input v-model="palabra.lema"></b-input>
        </b-field>

          <b-field
            label="Información gramatical:"
            style="padding-bottom: 2%"
          >
            <b-select
              v-model="palabra.informacion_gramatical"
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
              v-model="palabra.hiperonimo"
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

        <b-field label="Etimología:" :label-position="'on-border'">
          <b-input v-model="palabra.etimologia"></b-input>
        </b-field>

          <b-field label="Isoglosa:" style="padding-bottom: 3%">
            <div class="block centrado" 
            style="flex-wrap: wrap;">
              <b-checkbox 
                v-for="elemento in isoglosa"
                v-model="palabra.isoglosa"
                :native-value="elemento"
                :key="elemento">

                {{elemento}}

              </b-checkbox>
            </div>
            </b-field>       

        <b-field label="Significado:" :label-position="'on-border'">
          <b-input type="textarea" v-model="palabra.significado"></b-input>
        </b-field>

        <b-field label="Ejemplo:" :label-position="'on-border'">
          <b-input type="textarea" v-model="palabra.ejemplo"></b-input>
        </b-field>

        <div class="buttons is-centered">
          <b-button
            type="is-info is-centered"
            v-on:click="editar(), EditedToast()"
            >Editar</b-button
          >
          <b-button type="is-dark is-centered" v-on:click="salir()"
            >Salir</b-button
          >
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      palabraId: null,

      palabra: {
        lema: "",
        informacion_gramatical: "",
        hiperonimo: "",
        etimologia: "",
        significado: "",
        ejemplo: "",
        // imagenUrl: "",
        isoglosa:[]
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
    };
  },
  methods: {
    editar() {
      this.palabra.isoglosa = this.palabra.isoglosa.toString()
      axios
        .put("https://diccionario-backend.herokuapp.com/palabra/" + this.palabraId, this.palabra)
        .then((data) => {
          console.log(data.status);
        });
      this.palabra.isoglosa = this.palabra.isoglosa.split(",")
    },
    salir() {
      this.$router.push("/crud/tabla-palabras");
    },
    EditedToast() {
      this.$buefy.toast.open({
        message: "Editado",
        type: "is-info",
      });
    },
  },
  mounted() {
    this.palabraId = this.$route.params.id;
    axios
      .get("https://diccionario-backend.herokuapp.com/palabra/" + this.palabraId)
      .then((datos) => {
        this.palabra.lema = datos.data.lema;
        this.palabra.informacion_gramatical = datos.data.informacion_gramatical;
        this.palabra.hiperonimo = datos.data.hiperonimo;
        this.palabra.etimologia = datos.data.etimologia;
        this.palabra.isoglosa = datos.data.isoglosa.split(",");
        this.palabra.significado = datos.data.significado;
        this.palabra.ejemplo = datos.data.ejemplo;
      });
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
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>