<template>
  <div>
      <h1>Hello {{ this.username }}!</h1>
      <img :src="this.$store.getters.getProfilePictureSrc" alt="">
  </div>
</template>

<script>
export default {
  computed: {
    username: function () {
      return this.$store.getters.getUsername;
    }
  },
    methods: {

    }
}
</script>

<style></style>
