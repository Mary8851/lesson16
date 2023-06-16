<template>
  <HeaderComp />
  <router-view />
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

export default {
  components: {
    HeaderComp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Questrial&family=Roboto:wght@300;400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
</style>
