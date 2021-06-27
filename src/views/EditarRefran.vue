<template>
    <div id="paddingForm">
        <form class="box" >
            <section>

                <b-field label="Lema:" :label-position='"on-border"'>
                    <b-input v-model='refran.lema'></b-input>
                </b-field>

                <b-field label="Isoglosa:" :label-position='"on-border"'>
                    <b-input v-model='refran.isoglosa'></b-input>
                </b-field>

                <b-field label="Acto de habla:" :label-position='"on-border"'>
                    <b-input v-model='refran.acto_de_habla'></b-input>
                </b-field>

                <b-field label="Explicación:" :label-position='"on-border"'>
                    <b-input type="textarea" v-model='refran.explicacion'></b-input>
                </b-field>

                <b-field label="Ejemplo:" :label-position='"on-border"'>
                    <b-input type="textarea" v-model='refran.ejemplo'></b-input>
                </b-field>

                <div class="buttons is-centered">
                    <b-button type="is-info is-centered" v-on:click="editar(), EditedToast()" >Editar</b-button>
                    <b-button type="is-dark is-centered" v-on:click="salir()">Salir</b-button>
                </div>

            </section>
        </form>
     </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
          refranId: null,

          refran:{
            lema: "", 
            isoglosa: "",
            acto_de_habla: "",
            explicacion: "",
            ejemplo: ""
          }
        }
    },

    methods:{
        editar(){
            axios.put("http://localhost:3000/refran/" + this.refranId, this.refran).then(data=>{
                console.log(data)
            })
        },

        salir(){
           this.$router.push("/tabla-refranes") 
        },

        EditedToast() {
            this.$buefy.toast.open({
                message: 'Editado',
                type: 'is-info'
            })
        },        
    },

    mounted(){
        this.refranId = this.$route.params.id;
        axios.get("http://localhost:3000/refran/" + this.refranId).then(datos => {

            this.refran.lema = datos.data.lema;
            this.refran.isoglosa = datos.data.isoglosa;
            this.refran.acto_de_habla = datos.data.acto_de_habla;
            this.refran.explicacion = datos.data.explicacion;
            this.refran.ejemplo = datos.data.ejemplo;
        })
    }
}
</script>

<style lang="scss" scoped>
  #paddingForm{
    padding-top: 2%;
    padding-left: 20%;
    padding-right: 20%;
    padding-bottom: 5%;
  }
</style>