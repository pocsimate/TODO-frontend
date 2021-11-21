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
      <div class="signup-btn">
        <base-button class="signup-btn" text="Sign up" @click="signup" />
      </div>
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

.signup-btn {
  text-align: center;
}
</style>
