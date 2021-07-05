<template>
  <header>
    <h3 class="logo">Vlog</h3>
    <nav class="nav">
      <ul class="nav__list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/protected">Protected</router-link></li>
        <li v-if="!this.$store.state.status.loggedIn">
          <router-link to="/login">Login</router-link>
        </li>
        <li><router-link to="/register">Register</router-link></li>
        <li v-if="this.$store.state.status.loggedIn">
          <p @click="$store.dispatch('logout')">Logout</p>
        </li>
      </ul>
      <div
        class="hamburger-menu"
        id="hamburger"
        @click="hamburgerOpen = !hamburgerOpen"
        v-bind:class="{ hamburger__open: hamburgerOpen }"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </div>
      <div class="overlay" v-bind:class="{ overlay__open: hamburgerOpen }">
        <ul class="overlay__list">
        <li><router-link @click.native="hamburgerOpen = !hamburgerOpen" to="/">Homie</router-link></li>
        <li><router-link @click.native="hamburgerOpen = !hamburgerOpen" to="/about">About</router-link></li>
        <li><router-link @click.native="hamburgerOpen = !hamburgerOpen" to="/protected">Protected</router-link></li>
        <li v-if="!this.$store.state.status.loggedIn"><router-link @click.native="hamburgerOpen = !hamburgerOpen" to="/login">Login</router-link></li>
        <li><router-link @click.native="hamburgerOpen = !hamburgerOpen" to="/register">Register</router-link></li>
        <li v-if="this.$store.state.status.loggedIn"><p @click="$store.dispatch('logout')">Logout</p></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data: () => {
    return {
      hamburgerOpen: false,
    };
  }
};
</script>
<style lang="scss" scoped>
header {
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1000;

  .logo {
    position: relative;
    font-size: 1.5rem;
    margin-right: auto;
    margin-left: 1em;
    z-index: 1001;
  }

  .nav {
    padding: 2px;

    a {
      text-decoration: none;
    }

    p {
      text-decoration: none;
      display: inline-block;
    }

    .nav__list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      gap: 2.5em;
      margin-left: 2.5em;

      li:first-child {
        margin-left: auto;
      }

      li:last-child {
        margin-right: 3em;
      }
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;

      width: 100%;
      height: 100vh;
      background: #282828;

      display: flex;
      align-items: center;
      transform: translateX(-100%);
      transition: 0.3s ease-in-out;

      &__list {
        list-style: none;

        li {
          font-size: 2.5em;
          margin-left: 1em;
        }
      }
    }

    .overlay__open {
      transform: translateX(0%);
    }
  }

  .hamburger-menu {
    position: relative;
    z-index: 100;
    width: 30px;
    height: 18px;
    display: none;
    cursor: pointer;
    z-index: 1001;

    .hamburger-line {
      width: 30px;
      height: 2px;
      background-color: black;
      position: absolute;

      &:first-child {
        top: 0;
        transition: top 0.3s 0.3s, transform 0.3s;
      }

      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
        transition: opacity 0.3s 0.3s;
      }

      &:last-child {
        bottom: 0;
        transition: bottom 0.3s 0.3s, transform 0.3s;
      }
    }
  }

  .hamburger__open {
    .hamburger-line {
      &:first-child {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        transition: top 0.2s, transform 0.2s 0.2s;
      }

      &:nth-child(2) {
        opacity: 0;
        transition: opacity 0s 0.2s;
      }

      &:last-child {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
        transition: bottom 0.3s, transform 0.2s 0.2s;
      }
    }
  }
}

@media (max-width: 768px) {
  header .logo {
    margin-left: 0;
  }

  .logo {
    margin: 0;
    margin-left: 0px;
  }

  .nav__list {
    display: none !important;

    li:last-child {
      margin: 0;
    }
  }

  .hamburger-menu {
    display: block !important;
  }
}
</style>
