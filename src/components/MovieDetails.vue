<template>
  <p v-if="isLoading">Идет загрузка</p>
  <div class="movie-details__cards" @click="goToDetails(film.id)">
    <div>
      <img :src="film.image" alt="" />
    </div>
    <div class="movie-details__cards-text">
      <h4>{{ film.title }}</h4>
      <p>{{ film.year }}</p>
      <p>{{ film.imDbRating }}</p>
      <p>{{ film.description }}</p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  props: {
    film: {
      type: Object,
    },
    isLoading: {
      type: String,
    },
  },
  methods: {
    goToDetails(detailId) {
      router.push(`/movies/${detailId}`);
    },
  },
};
</script>

<style lang="scss">
.movie-details__cards {
  width: 300px;
  margin: 10px 0;
  background: rgb(205, 208, 211);
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgb(203, 242, 255);
  cursor: pointer;
  img {
    width: 100%;
    height: 400px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &-text {
    padding: 5px;
    h4 {
      color: rgb(8, 8, 8);
      padding: 5px 0;
      font-size: 20px;
      text-align: center;
    }
    p {
      color: rgb(5, 5, 5);
      padding: 5px 0;
      text-align: center;
    }
  }
}
</style>
