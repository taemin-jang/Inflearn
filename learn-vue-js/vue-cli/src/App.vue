<template>
  <div>
    <AppHeader v-bind:propsdata="str" v-on:renew="renewSting" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      str: "Header",
    };
  },
  methods: {
    renewSting() {
      this.str = "hi";
    },
  },
};
</script>

<style></style>
