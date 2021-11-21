<template>
  <div class="wrapper">
    <div class="signup">
      <Signup></Signup>
      <Footer></Footer>
    </div>
    <div class="login">
      <div class="image"></div>
      <div class="text">
        <img src="../assets/images/acme@2x.png" alt="" />
        <h2>Do you already have an account?</h2>
        <h4>
          That's awesome! You can login by clicking on the button below. To skip
          this next time, you can ask us to remember your login creditentials.
        </h4>
        <base-button text="Log in" :transparent=true @click="goToLogin"/>
      </div>
    </div>
  </div>
</template>

<script>
import Signup from "../components/Signup.vue";
import Footer from "../components/Footer.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  components: {
    Signup,
    Footer, 
    BaseButton
  },

  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 30px;
  line-height: 44px;
}

h4 {
  font-size: 14px;
  line-height: 30px;
}

.wrapper {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.signup,
.login {
  flex: 1;
}

.signup {
  position: relative;
}

.login {
  color: white;
}

.image {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)),
    url("../assets/images/background_blue.jpg");
  filter: blur(0.4px);
  -webkit-filter: blur(0.4px);
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.text {
  position: absolute;
  top: 35%;
  left: 75%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
