import React, { useState } from 'react';

const movies = [
  { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
  { title: 'The Godfather', genre: 'Crime', releaseYear: 1972 },
  { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
  { title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994 },
  { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
  // Add more movies as needed
];

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleClick = (title) => {
    alert(`Movie title: ${title}`);
  };

  const uniqueGenres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  const filteredMovies = selectedGenre === 'All Genres'
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div>
      <h1>Movie List</h1>
      <select onChange={handleGenreChange} value={selectedGenre}>
        {uniqueGenres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => handleClick(movie.title)}>
            {movie.title} - {movie.genre} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
