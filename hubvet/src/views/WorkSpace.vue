<template>
  <v-app id="inspire">
    <BarraNavegacao :drawer="drawer" />
    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-row align="center" justify="space-around">
              <v-col cols="12" sm="12" md="8">
                <v-text-field
                  prepend-inner-icon="fas fa-search"
                  placeholder="Buscar por itens ..."
                  color="grey"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col md="2">
                <v-checkbox
                  v-model="filtroItens"
                  class="mx-2"
                  label="Itens"
                  color="teal"
                ></v-checkbox>
              </v-col>
              <v-col md="2">
                <v-checkbox
                  v-model="filtroGrupos"
                  class="mx-2"
                  label="Grupos"
                  color="teal"
                ></v-checkbox>
              </v-col>
            </v-row>
            <TabelaItensGrupos />
          </v-col>
          <v-col cols="4"
            ><v-card />
            <v-row align="center" justify="center">Joel</v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import BarraNavegacao from "@/components/BarraNavegacao.vue";
import TabelaItensGrupos from "@/components/TabelaItensGrupos.vue";

export default {
  name: "Carrinho",
  components: {
    BarraNavegacao,
    TabelaItensGrupos
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: true,
    filtroItens:true,
    filtroGrupos:false
  })
};
</script>
