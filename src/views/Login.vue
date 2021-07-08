<template>
  <div class="login-page">
    <div class="container-hero">
      <div class="image-container">
        <img src="../assets/login_image.svg" />
        <h3>
          Read and share blogpost <br />
          across the globe.
        </h3>
      </div>
    </div>
    <div class="container-inputs">
      <div class="wrapper">
        <div class="text-container">
          <h1>Login</h1>
          <p>
            Don't have an account yet?
            <router-link to="/register">Register</router-link>
          </p>
          <p>
            <router-link to="/password">Forgot Password?</router-link>
          </p>
        </div>
        <div class="form-container">
          <label for="username">Username</label>
          <input type="text" name="username" v-model="username" />
          <label for="password">Password</label>
          <input type="password" name="password" v-model="password" />
          <button @click="this.login" class="cta">Login</button>
        </div>
      </div>
    </div>
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
@import "@/scss/components/_buttons.scss";
.login-page {
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .container-hero {
    flex: 1;
  }
  .image-container {
    background-color: #35495e;
    color: #fff;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    img {
      max-width: 50%;
      max-height: 50%;
    }

    h3 {
      margin-top: 2em;
      font-size: 2rem;
    }
  }
  .container-inputs {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .text-container {
      margin-bottom: 0.8em;

      p {
        padding-top: 0.5em;

        a {
          color: #42b883;
        }
      }
    }

    .form-container {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      input {
        padding: 12px 20px;
        width: 100%;
        font-size: 1.2em;
      }

      label {
        margin: 12px 0;
      }

      button {
        margin: 2em auto;
        font-size: 1em;
      }
    }
  }
}

@media (max-width: 992px) {
  .login-page {
    flex-direction: column;

    .container-hero {
      display: none;
    }

    .container-inputs {
      text-align: center;
    }
  }
}
</style>
