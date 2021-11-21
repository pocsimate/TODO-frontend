<template>
  <div class="wrapper">
    <div class="list-wrapper">
      <ul class="todo-list">
          <li class="todo-item" v-for="todo in todos" v-bind:key="todo.id">{{ todo.id }} - {{ todo.content }} <v-btn icon class="ma-2"><v-icon>mdi-delete</v-icon></v-btn> </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
        
    };
  },
  computed: {
      todos() {
          return this.$store.getters.getTodos;
      }
  },
  methods: {

  },
  async mounted() {
      await this.$store.dispatch("fetchTodos");
  }
};
</script>

<style scoped>
.todo-item {
    list-style: none;
}
</style>
