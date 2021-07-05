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
div {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  input,
  h1 {
    margin-bottom: 20px;
  }
  input,
  button {
    padding: 10px 15px;
  }
}
</style>