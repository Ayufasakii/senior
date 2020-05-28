<template>
<v-app id="inspire">
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card class="elevation-12">
                        <v-toolbar color=#8c1515 dark flat>
                            <v-toolbar-title>Information</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>

                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="First name" 
                                    ref="Fname"
                                    v-model="Fname"
                                    :rules="[() => !!Fname || 'This field is required']" 
                                    outlined dense required>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Last name"
                                    ref="Lname"
                                    v-model="Lname"
                                    :rules="[() => !!Lname || 'This field is required']" 
                                    outlined dense required>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Student ID" 
                                    ref="SID"
                                    v-model="SID"
                                    :rules="[() => !!SID || 'This field is required']"
                                    outlined dense required>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Mobile Phone" 
                                    ref="MPhone"
                                    v-model="MPhone"
                                    :rules="[() => !!MPhone || 'This field is required']"
                                    outlined dense required>
                                    </v-text-field>
                                </v-col>

                            </v-row>

                            <v-row>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select :items="School" label="School" 
                                    v-model="selectedSchool" @input="schoolSelect" 
                                    dense outlined required></v-select>
                                </v-col>

                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select :items="Major" v-model="selectedMajor" label="Major" dense outlined required>
                                    </v-select>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Organization Name" 
                                    ref="Oname"
                                    v-model="Oname"
                                    :rules="[() => !!Oname || 'This field is required']"
                                    outlined dense required>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Organization contact" 
                                    ref="Contact"
                                    v-model="Contact"
                                    :rules="[() => !!Contact || 'This field is required']"
                                    outlined dense required>
                                    </v-text-field>
                                </v-col>

                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select :items="Province" label="Province" dense outlined required>
                                    </v-select>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-textarea auto-grow label="Address" 
                                    ref="Address"
                                    v-model="Address"
                                    :rules="[() => !!Address || 'This field is required']"
                                    outlined dense rows="3" row-height="25" required></v-textarea>
                                </v-col>

                            </v-row>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn to="/SSC" color=#8c1515 @click="submit" dark>Submit</v-btn>
                        </v-card-actions>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
export default {
    layout(context) {
        return 'SLayout'
    },
    data: () => ({
        School: ['Agro-Industry', 'Cosmetic Science', 'Dentistry', 'Health Science', 'Information Teachnology', 'Integrative Medicine', 'Law', 'Liberal Arts', 'Management', 'Medicine', 'Nursing', 'Science', 'Sinology', 'Social of Innovation'],
        Major: [],
        selectedSchool: null,
        selectedMajor: null,
        Province: ['Krabi', 'Bangkok', 'Kanchanaburi', 'Kalasin', 'Kamphaengphet', 'Khonkaen', 'Chanthaburi', 'Chachoengsao', 'Chonburi', 'Chainat',
            'Chaiyaphum','Chumphon','Chiangrai','Chiangmai','Trang','Trat','Tak','Nakhonnayok','Nakhonpathom','Nakhonphanom','Nakhonratchasima',
            'Nakhonsithammarat','Nakhonsawan','Nonthaburi','Narathiwat','Nan','Buriram','Pathumthani','Prachuapkhirikhan','Prachinburi',
            'Pattani','Ayutthaya','Phayao','Phangnga','Phatthalung','Phichit','Phitsanulok','Phetchaburi','Phetchabun','Phrae',
            'Phuket','Mahasarakham','Mukdahan','Maehongson','Yasothon','Yala','Roiet','Ranong','Rayong','Ratchaburi','Lopburi',
            'Loei','Lampang','Lamphun','Sisaket','Sakonnakhon','Songkhla','Satun','Samutprakan','Samutsongkhram','Samutsakhon','Sakaeo','Saraburi',
            'Singburi','Sukhothai','Suphanburi','Suratthani','Surin','Nongkhai','Nongbualamphu','Angthong','Amnatcharoen','Udonthani',
            'Uttaradit','Uthaithani','Ubonratchathani','Betong','Other'
        ],
    }),
    methods: {
        schoolSelect: function () {
            console.log('5555')
            let self = this
            console.log(self.selectedSchool)
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
    }

}
</script>
