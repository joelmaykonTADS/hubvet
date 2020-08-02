<template>
  <v-app id="inspire">
    <BarraNavegacao :drawer="drawer" />
    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>HubVet</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height grey lighten-3" fluid>
        <v-row>
          <v-col cols="12" sm="12" md="4">
            <v-text-field
              elevation="4"
              solo
              prepend-inner-icon="fas fa-search"
              placeholder="Buscar por itens ..."
              color="grey"
            ></v-text-field>
          </v-col>
          <v-col md="2">
            <v-checkbox
              v-model="filtroItens"
              label="Itens"
              color="teal"
            ></v-checkbox>
          </v-col>
          <v-col md="2">
            <v-checkbox
              v-model="filtroGrupos"
              label="Grupos"
              color="teal"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <ListaItensGrupos
              :itens="itens"
              @itemSelecionado="receberItemSelecionado"
            />
          </v-col>
          <v-col cols="4">
            <Carrinho :itens="itensSelecionados" />
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
  methods: {
    receberItemSelecionado(item) {
      if (item.selecionado) {
        this.itensSelecionados.push(item);
        if (item.itens) {
          item.itens.forEach(element => {
            this.itensSelecionados.push(element);
          });
        }
      } else {
        this.itensSelecionados = this.retirarItem(this.itensSelecionados, item);
      }
    },
    retirarItem(itens, item) {
      const restoItens = itens.filter(function(valor) {
        return valor.id !== item.id;
      });
      return restoItens;
    }
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: true,
    filtroItens: true,
    filtroGrupos: false,
    itensSelecionados: [],
    itens: [
      {
        id: 1,
        sigla: "GLIC",
        nome: "Item 1",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: [],
        selecionado: false
      },
      {
        id: 2,
        sigla: "GLIC 2",
        nome: "Item 2",
        prazo: 0,
        valor: 25.76,
        descricao:
          "Aqui irão conter mais informações sobre o item (Ex: Descrição )",
        itens: [],
        selecionado: false
      },
      {
        id: 3,
        sigla: "GP 1",
        nome: "Grupo 1",
        prazo: 0,
        valor: 19.68,
        descricao: "",
        itens: [],
        selecionado: false
      },
      {
        id: 4,
        sigla: "GP 2",
        nome: "Grupo 2",
        prazo: 2,
        valor: 60.03,
        descricao: "",
        itens: [
          {
            id: 1,
            sigla: "IT7",
            nome: "Item 7",
            prazo: 2,
            valor: 18.07,
            selecionado: false
          },
          {
            id: 2,
            sigla: "IT3",
            nome: "Item 3",
            prazo: 1,
            valor: 18.07,
            selecionado: false
          },

          {
            id: 3,
            sigla: "IT6",
            nome: "Item 6",
            prazo: 1,
            valor: 23.89,
            selecionado: false
          }
        ],
        selecionado: false
      },
      {
        id: 5,
        sigla: "GP 3",
        nome: "Grupo 3",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: [],
        selecionado: false
      },
      {
        id: 6,
        sigla: "IT 7",
        nome: "Item 7",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: [],
        selecionado: false
      },
      {
        id: 7,
        sigla: "IT20",
        nome: "Item 20",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: [],
        selecionado: false
      }
    ]
  })
};
</script>
