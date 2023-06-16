<template>
  <div class="movie-detail">
    <div class="movies-info">
      <h1>Информация о фильме</h1>
      <div class="movies-info__card">
        <img :src="movie.image" alt="poster" />
        <div class="movies-info__card-text">
          <h3>{{ movie.fullTitle }}</h3>
          <p>Год: {{ movie.year }}</p>
          <p>imDbRating: {{ movie.imDbRating }}</p>
          <p>Жанр: {{ movie.genres }}</p>
        </div>
      </div>
      <div class="movies-info__actors">
        <h2>В главных ролях:</h2>
        <div class="movies-info__actors-wrap">
          <div
            v-for="actor in actors.slice(0, 3)"
            :key="actor.id"
            class="movies-info__actors-wrap-card"
          >
            <img :src="actor.image" />
            <p>{{ actor.name }}</p>
            <p>Персонаж: {{ actor.asCharacter }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="movies-info__other">
      <h2>Похожие фильмы:</h2>
      <div class="movies-info__other-movies">
        <div
          class="movies-info__other-movies-card"
          v-for="otherMovie in otherMovies.slice(0, 3)"
          :key="otherMovie.id"
        >
          <img :src="otherMovie.image" class="img-fluid" />
          <p>{{ otherMovie.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MoviesInfo",
  data() {
    return {
      id: this.$route.params.id,
      movie: "",
      actors: "",
      otherMovies: "",
    };
  },
  mounted() {
    axios
      .get(`https://imdb-api.com/en/API/Title/k_1x27p28i/${this.id}`)
      .then((response) => {
        this.movie = response.data;
        this.actors = response.data.actorList;
        this.otherMovies = response.data.similars;
      });
  },
};
</script>

<style lang="scss">
.movie-detail {
  background: rgb(197, 232, 241);
}
.movies-info {
  padding: 15px;
  h1 {
    text-align: center;
    padding: 30px 0;
  }
  &__card {
    width: 300px;
    margin: auto;
    background: rgb(205, 208, 211);
    border-radius: 10px;
    box-shadow: 0 0 10px 5px rgb(29, 33, 34);
    text-align: center;
    img {
      width: 100%;
      height: 400px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    &-text {
      padding: 10px;
      h3 {
        color: rgb(8, 8, 8);
        padding: 5px 0;
        font-size: 20px;
      }
      p {
        color: rgb(5, 5, 5);
        padding: 5px 0;
      }
    }
  }
  &__actors {
    padding: 20px;
    h2 {
      text-align: center;
      padding: 30px 0;
    }
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px;
      &-card {
        width: 350px;
        border-radius: 30px;
        box-shadow: 0 2px 4px rgba(15, 6, 145, 0.2);
        background: white;
        img {
          width: 100%;
          height: 400px;
        }
        p {
          font-size: 16px;
          padding: 5px 10px;
          font-weight: 700;
          text-align: center;
        }
      }
    }
  }
  &__other {
    padding: 10px;
    h2 {
      text-align: center;
      padding-bottom: 30px;
    }
    &-movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px;
      &-card {
        width: 350px;
        border-radius: 30px;
        box-shadow: 0 2px 4px rgba(15, 6, 145, 0.2);
        background: white;
        img {
          width: 100%;
          height: 400px;
        }
        p {
          font-size: 16px;
          padding: 10px;
          font-weight: 700;
          text-align: center;
        }
      }
    }
  }
}
</style>
