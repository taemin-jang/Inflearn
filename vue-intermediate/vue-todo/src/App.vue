<template>
  <div>
    <TodoHeader />
    <TodoInput v-on:addTodoItem="addOneItem" />
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneItem(todoItem) {
      // 완료 했는지 상태 여부 JSON으로 저장
      let obj = { completed: false, item: todoItem };
      // 로컬스토리지에 저장
      localStorage.setItem(todoItem, JSON.stringify(obj));
      // todoItems에 추가해줌으로써 새로고침하지 않고도 최신 데이터가 반영
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  widows: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
}
</style>
