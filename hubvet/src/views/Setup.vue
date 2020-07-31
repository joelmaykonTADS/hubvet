<template>
  <div class="setup">
    <Laboratorio v-show="laboratorio" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Laboratorio from "@/components/Laboratorio.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Setup",
  props:{
    laboratorio:Boolean,
    usuario:Boolean,
    clinica:Boolean
  },
  components: {
    Laboratorio,
    Footer
  }
};
</script>
