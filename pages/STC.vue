<template>
<v-app id="inspire">
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card class="elevation-12">
                        <v-toolbar color=#8c1515 dark flat>
                            <v-toolbar-title>Confirm Information</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>

                         <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="First name" ref="Fname" v-model="Fname" :rules="[() => !!Fname || 'This field is required']" outlined dense required disabled>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Last name" ref="Lname" v-model="Lname" :rules="[() => !!Lname || 'This field is required']" outlined dense required disabled>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Teacher ID" ref="TID" v-model="TID" :rules="[() => !!TID || 'This field is required']" outlined dense required disabled>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Password" ref="Tpass" v-model="Tpass" :rules="[() => !!Tpass|| 'This field is required']" outlined dense required disabled>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Email" ref="Temail" v-model="Temail" :rules="[() => !!Temail || 'This field is required']" outlined dense required disabled>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Mobile Phone" ref="MPhone" v-model="MPhone" :rules="[() => !!MPhone || 'This field is required']" outlined dense required disabled>
                                    </v-text-field>
                                </v-col>

                            </v-row>

                            <v-row>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select :items="selectedSchool" label="School" v-model="selectedSchool" @input="schoolSelect" dense outlined required disabled></v-select>
                                </v-col>

                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select :items="selectedMajor" v-model="selectedMajor" label="Major" dense outlined required disabled>
                                    </v-select>
                                </v-col>

                            </v-row>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color=#8c1515 dark to="/SCS">Back</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color=#8c1515 dark @click="submit">Confirm</v-btn>
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
        return 'SLayout'
    },
    data: () => ({
        School: [],
        Major: [],
        selectedSchool: null,
        selectedMajor: null,
        Fname: null,
        Lname: null,
        TID: null,
        MPhone: null,
        Temail:null,
        Tpass :null,
    }),
    created() {
        let Cdata = sessionStorage.getItem('Cdata')
        Cdata = JSON.parse(Cdata);
        console.log(Cdata)
        this.Fname = Cdata.Fname
        this.Lname = Cdata.Lname
        this.TID = Cdata.TID
        this.Tpass = Cdata.Tpass
        this.Temail = Cdata.Temail
        this.MPhone = Cdata.MPhone
        this.selectedSchool = Cdata.selectedSchool
        this.selectedMajor = Cdata.selectedMajor
    },
    methods: {
        submit: function () {
            axios({
                method: 'post', 
                url: `http://localhost:5010/createTeacher`,
                data: {
                    TID:this.TID ,
                    Tname: this.Fname+" "+this.Lname,
                    Ttel: this.MPhone,
                    Tmajor:this.selectedMajor,
                    Tschool:this.selectedSchool,
                    Tpass:this.Tpass,
                    Temail:this.Temail
                }
            });
            confirm('Are you sure you want to create?') &&this.$router.push('/SHome')

        }
    }
}
</script>
