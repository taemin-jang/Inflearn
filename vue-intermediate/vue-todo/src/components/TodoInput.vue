<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer">
      <i class="fa-solid fa-plus addBtn" v-on:click="addTodo"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i
          class="fa-solid fa-xmark closeModalBtn"
          @click="showModal = false"
        ></i>
      </h3>
      <p slot="body">할 일을 입력하세요.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/ModalComponent.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      // todoItem이 없으면 안들어감
      if (this.newTodoItem !== "") {
        this.$store.commit("addOneItem", this.newTodoItem.trim());
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478f8, #8763f8);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
}
</style>
