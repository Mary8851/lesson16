<template>
  <div class="home">
    <movie-list />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";

export default {
  components: { MovieList },
  name: "HomeView",
};
</script>

<style>
.home {
  padding: 20px;
  background: radial-gradient(circle, rgb(5, 11, 45) 0%, rgb(0, 0, 1) 100%);
}
</style>
