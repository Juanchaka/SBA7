import React, { useState } from 'react';
import SearchForm from './SearchForm.jsx';
import MovieList from './MovieList.jsx';
import SearchMovies from '../services/MovieAPI.jsx';

function SearchContainer() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    try {
      const results = await SearchMovies(searchTerm);
      setMovies(results);
      setError(null);
    } catch (err) {
      setError(err.toString());
      setMovies([]);
    }
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      <MovieList movies={movies} />
    </>
  );
}

export default SearchContainer;