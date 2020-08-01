<template>
  <div>
    <v-row>
      <v-col cols="3">
        <span class="caption text--secondary pl-3 font-weight-medium"
          >Sigla</span
        >
      </v-col>
      <v-col cols="6">
        <span class="caption text--secondary pl-3 font-weight-medium"
          >Nome</span
        >
      </v-col>
      <v-col cols="3">
        <span class="caption text--secondary pl-3 font-weight-medium"
          >Valor</span
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-row v-for="item in items" :key="item.id">
            <v-col cols="2">
              <span class="caption text--secondary pl-3 font-weight-regular"
                ><v-btn small outlined color="grey lighten">{{
                  item.sigla
                }}</v-btn></span
              >
            </v-col>
            <v-col cols="5">
              <span class="caption text--secondary pl-3 font-weight-regular">{{
                item.nome
              }}</span>
            </v-col>
            <v-col cols="3">
              <span class="caption text--secondary pl-3 font-weight-regular"
                >R$ {{ item.valor }}</span
              >
            </v-col>
            <v-col cols="1">
              <span class="caption text--secondary pl-3 font-weight-regular"
                >
                <v-btn icon flat>
                  <v-icon small color="red lighten-2">fas fa-trash</v-icon>
                </v-btn>
                </span
              >
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-card-action>
            <v-row>
              <v-col cols="8"
                ><span class="caption text--secondary pl-3 font-weight-regular"
                  >Valor total</span
                ></v-col
              >
              <v-col cols="4"
                ><span class="caption text--secondary pl-3 font-weight-regular"
                  >R$ {{ valorTotal }}</span
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col cols="8"
                ><span class="caption text--secondary pl-3 font-weight-regular"
                  >Valor do desconto</span
                ></v-col
              >
              <v-col cols="4"
                ><span class="caption text--secondary pl-3 font-weight-regular"
                  >R$ {{ valorDesconto }}</span
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col cols="8"
                ><span class="caption text--secondary pl-3 font-weight-bold"
                  >Total com Desconto</span
                ></v-col
              >
              <v-col cols="4"
                ><span class="caption text--secondary pl-3 font-weight-regular"
                  >R$ {{ valorTotalComDesconto }}</span
                ></v-col
              >
            </v-row>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    itemsPerPage: 4,
    items: [
      {
        id: 1,
        sigla: "gpt 1",
        nome: "Grupo 1",
        valor: 10
      },
      {
        id: 2,
        sigla: "gpt 1",
        nome: "Grupo 1",
        valor: 10
      },
      {
        id: 3,
        sigla: "gpt 1",
        nome: "Grupo 1",
        valor: 10
      }
    ]
  })
};
</script>
