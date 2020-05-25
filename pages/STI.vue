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
                :items="student"
                :search="search"
                >

                <template v-slot:item.actions="{ item }">
                <nuxt-link class="nuxt-link" to="/SSP">
                <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
                >
                mdi-account-edit
                </v-icon>
                </nuxt-link>
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
        const { data } = await axios.get(`http://localhost:5010/getAllStudents`)
        console.log(data)
        return { students: data }
    },
  data () {
      return {
        search: '',
        headers: [
          {
            text: 'Teacher ID',
            align: 'start',
            value: 'S_ID',
          },
          { text: 'Name', value: 'S_name' },
          { text: 'Major', value: 'S_major' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        student: [],
      }
    },
  created() {
    this.student = this.students
  },
}
</script>