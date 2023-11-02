<template>
  <div class="about">
    <h1>測試getters</h1>
    <div v-if="getLogin">
      <p>Token: {{ getLogin.token }}</p>
      <p>Username: {{ getLogin.username }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AboutView",
  computed: {
    ...mapGetters("ws", ["getLogin"]),
  },
  created() {
    // 在这里访问 this.getLogin
    console.log("getLogin data:", this.getLogin);
  },
};
</script>
