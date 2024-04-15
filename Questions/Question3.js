// Top 10 movie shows from a list of movies

function topKMoviesSameAsTopKFrequent(movies, K) {
    let frequencyMap = new Map();

    // Count frequency of each movie
    movies.forEach(movie => {
        frequencyMap.set(movie, (frequencyMap.get(movie) || 0) + 1);
    });

    // Sort movies by frequency
    let sortedMovies = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);

    // Get top 10 movie shows
    let top10Movies = sortedMovies.slice(0, 10).map(movie => movie[0]);

    // Get top K most frequent elements
    let topKFrequent = sortedMovies.slice(0, K).map(movie => movie[0]);

    // Check if top 10 movies are the same as top K most frequent elements
    return JSON.stringify(top10Movies) === JSON.stringify(topKFrequent);
}

// Example usage:
let movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "The Godfather",
    "The Shawshank Redemption",
    "Pulp Fiction",
    "The Lord of the Rings",
    "The Godfather",
    "The Dark Knight",
    "The Godfather",
    "The Shawshank Redemption",
    "The Dark Knight",
    "The Godfather",
    "The Shawshank Redemption",
    "The Lord of the Rings"
];

let K = 5; // Choose K value

console.log(topKMoviesSameAsTopKFrequent(movies, K));
