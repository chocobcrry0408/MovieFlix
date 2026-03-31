let allMovies = [];

window.addEventListener('DOMContentLoaded', function() {
    loadAllMovies();
});

function loadAllMovies() {
    fetch('get_all_movies.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                allMovies = data.movies;
                displayMovies(allMovies);
            } else {
                document.getElementById('suggestionsGrid').innerHTML = 
                    '<div class="no-results">Error loading movies. Please try again.</div>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('suggestionsGrid').innerHTML = 
                '<div class="no-results">Error loading movies. Please try again.</div>';
        });
}

function displayMovies(movies) {
    const grid = document.getElementById('suggestionsGrid');
    
    if (movies.length === 0) {
        grid.innerHTML = '<div class="no-results">No movies found for this genre.</div>';
        return;
    }

    grid.innerHTML = movies.map(movie => `
        <div class="movie-card-suggestion">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" class="poster-image">
            </div>
            <div class="movie-info">
                <h3 class="title">${movie.title}</h3>
                <p class="year">${movie.year}</p>
                <p class="genre">${movie.genre}</p>
                <p class="rating">⭐ ${movie.rating}/10</p>
                <p class="description">${movie.description}</p>
                <a href="https://www.netflix.com/search?q=${encodeURIComponent(movie.title)}" 
                   target="_blank" class="btn-watch">🎬 Watch on Netflix</a>
            </div>
        </div>
    `).join('');
}

function filterMovies() {
    const selectedGenre = document.getElementById('genreFilter').value;
    
    if (selectedGenre === '') {
        displayMovies(allMovies);
    } else {
        const filteredMovies = allMovies.filter(movie => {
            return movie.genre.includes(selectedGenre);
        });
        displayMovies(filteredMovies);
    }
}