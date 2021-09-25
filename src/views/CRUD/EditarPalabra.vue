<template>
  <div id="paddingForm">
    <form class="box">
      <section>
        <b-field label="Lema:" :label-position="'on-border'">
          <b-input v-model="palabra.lema"></b-input>
        </b-field>

        <b-field label="Información gramatical:" :label-position="'on-border'">
          <b-input v-model="palabra.informacion_gramatical"></b-input>
        </b-field>

        <b-field label="Hiperónimo:" :label-position="'on-border'">
          <b-input v-model="palabra.hiperonimo"></b-input>
        </b-field>

        <b-field label="Etimología:" :label-position="'on-border'">
          <b-input v-model="palabra.etimologia"></b-input>
        </b-field>

        <b-field label="Isoglosa:" :label-position="'on-border'">
          <b-input v-model="palabra.isoglosa"></b-input>
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
        imagenUrl: "",
        isoglosa: "",
      },
    };
  },

  methods: {
    editar() {
      axios
        .put("https://diccionario-backend.herokuapp.com/palabra/" + this.palabraId, this.palabra)
        .then((data) => {
          console.log(data);
        });
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
        this.palabra.isoglosa = datos.data.isoglosa;
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