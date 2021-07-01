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
    Header
  },
};
</script>
<style lang="scss">

</style>
