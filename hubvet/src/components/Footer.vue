<template>
  <v-footer absolute>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <v-icon>mdi-home</v-icon>
      <strong>Desenvolvedor: Joel Maykon</strong>
    </v-col>
    <v-tooltip v-model="show" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          absolute
          dark
          fab
          buttom
          outlined
          right
          small
          color="grey"
        >
          <v-icon>mdi-help</v-icon>
        </v-btn>
      </template></v-tooltip
    >
  </v-footer>
</template>
