<template>
  <div>
    <div class="header">
      <h2>Register for a MyReadlist Account</h2>
    </div>
    <form @submit.prevent="register" class="content">
      <fieldset>
        <p>All fields are required.</p>

        <div class="line">
          <label for="name">Real Name</label>
          <input v-model="name" type="text" placeholder="Real Name">
        </div>

        <div class="line">
          <label for="username">Username</label>
          <input v-model="username" type="text" placeholder="Username">
        </div>

        <div class="line">
          <label for="password">Password</label>
          <input v-model="password" type="password" placeholder="Password">
        </div>

        <div>
          <button type="submit" class="pure-button pure-button-primary">Submit</button>
        </div>
      </fieldset>
    </form>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      name: "",
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async register() {
      try {
        this.error = await this.$store.dispatch("register", {
          name: this.name,
          username: this.username,
          password: this.password
        });
        if (this.error === "") this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
form {
  border: 3px solid #cc9887;
  border-radius: 4px;
  padding: 10px;
}

fieldset {
  border: none;
}

.line {
  margin: 0.5em;
}

.line label {
  margin-right: 0.5em;
}

.line input {
  line-height: 2em;
  border: none;
  border-radius: 0.2em;
}

button {
  border: none;
  line-height: 2em;
  background-color: #cc9887;
  font-size: 1em;
  border-radius: 0.5em;
}
</style>