<template>
  <v-container fill-height fluid>
    <v-row class="text-left" align="center"
      justify="center">
      <v-col cols="4">
        <h1 class="heading-5 font-weight-medium mb-3 grey--text text--darken-1">
         Bem Vindo(a)!
        </h1>
        <h2 class="grey--text text--darken-1 font-weight-bold">leolands,</h2>
        <p class="subheading grey--text text--darken-1 font-weight-medium">
          Obrigado por ter escolhido a <b class="font-weight-bold">Hubvet</b> como sua plataforma veterinária preferida. 
          ;) Agora que você já está cadastrado, poderá usufluir da plataforma de diversas formas.
           Armazenar informações do seu animal em nuvem com total segurança, 
           criar um Ambiente para Laboratório Veterinário ou Clínica Veterinária 
           clicando no botão de setup logo abaixo.
        </p>
      </v-col>
      <v-col cols="6">
        <v-img
          :src="require('../assets/drawkit-server-woman.svg')"
          class="my-3"
          contain
          height="600"
        />
      </v-col>      
    </v-row>
    <row>
      <v-col class="text-center" align="center"
      justify="center">
        <v-btn></v-btn>
      </v-col>
    </row>
  </v-container>
</template>

<script>
export default {
  name: "BemVindo",
  data: () => ({
    //
  })
};
</script>
