<template>
  <button :disabled="disabled" v-bind:class="{ transparent: transparent }" class="base-btn" @click="$emit('click', $event)">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    text: { type: String },
    transparent: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.base-btn:hover {
  font-size: 16px;
}
.base-btn {
  font-size: 14px;
  line-height: 30px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  width: 150px;
  height: 40px;
  margin-top: 25px;
  transition: all ease-out 0.3s;
}

.transparent {
  background: transparent;
  border: 2px solid white;
}
</style>
