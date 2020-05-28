<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="8"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color=#8c1515
                dark
                flat
              >
                <v-toolbar-title>Search Teacher Information</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>

              <v-card>
                <v-card-title>
                <v-spacer></v-spacer>
                
                <v-col cols="12" sm="6" >
                <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                ></v-text-field>
                </v-col>

                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="teacher"
                :search="search"
                >

                <template v-slot:item.actions="{ item }">
                <nuxt-link class="nuxt-link" to="/STP">
                <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
                >
                mdi-account-edit
                </v-icon>
                </nuxt-link>
                <v-icon
                small
                @click="deleteItem(item)"
                >
                mdi-delete
                </v-icon>
                </template>

                </v-data-table>
              </v-card>
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
  layout (context) {
    return 'SLayout'
  },
      async asyncData({ params }) {
        const { data } = await axios.get(`http://localhost:5010/getAllTeachers`)
        console.log(data)
        return { teachers: data }
    },
  data () {
      return {
        search: '',
        headers: [
          {
            text: 'Teacher ID',
            align: 'start',
            value: 'T_ID',
          },
          { text: 'Name', value: 'T_name' },
          { text: 'Major', value: 'T_major' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        TID:null,
        teacher: [],
      }
    },
  created() {
    this.teacher = this.teachers
  },
  methods: {
  deleteItem (item) {
        const index = this.teacher.indexOf(item)
        this.TID = this.teacher[index].T_ID
        confirm('Are you sure you want to delete this item?') && axios({
                method: 'delete', 
                url: `http://localhost:5010/deleteTeacher`,
                data: {
                    TID:this.TID ,
                }
            });
            location.reload();
      },
  }
}
</script>