<template>
  <div class="wrapper">
    <h1>Register</h1>
    <label for="username">Username</label>
    <input type="text" name="username" v-model="username" />
    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" />
    <label for="repeatedPassword">Repeat password</label>
    <input type="password" name="repeatedPassword" v-model="repeatedPassword" />
    <label for="image">Profile Picture (Not required)</label>
    <input type="file" name="image" ref="file" @change="onFileChange">
    <button @click="checkForm">Submit</button>
    <p v-if="errors.length">Please correct the following error(s)</p>
    <div class="errors" v-for="error in errors" :key="error">
      <li>{{ error }}</li>
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
      if (this.username == "") 
      this.errors.push("Fill in your username");

        //Check if username is under 20 characters
      if (this.username.length > 20)
        this.errors.push("Username must be 20 characters or fewer");

        //Check if password is empty
      if (this.password == "") 
      this.errors.push("Fill in your password");

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
        this.errors.push("You're password must contain a special character: ?, !, *, :, ;");

        //Check if passwords matchs
      if(this.password != this.repeatedPassword)
        this.errors.push("You're repeated password doesn't match")

      if(this.errors.length == 0) this.register(this.username, this.password, this.image)
    },
    register(username, password, image) {
        const formData = new FormData()
        formData.append("file", image)
        this.$store.dispatch("register", {username: username, password: password, image: image})
    },
    onFileChange(e) {
        const image = e.target.files[0]
        this.image = image
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
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