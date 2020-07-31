<template>
  <div class="setup">
    <Laboratorio />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Laboratorio from "@/components/Laboratorio.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Setup",
  components: {
    Laboratorio,
    Footer
  }
};
</script>
