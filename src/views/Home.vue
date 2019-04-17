<template>
  <div>
    <div class="header">
      <h2>My Readlist</h2>
    </div>

    <div class="content">
      <div v-if="user">
        <a href="#" @click="logout" class="logout">Logout</a>
        <h2>Welcome {{user.name}}!</h2>
        <display/>
      </div>
      <div v-else>
        <h2>Welcome to MyReadlist!</h2>
        <router-link to="/register" class="button">Register</router-link>or
        <router-link to="/login" class="button">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Display from "@/components/Display.vue";

export default {
  name: "home",
  components: {
    Display
  },
  async created() {
    await this.$store.dispatch("getUser");
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.logout {
  float: right;
}

.button {
  padding: .5em;
  border-radius: .5em;
  background-color: #cc9887;
  margin: .5em;
}
</style>