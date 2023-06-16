<template>
  <div class="movie-list">
    <div class="movie-list-btn">
      <button @click="filterMovieYear">Год выпуска > 2000</button>
      <button @click="filterMovieRaiting">imDbRating > 9</button>
      <router-link to="/movies"><button>Найти фильм</button></router-link>
    </div>
    <div class="movie-list__details">
      <MovieDetails
        v-for="film in films.slice(0, 20)"
        :key="film.id"
        :film="film"
        :id="film.id"
      />
    </div>
  </div>
</template>

<script>
import MovieDetails from "./MovieDetails.vue";

export default {
  components: {
    MovieDetails,
  },
  data() {
    return {
      films: [],
    };
  },
  mounted() {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_1x27p28i")
      .then((res) => res.json())
      .then((data) => {
        this.films = data.items;
        console.log(data.items);
      });
  },
  methods: {
    filterMovieYear() {
      this.films = this.films.filter((filt) => filt.year > 2000);
    },
    filterMovieRaiting() {
      this.films = this.films.filter((filt) => filt.imDbRating > 9);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-list {
  &-btn {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    button {
      padding: 10px;
      border-radius: 15px;
      border: none;
      background: rgb(143, 194, 214);
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
    }
  }
  &__details {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  }
}
</style>
