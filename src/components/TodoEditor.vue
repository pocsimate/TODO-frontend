<template>
  <div class="wrapper">
    <div class="editor">
      <input type="text" v-model="todoContent" />
      <button class="saveButton">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoContent: "",
    };
  },
};
</script>
