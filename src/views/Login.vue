<template>
    <div>
        <h1>Login</h1>
        <input type="text" v-model="username">
        <input type="password" name="" id="" v-model="password">
        <button @click="this.login">Login</button>
    </div>
</template>

<script>
export default {
    name: "Login",
    data: function() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
    login: function() {
      this.$store.dispatch("login", {username: this.username, password: this.password})
    }
  }
}
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        flex-direction: column;
        max-width: 568px;
        margin: 0 auto;
        * {
            margin-bottom: 10px;
        }
    }
</style>