<template>
  <div class="signup-wrapper">
    <div class="text-area">
      <h1>Welcome to Acme.</h1>
      <h6>Create your account by filling the form below</h6>
    </div>
    <div class="input-area">
      <Input type="text" v-model="email" label="Email" kind="signup"></Input>
      <Input
        type="password"
        v-model="password"
        label="Password"
        kind="signup"
      ></Input>
    </div>
    <div class="submit-area">
      <div class="checkbox-wrapper">
        <span
          class="checkbox"
          v-bind:class="{ checked: rememberMe }"
          @click="toggleRememberMe"
        ></span>
        <span>Remember me.</span>
      </div>
      <base-button class="signup-btn" text="Sign up" @click="signup" />
    </div>
  </div>
</template>

<script>
import Input from "./Input.vue";
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
      rememberMe: false,
    };
  },
  methods: {
    signup() {
      console.log(
        `Signin up... Email: ${this.email}, password: ${this.password}. Remember me: ${this.rememberMe}`
      );
    },

    toggleRememberMe() {
      this.rememberMe = this.rememberMe === false ? true : false;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  line-height: 30px;
  color: #757575;
}

h6 {
  font-size: 14px;
  line-height: 19px;
  color: #a1a1a1;
}

.signup-btn {
  position: absolute;
  right: 0;
}

.submit-area {
  position: relative;
}

.signup-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 0.65rem;
  padding: 20px;
  box-shadow: 0 0 10px #a1a1a1;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.checkbox {
  height: 10px;
  width: 10px;
  border: 1px solid black;
  border-radius: 100%;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}

.checked {
  background-color: #4a90e2;
  border-color: #4a90e2;
}
</style>
