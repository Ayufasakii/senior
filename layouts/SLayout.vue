<template>
 <v-card
    class="mx-auto overflow-hidden"
    height="900"
  >
    <v-app-bar
      color=#8c1515
      dark
      height="70"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
  <img
    alt="LogoMFU"
    src="../assets/pic/MFU.png"
    class="LogoMFU"
  >
      <v-toolbar-title>Mae Fah Luang University</v-toolbar-title>
        <v-spacer></v-spacer>
    <nuxt-link class="nuxt-link" to="/">
    <v-btn tile outlined color="success">
    <v-icon left>mdi-logout</v-icon> Logout
    </v-btn>
    </nuxt-link>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <nuxt-link class="nuxt-link" to="/SHome">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          </nuxt-link>

          <nuxt-link class="nuxt-link" to="/SCS">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Create student information</v-list-item-title>
          </v-list-item>
          </nuxt-link>

          <nuxt-link class="nuxt-link" to="/SSI">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Student information</v-list-item-title>
          </v-list-item>
          </nuxt-link>

          <nuxt-link class="nuxt-link" to="/STI">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Teacher information</v-list-item-title>
          </v-list-item>
          </nuxt-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <nuxt/>

  </v-card>

  </template>


<style>
.LogoMFU {
  margin: 5px;
  height:60px;
  width: 40px;
}

.nuxt-link{
     text-decoration: none;
 }
  </style>


  <script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
