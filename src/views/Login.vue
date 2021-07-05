<template>
  <div class="login-page">
    <div class="container-inputs">
      <h1>Login</h1>
      <input type="text" v-model="username" />
      <input type="password" name="" id="" v-model="password" />
      <button @click="this.login">Login</button>
    </div>
    <div class="container-hero">hello</div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
  .container-inputs {
      flex: 1;
      background: red;
  }
  .container-hero {
      flex: 1;
      background: blue;
  }
}

@media(max-width: 768px) {
    .login-page {
        flex-direction: column;
    }
}
</style>
