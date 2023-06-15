<template>
  <div>
    <h2>Movie List</h2>
    <div>
      <MovieDetails />
    </div>
  </div>
</template>

<script>
import MovieDetails from "./MovieDetails.vue";

export default {
  components: {
    MovieDetails,
  },
};
</script>
