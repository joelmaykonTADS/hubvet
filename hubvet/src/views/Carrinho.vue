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
            <TabelaItensGrupos />
          </v-col>
          <v-col cols="4"><v-card />
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
import BarraNavegacao from "@/components/BarraNavegacao.vue"
import TabelaItensGrupos from "@/components/TabelaItensGrupos.vue"


export default {
  name: "Carrinho",
  components: {
    BarraNavegacao,
    TabelaItensGrupos
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: true,
  }),
}
</script>
