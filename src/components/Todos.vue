<template>
    <div class="wrapper">
        <todo-list />
        <todo-editor />
    </div>
</template>

<script>
import TodoList from './TodoList.vue';
import TodoEditor from './TodoEditor.vue';

export default {
    components: {
        TodoList,
        TodoEditor,
    }
};
</script>
