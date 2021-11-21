<template>
  <div class="wrapper">
    <input
      name="input"
      :type="inputType"
      class="input"
      v-model="inputText"
      @input="$emit('input', $event.target.value)"
      required
    />
    <label class="label-name" for="input">
      <span class="content-name">{{ label }}</span>
    </label>
    <span
      v-bind:class="{ 'shown-password': isPasswordShown }"
      v-if="type === 'password'"
      class="eye-icon"
      @click="showHidePassword"
    ></span>
    <span v-if="type === 'password' && kind === 'signup'" class="indicator">
      <span class="dot" v-bind:class="{ hard: passwordStrength === 3 }"></span>
      <span class="dot" v-bind:class="{ medium: passwordStrength >= 2 }"></span>
      <span class="dot" v-bind:class="{ light: passwordStrength >= 1 }"></span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPasswordShown: false,
      inputType: "",
      inputText: "",
    };
  },
  computed: {
    passwordStrength: function() {
      let length = this.inputText.length;

      if (length < 4) {
        return 1;
      } else if (length >= 4 && length < 7) {
        return 2;
      } else {
        return 3;
      }
    },
  },
  props: {
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    kind: {
      type: String,
      required: true,
    },
  },
  methods: {
    showHidePassword() {
      this.isPasswordShown = this.isPasswordShown === true ? false : true;
      this.inputType = this.inputType === "text" ? "password" : "text";
    },
  },

  mounted() {
    this.inputType = this.type;
  },
};
</script>

<style scoped>
.indicator {
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 26px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: grey;
}

.light {
  background: red;
}

.medium {
  background: darkgoldenrod;
}

.hard {
  background: limegreen;
}

.label {
  margin: 8px 0px;
}

.wrapper {
  margin: 16px 0px;
  position: relative;
}

label {
  position: absolute;
  bottom: 0px;
  left: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #757575;
  color: #757575;
  transition: all ease-out 0.3s;
}

.input {
  border: none;
  width: 100%;
  padding-top: 20px;
  outline: none;
}

input:focus + label {
  color: #4a90e2;
  border-color: #4a90e2;
}

.eye-icon {
  height: 20px;
  width: 20px;
  background-image: url(../assets/images/fa-eye-slash.png);
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  cursor: pointer;
}

.shown-password {
  background-image: url(../assets/images/fa-eye.png) !important;
}
</style>
