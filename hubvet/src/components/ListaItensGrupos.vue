<template>
  <div>
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
    <v-card style="overflow-y: auto; overflow-x: hidden;" height="70vh" color="grey lighten-3" elevation="0">
      <v-row
        class="text-left"
        align="center"
        v-for="item in novosItems"
        :key="item.id"
      >
        <v-col cols="12">
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
    </v-card>
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
  props:{
    itens:Array
  },
  data: () => ({
    novosItems: []
  })
};
</script>
