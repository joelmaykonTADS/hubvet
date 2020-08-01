<template>
  <v-app id="inspire">
    <BarraNavegacao :drawer="drawer" />
    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height grey lighten-3" fluid>
        <v-row>
          <v-col cols="8">
              <ListaItensGrupos />
          </v-col>
          <v-col cols="4">
            <Carrinho />
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
import ListaItensGrupos from "@/components/ListaItensGrupos.vue";
import Carrinho from "@/components/Carrinho.vue";

export default {
  name: "WorkSpace",
  components: {
    BarraNavegacao,
    ListaItensGrupos,
    Carrinho
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: true,
    filtroItens: true,
    filtroGrupos: false
  })
};
</script>
