<template>
  <div class="movies-page">
    <MoviesForm @searchMovie="searchMovie" />
  </div>
  <div class="movie-details">
    <MovieDetails
      v-for="film in films.slice(0, 20)"
      :key="film.id"
      :film="film"
      :id="film.id"
    />
  </div>
</template>

<script>
import axios from "axios";
import MovieDetails from "@/components/MovieDetails.vue";
import MoviesForm from "@/components/MoviesForm.vue";
export default {
  components: { MovieDetails, MoviesForm },
  name: "MoviesPage",
  data() {
    return {
      films: [],
    };
  },
  methods: {
    searchMovie(req) {
      axios
        .get(`https://imdb-api.com/en/API/Search/k_1x27p28i/${req}`)
        .then((res) => {
          this.films = res.data.results;
          if (!this.films == res.data.results) {
            alert("error");
          }
        });
    },
  },
};
</script>

<style>
.movie-details {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}
</style>
