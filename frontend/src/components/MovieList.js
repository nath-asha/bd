import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await axios.get('http://localhost:5000/movies');
    setMovies(res.data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:5000/search?query=${search}`);
    setMovies(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/movies/${id}`);
    fetchMovies();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            {movie.title} ({movie.year}) - {movie.director}
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
