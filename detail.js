const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

const movie = movieList.results.find((m) => m.id == movieId);

document.getElementById("movieTitle").textContent = movie.title;
document.getElementById("moviePoster").src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
document.getElementById("movieOverview").textContent = movie.overview;
