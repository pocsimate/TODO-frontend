<template>
  <div class="todolist-wrapper">
    <div class="list-wrapper">
      <ul class="todo-list">
          <li class="todo-item" v-for="todo in todos"
            v-bind:key="todo.id">
            <span class="content">{{ todo.content }}</span>
            <span class="button-holder">
              <button class="delete-btn" @click="deleteTodo(todo.id)">delete</button>
            </span>
          </li>
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
    async deleteTodo(id) {
      await this.$store.dispatch("deleteTodo", id)
    }
  },
  async mounted() {
      await this.$store.dispatch("fetchTodos");
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
}

.todo-list {
  margin: 0;
  padding: 0;
}

.list-wrapper {
  max-width: 400px;
  height: auto;
  margin: 0 auto;
}

.delete-btn {
  color: white;
  background-color: red;
}
</style>
