<template>
  <div class="wrapper">
    <div class="user-info">
      <h1>User Data</h1>
      <ul>
        <li v-for="(value, name) in userInfo" :key="name">
          {{ name }}: {{ value }}
        </li>
      </ul>
    </div>
    <div class="logout">
      <div class="logout-btn">
        <base-button text="Log out" @click="logout" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    getUserData() {
      this.userInfo = JSON.parse(
        JSON.stringify(this.$store.getters.getUserInfo)
      );
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  mounted() {
    this.getUserData();
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}

.logout-btn {
  position: absolute;
  right: 0%;
  top: 20px;
  transform: translate(-50%, -50%);
}

.logout-btn:hover {
  font-size: 16px;
}
</style>
