const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
  const inputValue = document.getElementById("searchInput").value;

  const filteredMovies = movieList.results.filter(function (movie) {
    return movie.title.toLowerCase().includes(inputValue);
  })

  displayMovies(filteredMovies);
});

const movieContainer = document.getElementById("movieContainer");

function displayMovies(movieArray) {
  movieContainer.innerHTML = ""; // 기존 내용 초기화
  movieArray.forEach(function (movie) {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3";

    col.innerHTML = `
    <a href="detail.html?id=${movie.id}" class="text-decoration-none text-dark">
    <div class="card h-100" data-aos="fade-up">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}" />
      <div class="card-body">
        <h5 class="card-title fw-semibold">${movie.title}</h5>
        <p class="card-text fw-light fs-5 overview-line">${movie.overview}</p>

        </div>
      </div>
    </a>
    `;

    movieContainer.appendChild(col);
  });
}

displayMovies(movieList.results);

function revealCardsOnScroll() {
  const cards = document.querySelectorAll(".card");
  const triggerBottom = window.innerHeight * 0.95;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealCardsOnScroll);
window.addEventListener("load", revealCardsOnScroll); // 페이지 처음 로드될 때도 실행
