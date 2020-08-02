<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            Valor Total da compra: R$ {{ valorTotal }}
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
    valorTotal: Number
  },
  watch: {
    valorTotal: function() {
      console.log(this.valorTotal);
    }
  },
  data: () => ({
    drawer: null
  })
};
</script>
