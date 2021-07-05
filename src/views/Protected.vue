<template>
  <div>
    <h1>Hello {{ this.username }}!</h1>
    <img :src="this.getProfileImage()" alt="" />
  </div>
</template>

<script>
export default {
  computed: {
    username: function () {
      return this.$store.getters.getUsername;
    },
  },
  methods: {
    getProfileImage() {
      const map = this.$store.state.user.userInfo.hashedUsername;
      const file = this.$store.state.user.userInfo.profile_picture;
      return `${process.env.VUE_APP_API_URL}/image/${map}/${file}`;
    },
  },
};
</script>

<style></style>
