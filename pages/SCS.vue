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
            md="6"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color=#8c1515
                dark
                flat
              >
                <v-toolbar-title>Information</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
             
              <v-card-text>
                <v-row>
                <v-col cols="12" sm="6">
                <v-text-field
                label="First name"
                outlined
                dense
                required
                >
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                <v-text-field
                label="Last name"
                outlined
                dense
                required
                >
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" >
                <v-text-field
                label="Student ID"
                outlined
                dense
                required
                >
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" >
                <v-text-field
                label="Mobile Phone"
                outlined
                dense
                required
                >
                </v-text-field>
                </v-col>

                </v-row>

                <v-row>
                <v-col class="d-flex" cols="12" sm="6" >
                <v-select
                :items="School"
                label="School"
                dense
                outlined
                required
                ></v-select>
                </v-col>
                
                <v-col class="d-flex" cols="12" sm="6" >
                <v-select
                :items="Major"
                label="Major"
                dense
                outlined
                required
                >
                </v-select>
                </v-col>

                <v-col cols="12" sm="6">
                <v-text-field
                label="Organization Name"
                outlined
                dense
                required
                >
                </v-text-field>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6" >
                <v-select
                :items="Province"
                label="Province"
                dense
                outlined
                required
                >
                </v-select>
                </v-col>

                <v-col cols="12" sm="6">
                <v-textarea
                auto-grow
                label="Address"
                outlined
                dense
                rows="3"
                row-height="25"
                required
                ></v-textarea>
                </v-col>

                </v-row>
              </v-card-text>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <nuxt-link class="nuxt-link" to="/SSC"><v-btn color=#8c1515 dark>Submit</v-btn></nuxt-link>
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
  layout (context) {
    return 'SLayout'
  },
  data: () => ({
      School: ['Agro-Industry', 'Anti-Aging and Regenerative Medicine', 'Cosmetic Science', 'Dentistry','Health Science','Information Teachnology','Integrative Medicine','Law','Liberal Arts','Management','Medicine','Nursing','Science','Sinology','Social of Innovation'],
      Major: ['IT', 'CS', 'SE', 'CE'],
      Province: ['Ang Thong', 'Amnat Charoen', 'Bueng Kan', 'Buriram'],
    }),
    
}
</script>