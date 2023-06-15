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
