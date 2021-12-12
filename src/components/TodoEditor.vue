<template>
  <div class="wrapper">
    <div class="editor">
      <input class="todo-input" type="text" v-model="todoContent" />
      <base-button class="add-btn" text="Add todo" @click="addTodo" />
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
.todo-input {
  width: 400px;
  height: 30px;
  border: thin solid black;
  border-radius: 5px;
  margin: 10px auto;
}
.editor {
  display: flex;
  flex-direction: column;
}

.add-btn {
  margin: 5px auto;
}
</style>
