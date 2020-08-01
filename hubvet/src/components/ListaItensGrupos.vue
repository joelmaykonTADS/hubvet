<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="8">
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
      <v-row
        class="text-left"
        align="center"
        v-for="item in novosItems"
        :key="item.id"
      >
        <v-col cols="12">
          <v-row>
            <v-col cols="1">
              <span class="caption text--secondary pl-3 font-weight-medium"
                >Tipo</span
              >
            </v-col>
            <v-col cols="2">
              <span class="caption text--secondary pl-3 font-weight-medium"
                >Sigla</span
              >
            </v-col>
            <v-col cols="3">
              <span class="caption text--secondary pl-3 font-weight-medium"
                >Nome</span
              >
            </v-col>
            <v-col cols="2">
              <span class="caption text--secondary pl-3 font-weight-medium"
                >Prazo (Dias)</span
              >
            </v-col>
            <v-col cols="3">
              <span class="caption text--secondary pl-3 font-weight-medium"
                >Valor</span
              >
            </v-col>
          </v-row>
          <v-card>
            <v-card-title>
              <v-row class="text-left" align="center">
                <v-col cols="1" class="pl-6">
                  <v-checkbox color="teal"></v-checkbox>
                </v-col>
                <v-col cols="2">
                  <span
                    class="body-1 text--secondary pl-3 font-weight-medium"
                    >{{ item.sigla }}</span
                  ></v-col
                >
                <v-col cols="3">
                  <span
                    class="body-1 text--secondary pl-3 font-weight-medium"
                    >{{ item.nome }}</span
                  ></v-col
                >
                <v-col cols="2">
                  <span
                    class="body-1 text--secondary pl-3 font-weight-medium"
                    >{{ item.prazo }}</span
                  ></v-col
                >
                <v-col cols="2">
                  <span class="body-1 text--secondary pl-3 font-weight-medium"
                    >R$ {{ item.valor }}</span
                  ></v-col
                >
                <v-col cols="2">
                  <v-btn icon @click.native="item.show = !item.show">
                    <v-icon>
                      {{ item.show ? "mdi-chevron-up" : "mdi-chevron-down" }}
                    </v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon small>
                      fas fa-ellipsis-v
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-subtitle v-if="item.descricao">
              <span class="caption text--secondary pl-3 font-weight-medium">
                {{ item.descricao }}
              </span>
            </v-card-subtitle>
          </v-card>
          <v-expand-transition>
            <div v-show="item.show" class="transparent pl-7">
              <div v-for="item in item.itens" :key="item.id">
                <v-row class="text-left" align="center">
                  <v-col cols="1" class="pl-6">
                    <v-checkbox color="teal"></v-checkbox>
                  </v-col>
                  <v-col cols="2">
                    <span
                      class="caption text--secondary pl-3 font-weight-medium"
                      >{{ item.sigla }}</span
                    ></v-col
                  >
                  <v-col cols="3">
                    <span
                      class="caption text--secondary pl-3 font-weight-medium"
                      >{{ item.nome }}</span
                    ></v-col
                  >
                  <v-col cols="2">
                    <span
                      class="caption text--secondary pl-3 font-weight-medium"
                      >{{ item.prazo }}</span
                    ></v-col
                  >
                  <v-col cols="2">
                    <span
                      class="caption text--secondary pl-3 font-weight-medium"
                      >R$ {{ item.valor }}</span
                    ></v-col
                  >
                  <v-col cols="2">
                    <v-btn icon @click.native="item.show = !item.show">
                      <v-icon>
                        {{ item.show ? "mdi-chevron-up" : "mdi-chevron-down" }}
                      </v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon small>
                        fas fa-ellipsis-v
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    this.addShow();
  },
  methods: {
    addShow() {
      this.novosItems = this.itens.map(itens => ({
        ...itens,
        show: false
      }));
    }
  },
  data: () => ({
    novosItems: [],
    itens: [
      {
        id: 1,
        sigla: "GLIC",
        nome: "Item 1",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: []
      },
      {
        id: 2,
        sigla: "GLIC 2",
        nome: "Item 2",
        prazo: 0,
        valor: 25.76,
        descricao:
          "Aqui irão conter mais informações sobre o item (Ex: Descrição )",
        itens: []
      },
      {
        id: 3,
        sigla: "GP 1",
        nome: "Grupo 1",
        prazo: 0,
        valor: 19.68,
        descricao: "",
        itens: []
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
            valor: 18.07
          },
          {
            id: 2,
            sigla: "IT3",
            nome: "Item 3",
            prazo: 1,
            valor: 18.07
          },

          {
            id: 3,
            sigla: "IT6",
            nome: "Item 6",
            prazo: 1,
            valor: 23.89
          }
        ]
      },
      {
        id: 5,
        sigla: "GP 3",
        nome: "Grupo 3",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: []
      },
      {
        id: 6,
        sigla: "IT 7",
        nome: "Item 7",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: []
      },
      {
        id: 7,
        sigla: "IT20",
        nome: "Item 20",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: []
      }
    ]
  })
};
</script>
