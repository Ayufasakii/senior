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
                <v-toolbar-title>Student Proflie</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
             
              <v-card-text>
                <v-row>
                <v-col cols="12" sm="6">
                <v-text-field
                label="First name"
                value="John"
                outlined
                dense
                disabled
                >
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                <v-text-field
                label="Last name"
                value="Doe"
                outlined
                dense
                disabled
                >
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" >
                <v-text-field
                label="Student ID"
                outlined
                dense
                disabled
                >
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" >
                <v-text-field
                label="Mobile Phone"
                outlined
                dense
                disabled
                >
                </v-text-field>
                </v-col>
                </v-row>

                <v-row>
                <v-col cols="12" sm="6">
                <v-text-field
                label="School"
                value="IT"
                outlined
                dense
                disabled
                >
                </v-text-field>
                </v-col>
                
                <v-col cols="12" sm="6">
                <v-text-field
                label="Major"
                value="IT"
                outlined
                dense
                disabled
                >
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                <v-text-field
                label="Organization Name"
                outlined
                dense
                disabled
                >
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                <v-text-field
                label="Province"
                value="Chiangrai"
                outlined
                dense
                disabled
                >
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                <v-textarea
                auto-grow
                label="Address"
                outlined
                dense
                rows="3"
                row-height="25"
                disabled
                ></v-textarea>
                </v-col>

                </v-row>
              </v-card-text>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <nuxt-link class="nuxt-link" to="/SHome"><v-btn color=#8c1515 dark>Edit</v-btn></nuxt-link>
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
}
</script>