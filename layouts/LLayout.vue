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
    </v-app-bar>

    <nuxt/>
  </v-card>
  </template>
<style>
.LogoMFU {
  margin: 5px;
  height:60px;
  width: 40px;
}
  </style>

