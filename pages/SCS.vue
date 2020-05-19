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
                <v-toolbar-title>Home</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
             
              <v-card-text>
                <v-row>
                <v-col cols="12" sm="6">
                <v-text-field
                label="First name"
                outlined
                dense
                >
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                <v-text-field
                label="Last name"
                outlined
                dense
                >
                </v-text-field>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6">
                <v-select
                :items="School"
                label="School"
                dense
                outlined
                ></v-select>
                </v-col>
                
                <v-col class="d-flex" cols="12" sm="6">
                <v-select
                :items="Major"
                label="Major"
                dense
                outlined
                ></v-select>
                </v-col>

                <v-col cols="12" sm="6">
                <v-text-field
                label="Organization Name"
                outlined
                dense
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
                ></v-textarea>
                </v-col>

                </v-row>
              </v-card-text>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color=#8c1515 dark>Submit</v-btn>
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
  layout: 'SLayout',
  // OR
  layout (context) {
    return 'SLayout'
  },
  data: () => ({
      School: ['IT', 'Bar', 'Fizz', 'Buzz'],
      Major: ['IT', 'CS', 'SE', 'Buzz'],
    }),
}
</script>