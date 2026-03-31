let currentMovie = null;

function getRandomMovie() {
    const movieCard = document.getElementById('movieCard');
    movieCard.innerHTML = '<div class="loading">Loading movie...</div>';
    movieCard.classList.remove('active');
    document.getElementById('netflixBtn').style.display = 'none';

    fetch('get_movie.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                currentMovie = data.movie;
                displayMovie(data.movie);
            } else {
                movieCard.innerHTML = '<div class="loading">Error loading movie. Please try again.</div>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            movieCard.innerHTML = '<div class="loading">Error loading movie. Please try again.</div>';
        });
}

function displayMovie(movie) {
    const movieCard = document.getElementById('movieCard');
    movieCard.classList.add('active');
    
    movieCard.innerHTML = `
        <div class="movie-content">
            <h2 class="movie-title">${movie.title}</h2>
            <div class="movie-meta">
                <span class="meta-item"><strong>Year:</strong> ${movie.year}</span>
                <span class="meta-item"><strong>Genre:</strong> ${movie.genre}</span>
                <span class="meta-item movie-rating">⭐ ${movie.rating}/10</span>
            </div>
            <p class="movie-description">${movie.description}</p>
        </div>
    `;
    
    document.getElementById('netflixBtn').style.display = 'inline-block';
}

function watchOnNetflix() {
    const movieTitle = currentMovie.title;
    const netflixSearchUrl = `https://www.netflix.com/search?q=${encodeURIComponent(movieTitle)}`;
    window.open(netflixSearchUrl, '_blank');
}

window.addEventListener('DOMContentLoaded', function() {
});