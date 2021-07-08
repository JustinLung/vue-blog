<template>
  <div class="register-page">
    <!-- <h1>Register</h1>
    <label for="username">Username</label>
    <input type="text" name="username" v-model="username" />
    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" />
    <label for="repeatedPassword">Repeat password</label>
    <input type="password" name="repeatedPassword" v-model="repeatedPassword" />
    <label for="image">Profile Picture (Not required)</label>
    <input type="file" name="image" ref="file" @change="onFileChange" />
    <button @click="checkForm">Submit</button>
    <p v-if="errors.length">Please correct the following error(s)</p>
    <div class="errors" v-for="error in errors" :key="error">
      <li>{{ error }}</li>
    </div> -->
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
          <h1>Get started.</h1>
          <p>
            Already have an account?
            <router-link to="/login">Login</router-link>
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
          <label for="repeatedPassword">Repeat password</label>
          <input
            type="password"
            name="repeatedPassword"
            v-model="repeatedPassword"
          />
          <label for="image">Profile Picture (Not required)</label>
          <input type="file" name="image" ref="file" @change="onFileChange" />
          <p v-if="errors.length">Please correct the following error(s)</p>
          <div class="errors" v-for="error in errors" :key="error">
            <li>{{ error }}</li>
          </div>
          <button @click="checkForm" class="cta">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: function () {
    return {
      username: "",
      password: "",
      repeatedPassword: "",
      image: "",
      errors: [],
    };
  },
  methods: {
    checkForm() {
      this.errors = [];
      //Check if username is empty
      if (this.username == "") this.errors.push("Fill in your username");

      //Check if username is under 20 characters
      if (this.username.length > 20)
        this.errors.push("Username must be 20 characters or fewer");

      //Check if password is empty
      if (this.password == "") this.errors.push("Fill in your password");

      //Check if password has a length longer than 8
      if (this.password.length < 8 && this.password != "")
        this.errors.push("You're password must be over 8 characters long");
      //Check if password contains a uppercase letter
      if (!this.password.match("[A-Z]") && this.password != "")
        this.errors.push("You're password must contain 1 uppercase letter");

      //Check if password contains a lowercase letter
      if (!this.password.match("[a-z]") && this.password != "")
        this.errors.push("You're password must contain 1 lowercase letter");

      //Check if password contains a special character
      if (!this.password.match("[?!*:;]") && this.password != "")
        this.errors.push(
          "You're password must contain a special character: ?, !, *, :, ;"
        );

      //Check if passwords matchs
      if (this.password != this.repeatedPassword)
        this.errors.push("You're repeated password doesn't match");

      if (this.errors.length == 0)
        this.register(this.username, this.password, this.image);
    },
    register(username, password, image) {
      const formData = new FormData();
      formData.append("file", image);
      this.$store.dispatch("register", {
        username: username,
        password: password,
        image: image,
      });
    },
    onFileChange(e) {
      const image = e.target.files[0];
      this.image = image;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/_buttons.scss";
.register-page {
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
        width: 90%;
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

  .errors {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;

    position: relative;
    width: 100%;
    padding: 0.3em;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
}

@media (max-width: 992px) {
  .register-page {
    flex-direction: column;

    .container-hero {
      display: none;
    }

    .container-inputs {
      text-align: center;

      .wrapper {
        .text-container {
          h1 {
            margin-top: 5rem;
          }
        }
      }

      .form-container {
        align-items: center;
      }
    }
  }
}
</style>
