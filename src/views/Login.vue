<template>
  <div>
    <h1>Login</h1>
    <label for="username">Username</label>
    <input type="text" name="username" v-model="username" />
    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" />
    <button @click="this.login">Login</button>
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

@media (max-width: 768px) {
  .login-page {
    flex-direction: column;
  }
}
</style>
