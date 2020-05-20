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
                <v-toolbar-title>List Teacher</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>

              <v-card-text>

              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <nuxt-link class="nuxt-link" to="/STL"><v-btn color=#8c1515 dark>Search</v-btn></nuxt-link>
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
  }
}
</script>