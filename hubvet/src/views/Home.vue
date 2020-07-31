<template>
  <div class="home">
    <BemVindo />
  </div>
</template>

<script>
// @ is an alias to /src
import BemVindo from "@/components/BemVindo.vue";

export default {
  name: "Home",
  components: {
    BemVindo
  }
};
</script>
