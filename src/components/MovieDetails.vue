<template>
  <div class="movie-details">
    <div class="btn">
      <button v-for="btn in filterBtn" :key="btn" @click="filterMovie">
        {{ btn }}
      </button>
      <button @click="getData">Фильмы</button>
    </div>
    <div
      class="movie-details__cards"
      v-for="detail in filterDetails"
      :key="detail.id"
    >
      <img :src="detail.image" alt="" />
      <h4>{{ detail.title }}</h4>
      <p>imDbRating {{ detail.imDbRating }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MovieDetails",
  props: ["movies"],
  data() {
    return {
      details: [],
      filterBtn: ["Год", "Рейтинг"],
      active: "",
    };
  },
  // mounted() {
  //   axios
  //     .get("https://imdb-api.com/en/API/Top250Movies/k_2f4ioji8")
  //     .then((res) => {
  //       this.details = res.data.items;
  //       console.log(this.details);
  //     });
  // },
  computed: {
    filterDetails() {
      return this.details.slice(0, 20);
    },
  },
  methods: {
    filterMovie() {
      this.filterBtn = this.details
        .slice(0, 20)
        .filter((filt) => filt.year > 2000 || filt.imDbRating > 9);
    },
    getData() {
      axios
        .get("https://imdb-api.com/en/API/Top250Movies/k_2f4ioji8")
        .then((res) => {
          this.details = res.data.items;
          console.log(this.details);
        });
    },
  },
};
</script>

<style lang="scss">
.movie-details {
  width: 1400px;
  margin: auto;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  &__cards {
    width: 300px;
    margin: 40px 0;
    img {
      width: 100%;
      height: 450px;
    }
  }
}
</style>
