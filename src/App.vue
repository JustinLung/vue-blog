<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/login" v-if="!this.$store.state.status.loggedIn">Login</router-link>
      <p @click="$store.dispatch('logout')" v-if="this.$store.state.status.loggedIn">Logout</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted: function() {
    console.log(this.$store.state.status.loggedIn);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  p {
    display: inline-block;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
