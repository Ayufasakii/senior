<template>
<v-app id="inspire">
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card class="elevation-12">
                        <v-toolbar color=#8c1515 dark flat>
                            <v-toolbar-title>Teacher Information</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>

                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="First name" ref="Fname" v-model="Fname" :rules="[() => !!Fname || 'This field is required']" outlined dense required>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Last name" ref="Lname" v-model="Lname" :rules="[() => !!Lname || 'This field is required']" outlined dense required>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Teacher ID" ref="TID" v-model="TID" :rules="[() => !!TID || 'This field is required']" outlined dense required>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Password" ref="Tpass" v-model="Tpass" :rules="[() => !!Tpass|| 'This field is required']" outlined dense required>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Email" ref="Temail" v-model="Temail" :rules="[() => !!Temail || 'This field is required']" outlined dense required>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Mobile Phone" ref="MPhone" v-model="MPhone" :rules="[() => !!MPhone || 'This field is required']" outlined dense required>
                                    </v-text-field>
                                </v-col>

                            </v-row>

                            <v-row>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select :items="School" label="School" v-model="selectedSchool" @input="schoolSelect" dense outlined required></v-select>
                                </v-col>

                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select :items="Major" v-model="selectedMajor" label="Major" dense outlined required>
                                    </v-select>
                                </v-col>

                            </v-row>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color=#8c1515 @click="submit" dark>Submit</v-btn>
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
      async asyncData({ params }) {
        const { data } = await axios.get(`http://localhost:5010/getAllTeachers`)
        console.log(data)
        return { teacher: data }
    },
    data: () => ({
        School: ['Agro-Industry', 'Cosmetic Science', 'Dentistry', 'Health Science', 'Information Teachnology', 'Integrative Medicine', 'Law', 'Liberal Arts', 'Management', 'Medicine', 'Nursing', 'Science', 'Sinology', 'Social of Innovation'],
        Major: [],
        selectedSchool: null,
        selectedMajor: null,
        Fname: null,
        Lname: null,
        TID: null,
        Tpass:null,
        Temail:null,
        MPhone: null,
    }),
    created() {
        let status = sessionStorage.getItem('Cstatus')
        if (status != 'Y') {

        } else {
            let Cdata = sessionStorage.getItem('Cdata')
            Cdata = JSON.parse(Cdata);
            this.Fname = Cdata.Fname
            this.Lname = Cdata.Lname
            this.TID = Cdata.TID
            this.Tpass = Cdata.Tpass
            this.Temail = Cdata.Temail
            this.MPhone = Cdata.MPhone
            this.selectedSchool = Cdata.selectedSchool
            this.selectedMajor = Cdata.selectedMajor
        }
    },
    methods: {
        schoolSelect: function () {
            let self = this
            if (self.selectedSchool == "Agro-Industry") {
                self.Major = ["Food Science and Technology", "Postharvest Technology and Logistics", "Postharvest Technology and Logistics And Bachelor of Business Administration Program in Logistics and Supply Chain Management"]
            } else if (self.selectedSchool == "Cosmetic Science") {
                self.Major = ["Beauty Technology", "Cosmetic Science"]
            } else if (self.selectedSchool == "Dentistry") {
                self.Major = ["Dental Surgery"]
            } else if (self.selectedSchool == "Health Science") {
                self.Major = ["Environmental Health", "Public Health Program", "Occupational Health and Safety", "Sports and Health Science"]
            } else if (self.selectedSchool == "Information Teachnology") {
                self.Major = ["Computer Engineering", "Digital Technology for Business Innovation", "Multimedia Technology and Animation", "Software Engineering"]
            } else if (self.selectedSchool == "Integrative Medicine") {
                self.Major = ["Applied Thai Traditional Medicine", "Physical Therapy Program", "Traditional Chinese Medicine"]
            } else if (self.selectedSchool == "Law") {
                self.Major = ["Laws"]
            } else if (self.selectedSchool == "Liberal Arts") {
                self.Major = ["English", "Thai Language and Culture"]
            } else if (self.selectedSchool == "Management") {
                self.Major = ["Accounting", "Aviation Business Management", "Business Administration", "Hospitality Industry Management", "Logistics and Supply Chain Management", "Tourism Management", "Economics"]
            } else if (self.selectedSchool == "Medicine") {
                self.Major = ["Medicine"]
            } else if (self.selectedSchool == "Nursing") {
                self.Major = ["Practical Nursing"]
            } else if (self.selectedSchool == "Science") {
                self.Major = ["Materials Engineering", "Applied Chemistry", "Biotechnology"]
            } else if (self.selectedSchool == "Sinology") {
                self.Major = ["Teaching Chines Language", "Business Chinese", "Chinese Language and Culture", "Chinese Studies"]
            } else if (self.selectedSchool == "Social of Innovation") {
                self.Major = ["International Development"]
            }
        },
        submit: function () {
            let self = this
            if (self.selectedSchool == null || self.Fname == null || self.selectedMajor == null ||
                self.Lname == null || self.TID == null || self.MPhone == null ||
                self.Temail == null || self.Tpass == null) {
                alert('Please check information that not empty!!')
            } else {
                let obj1 = self.teacher.find(o => o.T_name === self.Fname+" "+self.Lname);
                let obj2 = self.teacher.find(o => o.T_ID === self.TID);
                if(obj1 == undefined&&obj2 == undefined){
                let data = {
                    selectedSchool: self.selectedSchool,
                    Fname: self.Fname,
                    selectedMajor: self.selectedMajor,
                    Lname: self.Lname,
                    TID: self.TID,
                    Tpass:self.Tpass,
                    Temail:self.Temail,
                    MPhone: self.MPhone,
                }
                sessionStorage.setItem('Cdata', JSON.stringify(data))
                sessionStorage.setItem('Cstatus', 'Y')
                this.$router.push('/STC')
            }else{
                alert('This student already exist in system!!')
            }
            }
        }
    }

}
</script>
