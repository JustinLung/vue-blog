<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header.vue"; // @ is an alias to /src
export default {
  components: {
    Header,
  },
  mounted: function() {
    this.$store.dispatch("verify")
  }
};
</script>
<style lang="scss">
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_mixins.scss";
@import "@/scss/base/_global.scss";
@import "@/scss/base/_typography.scss";
</style>
