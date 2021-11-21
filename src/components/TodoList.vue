<template>
  <div class="wrapper">
    <div class="list">
      <ul>
          <li v-for="todo in todos" v-bind:key="todo.id">{{ todo.id }} - {{ todo.content }}</li>
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
