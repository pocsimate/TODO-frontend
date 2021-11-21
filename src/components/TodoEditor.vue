<template>
  <div class="wrapper">
    <div class="editor">
      <input class="todo-input" type="text" v-model="todoContent" />
      <base-button text="Add Todo" @click="addTodo" />
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      todoContent: "",
    };
  },
  methods: {
    async addTodo() {
      await this.$store.dispatch("addNewTodo", {
        content: this.todoContent,
      });
      this.todoContent = "";
    },
  },
};
</script>

<style scoped>

</style>
