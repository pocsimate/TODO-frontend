<template>
  <div class="signup-wrapper">
    <div class="text-area">
      <h1>Welcome to Acme.</h1>
      <h6>Create your account by filling the form below</h6>
    </div>
    <div class="input-area">
      <Input
        type="text"
        v-model="username"
        label="Username"
        kind="signup"
      ></Input>
      <Input
        type="password"
        v-model="password"
        label="Password"
        kind="signup"
      ></Input>
      <div class="date-picker">
        Date of birth
        {{birthDate}}
        <datepicker v-model="birthDate" :format="customFormatter"></datepicker>
      </div>
    </div>
    <div class="submit-area">
      <div class="signup-btn">
        <base-button class="signup-btn" text="Sign up" @click="signup" />
      </div>
      <div v-if="error">Something is wrong</div>
    </div>
  </div>
</template>

<script>
import Input from "./Input.vue";
import BaseButton from "../components/BaseButton.vue";
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';

export default {
  components: {
    Input,
    BaseButton,
    Datepicker
  },
  data() {
    return {
      username: "",
      password: "",
      birthDate: "",
      error: false
    };
  },
  methods: {
    customFormatter(date) {
      return moment(date).format('YYYY-MM-DD');
    },

    async signup() {
      await this.$store.dispatch('register', {
        username: this.username,
        password: this.password,
        birthDate: moment(this.birthDate).format("YYYY-MM-DD").toString()
      })
      this.$router.push({ name: "login" })
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

.date-picker {
  color: #757575;
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
