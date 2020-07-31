<template>
  <div class="setup">
    <Ambiente />
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Ambiente from "@/components/Ambiente.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Setup",
  components: {
    Ambiente,
    Footer
  }
};
</script>
