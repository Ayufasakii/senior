<template>
<v-app id="inspire">
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-toolbar color=#8c1515 dark flat>
                            <v-toolbar-title>Login</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>

                        <v-card-text>
                            <v-form>
                                <v-text-field label="Login" name="login" v-model="id" prepend-icon="mdi-account" type="text"></v-text-field>

                                <v-text-field id="password" label="Password" v-model="pass" name="password" prepend-icon="mdi-lock" type="password"></v-text-field>
                            </v-form>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color=#8c1515 dark @click="loginS()">Login with Staff</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color=#8c1515 dark @click="loginT()">Login with Teacher</v-btn>
                        </v-card-actions>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
const axios = require('axios');
export default {
    layout(context) {
        return 'LLayout'
    },
    props: {
        source: String,
    },
    data() {
        return {
            id: null,
            pass: null
        }
    },
    async asyncData({ params }) {
        let dataS = await axios.get(`http://localhost:5010/getS_IDandPass`)
        let dataT = await axios.get(`http://localhost:5010/getT_IDandPass`)
        return { S_idAndPass: dataS.data,T_idAndPass: dataT.data }
    },
    methods: {
        loginS: function () {
            let self = this
            let temp;
            let i;
            for (i = 0; i < self.S_idAndPass.length; i++) {
                if (self.id == self.S_idAndPass[i].I_ID && self.pass == self.S_idAndPass[i].I_password) {
                    temp = true
                    break;
                } else {
                    temp = false
                }
            }
            if(temp){
              this.$router.push('/SHome')
            }else{
              alert('Invalid ID or Password!')
            }
        },loginT: function () {
            let self = this
            let temp;
            let i;
            for (i = 0; i < self.T_idAndPass.length; i++) {
                if (self.id == self.T_idAndPass[i].T_ID && self.pass == self.T_idAndPass[i].T_password) {
                    temp = true
                    break;
                } else {
                    temp = false
                }
            }
            if(temp){
                sessionStorage.setItem('TID',self.id)
              this.$router.push('/THome')
              
            }else{
              alert('Invalid ID or Password!')
            }
        }
    }
}
</script>

<style>

  </style>
