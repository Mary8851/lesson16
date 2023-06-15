<!-- <template>
  <div class="form">
    <input type="text" placeholder="название фильма" v-model="input" />
    <button>Поиск</button>
  </div>
  <div v-show="">
    <MovieDetails />
  </div>
</template>

<script>
import axios from "axios";
import MovieDetails from "@/components/MovieDetails.vue";
export default {
  components: { MovieDetails },
  name: "MoviesPage",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    searchMovie() {
      axios
        .get(`https://imdb-api.com/en/API/Search/k_2f4ioji8/${this.input}`)
        .then((res) => {
          this.input = res.data.items;
        });
    },
    getResult() {
      if(this.input == )
    },
  },
};
</script> -->
