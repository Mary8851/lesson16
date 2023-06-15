<!-- <template>
  <div>
    {{ setup.title }}
  </div>
</template>

<script>
export default {
  name: "MoviesInfo",
  const movie = this.$route.params.id, // Assuming you're using a Vue.js framework with this syntax

  fetch(`https://imdb-api.com/API/Title/${movie}/FullCast`)
  .then(response => response.json())
  .then(data => {
    // Extract relevant information from the response
    const title = data.title;
    const poster = data.poster;
    const year = data.year;
    const imdbRating = data.imDbRating;
    const genres = data.genres;
    const actors = data.actorList.slice(0, 3); // Get the first 3 actors

    // Display the movie information and actors' details
    console.log('Title:', title);
    console.log('Poster:', poster);
    console.log('Year of Release:', year);
    console.log('IMDb Rating:', imdbRating);
    console.log('Genres:', genres);
    console.log('Actors:');
    actors.forEach(actor => {
      console.log('Name:', actor.name);
      console.log('Photo:', actor.image);
      console.log('Character:', actor.asCharacter);
    });

    // Make a request for similar movies and display the results
    fetch(`https://imdb-api.com/API/Title/${id}/SimilarMovies`)
      .then(response => response.json())
      .then(similarMovies => {
        console.log('Similar Movies:', similarMovies);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  })
  .catch(error => {
    console.error('Error:', error);
  });

</script> -->
