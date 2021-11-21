<template>
  <div class="wrapper">
    <div class="card">
      <div class="text-area">
        <h1>Welcome to Acme.</h1>
        <h6>Log in to your account by filling the form below.</h6>
      </div>
      <div class="input-area">
        <Input type="text" v-model="email" label="Email" kind="login"></Input>
        <Input
          type="password"
          v-model="password"
          label="Password"
          kind="login"
        ></Input>
        <div class="error-msg" v-if="errorMessage">{{ errorMessage }}</div>
      </div>
      <div class="login-area">
        <div class="login-button">
          <base-button text="Log in" @click="login" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  components: {
    Input,
    BaseButton,
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("login", {
        data: {
          email: this.email,
          password: this.password,
        },
      });
      if (this.$store.getters.isLoggedIn) {
        this.$router.push({ name: "home" });
      } else {
        this.showErrors();
      }
    },
    showErrors() {
      let error = this.$store.getters.getError;
      if (error === "Invalid password") {
        this.errorMessage = "The password you entered is incorrect";
      } else if (error == "Invalid e-mail") {
        this.errorMessage = "The e-mail address you entered is incorrect";
      } else {
        this.errorMessage =
          "The e-mail address and password you entered are incorrect";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  line-height: 30px;
  color: #757575;
  margin-top: 0;
}

h6 {
  font-size: 14px;
  line-height: 19px;
  color: #a1a1a1;
  margin-bottom: 0;
}

.wrapper {
  position: relative;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 0.65rem;
  padding: 20px;
  box-shadow: 0 0 10px #a1a1a1;
  width: 450px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
}

.login-button {
  text-align: center;
}
</style>
