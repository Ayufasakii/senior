<template>
 <v-card
    class="mx-auto overflow-hidden"
    
  >
    <v-app-bar
      color=#8c1515
      dark
      height="60"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
  <img
    alt="Vuetify Logo"
    src="../assets/pic/MFU.png"
    class="mfuLogo"
  >
      <v-toolbar-title>Mae Fah Luang University</v-toolbar-title>
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
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  </template>
<style>
.mfuLogo {
  margin: 5px;
  height:60px;
  width: 40px;
}
  </style>
