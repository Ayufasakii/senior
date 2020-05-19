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
      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
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

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Create teacher accounts</v-list-item-title>
          </v-list-item>

          <nuxt-link class="nuxt-link" to="/SCT">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Create student information</v-list-item-title>
          </v-list-item>
          </nuxt-link>


          <nuxt-link class="nuxt-link" to="/SCT">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Edit teacher information</v-list-item-title>
          </v-list-item>
          </nuxt-link>

          <nuxt-link class="nuxt-link" to="/SCT">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Edit student information</v-list-item-title>
          </v-list-item>
          </nuxt-link>

          <nuxt-link class="nuxt-link" to="/SCT">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-checkbox-marked</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Approve cost form</v-list-item-title>
          </v-list-item>
          </nuxt-link>

          <nuxt-link class="nuxt-link" to="/SCT">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-eye</v-icon>
            </v-list-item-icon>
            <v-list-item-title>See visit form</v-list-item-title>
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
