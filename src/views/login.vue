<template>
    <div id="login" style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 40px;"> 
        <div class="form-inputs" >
            <label for="username">Usuario</label>
            <b-input type="text" id="username" name="username" v-model="input.username"></b-input>
        </div>
        <div class="form-inputs">
            <label for="password">Contraseña</label>
            <b-input type="password" id="password" name="password" v-model="input.password"></b-input>
        </div>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
const axios = require('axios');
    export default {
        name: 'Login',
        data() {
            return {
                token: "",
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        mounted(){
            if(localStorage.token){
                this.token = localStorage.token;
                this.$router.push("/crud/palabras")
            }
        },

        methods: {
            login(){
                axios.post('https://diccionario-backend.herokuapp.com/login', this.input)
                    .then((response) => {
                        if(response.data.message == "Sesion iniciada con exito"){
                            this.token = response.data.token;
                            this.persist()
                            return this.$router.push('crud/palabras')

                        }
                        if (response.data == "Usuario o contraseña incorrecta" || 'El usuario no existe') {
                            const mensaje = 'Usuario o contraseña incorrecta'
                            return this.errorToast(mensaje)
                        }
                        if (response.data.status == 500) {
                            const mensaje = "Error en el servidor"
                            return this.errorToast(mensaje)
                        }
                    });
                
            },

            persist(){
                localStorage.token = this.token
            },

            errorToast(message){
            this.$buefy.toast.open({
                duration: 2500,
                message: message,
                position: 'is-bottom',
                type: 'is-danger'
                })
            },
            },
        }
</script>

<style>
#login .form-inputs {
    padding-bottom: 10px;
}
#login .form-inputs label {
    padding-right: 10px;
}
</style>