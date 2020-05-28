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
                                    <v-text-field label="First name" v-model="Fname" outlined dense disabled>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Last name" v-model="Lname" outlined dense disabled>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Student ID" v-model="SID" outlined dense disabled>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Mobile Phone" outlined v-model="Mphone" dense disabled>
                                    </v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select :items="selectedSchool" label="School" v-model="selectedSchool" dense outlined disabled></v-select>
                                </v-col>

                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select :items="selectedMajor" label="Major" v-model="selectedMajor" dense outlined disabled></v-select>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Organization Name" outlined v-model="Oname" dense disabled>
                                    </v-text-field>
                                </v-col>

                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select :items="Province" v-model="SProvince" label="Province" dense outlined disabled>
                                    </v-select>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-textarea auto-grow label="Address" v-model="Address" outlined dense rows="3" row-height="25" disabled></v-textarea>
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
        SID: null,
        MPhone: null,
        Oname: null,
        Contact: null,
        SProvince: null,
        Address: null,
        Province: [],
    }),
    created() {
        let Cdata = sessionStorage.getItem('Cdata')
        Cdata = JSON.parse(Cdata);
        console.log(Cdata.Fname)
        this.Fname = Cdata.Fname
        this.Lname = Cdata.Lname
        this.SID = Cdata.SID
        this.Mphone = Cdata.MPhone
        this.Contact = Cdata.Contact
        this.Oname = Cdata.Oname
        this.SProvince = Cdata.SProvince
        this.Address = Cdata.Address
        this.selectedSchool = Cdata.selectedSchool
        this.selectedMajor = Cdata.selectedMajor
    },
    methods: {
        submit: function () {
            axios({
                method: 'post', 
                url: `http://localhost:5010/createStudents`,
                data: {
                    sID:this.SID ,
                    Sname: this.Fname+" "+this.Lname,
                    Stel: this.MPhone,
                    Smajor:this.selectedMajor,
                    Sschool:this.selectedSchool,
                    W_name:this.Oname,
                    W_address:this.Address,
                    W_contract:this.Contact,
                    W_province:this.SProvince
                }
            });
            confirm('Are you sure you want to create?') &&this.$router.push('/SHome')

        }
    }
}
</script>
