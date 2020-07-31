<template>
  <v-container fill-height fluid>
    <v-row class="text-left" align="center" justify="center">
      <v-col cols="4">
        <v-flex>
          <v-img
            :src="require('../assets/laboratorio.svg')"
            class="mt-10"
            contain
            height="250"
          />
          <v-divider />
        </v-flex>
        <p class="subheading grey--text text--darken-1 font-weight-medium">
          <b class="font-weight-bold">Cuide</b> e
          <b class="font-weight-bold">Aumente</b> a
          <b class="font-weight-bold">receita</b> do seu
          <b class="font-weight-bold">Laboratório.</b><br />
          Ofereça à seus clientes um ambiente
          <b class="font-weight-bold">seguro</b> e
          <b class="font-weight-bold">eficaz.</b>
        </p>
          
      </v-col>
    </v-row>
    <v-row class="text-left" align="center" justify="center">
      <v-col cols="3">
      <v-select
          v-model="item"
          color="grey"
          :items="items"
          label="O que você deseja fazer?"
        ></v-select>
         <v-btn block color="teal" dark>Realizar setup</v-btn>
      </v-col>
    </v-row>   
  </v-container>
</template>

<script>
export default {
  name: "Laboratorio",
  data: () => ({
     item:"'Cuidar do meu Laboratório'",
     items: ['Cuidar do meu Laboratório']
  }),
};
</script>
