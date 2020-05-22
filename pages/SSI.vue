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
                <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                ></v-data-table>
              </v-card>
            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  layout (context) {
    return 'SLayout'
  },
  data () {
      return {
        search: '',
        headers: [
          {
            text: 'Student ID',
            align: 'start',
            value: 'ID',
          },
          { text: 'Name', value: 'name' },
          { text: 'Major', value: 'major' },
        ],
        desserts: [
          {
            ID: '6031301001',
            name: 'John Doe',
            major: "IT",
          },
          {
            ID: '6031301002',
            name: 'Peter Parker',
            major: "IT",
          },
          {
            ID: '6031501002',
            name: 'Jane J',
            major: "SE",
          },
        ],
      }
    },
}
</script>