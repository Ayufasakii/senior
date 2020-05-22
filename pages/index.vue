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
                            <v-spacer></v-spacer>
                            <v-btn color=#8c1515 dark @click="login()">Login</v-btn>
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
        const { data } = await axios.get(`http://localhost:5010/getIDandPass`)
        return { idAndPass: data }
    },
    methods: {
        login: function () {
            let self = this
            let temp;
            let i;
            console.log(self.idAndPass)
            for (i = 0; i < self.idAndPass.length; i++) {
                console.log(self.idAndPass[0].I_ID)
                console.log(self.idAndPass.length)
                if (self.id == self.idAndPass[i].I_ID && self.pass == self.idAndPass[i].I_password) {
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
        }
    }
}
</script>

<style>

  </style>
